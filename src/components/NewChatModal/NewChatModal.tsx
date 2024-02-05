import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
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
  modal: any;
}

const NewChatModal = (props: ModalDataProp) => {
  const { modal } = props;
  return (
    <IonModal
      ref={modal}
      id="example-modal"
      trigger="open-modal"
      initialBreakpoint={0.3}
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
        <IonButton
          onClick={() => modal.current.dismiss()}
          className="cancel-btn"
        >
          Cancel
        </IonButton>
      </div>
    </IonModal>
  );
};

export default NewChatModal;
