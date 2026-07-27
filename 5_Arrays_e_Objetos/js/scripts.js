// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, []];
console.log(itens);


//  2 - mais sobre arrys
const arr = ["a", "b", "c", "d", "e"];
// acesso aos indices individuais
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);


// 3 - propriedades
const numbers = [5, 3, 4];

// quantidade de elementos dentro no array
console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Marcelo";
console.log(myName.length);


// 4- Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);// Concatenar os 2 arrays
console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());// deixar maiusculo
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g")); // encontrar a posição do caractere


// 5- Object Literals
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);


// 6 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4; // adicionando propriedade

console.log(car);

delete car.km; // deletando propriedade

console.log(car);


// 7 - Mais sobre Objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj); // pegar propriedades de outro objeto

console.log(obj2);

console.log(obj);

// 8- Conhecendo melhor o objeto
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));


// 9 - Mutação
const a = {
    name: "Marcelo"
}

const b = a; // fazer isso não cria um objeto novo
console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);
console.log(a);

delete b.age;

console.log(a);
console.log(b);
// se deletar em um deleta no outro, e se adicionar em um adiciona no outro


// 10 - Loops em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}


// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d"); // adicionar no final da lista
console.log(array);
console.log(array.length);

array.pop(); // remover ultimo elemento

console.log(array);

const itemRemovido = array.pop(); // trabalhar com item removido

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);


// 12 - shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift(); // remove o primeiro elemento

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r"); // adiona no inicio da lista

letters.unshift("z");

console.log(letters);


// 13- indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"];
console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate")); //indice do elemento a partir do inicio

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate")); // indice do elemento a partir do final

console.log(myElements.indexOf("Mamão")); // da -1


// 14- Slice (extrair um array menor de um maior)
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3); // fica vazio

const subArray4 = testeSlice.slice(2); // .todos elementos a partir do 2

console.log(subArray4);


// 15- forEach (percorre todos elementos de um array)
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
});


// 16 - Includes (verifica se o array tem o elemento)
const brands = ["BMW", "VM", "Fiat"];

console.log(brands.includes("Fiat")); // retorna booleano

console.log(brands.includes("KIA"));

// Exemplo de uso:
if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW");
}


// 17 - Reverse (inverte os elementos de um array)
const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();

console.log(reverseTest);


// 18 - Trim (remove tudo que não é texto da string)
const trimTest = " Testando \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);


// 19 - padStart (insere um texto no começo da string)
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0"); //adiciona no final

console.log(testePadEnd);


// 20 - Split (divide uma string formando um array)
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" "); // dividiu com base no espaço

console.log(arrayDaFrase);


// 21 - Join (juntando array em uma string)
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`; // juntou com base no espaço

console.log(fraseDeCompra);


// 22 - Repeat (repete um texto n vezes)
const palavra = "Testando ";

console.log(palavra.repeat(5));


// 23 - Rest Operator (receber indefinidos argumentos na função (...))
const somaInfinita = (...args) => {

    let total = 0;

    for (let i = 0; i < args.length; i++) {

        total += args[i];

    }

    return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 43234, 23443, 2342342, 22, 123, 123, 12));


// 24 - for..of (estrutura semelhante ao for so que mais simples baseado no array utilizado)
const somaInfinita2 = (...args) => {


    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(5, 6, 1, 23, 2, 5, 5, 3, 3));


// 25 - Destructuring em objetos (permite desistruturar algum dado permitindo criar váriaveis)
const userDetails = {
    firstName: "Marcelo",
    lastName: "Abrantes",
    job: "eng",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variaveis
const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);


// 26 - Destructuring em arrays (desestruturar array em variáveis)
const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);


// 27 - JSON
const myJson = '{"name": "Marcelo", "age": 25, "skills": ["Java", "JavaScript","Python"]}';

console.log(myJson);

console.log(typeof myJson);


// 28 - Conversão de JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson); //json para objeto

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// json invalido
const badJson = '{"name": Marcelo, "age": 25}';

// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject); //objeto para json

console.log(myNewJson);

console.log(typeof myNewJson);
