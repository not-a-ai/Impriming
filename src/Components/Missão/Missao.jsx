import "./Missao.css";

const Missao = () => {
  return (
    <div className="container">
      <h1>Nossa Missão</h1>
      <div className="missao">
        <div className="imagens">
          <img src="./public/missão/img1.svg" alt="Imagem 1" />
          <h4>Terapias Psicodélicas</h4>
        </div>
        <div className="imagens">
          <img src="./public/missão/img2.svg" alt="Imagem 2" />
          <h4>Terapias Integrativas</h4>
        </div>
        <div className="imagens">
          <img src="./public/missão/img3.svg" alt="Imagem 3" />
          <h4>Educação</h4>
        </div>
        <div className="imagens">
          <img src="./public/missão/img4.svg" alt="Imagem 4" />
          <h4>Inovação em Saúde</h4>
        </div>
        <div className="imagens">
          <img src="./public/missão/img5.svg" alt="Imagem 5" />
          <h4>NeuroMaps</h4>
        </div>
        <div className="imagens">
          <img src="./public/missão/img6.svg" alt="Imagem 6" />
          <h4>Comunidade de Pesquisadores</h4>
        </div>
      </div>
    </div>
  );
};

export default Missao;
