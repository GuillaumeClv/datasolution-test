export function addProduct (prevState: any, id: number, title: string, price: number, image: string, category: string) {
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
}

export function removeProduct (prevState: any, id: number) {
    const updatedCart = prevState.cart.filter((product: any) => product.id !== id)
    return { cart: updatedCart }
}

export function updateProductQuantity (prevState: any, productId: number, newQuantity: number) {
    const updatedCart = [...prevState.cart]
    const productIndex = updatedCart.findIndex((product: any) => product.id === productId)

    if (productIndex !== -1) {
        updatedCart[productIndex] = {
            ...updatedCart[productIndex],
            quantity: newQuantity
        }
    }

    return { cart: updatedCart }
}
