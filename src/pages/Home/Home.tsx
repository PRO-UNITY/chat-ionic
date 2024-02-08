import { useEffect, useState } from "react";
import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonText,
  RefresherEventDetail,
  useIonRouter,
} from "@ionic/react";
import {
  addOutline,
  ellipsisHorizontal,
  navigate,
  searchOutline,
} from "ionicons/icons";
import { ChatRoomCard, StoryAvatar } from "../../components";
import { ChatMembers } from "../../services";
import "./Home.css";

interface ChatRoom {
  id: number;
  initiator: string;
  receiver: string;
  sender_type: string;
}

const Home = () => {
  const navigation = useIonRouter();
  const [members, setMembers] = useState([]);

  const navigateHandle = (path: string) => {
    navigation.push(path, "forward", "push");
  };

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      ChatMembers().then((res) => setMembers(res));
      event.detail.complete();
    }, 2000);
  };

  useEffect(() => {
    ChatMembers().then((res) => setMembers(res));
  }, [navigation.routeInfo.pathname]);

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
      <IonContent className="ion-content" scrollY={false}>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

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
          {members.map((item: ChatRoom) => (
            <IonRow
              onClick={() => navigateHandle(`/chat/${item.id}`)}
              key={item.id}
            >
              <ChatRoomCard {...item} />
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
