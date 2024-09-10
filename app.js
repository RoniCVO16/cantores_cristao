function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let txtPesquisa = document.getElementById("txt_pesquisa").value;
    txtPesquisa = txtPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    if (txtPesquisa == "") {
      section.innerHTML = "Nenhum cantor(a) foi encontrado";
      return
    }
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      if (titulo.includes(txtPesquisa) || descricao.includes(txtPesquisa)) {
        // Cria um novo elemento div para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}
        </p>
        <a href="${dado.link}" target="_blank"><img src="wikipedia.png" class="wikipedia" alt="Logo wikipedia">wikipedia</a>
      </div>
    `;
      }
      

      
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</>"
    }
    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }


