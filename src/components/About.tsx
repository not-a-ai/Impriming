    import Image from 'next/image'
    import React from 'react'

    export default function About() {
    return (
        <main className='bg-[#100A38] h-screen'>
            <div id='Title'>
            <h1 className='text-[#EE841E] text-center pt-12 xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold'>O que é um DAO?</h1>
            </div>
            <div id='sections'>
            <div id='section1' className='flex sm:mt-[200px] md:mt-[0px]'>
                <div id='left-side' className='lg:mt-[50px] md:mt-[90px] sm:mt-[120px] ml-[230px] md:block hidden'>
                    <Image 
                        src='/image1.svg'
                        alt='DAO'
                        width={270}
                        height={500}
                    />
                </div>
                <div id='right-side' className='sm:ml-[0px] ml-[0px] sm:mt-[50px] mt-[150px]'>
                    <h2 className='2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-lg font-inter 2xl:leading-normal xl:tracking-wider leading-none tracking-none ml-[20px] sm:ml-[60px] text center'>A DAO é uma organização que funciona sem gerenciamento<br/>
                        hierárquico, pautada em regras definidas por meio de <span className='text-[#FA90F5] font-bold'>Smart<br/>
                        <span className='xl:ml-[-50px]'>Contracts</span></span>, em que os participantes exercem seus direitos por meio<br/>
                        de tokens emitidos pela própria organização.</h2>
                </div>
                </div>
                <div id='section2' className='flex 2xl:mt-[30px] xl:mt-[-40px] lg:mt-[80px] md:mt-[-40px] sm:mt-[180px] mt-[200px]'>
                    <div id='left-side2'>
                    <h2 className='2xl:text-3xl lg:text-2xl md:text-lg sm:text-lg text-lg font-inter 2xl:leading-snug 2xl:tracking-wider leading-none tracking-none 2xl:mt-[80px] lg:mt-[170px] md:mt-[200px] xl:ml-[200px] ml-[20px] sm:ml-[60px] sm:text center'>Em regra, as DAOs funcionam sob <span className='text-[#FA90F5] font-bold'>códigos abertos</span>, possibilitando a <br/>
                    qualquer pessoa interessada auditar seus códigos de programação e <br/>
                    entender a sua organização de forma clara. Pela lógica da<br/>
                    <span className='text-[#FA90F5] font-bold'>descentralização</span>, as decisões em uma DAO ocorrem por votação dos<br/>
                    detentores de tokens de acordo com suas regras de consenso.</h2>
                    </div>
                    <div id='right-side2' className='2xl:mt-[-60px] xl:mt-[0px] xl:ml-[150px] ml-[50px] sm:mt-[10px] md:mt-[150px] lg:mt-[50px] md:block hidden'>
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
