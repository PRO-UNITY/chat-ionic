import {
  IonButton,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import { addOutline, homeOutline, logOutOutline } from "ionicons/icons";
import { Home } from "../../pages";
import "./Tabs.css";
import NewChatModal from "../NewChatModal/NewChatModal";
import { useRef, useState } from "react";

const TabBar = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="Chat" href="/create-room">
            <IonButton
              className="modal-btn"
              // onClick={() => setIsOpenModal(true)}
            >
              <IonIcon aria-hidden="true" icon={addOutline} />
              <IonText> New chat</IonText>
            </IonButton>
          </IonTabButton>
          <IonTabButton tab="Log-out" href="auth/sign-in">
            <IonButton fill="clear" className="log-out">
              <IonIcon icon={logOutOutline} />
            </IonButton>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <NewChatModal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
    </>
  );
};

export default TabBar;
