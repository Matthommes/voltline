"use client";
import {  useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductPage = () => {
  // const router = useRouter();
  const { id } = useParams();
  interface Product {
    name: string;
    description: string;
    price: number;
  }

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch product details using the id
      fetch(`/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
