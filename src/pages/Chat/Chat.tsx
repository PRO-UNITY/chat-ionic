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

const Chat = () => {
  const navigation = useIonRouter();
  const { id } = useParams<{ id: string }>();
  const [sendData, setSendData] = useState<string>("");
  const [messages, setMessages] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjE2ODQyLCJpYXQiOjE3MDcyMTM4NDIsImp0aSI6IjFmMzJhY2E4MDVlZDRlMThhNmUxZWY5MGYxZTJkNjdiIiwidXNlcl9pZCI6MX0.4zhtOKiI38w4oxhHeiGfxRs9t0mcOPVSQSWzzCF3Mu4";
  useEffect(() => {
    const messageSocket = new WebSocket(
      `ws://192.168.0.114:9000/ws/message/${id}/`
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
        `ws://192.168.0.114:9000/ws/chat/${id}/`
      );
      chatSocket.onopen = () => {
        chatSocket.send(JSON.stringify({ message: sendData }));
      };
    }
  };

  const handleBack = () => navigation.goBack();

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
      <IonContent className="ion-padding" fullscreen>
        <ChatContent text="Hello" type="sender" />
        <ChatContent text="Hello" type="sender" />
      </IonContent>
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
