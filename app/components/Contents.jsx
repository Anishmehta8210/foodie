"use client"
import React from 'react'
import Card from './Card'

const Contents = ({handlePlus,handleMinus}) => {
    
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:1, title:"Egg Roll",price:50, img: "https://i.pinimg.com/736x/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:2, title:"Veg Biryani",price:180, img: "https://i.ytimg.com/vi/JqP4wSWsYr4/maxresdefault.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:3, title:"Momos",price:60, img: "https://i.ytimg.com/vi/IVM_CQvgxCg/maxresdefault.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:4, title:"Burger",price:100, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/800px-Hamburger_%28black_bg%29.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:5, title:"Chowmein",price:150, img: "https://i.ytimg.com/vi/eSTYcMhoRzU/maxresdefault.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:6, title:"Sandwich",price:75, img: "https://i.ytimg.com/vi/MpXJyfOg3AQ/maxresdefault.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:7, title:"Pizza",price:99, img: "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-87930581/87930581.jpg"}}/>
                        <Card handlePlus={(data) => handlePlus(data)} handleMinus={(data) => handleMinus(data)} data={{id:8, title:"French Fries",price:90, img: "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x500.jpg"}}/>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contents