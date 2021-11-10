import { Footer } from "./styles";

function FooterHome() {
  return (
    <Footer>
      <div className="ContainerFooter">
        <div>
          <h1 className="Upgrade">Melhore sua casa</h1>
          <div className="TextFooter">
            <p>Guia de Profissionais e Empresas</p>
            <p>Peça orçamentos</p>
            <p>Preços do setor</p>
            <p>Perguntas à comunidade</p>
            <p>Galeria de fotos</p>
            <p>Ideias e Projetos</p>
          </div>
        </div>
        <div>
          <h1 className="Private">Particulares</h1>
          <div className="TextFooter">
            <p>Ajuda aos particulares</p>
            <p>Cadastre-se</p>
            <p>Conselhos para contratar em Bauen</p>
          </div>
        </div>
        <div>
          <h1 className="Professionals">Profissionais</h1>
          <div className="TextFooter">
            <p>Guia de Profissionais e Empresas</p>
            <p>Cadastre-se</p>
            <p>Procenter</p>
            <p>Baixe o App</p>
          </div>
        </div>
        <div>
          <h1 className="About"> Sobre Bauen</h1>
          <div className="TextFooter">
            <p>Sobre nós</p>
            <p>Entre em contato</p>
            <p>SAC</p>
            <p>Equipe</p>
            <p>Programa de afiliação</p>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterHome;
