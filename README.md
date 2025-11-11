Meu Manager (Web) - Jogo de Gerenciamento de Futebol

Este é um projeto de um jogo de gerenciamento de futebol (estilo Football Manager) que roda inteiramente no navegador. O jogo utiliza um banco de dados fictício gerado processualmente e permite que o usuário escolha um time da Série A brasileira para gerenciar suas finanças e elenco.

🚀 Funcionalidades Atuais (Fase 7)

Banco de Dados Fictício: Um script (gerar_dados.js) gera um arquivo database.json com 22 times (Série A) e 22 jogadores fictícios para cada time (+480 jogadores no total).

Atributos de Jogador: Cada jogador tem atributos detalhados (Geral, Ritmo, Finalização, etc.), Idade, Valor de Mercado e Salário Semanal.

Escolha de Time: O usuário pode escolher qualquer um dos 22 times para começar a gerenciar.

Persistência de Jogo: O estado completo da liga (todos os times, jogadores e finanças) e o progresso do jogador (semana atual) são salvos no localStorage do navegador.

Sistema Financeiro:

Orçamento: Cada time começa com um orçamento inicial.

Salários: A cada "semana" avançada, o orçamento do clube é debitado com a folha salarial total do elenco.

Gestão de Elenco (Aba "Meu Elenco"):

Visualização de todos os jogadores do seu time, com detalhes de posição, valor e salário.

Possibilidade de Vender (dispensar) jogadores, recebendo o valor de mercado deles.

Regra de proteção de elenco (mínimo de 11 jogadores).

Mercado de Transferências (Aba "Mercado"):

Visualização de TODOS os jogadores dos outros 21 times.

Filtro de busca por nome, time, etc.

Possibilidade de Comprar jogadores, com o custo debitado do seu orçamento.

Lógica de "Saldo Insuficiente" que bloqueia compras.

Interface Dinâmica:

Modal de "popup" para ver os atributos detalhados de qualquer jogador.

Notificações (Ex: "Saldo Insuficiente", "Jogador Comprado").

Logos fictícios gerados por CSS.

🛠️ Tecnologias Utilizadas

Back-end: Node.js

Servidor: Express.js (para servir o front-end e a "API" estática database.json)

Front-end: HTML5, CSS3 (Vanilla), JavaScript (Vanilla, ES6+)

Estado do Jogo: localStorage (para o save game)

Dependências: express, cors

🏃 Como Rodar o Projeto Localmente

Clone o repositório:

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio


Instale as dependências do servidor (Express e CORS):

npm install


Gere o Banco de Dados (Passo Único):
Antes de iniciar o servidor pela primeira vez, você precisa gerar o database.json:

node gerar_dados.js


(Você verá uma mensagem de sucesso no terminal quando o arquivo for criado).

Inicie o Servidor:

node server.js


Acesse o Jogo:
Abra seu navegador e acesse: http://localhost:3000
