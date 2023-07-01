"use client"
import React from 'react'


import { useEffect, useState } from 'react';
import Order from '../components/Order';
import Contents from '../components/Contents';

const Page = () => {
    const [order, setOrder] = useState([])

  const handlePlus = (data) =>{
    let checkData = order.find(value => value.id === data.id)
    if(checkData===undefined){
      setOrder([...order, {...data, qty:1, total: data.price * 1}])
    }
    else{
      setOrder(order.map((value) => {
        if(value.id === data.id){
            let qty = value.qty+=1;
            return {...value, qty: qty, total: data.price * qty}
        }
        return value;
       
    }))
    }
}
  const handleMinus = (data) =>{
    
      setOrder(order.map((value) => {
        if(value.id === data.id){
          let qty = value.qty-=1;
            return {...value, qty: qty, total: value.price * qty}
        }
        return value;
       
    }))
  
}


  return (
    
    <>
    <div className='flex '>
          <div className='w-4/6'><Contents handlePlus={data => handlePlus(data)} handleMinus={data => handleMinus(data)}/></div>
          <div className='w-2/6'><Order order={order}/></div>
      </div>

    </>
  )
}

export default Page