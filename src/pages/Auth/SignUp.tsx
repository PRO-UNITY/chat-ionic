import React, { useState } from "react";
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
import "./Auth.css";
import { TextField } from "../../components";
import { SignUpUser } from "../../services";

const SignUp: React.FC = () => {
  const navigation = useIonRouter();
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (field: string, event: string) => {
    const value = event?.target?.value;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSignUp = () => {
    setloading(true);
    SignUpUser(formData)
      .then(async (res) => {
        localStorage.setItem("token", res?.access);
        navigation.push("/home", "forward", "pop");
      })
      .catch(() => setError(true))
      .finally(() => setloading(false));
  };

  return (
    <IonPage className="auth-page">
      <IonContent fullscreen className="ion-padding">
        <IonGrid className="auth-container">
          <IonRow className="auth-head">
            <IonIcon icon={chatbubbleEllipses} className="auth-icon" />
            <IonText>Let's create an account for you</IonText>
          </IonRow>
          <IonRow className="input-box">
            <TextField
              value={formData.username}
              placeholder={"Username"}
              onIonInput={(value) => handleInputChange("username", value)}
            />
            <TextField
              value={formData.email}
              placeholder={"Email"}
              onIonInput={(value) => handleInputChange("email", value)}
            />
            <TextField
              value={formData.password}
              placeholder={"Password"}
              onIonInput={(value) => handleInputChange("password", value)}
            />
            <TextField
              value={formData.confirm_password}
              placeholder={"Confirm password"}
              onIonInput={(value) =>
                handleInputChange("confirm_password", value)
              }
            />
          </IonRow>
          {error && (
            <IonText className="ion-padding-top error-text">
              Incorrect fields
            </IonText>
          )}
          <IonRow className="auth-bottom-box">
            <IonButton
              className="auth-btn"
              expand="block"
              onClick={handleSignUp}
              disabled={!isFormValid()}
            >
              {loading ? (
                <IonSpinner color={"dark"} name="crescent" />
              ) : (
                <IonText className="btn-text">Sign In</IonText>
              )}
            </IonButton>
            <IonCol className="text-wrapp">
              <IonText> Already a member?</IonText>
              <IonButton
                routerLink="/auth/sign-in"
                fill="clear"
                className="auth-link"
              >
                <IonText>Login now</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
