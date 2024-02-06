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

const Home = () => {
  const navigation = useIonRouter();

  const navigateHandle = (path: string) => {
    navigation.push(path, "forward", "replace");
  };

  return (
    <IonPage className="ion-padding home">
      <IonHeader className="ion-header ion-no-border ion-margin-top">
        <IonText className="title">Mengobrol</IonText>
        <IonIcon
          onClick={() => navigateHandle("/create-room")}
          icon={searchOutline}
          className="icon"
        />
      </IonHeader>
      <IonContent className="ion-content">
        <IonGrid>
          <IonRow className="story-box">
            <IonCard className="story-card">
              <IonAvatar className="add-story">
                <IonIcon icon={addOutline} />
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
          <IonRow onClick={() => navigateHandle("/chat")}>
            <ChatRoomCard />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
