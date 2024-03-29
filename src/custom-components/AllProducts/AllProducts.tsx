import React from "react";
import ProductCard from "../FeatureProducts/ProductCard";
import { client } from "@/lib/sanity.client";
import { AllProductsQuery } from "@/lib/queries";

const getAllProducts = () => {
  return client.fetch(AllProductsQuery);
};

export const revalidate = 60; // revalidate this page every 60 seconds
const AllProducts = async () => {
  const products: Product[] = await getAllProducts();
  return (
    <div className="max-w-[90%] mx-auto mb-20 grid  sm:grid-cols-2 md:grid-cols-3  gap-12 justify-center lg:justify-between  ">
      {products?.map((product: Product, i: number) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default AllProducts;
