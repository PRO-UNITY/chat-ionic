import { IonAvatar, IonCard, IonCol, IonRow, IonText } from "@ionic/react";
interface propData {
  receiver: string;
  sender_type: string;
}
const ChatRoomCard = (props: propData) => {
  const { receiver, sender_type } = props;
  return (
    <IonCard className="user-card">
      <IonRow>
        <IonCol size="auto">
          <IonAvatar>
            <img
              alt="avatar"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            />
          </IonAvatar>
        </IonCol>
        <IonCol className="card-text">
          <IonText className="name">{sender_type}</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>12:00</IonText>
        </IonCol>
      </IonRow>
    </IonCard>
  );
};

export default ChatRoomCard;
