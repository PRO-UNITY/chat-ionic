import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSearchbar,
  useIonRouter,
} from "@ionic/react";
import "./CreateRoom.css";
import { chevronBackOutline } from "ionicons/icons";

const CreateRoom = () => {
  const navigation = useIonRouter();
  const handleBack = () => navigation.goBack();

  return (
    <IonPage className="ion-padding create-room">
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonIcon onClick={handleBack} icon={chevronBackOutline} />
            </IonCol>
            <IonCol>
              <IonSearchbar className="search-input" placeholder="Search..." />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateRoom;
