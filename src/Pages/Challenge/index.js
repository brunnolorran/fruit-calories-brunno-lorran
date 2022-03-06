import React from "react";
const Challenge = () => {
  return (
    <>
      <h1>Desafio - Aplicativo Fruit Calories</h1>

      <h2>Requisitos:</h2>
      <p>
        1. A construção do app deverá utilizar a versão mais atualizada do
        framework React JS(https://pt-br.reactjs.org/).
      </p>
      <p>
        2. Cada tela criada no aplicativo, deverá ter uma rota definida seguindo
        o padrão do React.
      </p>
      <p>
        3. Toda a estilização de CSS deverá ser feita do zero, não utilizando
        frameworks de estilo.
      </p>
      <p>
        4. O app deverá ser responsivo, sendo adequado visualmente para os
        browsers mobile(iOS e Android) e desktop.
      </p>
      <p>
        5. Enviar o código fonte do projeto junto com o pacote zip com o html
        gerado pelo React.
      </p>

      <h2>Escopo:</h2>
      <p>
        1. Implementar Tela Inicial, que disponibiliza uma lista de 60 frutas,
        com seus valores energéticos.
      </p>
      <p>
        1.1. Utilizar os dados das 60 frutas que estão disponíveis na API:
        http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json
      </p>
      <p>
        1.2. Será necessário exibir todas as informações de cada fruta
        disponíveis na API, como: Nome, Calorias, Proteína, Carboidratos, Fibra,
        Gordura e Porção.
      </p>
      <p>
        1.3. Será necessário exibir as fotos das 60 frutas as quais as
        url&apos;s de cada imagem estão disponíveis na API.
      </p>
      <p>
        1.4. O layout com as informações de cada fruta, pode seguir o padrão de
        lista ou cards(não poderá ser feito no formato de tabela).
      </p>
      <p>2. Implementar Tela de Detalhes da fruta.</p>
      <p>2.1. Nesta tela, será necessário exibir a foto da fruta.</p>
      <p>
        2.2. Nesta tela, será necessário exibir as informações da fruta, como:
        Nome, Calorias, Proteína, Carboidratos, Fibra, Gordura e Porção.
      </p>
      <p>
        2.3. A tela de detalhes de cada fruta deverá ser aberta a partir de uma
        ação de clique em um card específico disponível na Tela Inicial.
      </p>
      <p>
        2.4. Deverá ser possível ter um botão de Voltar, que direciona o usuário
        para a tela inicial.
      </p>
      <img
        src="https://hipsters.jobs/files/pictures/digitalpages.png"
        alt="logo - digital pages"
      ></img>
    </>
  );
};

export default Challenge;
