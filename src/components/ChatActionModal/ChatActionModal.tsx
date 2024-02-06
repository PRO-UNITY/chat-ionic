import {
  IonCard,
  IonCol,
  IonIcon,
  IonItem,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/react";
import {
  arrowRedoOutline,
  chatboxEllipsesOutline,
  copyOutline,
  peopleOutline,
  readerOutline,
  returnUpForwardOutline,
  trashOutline,
} from "ionicons/icons";
import "./ChatActionModal.css";
interface ModalDataProp {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
} 

const ChatActionModal = (props: ModalDataProp) => {
  const { isOpenModal } = props;
  return (
    <IonModal
      isOpen={isOpenModal}
      id="chat-action-modal"
      initialBreakpoint={0.5}
    >
      <div className="modal-content">
        <div className="modal-card">
          <IonCard>
            <IonText>Please help me find a good monitor for the design</IonText>
          </IonCard>
          <IonText>
            <h5>React</h5>
          </IonText>
          <div className="reaction-box">
            <IonText className="react-text">🔥</IonText>
            <IonText className="react-text">🙌</IonText>
            <IonText className="react-text">😭</IonText>
            <IonText className="react-text">🤣</IonText>
            <IonText className="react-text">👀</IonText>
            <IonText className="react-text">🙈</IonText>
            <IonText className="react-text">🙈</IonText>
            <IonText className="react-text">🙈</IonText>
          </div>
          <IonItem lines="full">
            <IonRow style={{ width: "100%" }}>
              <IonCol>
                <IonText className="card-title">Copy</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonIcon icon={copyOutline} />
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem lines="full">
            <IonRow style={{ width: "100%" }}>
              <IonCol>
                <IonText className="card-title">Reply</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonIcon icon={arrowRedoOutline} />
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem lines="full">
            <IonRow style={{ width: "100%" }}>
              <IonCol>
                <IonText className="card-title">Forward</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonIcon icon={returnUpForwardOutline} />
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem lines="none">
            <IonRow style={{ width: "100%" }}>
              <IonCol>
                <IonText className="card-title">Delete</IonText>
              </IonCol>
              <IonCol size="auto">
                <IonIcon icon={trashOutline} />
              </IonCol>
            </IonRow>
          </IonItem>
        </div>
      </div>
    </IonModal>
  );
};

export default ChatActionModal;
