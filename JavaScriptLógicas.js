 // Função para filtrar procedimentos com base na pesquisa
// Variáveis globais
var originalProcedureListHTML = '';

// Função para pesquisar os procedimentos
function searchProcedures() {
    var input, filter, procedureList, procedureItems, procedureItem, procedureTitle, procedureDescription;
    input = document.getElementById('searchInput');
    filter = normalizeString(input.value.toUpperCase());
    procedureList = document.getElementsByClassName('procedure-list')[0];
    procedureItems = procedureList.getElementsByClassName('procedure-item');
    var found = false; // Variável para controlar se algum item foi encontrado

    // Se a lista original ainda não foi salva, salva-a
    if (!originalProcedureListHTML) {
        originalProcedureListHTML = procedureList.innerHTML;
    }

    // Verifica se o filtro está vazio
    if (filter === '') {
        // Restaura a lista original
        procedureList.innerHTML = originalProcedureListHTML;
        return; // Retorna sem prosseguir com a pesquisa
    }

    // Percorre todos os itens de procedimentos e mostra ou oculta com base na pesquisa
    for (var i = 0; i < procedureItems.length; i++) {
        procedureItem = procedureItems[i];
        procedureTitle = procedureItem.querySelector('h1, h2, h3, h4, h5, h6'); // Altere a tag de cabeçalho conforme necessário
        procedureDescription = procedureItem.querySelector('p');

        // Verifica se o filtro está presente no título ou na descrição
        if (normalizeString(procedureTitle.textContent).indexOf(filter) > -1 || normalizeString(procedureDescription.textContent).indexOf(filter) > -1) {
            procedureItem.style.display = '';
            found = true; // Um item foi encontrado
        } else {
            procedureItem.style.display = 'none';
        }
    }

    // Se nenhum item foi encontrado, exibe a mensagem de não encontrado
    if (!found) {
        procedureList.innerHTML = '<p>Nenhum item encontrado.</p>';
    }
}

// Função para normalizar uma string, removendo acentos e espaços
function normalizeString(string) {
    return string
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s/g, '');
}

// Função para limpar a caixa de pesquisa e exibir todos os procedimentos novamente
function clearSearch() {
    var input = document.getElementById('searchInput');
    var procedureList = document.getElementsByClassName('procedure-list')[0];

    // Restaura a lista original
    procedureList.innerHTML = originalProcedureListHTML;

    // Limpa a caixa de pesquisa
    input.value = '';

    // Atualiza os resultados da pesquisa
    searchProcedures();
}

// Adiciona um evento de clique nos links da lista de procedimentos
function addIndexLinkEventListeners() {
    var indexLinks = document.getElementsByClassName('index-link');
    for (var i = 0; i < indexLinks.length; i++) {
        indexLinks[i].addEventListener('click', redirectToIndex);
    }
}

// Função para redirecionar o usuário para a index correspondente
function redirectToIndex(event) {
    event.preventDefault();
    var indexLink = event.target;
    var href = indexLink.getAttribute('href');
    var folder = 'IDProcessos';
    window.location.href = href;
}

// Obtém o campo de pesquisa e o botão de limpar
var searchInput = document.getElementById('searchInput');
var clearButton = document.getElementById('clearButton');

// Adiciona um evento de escuta para o evento 'input' no campo de pesquisa
searchInput.addEventListener('input', searchProcedures);

// Adiciona um evento de escuta para o evento 'click' no botão de limpar
clearButton.addEventListener('click', clearSearch);

// Adiciona os eventos de clique nos links da lista de procedimentos
addIndexLinkEventListeners();

// Adiciona as classes 'procedure-item-1' e 'procedure-list-1'
var procedureList = document.getElementsByClassName('procedure-list')[0];
procedureList.classList.add('procedure-list-1');

var procedureItems = procedureList.getElementsByClassName('procedure-item');
for (var i = 0; i < procedureItems.length; i++) {
    var procedureItem = procedureItems[i];
    procedureItem.classList.add('procedure-item-1');
}

