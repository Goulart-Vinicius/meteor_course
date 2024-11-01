# On Meteor!!!

## Client e Server

Com meteor podemos dividir nossa aplicação em 2 divisões o Client-side e o Server-side
Cliente-side é onde vão ser dispostas as informções vindas do Server-side e dispostas para o usuario na Pagina Web, ja o Server-side é onde são processadas e armazenadas as informções do nosso projeto.

## MongoDB 

Para armazenar informações da nossa aplicação usaremos o MongoDB que é um  Banco de Dados NoSQL, nele criaremos Collections onde serão inseridos nossa informações

## Publish e Subscribe

Para controlar a comunicação entre o `Client-side` e `Service-side` o MeteoJS oferece um meio de comunicação via `publish` e `subscribe`. As funções de publicação e assinatura do Meteor controlam como os servidores Meteor servem conjuntos de registros e como os clientes podem recebe-los. 

### Publisher
Um publisher é um método que define e agrupa os dados a serem servidos ao subscriber.

#### Definição
No servidor, você define quais dados publicar usando Meteor.publish. Esta função recebe o nome da publicação e uma função que retorna os dados que você deseja publicar.

```javascript
Meteor.publish(name, func)
```
- **name**: String ou Object
  - Se `String`, nome do conjunto de registros.

  - Se `Object`, dicionário de funções de publicação por nome.

  - Se `null`, o conjunto não tem nome e é automaticamente enviado a todos os clientes conectados.

- **func**: Função

  - Função chamada no `server` toda vez que um `client` se inscreve. Dentro da função, `this` é o objeto do manipulador de publicação. Se o cliente passou argumentos para subscribe, a função é chamada com os mesmos argumentos.

#### Exemplo
```javascript
// Código no lado do servidor
Meteor.publish('tasks', function () {
    return Tasks.find();
});
```

### Subscriber
O subscriber é onde você chama o publisher quando precisa dos dados publicados. Ele fica no lado do cliente, recebendo as informações do servidor e armazenando em coleções locais do Minimongo.

#### Definição
Você se inscreve em um conjunto de registros. A chamada retorna um handle que fornece os métodos stop() e ready().


```JS
Meteor.subscribe(name, [arg1, arg2...], [callbacks])
```

#### Argumentos:

- name: String
    - Nome da assinatura. Deve corresponder ao nome usado na chamada publish() do servidor.

- arg1, arg2...: EJSON-able Object
    - Argumentos opcionais passados para a função publish() no servidor.

- callbacks: Function ou Object
    - Opcional. Pode incluir onStop e onReady. Se houver um erro, ele é passado como argumento para onStop. Se uma função for passada em vez de um objeto, ela é interpretada como um callback onReady.

Quando você se inscreve em um conjunto de registros, informa ao servidor para enviar os registros ao cliente. O cliente armazena esses registros em coleções locais do Minimongo, com o mesmo nome usado nos argumentos da coleção na função publish.

#### Exemplo

```JS
// Código no lado do cliente
Meteor.subscribe('tasks');
```


## React Container

O **React-Container** no MeteorJS é uma forma de fazer seus componentes do React reagirem a mudanças nos dados publicados. Ele atualiza automaticamente os componentes do React com base nas alterações nos dados provenientes das subscrições..

### Como Funciona

O ``createContainer`` é uma função que envolve o componente React e lhe fornece dados reativos, fazendo com que o componente seja atualizado sempre que os dados mudarem.

### Exemplo

```JS
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '/imports/api/employees';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h1>Lista de Funcionários</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe('employees');
  return {
    employees: Employees.find({}).fetch()
  };
}, EmployeeList);

```
### Explicação

1. **Importações**: Importa as dependências necessárias.

2. **Componente EmployeeList**: Define o componente React que renderiza a lista de funcionários.

3. **createContainer**: Envolve o EmployeeList, subscreve aos dados dos funcionários e passa os dados atualizados como props para o componente.

### Uso

Sempre que os dados da publicação employees forem alterados, o EmployeeList será renderizado novamente com os novos dados, garantindo que a interface do usuário esteja sempre sincronizada com o estado atual dos dados no servidor.


## useTracker

useTracker é um hook do pacote react-meteor-data que permite que componentes do React reajam automaticamente a mudanças nos dados do Meteor.
Ele monitora mudanças nos dados reativos e re-renderiza o componente quando os dados mudam.

### Uso
Importe o useTracker e utilize dentro de um componente funcional do React para subscrever a dados e buscar dados reativos

```JS
import React from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";
import { Employees } from "../../imports/collections/employees";

function EmployeeList () {
  const employees = useTracker(() => {
    Meteor.subscribe("employees");
    return Employees.find({}).fetch();
  }, []); 

  return (
    <div>
      <h1>Lista de Funcionários</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

```

### Resumo
- **Automatiza**: Re-renderiza componentes automaticamente com mudanças nos dados.
- **Reativo**: Utiliza dados reativos do Meteor.
- **Simples**: Implementação fácil em componentes funcionais do React.