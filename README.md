<h1>📱 Projeto React Native</h1>

<p>Bem-vindo ao projeto React Native! Este guia irá orientá-lo sobre como acessar, instalar e executar o projeto de forma rápida e simples.</p>

<h2>🚀 Pré-requisitos</h2>
<p>Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:</p>
<ul>
    <li><strong>Node.js</strong> (Versão LTS recomendada) – <a href="https://nodejs.org/">Baixar Node.js</a></li>
    <li><strong>Yarn</strong> (opcional, mas recomendado) – <a href="https://classic.yarnpkg.com/en/docs/install">Instalar Yarn</a></li>
    <li><strong>Expo CLI</strong> ou <strong>React Native CLI</strong> (dependendo do projeto) – <a href="https://docs.expo.dev/get-started/installation/">Instalar Expo CLI</a> ou <a href="https://reactnative.dev/docs/environment-setup">Instalar React Native CLI</a></li>
</ul>

<h2>📥 Clonar o Repositório</h2>
<p>Clone o repositório para sua máquina local:</p>
<pre><code>git clone https://github.com/gustavofssilva/challenge-enterprise.git
</code></pre>

<h2>📦 Instalação das Dependências</h2>
<p>Instale as dependências do projeto usando Yarn:</p>
<p><strong>Com Yarn:</strong></p>
<pre><code>yarn install</code></pre>

<h2>🏃‍♂️ Executar o Projeto</h2>
<pre><code>yarn start</code></pre>
<p>Abra o aplicativo Expo Go no seu dispositivo móvel e digitalize o QR code exibido no terminal para visualizar o aplicativo.</p>
<p>Caso queira abrir em Web, aperte a letra W após iniciar o app.</p>

<h2>⚙️ Configuração Adicional</h2>

<h1>Descrição Técnica do App</h1>

<h2>1. Estrutura de Navegação 🚀</h2>
<ul>
    <li>O aplicativo utiliza a biblioteca <strong>React Navigation</strong> para gerenciar a navegação entre diferentes telas (Home, Login, Cadastro, Créditos).</li>
    <li>A navegação é baseada em pilhas (<strong>stack navigation</strong>), permitindo transições suaves entre as telas e a capacidade de voltar às telas anteriores.</li>
</ul>

<h2>2. Tela Home (HomeScreen) 🏠</h2>
<ul>
    <li>Apresenta um fundo estilizado com uma imagem.</li>
    <li>Contém botões de navegação para as telas de <strong>Login</strong>, <strong>Cadastro</strong> e <strong>Créditos</strong>.</li>
    <li>Os botões redirecionam para as respectivas telas usando a função de navegação.</li>
</ul>

<h2>3. Tela de Login (LoginScreen) 🔐</h2>
<ul>
    <li>Formulário de login simples que requer um nome de usuário e uma senha (credenciais hardcoded: usuário "admin" e senha "admin").</li>
    <li>Valida as credenciais e, se corretas, redireciona para a tela de Aplicativos.</li>
    <li>Inclui um botão <strong>"Voltar"</strong> para retornar à tela anterior.</li>
</ul>

<h2>4. Tela de Cadastro (RegisterScreen) 📝</h2>
<ul>
    <li>Formulário que permite aos usuários se registrarem com um email e senha.</li>
    <li>Valida se as senhas digitadas coincidem antes de confirmar o cadastro.</li>
    <li>Inclui um botão <strong>"Voltar"</strong> para retornar à tela anterior.</li>
</ul>

<h2>5. Estilização 🎨</h2>
<ul>
    <li>Utiliza componentes do <strong>React Native</strong> para estilização, como <strong>View</strong>, <strong>Text</strong>, <strong>TextInput</strong> e <strong>TouchableOpacity</strong>.</li>
    <li>A aplicação tem uma aparência moderna e responsiva, utilizando <strong>Dimensions</strong> para garantir que os elementos se ajustem a diferentes tamanhos de tela.</li>
</ul>

<h2>6. Acesso a Links Externos 🔗</h2>
<ul>
    <li>A <strong>HomeScreen</strong> inclui botões que redirecionam para links externos, permitindo que os usuários acessem rapidamente redes sociais ou outros sites relevantes.</li>
</ul>


</body>
</html>
