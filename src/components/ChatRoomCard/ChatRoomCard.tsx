import {
  IonAvatar,
  IonCard,
  IonCol,
  IonItem,
  IonRow,
  IonText,
} from "@ionic/react";

const ChatRoomCard = () => {
  return (
    <IonCard style={{ width: "100%" }}>
      <IonRow>
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
            <h4>John Doe</h4>
          </IonText>
          <IonText>Lorem, ipsum.</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>
            <p>12:00</p>
          </IonText>
        </IonCol>
      </IonRow>
    </IonCard>
  );
};

export default ChatRoomCard;
