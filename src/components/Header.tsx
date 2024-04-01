import Image from "next/image";

export default function Header() {
    return (
        <main>
            <header className="bg-[#231C61] mt-9 ml-9 mr-9 h-[70px] rounded-full">
                <div id="left-section">
                    <Image 
                        className="pl-4"
                        src="/logo.svg"
                        alt="Logo"
                        width={80}
                        height={60}
                    />  
                </div>
                <div id="right-section" className="flex ml-32 sm:ml-64 md:ml-[250px] lg:ml-[400px] xl:ml-[950px] mt-[-40px]">
    <a href="">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#CB89D3] font-raleway">Home</h3>
    </a>
    <a href="">
        <h3 className="pl-8 sm:pl-6 md:pl-12 lg:pl-24 xl:pl-32 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#7B3397] font-raleway">Sobre</h3>
    </a>
    <a href="">
        <h3 className="pl-8 sm:pl-6 md:pl-12 lg:pl-24 xl:pl-32 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#7B3397] font-raleway">Mentores</h3>
    </a>
    <a href="">
        <h3 className="pl-8 sm:pl-6 md:pl-12 lg:pl-24 xl:pl-32 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#7B3397] font-raleway">Contato</h3>
    </a>
</div>
            </header>
        </main>
    );
    }