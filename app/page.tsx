import { Card } from "./components/Card"
import { ProductDetails } from "./_types/types"
import { Nav } from "./components/Nav"

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const products = await getData()

  return (
    <main className="flex min-h-screen flex-col p-8 bg-sky-100">
        <Nav />
        
        {
          products.map(({id, title, price, image, category}: ProductDetails) => {
            return <Card id={id} title={title} price={price} image={image} category={category} />
          })
        }
    </main>
  );
}
