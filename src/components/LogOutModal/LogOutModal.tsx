import { IonAlert, IonButton, IonIcon, useIonRouter } from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
import "./LogOutModal.css";
import { storage } from "../../storage";

const LogOutModal = () => {
  const navigation = useIonRouter();
  const logOut = () => {
    navigation.push("/auth/sign-in", "back", "pop");
    storage.clear();
  };
  return (
    <>
      <IonButton id="logout-modal" fill="clear" className="log-out">
        <IonIcon icon={logOutOutline} />
      </IonButton>
      <IonAlert
        className="logout-modal"
        header="Are you sure want to log out"
        trigger="logout-modal"
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Yes",
            role: "confirm",
            handler: () => logOut(),
          },
        ]}
        onDidDismiss={({ detail }) =>
          console.log(`Dismissed with role: ${detail.role}`)
        }
      ></IonAlert>
    </>
  );
};

export default LogOutModal;
