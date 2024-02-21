<h1>Aplicação web Redway</h1>

<h2>Como Rodar o Projeto</h2>

 <ol>
        <li>
            <h3>Clone o Repositório</h3>
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
            <p>No diretório <code>server</code>, crie um arquivo <code>.env.local</code> com as variáveis de ambiente necessárias. Você pode usar o arquivo de exemplo <code>.env.example</code> como referência.</p>
        </li>
        <li>
            <h3>Iniciar Banco de Dados PostgreSQL</h3>
            <p>Certifique-se de ter o Docker instalado em sua máquina.</p>
            <pre><code>docker-compose up -d</code></pre>
        </li>
        <li>
            <h3>Executar o Servidor</h3>
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>

  <h2>Como Rodar a Aplicação Web</h2>
    
