# Section 1

Esse curso é dividido em 5 seções:
1. Introdução ao curso, instalações e familiarização
2. React 
3. Meteor
4. Funções complexas de Meteor
5. Ambientes de desenvolvimento Full-Stack

## O que é um projeto Meteor

- Local para inserir códigos, carcaça do projeto.
- Coleção de arquivos e pastas
- Local para monitorar dependencias, por exemplo React;
- WebServer

## Primeiro projeto 

Para criar um projeto com Meteor usamos o seguinte comando:


 ```bash
    meteor create <nome_projeto>
 ```

Carrega pacotes padrões e depêndencias nescessárias para rodar um projeto Meteor.

Após concluir a criação do projeto, podemos entrar no projeto digitando:

```bash 
    cd <nome_projeto>
```

Quando já estiver dentro da pasta padrão, podemos iniciar o servidor web digitando:

```bash
    meteor
```

## Estrutura de arquivos do Meteor

- package.json & packge-lock.json: Arquivo uttilizado para controlar dependencias do NodeJS
- node_modules: dependencias do NodeJS
- .gitignore: Arquivo informar ao git quais pastas e arquivos devem ser ignoradas.
- .meteor: 

## Intalando React 
React é uma dependen
cia de terceiro e não é instalado por padrão. para instala-li como dependicia podemos usar o NPM para instalar no nosso projeto Meteor.

```cli
npm install --save react
```

## O que é NPM?

O npm é o Gerenciador de Pacotes do Node (Node Package Manager) é o maior registro de software do mundo com mais de 800.000 pacotes de código .
Desenvolvedores de código aberto usam npm para compartilhar software.
O npm é usado a partir do CLI (Terminal), linha de comando, onde é baixado e instalado pacotes.

Exemplo:

```cli
    npm install <package>
```

## Package.json
O package.json administra nosso projeto NodeJs, nele podemos ver informações importantes como:
    - nome do projeto
    - scripts
    - dependendia que o projeto utiliza 



## .meteor
Configuração especificas do meteor, utilizada para criar o ambiente de desenvolvimento

## O que React faz?
Renderiza HTML e administra eventos diretamente em contato com o usuario.

## O que Meteor Faz?
Administra as informações da aplicação

