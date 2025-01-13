import { Header } from "@/src/components/header";
import { ProductCardLarge } from "@/src/components/product-card-large";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string; id: string }>;
}) {
  const productId = (await params).productId;
  const businessId = (await params).id;

  return (
    <div>
      <Header />
      <ProductCardLarge
        productId={Number(productId)}
        businessId={Number(businessId)}
      />
    </div>
  );
}
