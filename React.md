# React

Para produzirmos alguma informção na tela com React, primeiro precisamos criar uma pasta chamada `client` para trabalharmos com React.

A pasta `client` é uma pasta especial em projetos Meteor, pois o mesmo reconhecerá a pasta automaticamente e já inicializará seu conteudo no webServer.

Dentro pasta cliente, podemos criar um arquivo chamado `main.html`, ele será renderizado automaticamento pelo Meteor; do mesmo modo, podemos criar um arquivo chamado `main.js` que também será renderizado pelo Meteor.

Para utilizarmos o React diretamente, nó precimos importa-lo no nosso **JavaScript**:

```JS
//main.js
import React from 'react'
```

## Component

Um projeto React é formado por diversos `Components` cada `Component` rederisa um código `HTML` próprio.

Um `component` é uma classe ou função que gera algum conteúdo `HTML` e permite ser renderizado.

Um componente nessesariamente deve possuir um retorno e esse retorno deve ser um conteudo escrito em `JSX`. Além disso components não suportam retorno de multiplos nós HTML, ou seja, deve ser retornado somente um nó pai, podendo ser agrupado pela tag `<div>` ou pela tag vazia do `JSX` (`<></>`).

### JSX

`JSX` é basicamente um HTML porém pode ser escrito diretamente dentro de um código HTML.

```JS
    return (
        <div>
            react App #2
        </div>
    )
```

Apesar de `JSX` ser semelhate ao `HTML` ainda há algumas diferenças:

- class: a palavra class utilizada com atribuidor `CSS` em `JSX` é substituida pela palavra className para evitar conflitos com Orientação à Objeto.
- Fechamento de tags: em `JSX` é indispensavel fechamento de tags, desde `<br></br>` até o `<img></img>`.

## Renderizar um component

Para efetivamente renderizarmos um `component`, ou seja, mostra-lo na tela, precisamos usar o `React DOM` uma biblioteca auxiliar do React, essa biblioteca trabalha específicamente com interação entre o React e o `DOM`.

Após instalarmos via `NPM` podemos importa-lo, semelhante como foi feito com o React:

```JS
import ReactDOM from 'react-dom'
```

importando a biblioteca teremos acesso ao metodo `render`, esse métedo tem a função renderizar um `component` React em um elemento `HTML`. Esse método nessecita de dois parâmetro:

1. O `component` a ser renderizado;
2. O Objeto DOM a ser inserido o `component`.

```JS
ReactDOM.render(<App />, document.querySelector('#app'))
```

Ao inserirmos um `component` precismos cerca-los por `</>`, isso faz com que o React entenda que isto é uma intancia de um `component`.

Em alguns casos, quando usado o Meteor o React pode acabar não encontrando o seletor `HTML`, isso ocorre pois o arquivo `main.js` é carregado antes do `main.html`, fazendo com que não encontre o seletor. Para resolver este problema existe uma função do próprio Meteor chamdo `startup` essa função recebe uma função `callback` como parâmetro que será executada somente quando o projeto Meteor já estiver carregado.

```JS
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('#app'))
})
```

Ao incluirmos o `render` diretemente dentro do `startup` fazemos com que seja executado somente quando o `main.html` já estiver carregado, desta forma o `querySelector` encontrará o seletor `HTML`.

## Boas praticas

Em React é essencia dividirmos nosso projeto em varios componentes, para com isso podermos reutilizarmos. Com isso em mente, uma boa prática em React é dividirmos cada um de nossos components em um arquivo separado, e quando necessario importa-los.

Para fazermos isso, também é uma boa pratica criar uma pasta dedicada somente a componentes, podemos chama-la de `components`.

### Criando um Component em um arquivo separado

Para isso criar nosso `Component` vamos criar um arquivo `.js` dentro da pasta `components`, um bom padrão é colocar o nome desse arquivo com o mesmo nome do `Component`, também tendo a primeira letra maiuscula.

Após o arquivo ser criado podemos definir a criação de components em 3 passo:

1. Importar a biblioteca React;
2. Cria o `Component`;
3. Exportar o `Component`;

#### 1. Importar React

Como visto antes para importar oo React basta usarmos a palavra chava `import` seguido de um nome que será usado para identificar a biblíoteca e por fim informamos de onde está serndo importado usando a palavra `from`.

```JS
import React from 'react'
```

#### 2. Criar o Component

Para criarmos o `Component` usaremos o mesmo principio visto antes, criaremos uma função que retornará um `JSX`.

```JS
function ImageList() {
    return (
        <ul>
            <li>Image Detail</li>
        </ul>
    )
}
```

#### 3. Exportar o Component

Como as bibliotecas, arquivos também podem ser importado via JavaScript, para importarmos um arquivo JS precisamos que esse arquivo tenha algum conteudo a ser exportado, isso é justamente o que precisamos fazer com nosso `component`, para fazermos isso usamos a palavra chave `export` e para indicarmos que a função padrão a ser exportada é o `component` também usaremso a palavra `default` e após nosso `component`.

```JS
export default ImageList
```

Isso garante que nosso `Component` possa ser reutilizado em qualquer parte de nosso projeto quando nessesário, basta importá-lo.

## Component Nesting

Component Nesting é a pratica de agrupar Components como fazemos em HTML, ao invéns de inserirmos apenas Tags HTML dentro de Components, podemos também rednerizar Components.

Para isso precisamos fazer o seguinte:

1. Importar Component
2. Instanciar Component

### 1. Importar Component

Após exportar o component ele fica acessivel à todo o projeto, basta importa-lo usando a mesma sintaxe que usamos para importar o React, a unica diferença é que precisamos indicar o caminho do component.

```JS
import ImageList from './components/ImageList'
```

### 2. Instanciar Component

Após importar o componente, para inserilo dentro de outro component usaremos a seguinte sintaxe: `<componentName />` dessa forma o componente será renderizado dentro de outro component.

```JS
function App(){
    return (
        <>
            <h1> Olá Mundo!!!!</h1>
            <ImageList />
        </>
    )
}
```

## Por que fazer Component Nesting?

Em geral a maioria dos projetos React's evita o uso da substituição de tags HTML (usando ReactDOM.render()) pois acaba gerando lentidão além disso há as seguintes vantagens:

- Uni toda a criação de html no React
- Contribui com boas praticas e organização de código

## Organização de Projetos React

Com isso em mente os Projetos React por padrão possuem um arquivo `main.html` contendo metadados, `body` e uma tag com id `root`, após isso com o React é renderizado o `component` `App` na tag `root` e todos outros componentes são aninhados ao `App` usando `component Nesting`.

```md
Project
|__main.html
|___src
    |___ App.jsx
    |___ Components
            |_____ImageList.jsx
```

## Renderizando listas

É comum quando estamos trabalhando com react no depararmos com listas de informações para serem renderizadas, sejam elas vindas de API ou listas simples. O React trata a renderização de listas da seguinte forma:

> Você irá depender de recursos do JavaScript como o loop for e a função map() de arrays
> Por exemplo, suponha que você tenha um array de produtos:

```JS
const products = [
  { title: 'Repolho', id: 1 },
  { title: 'Alho', id: 2 },
  { title: 'Maçã', id: 3 },
];
```

> Dentro do seu componente, use a função map() para transformar um array de produtos em um array de itens `<li>`:

```JS
const listItems = products.map(product =>
  <li>
    {product.title}
  </li>
);

```

Fonte: [https://pt-br.react.dev/learn#rendering-lists](https://pt-br.react.dev/learn#rendering-lists)

## inserindo JS no JSX

Para inserirmos variaves, constantes ou condições dentro do JSX podemos usar as chaves ({}) e dentro dela podemos inserir nosso código JS normalmente:

```JS
return (
    <ul>
      {rederedImages}
    </ul>
  );
```

## Props

Props em React funcionam semelhantes à parâmetro em funções comuns, ou seja, são informações passada para um Component. Essas informações são uteis caso o conteudo de um Component dependa de uma informação externa.
Para trabalharmos com Props primeiro modificaremos nosso component, como em funções precisamos indicar que component recebera props:

```JS
// imageDetail.js
export default function ImageDetail(props) {
  return <div>ImageDetail</div>;
}

```

neste caso, props é um objeto, onde cada atributo é um informação passada ao component.
 Para passarmos informações á um component via props é necessario inserir entre o nome do component  e a barra (/) as informações que irão para a propr, alem disso essa informação deverá receber um nome para se identificado.

```JS
return <ImageDetail picture={image} />
```

dessa forma ImageDetail esta recebendo `image`como prop, para acessála podemos chamar props.picture.

## Key props

Toda vez que renderizamos um array de componente com `.map()` como fizemos antes, o React necessita de uma chava para identificar cada elemento separadamente, isso ajuda o react a ter um controle maior sobre cada component. Para definirmos essa chave, nó passamos uma props com o nome`key` essa props deve possuir um valor uníco para cada component.

```JS
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);
```

> Note como `<li>`possui um atributo key. Para cada item em uma lista, você deve passar uma string ou um número que identifica unicamente esse item entre seus irmãos. Normalmente, uma chave deve vir dos seus dados, como um ID de banco de dados. O React utiliza essas chaves para entender as mudanças que ocorrem se você posteriormente inserir, excluir ou reordenar os itens.

Fonte: [https://pt-br.react.dev/learn#rendering-lists](https://pt-br.react.dev/learn#rendering-lists)

## Buscando dados

Normalmente quando trabalhamos com React usamos uma API para buscar informações já processadas, pois o uso do React é no front-end, não teremos listas prontas como no exemplo usado, ao inves disso usamo Requisições AJAX.

Em React podemos usar tanto AJAX puro, fetch ou até outras bibliotecas como o Axios.

## Usando Axios

Para usar o Axios precisamos instala-lo e importa-lo.

### intalar


```js
//Terminal
npm install axios
```

### importar

```JS
//main.js
import Axios from 'axios'
```

Após isso podemos fazer nossas primeiras requisições:

```JS
Axios("https://api.unsplash.com/photos/", {
  method: 'GET',
  headers: {
    Authorization: 'Client-ID 8vgI9dttdSXjtsK5_EMF8jf7D6NDnlT2uMvlMmZiqLk'
  }
})
```

## Hooks

### useRefs

### useState

### useEffect

## Classed component

## Handle Action

## React Router
