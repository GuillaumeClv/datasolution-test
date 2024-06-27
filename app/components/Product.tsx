"use client"

import Image from "next/image";
import { ProductDetails } from "../_types/types";
import { CartContext } from "../_contexte/ThemeProvider";
import { useContext, useEffect } from "react";
import { Nav } from "./Nav";

export function Product ({id, title, price, image, category, quantity}: ProductDetails) {
    const { value, updateState } = useContext(CartContext);
    
    const handleClick = () => {
        updateState((prevState: any) => {
            const productIndex = prevState.cart.findIndex((product: any) => product.id === id)
          
            if (productIndex !== -1) {
                const updatedCart = [...prevState.cart]
                updatedCart[productIndex] = {
                ...updatedCart[productIndex],
                quantity: updatedCart[productIndex].quantity + 1
                }
          
                return { cart: updatedCart }
            }

            return {
                cart: [...prevState.cart, { id: id, quantity: 1, title: title, price: price, image: image, category: category }]
            }
        })
    }

    useEffect(() => {
      console.log(value)
    })
    
    return (
        <>
            <Nav />
            <section key={id} className="flex font-sans" >
                <aside className="flex-none w-48 relative h-52 mr-8">
                    <Image 
                        className="absolute inset-0 w-full h-full object-cover" 
                        src={image} 
                        alt={category} 
                        width={100}
                        height={100}
                    />
                </aside>

                <div className="flex flex-col ">
                    <div>
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            {price}
                        </div>
                    </div>
                
                    <div className="flex space-x-4 mb-6 text-sm font-medium mt-auto">
                        <div className="flex-auto flex space-x-4">
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit" onClick={handleClick}>
                            Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}