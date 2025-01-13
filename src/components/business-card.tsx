"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/api";
import { ProductCard } from "@/src/components/product-card";

type Props = {
  id: number;
};

export const BusinessCard = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ["business", id],
    queryFn: () => api.getBusinessDetails(id),
  });

  if (!data) return null;

  return (
    <div>
      <div className="p-4 pb-0">
        <div className="text-md font-bold capitalize">{data?.data.name}</div>
        <div className="text-sm capitalize text-gray-500">
          {data?.data.description}
        </div>
        <div className="text-sm capitalize text-gray-500">
          {data?.data.location}
        </div>
      </div>

      <div className="grid grid-cols-2 p-4 gap-4">
        {data?.data.items.map((item: any, index: number) => (
          <div key={index}>
            <ProductCard businessId={data?.data.id} key={index} data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
