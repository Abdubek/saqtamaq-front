import { IonNav } from "@ionic/react";
import { LoginPage } from "./login-page.tsx";
import { useRef } from "react";

export function AuthPage() {
  const ref = useRef<HTMLIonNavElement>(null);

  return (
    <IonNav ref={ref} root={() => <LoginPage nav={ref.current} />}></IonNav>
  );
}
