// 1-Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2- Operações
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);
console.log(5 + (4 * 2));

// 3- Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4- String
console.log("Um texto");
console.log('Mais um texto');
console.log("15");

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

// 5-caracteres especiais
console.log("texto \n duas linhas");

console.log("Espaçamento \t de tab");

// 6- Concatenação
console.log("Oi," + " tudo" + " bem?");

console.log(`testando` + `com` + `crase`);

// 7- Interpolação (entre crase ``)
console.log(`A Soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`);

// 8 Booleanos
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9 comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);
// == igual === identico

// 10 Comparação idêntico
console.log(9 == "9");
console.log(9 === "9");

console.log(9 != "9");
console.log(9 !== "9");

// 11- Operadores Lógicos (&& = and) (|| = or) (! = not)
console.log(true && true);
console.log(true && false);

console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "matheus" === 1);
console.log(5 > 2 || "matheus" === 1);
console.log(5 < 2 || 5 > 100);

console.log(!true);
console.log(!5 > 2);

// 12- empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);
console.log(null == undefined);

console.log(null == false);
console.log(undefined == false);

// 13- conversão de tipo automatica
console.log(5 * null);

console.log("teste" * "opa");
console.log("10" + 1);


