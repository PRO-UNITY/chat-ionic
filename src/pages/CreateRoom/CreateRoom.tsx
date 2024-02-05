import { IonContent, IonInput, IonPage, IonSearchbar } from "@ionic/react";
import "./CreateRoom.css";

const CreateRoom = () => {
  return (
    <IonPage className="ion-padding create-room">
      <IonContent>
        <IonSearchbar
          className="search-input"
          placeholder="Search..."
        ></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default CreateRoom;
