"use client"

import { useContext } from "react";
import { CartContext } from "../_contexte/ThemeProvider";
import { ProductDetails } from "../_types/types";
import { Nav } from "./Nav";
import { Card } from "./Card";

export function Cart () {
    const { value } = useContext(CartContext);

	return (
		<>
			<Nav />

			<h1 className="p-3 text-black rounded-lg">Panier :</h1>

			{
				value?.cart?.length === 0 && <p className="p-3 text-black">Votre panier est vide</p>
			}
			
			{
				value?.cart?.map(({id, title, price, image, category, quantity}: ProductDetails) => {
					return <Card id={id} title={title} price={price} image={image} category={category} quantity={quantity}/>
				})
			}
		</>
	)
}