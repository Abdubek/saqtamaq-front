"use client";

import { Header } from "@/src/components/header";
import { Navbar } from "@/src/components/navbar";
import { BusinessList } from "@/src/components/business-list";

export default function ProductsPage() {
  return (
    <div className="pb-20">
      <Header withBack={false} />
      <BusinessList />
      {/*<div className="overflow-x-auto flex p-4 gap-4">*/}
      {/*{data.map((item: any, index: any) => (*/}
      {/*  <ProductCard data={item} key={index} />*/}
      {/*))}*/}
      {/*</div>*/}
      <Navbar />
    </div>
  );
}
