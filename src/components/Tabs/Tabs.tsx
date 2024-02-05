import {
  IonButton,
  IonIcon,
  IonModal,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import { addOutline, homeOutline, personOutline } from "ionicons/icons";
import { Home } from "../../pages";
import "./Tabs.css";
import NewChatModal from "../NewChatModal/NewChatModal";
import { useRef } from "react";

const Tabs = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path={"/tab/Home"} component={Home} />
          <Route exact path={"/"}>
            <Redirect to="/tab/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/tab/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="Chat" href="/tab/Home">
            <IonButton className="modal-btn" id="open-modal">
              <IonIcon aria-hidden="true" icon={addOutline} />
              <IonText> New chat</IonText>
            </IonButton>
          </IonTabButton>
          <IonTabButton tab="User-profile" href="/tab/user-profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <NewChatModal modal={modal} />
    </>
  );
};

export default Tabs;
