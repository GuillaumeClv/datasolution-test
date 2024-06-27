import { Product } from "@/app/components/Product";
import { ProductDetails } from "@/app/_types/types";

export default async function Page({ params }: { params: { id: string } }) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const {id, title, price, image, category}: ProductDetails = await response.json();

    return (
        <main className="flex min-h-screen flex-col p-4 bg-white bg-sky-200">
            <Product id={id} title={title} price={price} image={image} category={category} />
        </main>
    )
}