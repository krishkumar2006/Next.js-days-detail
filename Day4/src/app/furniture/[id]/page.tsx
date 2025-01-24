"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url"; 
import { useParams } from "next/navigation";
import { getproductbyid } from "@/sanity/lib/data";


interface Product {
  _id: string;
  price: number;
  name: string;
  description: string;
  discountPercentage: number | null;
  isFeaturedProduct: boolean | null;
  stocklevel: number | null;
  category: string;
  imageUrl: string 
}

 
const builder = imageUrlBuilder(client);

function urlFor(source: string | null) {
 
  return source ? builder.image(source).url() : null;
}

 
export default function Page() {
  const params = useParams();
  const [items, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productId = params.id;

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getproductbyid(String(productId));
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        console.log(error);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
  const imageUrl = items && items.imageUrl ? urlFor(items.imageUrl) : null;
  console.log("Image URL:", imageUrl); 

  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg w-80 p-5">
        <img
          src={items?.imageUrl}
          alt={items?.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold text-gray-800 mt-3">{items?.name}</h2>
        <p className="text-sm text-gray-500 mt-1">Category: {items?.category}</p>
        <p className="text-sm text-gray-600 mt-2">{items?.description}</p>
        <p className="text-sm text-red-500 mt-2">
          Discount: {items?.discountPercentage ? `${items.discountPercentage}%` : "N/A"}
        </p>
        <p className={`text-sm font-medium mt-2 ${items?.isFeaturedProduct ? "text-green-600" : "text-gray-600"}`}>
          {items?.isFeaturedProduct ? "Featured Product" : "Regular Product"}
        </p>
        <p className="text-lg font-bold text-blue-600 mt-3">Price: ${items?.price}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"><a href="/cart">Add to cart</a></button>
      </div>
    </div>
    
  );
}
