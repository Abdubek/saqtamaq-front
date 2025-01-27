import {
  IonBadge,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api";
import { TransactionStatus } from "../../shared/api/transactions.ts";
import dayjs from "dayjs";

export function OrdersPage() {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: api.transactions.getTransactions,
  });
  return (
    <>
      <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Мои заказы</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList lines="full">
          {data?.data.transactions.map((item, index) => (
            <IonItem key={index}>
              <div className="w-full py-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-lg">Заказ №{item.id}</span>
                  <IonBadge className="p-1 text-xs">
                    {getStatusText(item.status)}
                  </IonBadge>
                </div>
                <div className="text-gray-400 text-sm pb-2">
                  {item.items.map((i) => i.name).join(", ")}
                </div>
                <div className="text-gray-400 text-sm">
                  {dayjs(item.pickup_time).format("DD-MM-YYYY HH:mm")}
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

const getStatusText = (status: TransactionStatus) => {
  switch (status) {
    case "pending":
      return "Ожидается";
    case "failed":
      return "Неуспешно";
    case "completed":
      return "Готово";
  }
};
