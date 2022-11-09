# 🚧 README em construção 🚧

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
# Projeto App Delivery

## Descrição do Projeto
Projeto final do Módulo de Back-End.

Criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja para uma distribuidora de bebidas.

## Contexto para criação da aplicação
A distribuidora de cervejas da dona Tereza está se informatizando! rocket Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos.

A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

## Desenvolvimento (EM CONSTRUÇÃO)
A aplicação está dividida em 4 fluxos principais, uma validação de status entre cliente e pessoa vendedora e cobertura de testes.

* Fluxo Comum que compreende:
  * (1) Tela de Login;
  * (2) Tela de Registro.
  
* Fluxo do Cliente que compreende:
  * (3) Tela de Produtos;
  * (4) Tela de Checkout;
  * (5) Tela de Pedidos;
  * (6) Tela de Detalhes do Pedido.
  
* Fluxo da Pessoa Vendedora que compreende:
  * (7) Tela de Pedidos;
  * (8) Tela de Detalhes/Controle do Pedido.
  
* Validação do Status do Pedido que compreende:
  * (9) Teste de status.
  
* Fluxo da Pessoa Administradora que compreende:
  * (10) Tela de gerenciamento de usuários.
  
* Testes da aplicação que compreende:
  * (11) Testes de cobertura.

## Habilidades desenvolvidas

Hard Skills:
* A criação de components e pages usando React e Context API;
* A estilização do front-end com CSS;
* A modelagem do banco de dados com MySQL através do Sequelize;
* A criação e associação de tabelas;
* A construção de uma API REST;
* A construção de um CRUD (Create, Read, Update, Delete), utilizando ORM Sequelize;
* Uso de Metodologias Ágeis: Scrum e Kanban (quadro no Trello);

Soft Skills:
* Autoliderança; 
* Colaboração;
* Comunicação;
  * Trello (Quadro com as tasks)
  * Slack (Assíncrona)
  * Zoom (Síncrona)
* Gerenciamento do tempo;
* Liderança;
* Resolução de conflitos;
* Resolução de problemas.

## Tecnologias utilizadas
No Front-End:
* HTML
* CSS
* JavaScript
* React
* Context API

No Back-End:
* JavaScript
* Node.js
* Express
* Sequelize
* MySQL

## Colaboradores

Desenvolvido em grupo por:
* Fabiana Martins
* Jaqueline Silva
* Leandro Silva
* Matheus Mena
* Nicolas Dimitri

## Status
Finalizado.

## Desempenho
80%

## Requisitos

### Fluxo Comun

#### 1 - Crie uma tela de login que deve ser acessível pelos endpoints / e /login no navegador
#### 2 - Crie os elementos da tela de login com os data-testids disponíveis no protótipo
#### 3 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados mal formatados
#### 4 - Desenvolva a tela de login de maneira que ela impossibilite o login com dados inexistentes no banco de dados
#### 5 - Desenvolva a tela de login de maneira que ela possibilite fazer o login com dados válidos e existentes no banco de dados
#### 6 - Crie uma tela de registro que deve ser acessível via endpoint /register no navegador e pelo botão de registro na tela de login
#### 7 - Crie os elementos da tela de registro com os data-testids disponíveis no protótipo
#### 8 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro com dados mal formatados
#### 9 - Desenvolva a tela de registro de maneira que ela possibilite cadastrar com dados válidos
#### 10 - Desenvolva a tela de registro de maneira que ela impossibilite o cadastro de um usuário já existente

### Fluxo do Cliente

#### 11 - Crie uma tela de produtos do cliente contendo uma barra de navegação - navbar -, que servirá também para demais telas das pessoas usuárias
#### 12 - Desenvolva a tela de produtos do cliente criando os demais elementos com os data-testids disponíveis no protótipo
#### 13 - Desenvolva a tela de produtos do cliente de forma que ela pressuponha dados válidos da pessoa usuária armazenados no localStorage
#### 14 - Desenvolva a tela de produtos do cliente de forma que os cards de todos os produtos pré-cadastrados contenham os valores corretos
#### 15 - Desenvolva a tela de produtos do cliente de forma que o preço total esteja correto após a adição de itens aleatórios
#### 16 - Desenvolva a tela de produtos do cliente de forma que haja um botão de carrinho que redirecionará para a tela de checkout caso itens sejam adicionados
#### 17 - Crie uma tela de checkout do cliente com elementos com os data-testids disponíveis no protótipo
#### 18 - Desenvolva a tela de checkout do cliente de forma a possuir os dados corretos do carrinho e preço total
#### 19 - Desenvolva a tela de checkout do cliente de forma que seja possível remover itens do carrinho
#### 20 - Desenvolva a tela de checkout do cliente de forma a nos redirecionar para a tela de detalhes do pedido após a finalização do mesmo
#### 21 - Desenvolva a tela de checkout do cliente de forma a gerar uma nova venda na tabela sales, assim como relações em sales_products, ao finalizar o pedido
#### 22 - Crie uma tela de pedidos do cliente com elementos a partir dos data-testids disponíveis no protótipo
#### 23 - Desenvolva a tela de pedidos do cliente de forma a conter a lista de pedidos do mesmo com os dados corretos
#### 24 - Desenvolva a tela de pedidos do cliente de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo
#### 25 - Crie uma tela de detalhes do pedido do cliente com elementos a partir dos data-testids disponíveis no protótipo
#### 26 - Desenvolva a tela de detalhes do pedido do cliente de forma a possuir os dados corretos da venda

### Fluxo da Pessoa Vendedora

#### 27 - Crie uma tela de pedidos da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo
#### 28 - Desenvolva a tela de pedidos da pessoa vendedora de forma a conter a lista de pedidos do mesmo com os dados corretos
#### 29 - Desenvolva a tela de pedidos da pessoa vendedora de forma a dar acesso à tela de detalhes de um pedido ao clicar no card do mesmo
#### 30 - Crie uma tela de detalhes do pedido da pessoa vendedora com elementos a partir dos data-testids disponíveis no protótipo
#### 31 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a possuir os dados corretos da venda

### Validação do Status do Pedido

#### 32 - Desenvolva a tela de detalhes do pedido da pessoa vendedora de forma a ser capaz de alterar o status do pedido
#### 33 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de detalhes do pedido do cliente após atualização das páginas
#### 34 - Garanta que o status do pedido atualizado na tela de detalhes do pedido da pessoa vendedora seja refletido na tela de lista de pedidos do cliente após atualização das páginas
#### 35 - Garanta que o status do pedido atualizado na tela de detalhes do pedido do cliente seja refletido na tela de lista de pedidos da pessoa vendedora após atualização das páginas

### Fluxo da Pessoa Administradora

#### 36 - Crie uma tela de pessoa administradora com elementos a partir dos data-testids disponíveis no protótipo
#### 37 - Desenvolva a tela da pessoa administradora de forma a validar o formulário de cadastro
#### 38 - Desenvolva a tela da pessoa administradora de forma que seja possível cadastrar pessoas usuárias válidas
#### 39 - Desenvolva a tela da pessoa administradora de forma que ela impossibilite o cadastro de pessoas usuárias já existentes
#### 40 - (Bônus) Desenvolva a tela da pessoa administradora de forma que haja uma tabela de pessoas usuárias cadastradas
#### 41 - (Bônus) Desenvolva a tela da pessoa administradora de forma que seja possível deletar pessoas usuárias na tabela

### Cobertura de Testes

#### 42 - Crie testes que cubram no mínimo 30 por cento dos arquivos do front-end e back-end em src com um mínimo de 75 linhas cobertas em cada
#### 43 - (Bônus) Crie testes que cubram no mínimo 60 por cento dos arquivos do front-end e back-end em src com um mínimo de 150 linhas cobertas em cada
#### 44 - (Bônus) Crie testes que cubram no mínimo 90 por cento dos arquivos do front-end e back-end em src com um mínimo de 225 linhas cobertas em cada
