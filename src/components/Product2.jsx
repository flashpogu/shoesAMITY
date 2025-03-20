import React from 'react'
import ProductItem from './ProductItem';


export default function Product2() {
  const productss = [
    { title: "Air Zoom", image: "/ar1.png" },
    { title: "V2k" , image: "/pr1.png"},
    { title: "Metcon" , image: "/pr3.png"},
    { title: "Blazer" , image: "/pr6.png"},
    { title: "Duncks" , image: "/pr7.png"},
    { title: "Air Force1" , image: "/shoes5.png"},
    { title: "Lower" , image: "/shoes6.png"},
    { title: "Run EZ" , image: "/shoes7.png"},
  ];
  return (
    <div className='flex flex-col mx-10'>
      
      <p className='my-10 text-xl'>Trending Now</p>
      <div className='grid grid-cols-4 gap-7'>
      {
        productss.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))
      }
      </div>
      
    </div>
  )
}
