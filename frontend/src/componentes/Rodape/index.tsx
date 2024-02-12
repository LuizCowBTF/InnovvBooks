import './Rodape.css'

const Rodape = () => {
    return (<footer className="rodape">
        <div className="lista-rodape__item">
          <h2 className="rodape__titulo">InnovvBooks</h2>
          <img src="/imagens/logo-InnovvBooks.png" alt="InnovvBooks" />
        </div>
        <div className="lista-rodape__item">
          <h3>Desenvolvido por <b>Innovvatio</b>.</h3>
          <a href="https://www.innovvationet.com.br" className="lista-rodape__link">
            <img src="/imagens/logoInnovvatio.png" alt="Innovvatio" />
          </a>
        </div>
    </footer>)
}

export default Rodape