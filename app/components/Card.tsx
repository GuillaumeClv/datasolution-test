"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ProductDetails } from '../_types/types'
import { CartContext } from "../_contexte/ThemeProvider";
import { useContext } from "react";

export function Card ({id, title, price, image, category, quantity}: ProductDetails) {
    const { updateState } = useContext(CartContext);

    const handleRemove = () => {
        updateState((prevState: any) => {
            const updatedCart = prevState.cart.filter((product: any) => product.id !== id)
            return { cart: updatedCart }
        })
    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity === 0) {
            updateState((prevState: any) => {
                const updatedCart = prevState.cart.filter((product: any) => product.id !== id)
                return { cart: updatedCart }
            })
        }

        updateState((prevState: any) => {
            const updatedCart = [...prevState.cart]
        
            const productIndex = updatedCart.findIndex((product: any) => product.id === productId)
        
            if (productIndex !== -1) {
                updatedCart[productIndex] = {
                    ...updatedCart[productIndex],
                    quantity: newQuantity
                }
            }
        
            return { cart: updatedCart }
        })

    }

    return (
        <div key={id} className="box-border py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mb-4">
            <Image 
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 border-solid border-2 border-purple-500" 
                src={image} 
                alt={category} 
                width={100}
                height={100}
            />

            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {title}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {price}
                    </p>
                </div>

                {quantity && <p className='text-black'>quantity: {quantity}</p>}

                {quantity && (
                   <div className="">
                        <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" type="button" onClick={() => updateQuantity(id, quantity as number + 1)}>
                            +
                        </button>
                        <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" type="button" onClick={() => updateQuantity(id, quantity as number - 1)}>
                            -
                        </button>
                    </div>
                )}

                <Link className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" href={`/product/${id}`}>Voir le produit</Link>

                {
                    quantity && <button className="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2" type="button" onClick={handleRemove}>
                        Supprimer le produit
                    </button>
                }
            </div>
        </div>
    )
}