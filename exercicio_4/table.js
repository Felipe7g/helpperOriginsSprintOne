let listPersons = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    },
];
//procura a pessoa na lista pelo id
function findByIdPerson(id) {
    let index = -1;
    for (let i = 0; i < listPersons.length; i++) {
        if (listPersons[i].id == id) {
            index = i;
            break;
        }
    }
    return index;
}
//cria a tabela completa
function createTable() {
    let row;
    document.body.innerHTML =
        '<table id="table" style="width: 100%; background: lightgray;">' +
            '<tr style="background: lightslategray;">' +
            '<th>linha</th>' +
            '<th>Nome</th>' +
            '<th>Bio</th>' +
            '<th style="width: 10%;">Ações</th>' +
            '</tr>' +
            '</table>';
    listPersons.map(function (item) {
        let content;
        row = document.createElement('tr');
        row.style.padding = '15px';
        row.innerHTML =
            "<td>" + String(item.id) + "</td>" +
                ("<td>" + item.name + "</td>") +
                ("<td>" + item.bio + "</td>") +
                "<td>" +
                ("<input type=\"button\" style=\"margin-bottom: 10px; margin-right: 10px;\" value=\"Editar\" onclick=\"editPerson(" + Number(item.id) + ")\">") +
                ("<input type=\"button\" value=\"Excluir\" onclick=\"excluir(" + Number(item.id) + ")\">") +
                "</td>";
        (content = document.getElementById('table')) === null || content === void 0 ? void 0 : _a.append(row);
    });
}
createTable();
//limpa a tabela e atualiza os dados 
function reload() {
    document.getElementById('table');
    document.getElementsByTagName('div');
    createTable();
}
//altera os valores como: nome e bio
function alterPerson(index) {
    listPersons[index].name = document.getElementById('nome').value;
    listPersons[index].bio = document.getElementById('bio').value;
    reload();
}
//faz a edição através de um formulário
function editPerson(id) {
    let form;
    let index;
    index = findByIdPerson(id);
    form = document.createElement('div');
    form.innerHTML = "Nome: <input type=\"string\" id=\"nome\" value=\"" + listPersons[index].name + "\"><br>" +
        ("Bio: <input type=\"string\" id=\"bio\" value=\"" + listPersons[index].bio + "\"><br>") +
        ("<input type=\"button\" value=\"Enviar\" onclick=\"alterPerson(" + index + ")\">");
    document.body.appendChild(form);
}
//exclui o item da lista
function excluir(id) {
    listPersons.splice(findByIdPerson(id), 1);
    reload();
}
