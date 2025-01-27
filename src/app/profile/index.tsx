import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { STORAGE_TOKEN_KEY } from "../../shared/api/config.ts";

export function ProfilePage() {
  const [, setToken] = useLocalStorage(STORAGE_TOKEN_KEY, "");
  return (
    <>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Профиль</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton className="w-full" onClick={() => setToken("")}>
          Выйти
        </IonButton>
      </IonContent>
    </>
  );
}
