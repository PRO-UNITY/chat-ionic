import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  IonAvatar,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import {
  addOutline,
  callOutline,
  chevronBackOutline,
  micOutline,
  send,
  videocamOutline,
} from "ionicons/icons";
import { ChatContent } from "../../components";
import "./Chat.css";
import { ChatMsgs } from "../../services";
interface ChatData {
  id: number;
  initiator: string;
}
const Chat = () => {
  const navigation = useIonRouter();
  const { id } = useParams<{ id: string }>();
  const [sendData, setSendData] = useState<string>("");
  const [messages, setMessages] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjIwNzA1LCJpYXQiOjE3MDcyMTc3MDUsImp0aSI6IjgzYWE3MjkxM2JiMTQ5Y2FhNmEzY2M4MWY3MTI5YWUzIiwidXNlcl9pZCI6MX0.vADgR7seiOYa5QpvNhwrOUr09ZEDpR-o_38RCsi4rK8";
  useEffect(() => {
    ChatMsgs(id).then((res) => setMessages(res));
    const messageSocket = new WebSocket(
      `ws://192.168.0.114:9000/ws/message/${id}/?token=${token}`
    );

    messageSocket.onopen = () => {
      console.log("Connected to server to get messages");
    };

    messageSocket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      console.log(receivedMessage);
    };

    return () => {
      messageSocket.close();
    };
  }, [id]);

  const sendMessage = () => {
    if (sendData.trim() !== "") {
      const chatSocket = new WebSocket(
        `ws://192.168.0.114:9000/ws/chat/${id}/?token=${token}`
      );
      chatSocket.onopen = () => {
        chatSocket.send(JSON.stringify({ message: sendData }));
      };
    }
  };

  const handleBack = () => navigation.goBack();

  console.log(messages);
  return (
    <IonPage className="chat-screen">
      <IonHeader className="ion-header ion-no-border ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonIcon onClick={handleBack} icon={chevronBackOutline} />
            </IonCol>
            <IonCol size="auto">
              <IonAvatar>
                <img
                  alt="avatar"
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
                />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonText>
                <h5>John Doe</h5>
              </IonText>
              <IonText className="status">Online</IonText>
            </IonCol>
            <IonCol size="auto">
              <div className="call-box">
                <IonIcon icon={videocamOutline} />
                <IonIcon icon={callOutline} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen></IonContent>
      <IonFooter className="ion-padding-horizontal">
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={addOutline} />
            </IonCol>
            <IonCol>
              <IonInput
                className="sentInput"
                placeholder="New chat"
                value={sendData}
                onIonInput={(event) => setSendData(event.detail.value || "")}
              ></IonInput>
            </IonCol>
            <IonCol size="auto" onClick={sendMessage}>
              {sendData ? (
                <IonIcon icon={send} />
              ) : (
                <IonIcon icon={micOutline} />
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;
