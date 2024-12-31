"use client";

import { api } from "@/src/lib/api";
import { Header } from "@/src/components/header";
import { Navbar } from "@/src/components/navbar";
import { ProductCard } from "@/src/components/product-card";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await api.getProducts();
    setData(res.data);
  };

  return (
    <div className="pb-20">
      <Header withBack={false} />
      <div className="overflow-x-auto flex p-4 gap-4">
        {data.map((item: any, index: any) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
      <Navbar />
    </div>
  );
}
