import { IonCard, IonText } from "@ionic/react";
import "./ChatContentCard.css";
import { useRef } from "react";
import ChatActionModal from "../ChatActionModal/ChatActionModal";
interface ChatDataProp {
  text: string;
  type: string;
}
const ChatContentCard = (props: ChatDataProp) => {
  const { text, type } = props;
  const modalChat = useRef<HTMLIonModalElement>(null);
  return (
    <>
      <div
        id="chat-action-modal"
        className={`${type == "sender" ? "senderBox" : "initiatorBox"}`}
      >
        <IonCard
          className={`chat-content-card ${
            type == "sender" ? "sender" : "initiator"
          }`}
        >
          <IonText>{text}</IonText>
        </IonCard>
      </div>
      <ChatActionModal modalChat={modalChat} />
    </>
  );
};

export default ChatContentCard;
