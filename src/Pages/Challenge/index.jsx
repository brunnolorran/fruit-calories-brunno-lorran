import React from "react";
import { Title, Text, Image, Title2 } from "./styles";

const Challenge = () => {
  return (
    <>
      <Title>Desafio - Aplicativo Fruit Calories</Title>

      <Title2>Requisitos:</Title2>
      <Text>
        1. A construção do app deverá utilizar a versão mais atualizada do
        framework React JS(https://pt-br.reactjs.org/).
      </Text>
      <Text>
        2. Cada tela criada no aplicativo, deverá ter uma rota definida seguindo
        o padrão do React.
      </Text>
      <Text>
        3. Toda a estilização de CSS deverá ser feita do zero, não utilizando
        frameworks de estilo.
      </Text>
      <Text>
        4. O app deverá ser responsivo, sendo adequado visualmente para os
        browsers mobile(iOS e Android) e desktop.
      </Text>
      <Text>
        5. Enviar o código fonte do projeto junto com o pacote zip com o html
        gerado pelo React.
      </Text>

      <Title2>Escopo:</Title2>
      <Text>
        1. Implementar Tela Inicial, que disponibiliza uma lista de 60 frutas,
        com seus valores energéticos.
      </Text>
      <Text>
        1.1. Utilizar os dados das 60 frutas que estão disponíveis na API:
        http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json
      </Text>
      <Text>
        1.2. Será necessário exibir todas as informações de cada fruta
        disponíveis na API, como: Nome, Calorias, Proteína, Carboidratos, Fibra,
        Gordura e Porção.
      </Text>
      <Text>
        1.3. Será necessário exibir as fotos das 60 frutas as quais as
        url&apos;s de cada imagem estão disponíveis na API.
      </Text>
      <Text>
        1.4. O layout com as informações de cada fruta, pode seguir o padrão de
        lista ou cards(não poderá ser feito no formato de tabela).
      </Text>
      <Text>2. Implementar Tela de Detalhes da fruta.</Text>
      <Text>2.1. Nesta tela, será necessário exibir a foto da fruta.</Text>
      <Text>
        2.2. Nesta tela, será necessário exibir as informações da fruta, como:
        Nome, Calorias, Proteína, Carboidratos, Fibra, Gordura e Porção.
      </Text>
      <Text>
        2.3. A tela de detalhes de cada fruta deverá ser aberta a partir de uma
        ação de clique em um card específico disponível na Tela Inicial.
      </Text>
      <Text>
        2.4. Deverá ser possível ter um botão de Voltar, que direciona o usuário
        para a tela inicial.
      </Text>
      <Image
        src="https://hipsters.jobs/files/pictures/digitalpages.png"
        alt="logo - digital pages"
      />
    </>
  );
};

export default Challenge;
