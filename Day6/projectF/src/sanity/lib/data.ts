import {client}  from "../lib/client"


export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    discountPercentage: number | null;
    isFeaturedProduct: boolean | null;
    stocklevel: number | null;
  }
  

export const getAllproduct = async ()=>{

    const queryallproduct = `*[_type == "product"] 
    {_id, 
    price , 
    name,description ,
     discountPercentage,
     isFeaturedProduct, stocklevel,
      category,
     "imageUrl": image.asset->url}`
    
    try{const product:IProduct[] =await client.fetch(queryallproduct)

        return product;
    }
    
catch(error){
    console.log(error)
}


}



export const getproductbyid = async (id:string)=>{

    const queryproduct = `*[_type == "product" && _id == $id][0]
    {_id, 
    price , 
    name,
    description ,
     discountPercentage,
     isFeaturedProduct, stocklevel,
      category,
     "imageUrl": image.asset->url}`
    
    try{const productA:IProduct =await client.fetch(queryproduct, {id})

        return productA? productA : null
    }
    
catch(error){
    console.log(error)
}


}

