import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { addOutline, ellipsisHorizontal, searchOutline } from "ionicons/icons";
import "./Home.css";
import { ChatRoomCard, StoryAvatar } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <IonPage className="ion-padding home">
      <IonHeader className="ion-header ion-no-border ion-margin-top">
        <IonText className="title">Mengobrol</IonText>
        <Link to={"/create-room"}>
          <IonIcon aria-hidden="true" icon={searchOutline} className="icon" />
        </Link>
      </IonHeader>
      <IonContent className="ion-content">
        <IonGrid>
          <IonRow className="story-box">
            <IonCard className="story-card">
              <IonAvatar className="add-story">
                <IonIcon aria-hidden="true" icon={addOutline} />
              </IonAvatar>
              <IonText className="ion-text-center">Add Story</IonText>
            </IonCard>
            <StoryAvatar />
          </IonRow>
          <IonRow className="chat-room">
            <IonCol>
              <IonText>
                <h5>Chats</h5>
              </IonText>
            </IonCol>
            <IonCol size="auto">
              <IonIcon aria-hidden="true" icon={ellipsisHorizontal} />
            </IonCol>
          </IonRow>
          <Link to={"/chat"}>
            <IonRow>
              <ChatRoomCard />
            </IonRow>
          </Link>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
