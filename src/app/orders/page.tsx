import { Header } from "@/src/components/header";
import { Navbar } from "@/src/components/navbar";
import { RabbitIcon } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="pb-20">
      <Header withBack={false} />
      <div className="min-h-screen flex pt-36 items-center flex-col gap-4">
        <RabbitIcon width={100} height={100} strokeWidth={1} />
        <div className="text-3xl">Пусто</div>
      </div>
      <Navbar />
    </div>
  );
}
