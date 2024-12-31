export const dynamic = "force-static";

export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Бургер",
      description: "Говяжий двойной с сыром",
      price: 2400,
      discount: 0,
      quantity: 100,
    },
    {
      id: 2,
      name: "Пицца",
      description: "Куриный двойной",
      price: 2000,
      discount: 0,
      quantity: 100,
    },
    {
      id: 3,
      name: "Суши",
      description: "Филаделфия, Калифорния, маки",
      price: 4000,
      discount: 0,
      quantity: 100,
    },
  ]);
}
