import {
  IonAvatar,
  IonCol,
  IonIcon,
  IonItem,
  IonRow,
  IonText,
} from "@ionic/react";
import { ellipse } from "ionicons/icons";
interface SearchDataProp {
  country: string | null;
  email: string | null;
  first_name: string | null;
  gender: string | null;
  id: number;
  last_name: string | null;
  phone: string | null;
  username: string | null;
}

const SearchAvatar = (props: SearchDataProp) => {
  const { email, username } = props;
  return (
    <IonItem style={{ width: "100%" }}>
      <IonRow style={{ width: "100%" }}>
        <IonCol size="auto">
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            />
          </IonAvatar>
        </IonCol>
        <IonCol className="card-text">
          <IonText className="name">{username}</IonText>
          <IonText className="email">{email}</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonIcon icon={ellipse} className="dot" />
        </IonCol>
      </IonRow>
    </IonItem>
  );
};

export default SearchAvatar;
