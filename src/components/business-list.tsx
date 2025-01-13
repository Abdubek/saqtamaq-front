"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/api";
import { ProductCard } from "@/src/components/product-card";
import Link from "next/link";

export const BusinessList = () => {
  const { data: businessResponse } = useQuery({
    queryKey: ["business"],
    queryFn: api.getBusinesses,
  });

  return (
    <div>
      {businessResponse?.data?.map((business: any, index: number) => (
        <div key={index}>
          <Link href={`/home/${business.id}`} className="block p-4 pb-0">
            <div className="text-md font-bold capitalize">{business?.name}</div>
            <div className="text-sm capitalize text-gray-500">
              {business?.description}
            </div>
            <div className="text-sm capitalize text-gray-500">
              {business?.location}
            </div>
          </Link>

          <div className="overflow-x-auto flex p-4 gap-4">
            {business?.items.map((item: any, index: number) => (
              <ProductCard businessId={business.id} key={index} data={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
