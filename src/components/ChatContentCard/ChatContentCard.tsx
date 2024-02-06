import { IonCard, IonText } from "@ionic/react";
import "./ChatContentCard.css";
import { useRef, useState } from "react";
import ChatActionModal from "../ChatActionModal/ChatActionModal";
interface ChatDataProp {
  text: string;
  type: string;
}
const ChatContentCard = (props: ChatDataProp) => {
  const { text, type } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
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
      <ChatActionModal
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />
    </>
  );
};

export default ChatContentCard;
