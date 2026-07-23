//1- Variáveis
let nome = "Marcelo";

console.log(nome);
console.log("Marcelo");

nome = "Marcelo Abrantes"

console.log(nome);

//valor não pode ser reatribuido
const idade = 31;
console.log(idade);
// erro idade = 32;

console.log(typeof nome);
console.log(typeof idade);

// 2- mais sobre variáveis
// let 2teste = "invalido"
// let @teste = "invalido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

// case sensitive
const nomecompleto = "marcelo abrantes"
const nomeCompleto = "joão da silva"

console.log(nomecompleto);
console.log(nomeCompleto);


let _teste = "ok"
let $teste = "ok"
console.log(_teste, $teste);


// 3 - prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// 4 - alert
// alert("Testando");

// const z = 10

// alert(` o numero é ${z}`);

// 5 - Math
// Maior numero
console.log(Math.max(5, 2, 1, 10));
// arredonda para baixo
console.log(Math.floor(5.14));
// arredonda para cima
console.log(Math.ceil(5.14));

// 6- console
console.log("teste!");

console.error("erro!");

console.warn("aviso");

// 7 - if
const m = 10;

if (m > 5) {

    console.log("M é maior que 5");
}

const user = "João"

if (user === "João") {
    console.log("Olá João!");
}

if (user === "Maria") {
    console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8- Else
const loggentIn = false;

if (loggentIn) {
    console.log("está autenticado!");
} else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 25;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 9 - Else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Teste 3");
}

const userName = "Matheus";
const userAge = 31;

if (userName === "José") {
    console.log("Bem vindo José!");
} else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus você tem 31 anos");
} else {
    console.log("Nenhuma condição aceita");
}

// 10 - While

let p = 0;
while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;

// while(x > 5) {
//     console.log(`Imprimindo ${x}`);
// }

// 11 - Do While
let o = 10;

do {
    console.log(`Valor de o: ${o}`)
    o--
} while (o > 1);

// 12 - For
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10;
for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`);
}

// 13- identação
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 15) {
        console.log("O g é 15!");
        break;
    }
}

// 15- Continue (pular execução)
for (let s = 1; s < 10; s++) {
    // operador resto = %
    if (s % 2 === 0) {
        console.log("Número par!");
        continue;
    }

    console.log(s);
}

// 16 - switch case
const job = "Advogado";

switch (job) {
    case "Programador":
        console.log("você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}

// Switch "errado"
const l = 100;

switch (l) {
    case 200:
        console.log("L é 200!");
    case 100:
        console.log("L é 100!");
    case 10:
        console.log("L é 10!");
    default:
        console.log("L não foi encontrado!");
}



