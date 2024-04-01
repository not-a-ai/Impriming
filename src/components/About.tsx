import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <main className='bg-[#100A38] h-screen'>
        <div id='Title'>
        <h1 className='text-[#EE841E] text-center pt-12 text-5xl font-bold'>O que é um DAO?</h1>
        </div>
        <div id='sections'>
        <div id='section1' className='flex'>
            <div id='left-side' className='mt-[-60px] ml-[150px]'>
                <Image 
                    src='/image1.svg'
                    alt='DAO'
                    width={270}
                    height={500}
                />
            </div>
            <div id='right-side' className='ml-[250px] mt-[50px]'>
                <h2 className='text-3xl font-inter leading-normal tracking-widest'>A DAO é uma organização que funciona sem gerenciamento<br/>
                    hierárquico, pautada em regras definidas por meio de <span className='text-[#FA90F5] text-3xl font-bold'>Smart<br/>
                    <span className='ml-[-50px]'>Contracts</span></span>, em que os participantes exercem seus direitos por meio<br/>
                    de tokens emitidos pela própria organização.</h2>
            </div>
            </div>
            <div id='section2' className='flex mt-[50px]'>
                <div id='left-side2'>
                <h2 className='text-3xl font-inter leading-normal tracking-widest mt-[50px] ml-[130px]'>Em regra, as DAOs funcionam sob <span className='text-[#FA90F5] text-3xl font-bold'>códigos abertos</span>, possibilitando a <br/>
                qualquer pessoa interessada auditar seus códigos de programação e <br/>
                entender a sua organização de forma clara. Pela lógica da<br/>
                <span className='text-[#FA90F5] text-3xl font-bold'>descentralização</span>, as decisões em uma DAO ocorrem por votação dos<br/>
                detentores de tokens de acordo com suas regras de consenso.</h2>
                </div>
                <div id='right-side2' className='mt-[-60px] ml-[150px]'>
                <Image 
                    src='/image2.svg'
                    alt='DAO'
                    width={270}
                    height={500}
                />
                </div>
        </div>
        </div>
    </main>
  )
}
