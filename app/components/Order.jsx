"use client"
import React, { useState } from 'react'

const Order = ({order}) => {
    const [show, setShow] = useState(false)
    let [totalPrice, setTotalPrice] = useState(0)

    const handleTotal = () => {
        let total = 0;
        order.map(value => {
            total += value.total
        })
        setTotalPrice(total)
        setShow(true);
    }
    return (
        <div className='mt-10 p-4'>
            <table className='border w-full'>
                <thead>
                <tr>
                    <th className='border p-2 border-slate-400'>id</th>
                    <th className='border p-2 border-slate-400'>Name</th>
                    <th className='border p-2 border-slate-400'>Qty</th>
                    <th className='border p-2 border-slate-400'>Amount</th>
                    <th className='border p-2 border-slate-400'>Total</th>
                </tr>
                </thead>
                
               <tbody>
               {
                order.map((value, i) => (
                    <tr key={i}>
                    <td className='border p-2 border-slate-400'>{value.id}</td>
                    <td className='border p-2 border-slate-400'>{value.title}</td>
                    <td className='border p-2 border-slate-400'>{value.qty}</td>
                    <td className='border p-2 border-slate-400'>{value.price}</td>
                    <td className='border p-2 border-slate-400'>{value.total}</td>
                </tr>
                ))
               }
               </tbody>
            </table>
            
            <div className="absolute bottom-0  gap-3 p-4">
                {
                    show && <div className='flex flex-col mb-2'>
                    <h1 className='text-6xl font-black'>₹ {totalPrice}/- <span className="text-slate-500 text-lg"><del></del></span></h1>
                </div>
                }
                <div className='flex'>
                    <button className="bg-gray-600 hover:bg-gray-800 text-white  px-5 py-2 text-2xl font-bold uppercase">Reset</button>
                    <button onClick={handleTotal} className="bg-orange-600 hover:bg-orange-800 text-white  px-10 py-2 text-2xl font-bold uppercase">Order Now</button>
                    <button className="bg-teal-600 hover:bg-teal-800 text-white  px-10 py-2 text-2xl font-bold uppercase">Save</button>
                </div>

            </div>

        </div>
    )
}

export default Order