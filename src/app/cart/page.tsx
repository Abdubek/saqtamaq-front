import { Header } from "@/src/components/header";
import { Navbar } from "@/src/components/navbar";
import { CardList } from "@/src/components/card-list";

export default function CartPage() {
  return (
    <div className="pb-20">
      <Header withBack={false} />
      <CardList />
      <Navbar />
    </div>
  );
}
