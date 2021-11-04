var list = [
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
//1.a
function getBioImperativo(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            console.log(list[i].bio, '=>bio imperativo');
            return list[i].bio;
        }
    }
    return 'Id não encontrado';
}
getBioImperativo(1);
//1.b
function getNameImperativo(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            console.log(list[i].name, '=>name imperativo');
            return list[i].name;
        }
    }
    return 'Id não encontrado';
}
getNameImperativo(1);
//1.c
function deleteItemImperativo(id) {
    for (var i = 0; i < list.length; i++) {
        var delItem = list[i].id;
        if (delItem === id) {
            delItem -= 1;
            var itemDeleted = list.splice(delItem, 1);
            console.log("Item Imperativo deletado:", itemDeleted);
        }
        else {
            console.log("Id não encontrado");
        }
    }
}
deleteItemImperativo(4);
//1.d
function updateItemImperativo(id, type, value) {
    for (var i = 0; i < list.length; i++) {
        var update = list[i].id;
        if (update === id) {
            update -= 1;
            if (type === "name") {
                list[update].name = value;
            }
            if (type === "bio") {
                list[update].bio = value;
            }
        }
        else {
            console.log("Id não encontrado, id setado:", update);
        }
    }
}
updateItemImperativo(3, "name", "Any");
// parte funcional
//a) Crie uma função que retorne a bio do id passado
function getBio(id) {
    var person = list.find(function (item) { return item.id === id; });
    console.log(person === null || person === void 0 ? void 0 : person.bio);
}
getBio(1);
//b) Crie uma função que retorne a name do id passado
function getName(id) {
    var person = list.find(function (item) { return item.id === id; });
    console.log(person === null || person === void 0 ? void 0 : person.name);
}
getName(1);
// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(id) {
    var delItem = list.find(function (item) { return item.id === id; });
    if (delItem) {
        var index = list.indexOf(delItem);
        var itemDeleted = list.splice(index, 1);
        console.log("Item deletado:", itemDeleted);
    }
    else {
        console.log("Id não encontrado");
    }
}
deleteItem(2);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
function updateItem(id, type, value) {
    var update = list.find(function (item) { return item.id === id; });
    if (update) {
        var index = list.indexOf(update);
        if (type === "name") {
            list[index].name = value;
        }
        if (type === "bio") {
            list[index].bio = value;
        }
    }
    else {
        console.log("id inexistente");
    }
}
updateItem(1, "name", "felps");
console.log(list);
