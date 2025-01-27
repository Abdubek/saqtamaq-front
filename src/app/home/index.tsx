import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api";
import { Business } from "./business.tsx";

export function HomePage() {
  const { data: businessResponse } = useQuery({
    queryKey: ["business"],
    queryFn: api.business.getBusinesses,
  });

  return (
    <>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Saqtamaq</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <>
          {businessResponse?.data?.businesses.map((business, index) => (
            <Business data={business} key={index} />
          ))}
        </>
      </IonContent>
    </>
  );
}
