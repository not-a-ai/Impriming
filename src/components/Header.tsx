import Image from "next/image";

export default function Header() {
    return (
        <main>
            <header className="flex  bg-[#231C61] mt-9 ml-9 mr-9 h-[70px] rounded-full">
                <div id="left-section">
                    <Image 
                        className="pl-4"
                        src="/logo.svg"
                        alt="Logo"
                        width={80}
                        height={60}
                    />  
                </div>
                <div id="right-section" className="flex ml-[950px] pt-6">
                <a href="">
                    <h3 className=" text-[#CB89D3] font-raleway text-lg">Home</h3>
                </a>
                <a href="">
                    <h3 className="pl-[130px] text-[#7B3397] font-raleway text-lg">Sobre</h3>
                </a>
                <a href="">
                    <h3 className="pl-[130px] text-[#7B3397] font-raleway text-lg">Mentores</h3>
                </a>
                <a href="">
                    <h3 className="pl-[130px] text-[#7B3397] font-raleway text-lg">Contato</h3>
                </a>
                    </div>
            </header>
        </main>
    );
    }