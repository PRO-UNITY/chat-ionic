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
import { useState } from "react";

const Chat = () => {
  const navigation = useIonRouter();
  const [sendData, setSendData] = useState<string>("");

  console.log(sendData);
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
                  src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
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
      <IonFooter className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonIcon icon={addOutline} />
            </IonCol>
            <IonCol>
              <IonInput
                className="sentInput"
                placeholder="New chat"
                onIonInput={(event) => setSendData(event.detail.value || "")}
              ></IonInput>
            </IonCol>
            <IonCol size="auto">
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
