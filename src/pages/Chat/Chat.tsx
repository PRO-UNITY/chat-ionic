import { useEffect, useMemo, useState, useRef } from "react";
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
  IonSpinner,
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
import { TOKEN } from "../../utils/BaseUrl";

interface ChatData {
  id: number;
  initiator: string;
  receiver: string;
}

const Chat = () => {
  const navigation = useIonRouter();
  const { id } = useParams<{ id: string }>();
  const [sendData, setSendData] = useState<string>("");
  const [data, setData] = useState<ChatData>();
  const [messages, setMessages] = useState([]);
  const [loading, setloading] = useState<boolean>(false);
  const contentRef = useRef<HTMLIonContentElement>(null);

  useMemo(() => {
    setloading(true);
    ChatMsgs(id)
      .then((res) => {
        setData(res);
        setMessages(res?.message_set.reverse());
      })
      .finally(() => setloading(false));
  }, [id]);

  useEffect(() => {
    const messageSocket = new WebSocket(
      `ws://143.198.26.245:8000/ws/message/${id}/?token=${TOKEN}`
    );
    messageSocket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      scrollToBottom();
    };
  }, [id]);

  const sendMessage = () => {
    if (sendData.trim() !== "") {
      const chatSocket = new WebSocket(
        `ws://143.198.26.245:8000/ws/chat/${id}/?token=${token}`
      );
      chatSocket.onopen = () => {
        chatSocket.send(JSON.stringify({ message: sendData }));
        setSendData("");
      };
    }
  };

  const handleBack = () => navigation.goBack();

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollToBottom();
    }
  };

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
                <h5>{data?.receiver}</h5>
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
      <IonContent ref={contentRef} className="ion-padding">
        {loading && (
          <IonSpinner name="crescent" className="loading"></IonSpinner>
        )}
        {messages?.map((item, index) => (
          <ChatContent key={index} {...item} />
        ))}
      </IonContent>
      <IonFooter
        className="ion-padding-horizontal"
        style={{ background: "#fff" }}
      >
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
