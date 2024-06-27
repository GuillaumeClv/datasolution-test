'use client'
 
import { createContext, useState } from 'react'
 
type CartProviderType = {
	children: React.ReactNode,
}

export const CartContext = createContext({} as any)

export default function CartProvider({
  children,
}: CartProviderType) {
	const [value, setValue] = useState({cart: []})

	const updateState = (newState: any) => {
		setValue(newState);
	}

	return <CartContext.Provider value={{value, updateState}}>{children}</CartContext.Provider>
}