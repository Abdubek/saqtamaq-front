import { Header } from "@/src/components/header";
import { BusinessCard } from "@/src/components/business-card";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const businessId = (await params).id;

  return (
    <div>
      <Header />
      <BusinessCard id={Number(businessId)} />
    </div>
  );
}
