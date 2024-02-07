import { IonCard, IonText } from "@ionic/react";
import "./ChatContentCard.css";
import { useRef, useState } from "react";
import ChatActionModal from "../ChatActionModal/ChatActionModal";
interface ChatDataProp {
  text: string;
  sender_type: string;
  type: string;
}
const ChatContentCard = (props: ChatDataProp) => {
  const { text, type, sender_type } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className={`${
          sender_type == "receiver" ? "senderBox" : "initiatorBox"
        }`}
      >
        <IonCard
          className={`chat-content-card ${
            sender_type == "receiver" ? "sender" : "initiator"
          }`}
        >
          <IonText>{text}</IonText>
        </IonCard>
      </div>
      <ChatActionModal
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />
    </>
  );
};

export default ChatContentCard;
