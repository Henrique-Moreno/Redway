<h1>Aplicação web Redway</h1>
<p>Esta aplicação web foi projetada para coletar endereços de e-mail</p>

<h2>Como Rodar o Projeto</h2>

<p>Antes de clonar este projeto, certifique-se de ter o Node.js instalado em sua máquina. </p>
<p>A versão do Node.js utilizada neste projeto é a 20.10.0</p>

 <ol>
        <li>
            <h3>Clone o Repositório ou faça Download ZIP clicando no botão Code</h3>
            <pre><code>git clone https://github.com/Henrique-Moreno/Redway.git</code></pre>
        </li>
        <li>
          <h3>Acesse pasta server</h3>
           <pre><code>cd server <br></code></pre>
        </li>
        <li>
            <h3>Instale as Dependências</h3>
            <pre><code> <br>npm install</code></pre>
        </li>
        <li>
            <h3>Configurar Variáveis de Ambiente</h3>
            <p>No diretório <code>server</code>, crie um arquivo <code>.env</code> com as variáveis de ambiente necessárias. Você pode usar o arquivo de exemplo <code>.env.example</code> como referência.</p>
        </li>
        <li>
            <h3>Instruções para Executar a Aplicação usando Docker</h3>
            <p>Este repositório contém o código-fonte e as configurações necessárias para containerizar e executar a aplicação usando Docker. Siga as instruções abaixo para configurar e               executar a aplicação em seu ambiente local.</p>
           <h3>Pré-requisitos</h3>
            <p>Antes de iniciar, certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode encontrar instruções de instalação em <a                      href="https://www.docker.com/">Docker.com</a> </p>
            <p>Execute o seguinte comando para iniciar o banco de dados PostgreSQL em um contêiner Docker:</p>
            <pre><code>docker-compose up -d</code></pre>
            <p> Este comando utilizará o arquivo docker-compose.yml fornecido neste repositório para criar e iniciar o contêiner do PostgreSQL</p>
            <p>Após a execução bem-sucedida deste comando, o banco de dados PostgreSQL estará em execução e pronto para ser usado pela aplicação.</p>
        </li>
       <li>
            <h3>Configuração do Prisma</h3>
            <p>Antes de iniciar a aplicação, é necessário configurar o Prisma e realizar migrações do banco de dados</p>
        <p>Instale as dependências do Prisma Client:</p>
            <pre><code>npm i @prisma/client</code></pre>
           <p>Execute as migrações do banco de dados usando o Prisma:</p>
            <pre><code>npx prisma migrate dev</code></pre>
        </li>
        <li>
            <h3>Em seguida execute o Servidor</h3>
            <pre><code>npm run dev</code></pre>
        </li>
        <li>
            <h3>Executando Testes (Opcional)</h3>
            <p>Se desejar executar os testes para a aplicação, siga as instruções abaixo:</p>
            <p>Execute o seguinte comando para rodar os teste</p>
            <pre><code>npm test</code></pre>
        </li>
    </ol>

  <h2>Como Rodar a Aplicação Web</h2>
  <ol>
     <li>
          <h3>Acesse pasta web</h3>
           <pre><code>cd web<br></code></pre>
        </li>
        <li>
            <h3>Instale as Dependências</h3>
            <pre><code> <br>npm install</code></pre>
        </li>
       <li>
            <h3>Configurar Variáveis de Ambiente</h3>
            <p>No diretório <code>web</code>, crie um arquivo <code>.env.local</code> com as variáveis de ambiente necessárias. Você pode usar o arquivo de exemplo   <code>.env.example</code> como referência.</p>
        </li>
   <li>
            <h3>Em seguida execute a Aplicação</h3>
            <pre><code>npm run dev</code></pre>
        </li>
      <li>
            <h3>Executando Testes (Opcional)</h3>
            <p>Se desejar executar os testes para a aplicação, siga as instruções abaixo:</p>
            <p>1 - Execute o seguinte comando para rodar os teste</p>
            <pre><code>npx cypress open</code></pre>
           <p>2 - Uma janela do Cypress será aberta, Clique em "E2E Testing"</p>
          <p>3 - Escolha o navegador de sua preferência.</p>
          <p>4 - Depois clique em "Start E2E Testing" para iniciar a execução dos testes.</p>
       <p>5 - Na janela do navegador que foi aberta pelo Cypress, clique no teste chamado "email-subscription"</p>
       <p>Os testes serão executados automaticamente e você poderá visualizar o progresso e os resultados na interface do Cypress.</p>
        </li>
  </ol>
    
