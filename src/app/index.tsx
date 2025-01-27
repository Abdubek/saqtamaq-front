import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonApp,
  IonIcon,
  IonText,
} from "@ionic/react";
import { setupIonicReact } from "@ionic/react";

import {
  homeOutline,
  cartOutline,
  readerOutline,
  personOutline,
} from "ionicons/icons";

import { HomePage } from "./home";
import { CartPage } from "./cart";
import { OrdersPage } from "./orders";
import { ProfilePage } from "./profile";
import { AuthPage } from "./auth";
import { useLocalStorage } from "@uidotdev/usehooks";
import { STORAGE_TOKEN_KEY } from "../shared/api/config.ts";

setupIonicReact();

export function App() {
  const [token] = useLocalStorage<string>(STORAGE_TOKEN_KEY, "");

  return (
    <IonApp>
      {token === "" ? (
        <AuthPage />
      ) : (
        <>
          <IonTabs>
            <IonTab tab="home">
              <HomePage />
            </IonTab>
            <IonTab tab="cart">
              <CartPage />
            </IonTab>
            <IonTab tab="orders">
              <OrdersPage />
            </IonTab>
            <IonTab tab="profile">
              <ProfilePage />
            </IonTab>

            <IonTabBar mode="ios" slot="bottom">
              <IonTabButton tab="home">
                <IonIcon icon={homeOutline} size="small" />
                <IonText>Главная</IonText>
              </IonTabButton>
              <IonTabButton tab="cart">
                <IonIcon icon={cartOutline} size="small" />
                <IonText>Корзина</IonText>
              </IonTabButton>
              <IonTabButton tab="orders">
                <IonIcon icon={readerOutline} size="small" />
                <IonText>Заказы</IonText>
              </IonTabButton>
              <IonTabButton tab="profile">
                <IonIcon icon={personOutline} size="small" />
                <IonText>Профиль</IonText>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </>
      )}
    </IonApp>
  );
}
