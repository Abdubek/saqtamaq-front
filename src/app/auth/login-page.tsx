import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonInput,
  IonNavLink,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";
import { RegisterPage } from "./register.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../shared/api";
import { useLocalStorage } from "@uidotdev/usehooks";
import { STORAGE_TOKEN_KEY } from "../../shared/api/config.ts";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type SchemaType = z.infer<typeof formSchema>;

type Props = {
  nav: HTMLIonNavElement | null;
};

export function LoginPage({ nav }: Props) {
  const [isShow, setIsShow] = useState(false);
  const [, setToken] = useLocalStorage<string>(STORAGE_TOKEN_KEY, "");
  const form = useForm<SchemaType>({
    resolver: zodResolver(formSchema),
  });

  const { mutate } = useMutation({
    mutationFn: api.auth.login,
    onSuccess: async ({ data }) => {
      setToken(data.token);
    },
  });

  const onSubmit = async (values: SchemaType) => {
    mutate({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <IonContent className="ion-padding ">
        <IonText
          mode="ios"
          color="primary"
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginTop: "50px",
            display: "block",
          }}
        >
          <h1>Saqtamaq</h1>
        </IonText>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <IonInput
            mode="md"
            label="E-mail"
            labelPlacement="stacked"
            fill="outline"
            placeholder="Введите e-mail"
            autocomplete="off"
            {...form.register("email")}
          />
          <IonInput
            mode="md"
            label="Пароль"
            type={isShow ? "text" : "password"}
            labelPlacement="stacked"
            fill="outline"
            placeholder="Введите пароль"
            autocomplete="off"
            {...form.register("password")}
          >
            <IonButton
              mode="ios"
              fill="clear"
              slot="end"
              aria-label="Show/hide"
              onClick={() => setIsShow(!isShow)}
            >
              <IonIcon
                mode="ios"
                slot="icon-only"
                icon={isShow ? eyeOff : eye}
                aria-hidden="true"
              />
            </IonButton>
          </IonInput>
          <IonButton mode="ios" type="submit">
            Войти
          </IonButton>
        </form>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle size="small">
            Нет аккаунта? &nbsp;
            <IonNavLink
              routerDirection="forward"
              component={() => <RegisterPage nav={nav} />}
            >
              <IonText color="primary">Зарегистрироваться</IonText>
            </IonNavLink>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
