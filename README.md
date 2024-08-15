# Base de Dados

## Descrição

Este projeto é uma aplicação web desenvolvida para servir como uma base de dados de procedimentos técnicos. Estruturado utilizando HTML, CSS e JavaScript, ele oferece uma interface interativa para navegação e consulta de informações. O projeto inclui funcionalidades como navegação entre categorias, rolagem suave para o topo e uma pesquisa dinâmica, permitindo aos usuários localizar rapidamente os procedimentos necessários.

## Histórico do Projeto

Este foi o primeiro projeto desenvolvido pelo autor, originado da oportunidade de criar uma base de dados para procedimentos técnicos. Utilizado durante um ano, atendeu plenamente às necessidades para as quais foi projetado. Com o tempo, a base evoluiu, e seu conteúdo foi migrado para novas versões, refletindo o crescimento e o aprendizado adquiridos ao longo desse período.

## Nova Base de Dados

A base de dados evoluiu e agora está disponível em uma nova versão. Você pode acessá-la através do seguinte link:

<a href="https://esdatabase.vercel.app/login" target="_blank">Base de Dados</a>

- A nova base de dados contém dados sensíveis, por isso foi implementada uma camada de segurança adicional para proteger essas informações.

## Estrutura do Projeto

```plaintext

├── .vscode
├── Assets/Procedimentos
│   ├── IMC0001
│   │   ├── html5_2.png
│   │   └── html5.png
│   ├── IMC0002
│   │   ├── css3_2.png
│   │   └── css3.png
│   ├── IMC0003
│       ├── javascript_2.png
│       └── javascript.png
├── Categories
│   ├── Css3
│   │   └── IMC0002.html
│   ├── Html5
│   │   └── IMC0001.html
│   └── Javascript
│       └── IMC0003.html
├── FontFace
│   └── (fontes personalizadas, e.g., Poppins-SemiBold.ttf)
├── IDProcessos
│   ├── IMC0001.html
│   ├── IMC0002.html
│   └── IMC0003.html
├── Styles
│   ├── Estilizacaobotao.css
│   ├── Estilizacaocategories.css
│   ├── Estilizacaogeral.css
│   ├── StylesImg.css
│   └── background.png
├── Categories.html
├── JavaScriptBotao.js
├── JavaScriptLógicas.js
├── ManagerVideo.js
├── index.html
└── README.md

```

## Funcionalidades

### HTML5

- index.html

    - Página principal com introdução ao projeto e links para diferentes tópicos.
    - Inclui uma barra de pesquisa dinâmica e uma lista de tópicos com imagens e descrições.

- Categories.html

    - Página de categorias que lista HTML5, CSS3 e JavaScript com links para os respectivos tópicos.
    - Inclui botões para minimizar e maximizar as categorias.

### CSS

- Estilizacaogeral.css

    - Define estilos globais, como reset de margens, estilos de cabeçalho e rodapé, e layout responsivo.

- Estilizacaobotao.css

    - Estiliza botões, incluindo um botão flutuante para rolar ao topo da página.

- Estilizacaocategories.css

    - Estilos específicos para a página de categorias, incluindo links, estados de hover e classes para maximizar/minimizar categorias.

- StylesImg.css

    - Estiliza imagens dos procedimentos, garantindo centralização e ajuste de dimensões.

### JavaScript

- JavaScriptBotao.js

    - Lógica para exibir/esconder o botão de rolagem ao topo com base na rolagem da página e a função para rolar suavemente ao topo.

- JavaScriptLógicas.js

    - Lógica de pesquisa para filtrar procedimentos com base na entrada do usuário.

    - Inclui funções auxiliares para normalizar strings, limpar a pesquisa e adicionar eventos aos links.

- ManagerVideo.js

    - Lida com a reprodução de vídeos, adicionando eventos de clique para pausar e reproduzir vídeos, alterando o texto do botão conforme o estado.

## Instruções de Uso

### Configuração do Ambiente

1. <strong>Clone o Repositório</strong>

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Navegue até o Diretório do Projeto

```bash
cd seu-repositorio
```

3. <strong>Abra o Projeto em Seu Editor de Código Preferido</strong>

### Iniciando o Servidor

Para iniciar o servidor HTTP e visualizar o projeto no navegador, siga os passos abaixo:

1. <strong>Abra um Terminal na Raiz do Projeto</strong>

2. <strong>Execute o Comando para Iniciar o Servidor</strong>

```bash
python -m http.server
```

3. <strong>Abra o Navegador e Acesse o Endereço</strong>

```plaintext
http://localhost:8000
```

## Estrutura dos Arquivos

- <strong>index.html</strong>

    - Contém a estrutura principal da página inicial do projeto. Inclui referências aos arquivos de estilos e scripts necessários.

- <strong>Categories.html</strong>

    - Página que lista as diferentes categorias (HTML5, CSS3, JavaScript). Cada categoria tem um link para seu respectivo conteúdo detalhado.

- <strong>IDProcessos</strong>

    - Contém arquivos HTML detalhados para cada tecnologia (IMC0001.html, IMC0002.html, IMC0003.html).

- <strong>Styles</strong>

    - Diretório contendo os arquivos CSS que definem a aparência do projeto.

- <strong>JavaScriptBotao.js</strong>

    - Script que gerencia o comportamento do botão de rolagem ao topo.

- <strong>JavaScriptLógicas.js</strong>

    - Script que gerencia a lógica de pesquisa dinâmica dos procedimentos.

- <strong>ManagerVideo.js</strong>

    - Script para gerenciar a reprodução de vídeos na página.

### Personalização

- <strong>Estilizacaogeral.css</strong>

    - Modifique os estilos globais do projeto, como cores, fontes e layout, conforme necessário.

- <strong>Estilizacaobotao.css</strong>

    - Personalize os estilos dos botões, incluindo o botão de rolagem ao topo.

- <strong>Estilizacaocategories.css</strong>

    - Ajuste os estilos das categorias e seus estados de hover.

# Autor
Desenvolvido por Jose Enoque.

#