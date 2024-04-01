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
          <h1 className="text-2xl sm:text-4xl text-center md:text-4xl lg:text-5xl xl:text:7xl font-bold mb-10">Transformando a Pesquisa</h1>
          <h3 className="text-sm sm:text-base text-center md:text-lg lg:text-xl xl:text-2xl px-10">
            Olá! Somos o Instituto Imprinting, uma startup de DAO dedicada a<br/>
            revolucionar a pesquisa científica e o desenvolvimento humano.
          </h3>
        </div>
      </section>
    </main>
  )
}