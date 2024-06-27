export type ProductDetails = {
    id: number
    title: string
    price: number
    image: string
    category: string
    quantity?: number
}

export type State = {
    cart: Array<ProductDetails>
}