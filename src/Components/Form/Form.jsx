import './Form.css';
 
const Contact = () => {

//   const formatarTelefone = (input) => {
//     // Remove tudo que não é número do valor atual do input
//     let valor = input.value.replace(/\D/g, '');
  
//     // Formatação do telefone: (xx) xxxxx-xxxx
//     valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  
//     // Define o novo valor formatado de volta no input
//     input.value = valor;
// }

  return (
   
  <section className='form'>
    <h1> Venha fazer parte dessa comunidade global.</h1>
    <div id='div-form'>
      <div>
        <h3>Para realizar pesquisas de ponta, nos juntamos a instituições de saúde, ensino e laboratórios de pesquisa em nível internacional. Juntos, formamos uma rede colaborativa que funciona como uma força global para a inovação científica.</h3>
        <div id='icons'>
          <div className='icon'><img src="./public/forms/foguete.png" alt="" /> <p>Inovação</p> </div>
          <div className='icon'><img src="./public/forms/busca.png" alt="" /> <p>Pesquisa</p> </div>
          <div className='icon'><img src="./public/forms/engrenagem.png" alt="" /><p>Desenvolvimento</p></div>
        </div>
      </div>
      
      <div>
        <form action="" method="post">
          <label htmlFor="nome"></label>
          <input type="text" id='nome' placeholder="Nome:" className='input'/>
          <label htmlFor="perfil"></label>
          <select name="perfil" id="perfil" placeholder="Perfil:"  className='input'>
              <option value="placeholder" >Perfil:</option>
              <option value="investidor">Investidor</option>
              <option value="pesquisador">Pesquisador</option>
              <option value="medico">Médico</option>
              <option value="paciente">Paciente</option>
          </select>
          <label htmlFor="telefone"></label>
          <input  type="text" id="telefone"  className='input' name="telefone" maxLength="14" placeholder="Telefone:"  />
          <label htmlFor="email"></label>
          <input type="email"  className='input' name="email" id="email" placeholder='E-mail:'/>
          <label htmlFor="mensagem"></label>
          <textarea id="mensagem"  className='input' name="mensagem" rows="4" cols="50" placeholder='Sua mensagem:' />
          <button type="submit">Quero fazer parte!</button>
        </form>
      </div>
    </div>

    


  </section>
       
  )

 
}



export default Contact