import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSpinner,
  IonText,
  useIonRouter,
} from "@ionic/react";
import "./CreateRoom.css";
import { chevronBackOutline } from "ionicons/icons";
import { useState } from "react";
import { CreateChatMembers, SearchChatMember } from "../../services";
import { SearchAvatar } from "../../components";
interface User {
  country: string | null;
  email: string | null;
  first_name: string | null;
  gender: string | null;
  id: number;
  last_name: string | null;
  phone: string | null;
  username: string | null;
}
const CreateRoom = () => {
  const navigation = useIonRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({ text: "", isShowError: false });

  const handleBack = () => navigation.goBack();

  const searchHandle = (e: any) => {
    setLoading(true);
    const searchValue = (e.target as any).value;
    SearchChatMember(searchValue)
      .then((res) => {
        setUsers(res);
        setError({ text: "", isShowError: false });
      })
      .catch(() => {
        setError({ text: "User not found", isShowError: true });
        setUsers([]);
      })
      .finally(() => setLoading(false));
  };

  const createMemberHandle = (e: any) => {
    setLoading(true);
    CreateChatMembers({ username: e })
      .then(() => {
        handleBack();
        setError({ text: "", isShowError: false });
      })
      .catch(() =>
        setError({ text: "Conversation already exists", isShowError: true })
      )
      .finally(() => setLoading(false));
  };

  return (
    <IonPage className="create-room">
      <IonHeader className="ion-no-border ion-padding">
        <IonIcon onClick={handleBack} icon={chevronBackOutline} />
        <IonSearchbar
          className="search-input"
          placeholder="Search..."
          onIonInput={(e) => searchHandle(e)}
        />
      </IonHeader>
      <IonContent fullscreen>
        {loading && (
          <IonItem className="loading-box">
            <IonSpinner name="crescent" className="loading"></IonSpinner>
          </IonItem>
        )}
        {error.isShowError && (
          <IonText color={"danger"} className="ion-text-center">
            <p>{error?.text}</p>
          </IonText>
        )}
        {users.map((item: User) => (
          <IonRow
            onClick={() => createMemberHandle(item.username)}
            key={item.id}
          >
            <SearchAvatar {...item} />
          </IonRow>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default CreateRoom;
