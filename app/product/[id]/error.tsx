'use client'

import Link from "next/link"
 
export default function Error({}) {
  return (
    <main className="flex min-h-screen flex-col p-4 bg-white bg-sky-200 items-center justify-center">
        <section className="flex flex-col font-sans" >
            <div>
                <h1 className="flex-auto text-lg font-semibold text-slate-900 mb-4">
                    Le produit que vous recherchez n'est pas disponible
                </h1>
            </div>
        
            <div className="flex space-x-4 mb-6 text-sm font-medium mt-auto self-center">
                <Link className=" p-2 font-semibold rounded-md bg-black text-white" href="/">Revenir à la liste de produits</Link>
            </div>
        </section>
    </main>
  )
}