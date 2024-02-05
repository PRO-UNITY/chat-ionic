import { IonCard, IonText } from "@ionic/react";
import "./ChatContentCard.css";
interface ChatDataProp {
  text: string;
  type: string;
}
const ChatContentCard = (props: ChatDataProp) => {
  const { text, type } = props;
  return (
    <div className={`${type == "sender" ? "senderBox" : "initiatorBox"}`}>
      <IonCard
        className={`chat-content-card ${
          type == "sender" ? "sender" : "initiator"
        }`}
      >
        <IonText>{text}</IonText>
      </IonCard>
    </div>
  );
};

export default ChatContentCard;
