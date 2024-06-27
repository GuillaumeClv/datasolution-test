"use client"
import { useRouter } from "next/navigation";

export function Nav () {
    const router = useRouter()

    return (
        <div className="flex justify-between mb-8">
            <button className="text-black" type="button" onClick={() => router.push('/')}>
                Liste des produits
            </button>
            <button className="text-black" type="button" onClick={() => router.push('/cart')}>
                Panier
            </button>
        </div>
    )
}