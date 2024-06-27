'use client'

export default function Error({}) {
  return (
    <main className="flex min-h-screen flex-col p-4 bg-white bg-sky-200 items-center justify-center">
        <section className="flex flex-col font-sans" >
            <div>
                <h1 className="flex-auto text-lg font-semibold text-slate-900 mb-4">
                    La liste de produits que vous recherchez n'est pas disponible
                </h1>
            </div>
        </section>
    </main>
  )
}