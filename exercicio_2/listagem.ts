interface Person
{
    id : number;
    name : string;
    bio : string;
}

let list: Array<Person> = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];

//1.a
function getBioImperativo(id: number): string {
    for(let i=0; i < list.length; i++) {
        if(list[i].id === id) {
            console.log(list[i].bio,'=>bio imperativo');
            return list[i].bio;
        }
    }
    return 'Id não encontrado';
}
getBioImperativo(1);

//1.b
function getNameImperativo(id: number): string {
  for(let i=0; i < list.length; i++ ) {
      if(list[i].id === id) {
          console.log(list[i].name,'=>name imperativo');
          return list[i].name;
      }
  }
  return 'Id não encontrado';
}
getNameImperativo(1);

//1.c
function deleteItemImperativo(id: number): void {
  for(let i=0; i < list.length; i++ ) {
    let delItem: number = list[i].id;
    if(delItem === id) {
        delItem-=1;
        const itemDeleted = list.splice(delItem, 1);
        console.log("Item Imperativo deletado:", itemDeleted);
      } else {
        console.log("Id não encontrado");
      }
  }
}
deleteItemImperativo(4);

//1.d
function updateItemImperativo(id: number, type: string, value: string): void {
  for(let i=0; i < list.length; i++ ) {
    let update: number = list[i].id;
    if(update === id) {
        update-=1;
        if (type === "name") {
          list[update].name = value;
        }
    
        if (type === "bio") {
          list[update].bio = value;
        }
      } else {
        console.log("Id não encontrado, id setado:", update);
      }
  }
}
updateItemImperativo(3, "name", "Any");

// parte funcional

//a) Crie uma função que retorne a bio do id passado
function getBio(list: Array<Person>, id: number): string{
  return list.find((item: Person) => item.id === id)?.bio || 'Pessoa não encontrada';
}
console.log(getBio(list, 1));

//b) Crie uma função que retorne a name do id passado
function getName(list: Array<Person>, id: number): string {
  return list.find((item: Person) => item.id === id)?.name || 'Pessoa não encontrada';
}
console.log('Get name => ', getName(list, 1));

// c) Crie uma função que apague um item da lista a partir de um id passado
function deleteItem(list: Array<Person>, id: number): Array<Person>  {
  return list.filter((item) => item.id !== id);
}
console.log('Delete item: Array atualizado => ', deleteItem(list, 1));

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function updateItem(list: Array<Person>, id: number, type: string, value: string): Array<Person> | string {
  const update = list.find((item) => item.id === id);
  if (update) {
    const index: number = list.indexOf(update);
    const newList: Array<Person> = list;
    if (type === "name") {
      newList[index].name = value;
    }
    if (type === "bio") {
      newList[index].bio = value;
    }
    return newList
  } else {
    console.log("id inexistente");
    return "id inexistente";
  }
}
console.log(updateItem(list, 1, "name", "felps222"));

console.log(list);