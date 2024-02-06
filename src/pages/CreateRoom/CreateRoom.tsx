import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
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

  const handleBack = () => navigation.goBack();

  const searchHandle = (e: any) => {
    setLoading(true);
    const searchValue = (e.target as any).value;
    SearchChatMember(searchValue)
      .then((res) => setUsers(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  const createMemberHandle = (e: any) => {
    CreateChatMembers({ username: e })
      .then(() => handleBack())
      .catch((err) => console.log(err));
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
