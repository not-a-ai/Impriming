import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Mentores.css'

const Mentores = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
   
    <div className='w-3/4 m-auto'>
    <div className=" Mentores mt-20">
        <h1 id="Title-mentores">Nossos Mentores</h1>
        
    <Slider {...settings}>
          {data.map((d) => (
        <div key={d.name} className=" Mentores-cont " >
          <div className='h-56 flex justify-center items-center rounded-t-xl'>
            <img src={d.img} alt="" className=" mentores-image rounded-full"/>
          </div>

          <div className=" textos flex items-center justify-center gap-4 p-4">
            <h2 className="text-xl font-semibold">{d.nome}</h2>
            <h4 className="text-xl font-semibold">{d.cargo}</h4>
            <p className="text-center">{d.sobre}</p>
          </div>
        </div>
      ))}
      
    </Slider>
    </div>
    
  </div>
       
  )

 
}

const data = [
    {
        img: "Jonata.svg",
        nome: "Jônatas Rodrigues",
        cargo: "Founder e CEO",
        sobre:"Especialista em vendas, atendimento e sucesso do cliente com mais de 18 anos de experiência de mercado, nosso CEO é um apaixonado por conhecimento em terapias integrativas e psicodélicas e entusiasta da Psicologia e Neuriciênciais  do comportamento humano."
    },
    {
        img: "Bernando.svg",
        nome: "Bernando Souza",
        cargo: "Mentor e CBO",
        sobre:"Bernardo Souza é pastor e psicoterapeuta, especializado em Psicoterapia Assistida por Psicodélicos pela Harvard Medical School. Com mais de 20 anos de experiência, ele atende centenas de pacientes globalmente, focando em compulsões através de protocolos avançados de microdosagem pela PSICODELIX. Seu trabalho pioneiro resultou na certificação de 3.000 médicos em colaborações com instituições renomadas como Harvard e Johns Hopkins."
    },
    {
        img: "Andre.svg",
        nome: "André Luiz Villas Bôas e Silva",
        cargo: "Mentor e CVO",
        sobre:"André é um Executivo de Estratégias e Negócios de Saúde com mais de 28 anos de exp mercado nacional. Atuando como diretor executivo de grandes hospitais e parceiro est centros de pesquisa e desenvolvimento ele formou uma rede de Network inestimável da Heco Health torna-se peça chave no futuro da DeepTech"
    }

  ]

export default Mentores