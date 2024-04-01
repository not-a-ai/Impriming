import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Section() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <section className="relative h-screen w-screen z-[-1]">
        <Image 
          src="/bg-image.svg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
        />
        <div className="relative z-10 flex flex-col justify-center h-full w-full">
          <h1 className="text-7xl text-center font-bold mb-10">Transformando a Pesquisa</h1>
          <h3 className="text-xl text-center px-10">
            Olá! Somos o Instituto Imprinting, uma startup de DAO dedicada a<br/>
            revolucionar a pesquisa científica e o desenvolvimento humano.
          </h3>
        </div>
      </section>
    </main>
  )
}