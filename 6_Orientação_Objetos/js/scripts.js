// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    }
};

console.log(animal.nome);

animal.latir();


// 2 - aprofundando em métodos
const pessoa = {
    nome: "Marcelo",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());


// 3 - Prototype (acesso herança)
const text = "asd";

console.log(Object.getPrototypeOf(text)); //ancestral do texto

const bool = true;

console.log(Object.getPrototypeOf(bool)); // ancestral do boolean

const arr = [];

console.log(Object.getPrototypeOf(arr));


//  4 - mais sobre Prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);


// 5 - Classes básicas
const cachorro = { //classe
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro) //criando objeto dentro da classe

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);


// 6 - funções construtoras (função como classe)
function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Viralata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));


// 7 - classes baseadas em funções (funções construtoras) usando new
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const Husky = new Cachorro("Ozzy", "Husky")

console.log(Husky)


//  8 - Métodos na função construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuuu!")
}

console.log(Cachorro.prototype);

Husky.uivar();


// 9 - Classes ES6 (versão mais atual)
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));


// 10 - mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelho");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4; //não funciona

const c2 = new Caminhao(4, "Preta");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);


// 11 - Substituindo propriedades pelo prototype (override)
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "Não definida";

console.log(matheus.idade);

console.log(Humano.prototype.idade);


// 12 - Symbols em classes (criar propriedade única e imutável)
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

