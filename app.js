function Pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("Campo-pesquisa").value.toLowerCase();
  
    if (!campoPesquisa) {
      section.innerHTML = "<p> Nada foi encontrado. Você não buscou o nome do jogo.</p>";
      return;
    }
  
    let resultados = [];
  
    try {
      for (let dado of dados) {
        let titulo = dado.titulo?.toLowerCase() || '';
        let descricao = dado.descricao?.toLowerCase() || '';
        let tags = dado.tags?.toLowerCase() || '';
  
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados.push(`
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${titulo}</a>
              </h2>
              <p class="descricao-meta">${descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
          `);
        }
      }
  
      section.innerHTML = resultados.length ? resultados.join('') : "<p>Nenhum resultado encontrado para a sua pesquisa.</p>";
    } catch (error) {
      console.error("Erro durante a pesquisa:", error);
      section.innerHTML = "<p>Ocorreu um erro durante a pesquisa. Por favor, tente novamente mais tarde.</p>";
    }
  }