import { api } from "@/src/lib/api";
import { Header } from "@/src/components/header";
import { ProductCardLarge } from "@/src/components/product-card-large";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data } = await api.getProducts();
  const itemId = (await params).id;

  const item = data.find((item: any) => item.id === Number(itemId));

  return (
    <div>
      <Header />
      <ProductCardLarge data={item} />
    </div>
  );
}
