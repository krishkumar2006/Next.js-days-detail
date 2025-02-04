import React from 'react'
import { getAllproduct, IProduct } from "@/sanity/lib/data";

export default  async function  Itemlist  () {


  const products:IProduct[]= await getAllproduct() || [];
  


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
        {products.map((products)=>(



< a href={`/furniture/${products._id}`} key= {products._id}  className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
<img src={products.imageUrl} alt="" className="w-full h-[150px] object-cover rounded-md"/>

<div className="mt-3 space-y-1">
  <p className="text-sm text-gray-500 font-semibold uppercase">{products.category}</p>
  <p className="text-gray-700">{products.description}</p>
  <p>{products.discountPercentage}</p>
  <p>{products.isFeaturedProduct}</p>
  <p> Name:{products.name}</p>
  <p> price:${products.price}</p>
  <p>{products.stocklevel}</p>

</div>
  </a>
))}




    </div>
  )
}


