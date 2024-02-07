import { Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Chat, CreateRoom, SignIn, SignUp } from "./pages";
import { TabBar } from "./components";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <TabBar />
      <Route exact path="/chat/:id" component={Chat} />
      <Route exact path="/create-room" component={CreateRoom} />
      <Route exact path="/auth/sign-up" component={SignUp} />
      <Route exact path="/auth/sign-in" component={SignIn} />
    </IonReactRouter>
  </IonApp>
);

export default App;
