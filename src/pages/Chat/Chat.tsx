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
} from "@ionic/react";
import {
  addOutline,
  callOutline,
  chevronBackOutline,
  micOutline,
  videocamOutline,
} from "ionicons/icons";
import "./Chat.css";
import { ChatContent } from "../../components";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <IonPage className="chat-screen">
      <IonHeader className="ion-header ion-no-border ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <Link to={"/tab/Home"}>
                <IonIcon
                  aria-hidden="true"
                  icon={chevronBackOutline}
                  className="icon"
                />
              </Link>
            </IonCol>
            <IonCol size="auto">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
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
                <IonIcon aria-hidden="true" icon={videocamOutline} />
                <IonIcon aria-hidden="true" icon={callOutline} />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent className="ion-padding">
        <ChatContent text="Hello" type="sender" />
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonIcon aria-hidden="true" icon={addOutline} />
            </IonCol>
            <IonCol>
              <IonInput className="sentInput" placeholder="New chat"></IonInput>
            </IonCol>
            <IonCol size="auto">
              <IonIcon aria-hidden="true" icon={micOutline} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Chat;
