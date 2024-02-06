import {
  IonButton,
  IonCol,
  IonIcon,
  IonItem,
  IonModal,
  IonRow,
  IonText,
} from "@ionic/react";
import "./NewChatModal.css";
import {
  chatboxEllipsesOutline,
  peopleOutline,
  readerOutline,
} from "ionicons/icons";
interface ModalDataProp {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewChatModal = (props: ModalDataProp) => {
  const { isOpenModal, setIsOpenModal } = props;
  console.log(isOpenModal);
  return (
    <IonModal
      isOpen={isOpenModal}
      animated
      id="example-modal"
      initialBreakpoint={0.3}
      onClick={() => setIsOpenModal(false)}
    >
      <div className="modal-content">
        <div className="modal-card">
          <IonItem lines="full">
            <IonRow>
              <IonCol size="auto" className="ion-box">
                <IonIcon aria-hidden="true" icon={chatboxEllipsesOutline} />
              </IonCol>
              <IonCol>
                <IonText className="card-title">New Chat</IonText>
                <br />
                <IonText className="card-decription">
                  Send a message to your contant
                </IonText>
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem lines="full">
            <IonRow>
              <IonCol size="auto" className="ion-box">
                <IonIcon aria-hidden="true" icon={readerOutline} />
              </IonCol>
              <IonCol>
                <IonText className="card-title">New Contact</IonText>
                <br />
                <IonText className="card-decription">
                  Send a message to your contant
                </IonText>
              </IonCol>
            </IonRow>
          </IonItem>
          <IonItem lines="none">
            <IonRow>
              <IonCol size="auto" className="ion-box">
                <IonIcon aria-hidden="true" icon={peopleOutline} />
              </IonCol>
              <IonCol>
                <IonText className="card-title">New Community</IonText>
                <br />
                <IonText className="card-decription">
                  Send a message to your contant
                </IonText>
              </IonCol>
            </IonRow>
          </IonItem>
        </div>
        <IonButton onClick={() => setIsOpenModal(false)} className="cancel-btn">
          Cancel
        </IonButton>
      </div>
    </IonModal>
  );
};

export default NewChatModal;
