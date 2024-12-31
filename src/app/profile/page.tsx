import { Header } from "@/src/components/header";
import { Navbar } from "@/src/components/navbar";

export default function OrdersPage() {
  return (
    <div className="pb-20">
      <Header withBack={false} />

      <Navbar />
    </div>
  );
}
