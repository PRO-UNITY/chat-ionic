import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonSpinner,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { chatbubbleEllipses } from "ionicons/icons";
import "./Auth.css"; // Assuming the path to your TextField component is correct
import { useState } from "react";
import { TextField } from "../../components";
import { SignInUser } from "../../services";
import { storage } from "../../storage";

const SignIn: React.FC = () => {
  const navigation = useIonRouter();
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (field: string, event: string) => {
    let value = event?.target?.value;
    setSignInData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSignIn = () => {
    setloading(true);
    SignInUser(signInData)
      .then(async (res) => {
        navigation.push("/home", "forward", "pop");
        storage.set("token", res?.access);
      })
      .catch((err) => setError(true))
      .finally(() => setloading(false));
  };

  return (
    <IonPage className="auth-page">
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="auth-container">
          <IonRow className="auth-head">
            <IonIcon icon={chatbubbleEllipses} className="auth-icon" />
            <IonText>Let's create an for you account</IonText>
          </IonRow>
          <IonRow className="input-box">
            {/* TextField components for username and password */}
            <TextField
              value={signInData.username}
              placeholder={"Username"}
              onIonInput={(value) => handleInputChange("username", value)}
            />
            <TextField
              value={signInData.password}
              placeholder={"Password"}
              onIonInput={(value) => handleInputChange("password", value)}
            />
          </IonRow>
          {error && (
            <IonText className="ion-padding-top error-text">
              Incorrect username or password
            </IonText>
          )}
          <IonRow className="auth-bottom-box">
            <IonButton
              disabled={!signInData.username || !signInData.password}
              className="auth-btn"
              expand="block"
              onClick={handleSignIn}
            >
              {loading ? (
                <IonSpinner color={"dark"} name="crescent" />
              ) : (
                <IonText className="btn-text">Sign In</IonText>
              )}
            </IonButton>
            <IonCol className="text-wrapp">
              <IonText>Not a member</IonText>
              <IonButton
                routerLink="/auth/sign-up"
                fill="clear"
                className="auth-link"
              >
                <IonText>Register Now</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
