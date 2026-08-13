// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);


// Selecionando elementos (getElementsByTagName, getElementById, querySelector)
// 2 -Selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);


// 3 - Selecionando por ID
const title = document.getElementById("title");

console.log(title);


// 4 - Selecionando por classe
const products = document.getElementsByClassName("product");

console.log(products);


//  5 - selecionando os elementos por css
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);


// Alterando a estrutura do html com DOM
// 6 - Método insertBefore (cria um elemento antes de um outro)
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title); // paragráfo criado antes do titulo


// 7 - Método appendChild (adicionar um elemento dentro do outro, será o ulimo elemento do elemento pai)
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// 8 - Método replaceChild (trocar um elemento)
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!"; // textContent adicionar texto

header.replaceChild(h2, title); // (elemento novo, elemento a ser trocado)


// 9 - createTextNode (criando nós de texto)
const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3); // adicionando o h3 com o texto na main


// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a"); // selecionando primeiro atributo de a

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com"); // mudando atributo para o link novo

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank"); // adicionando atributo para abrir em nova aba


// 11 - Altura e largura dos elementos (offsetWidth, offsetHeight)
// se quiser desconsiderar as bordar clientWidht e clientHeight
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);


// 12 - posição do elemento
const product1 = products[0];

console.log(product1.getBoundingClientRect());


// 13 - estilos com js (css com js)
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";


// 14 - Alterando estilos de vários itens (HTMLCollenction)
for(const li of listItens) {
    li.style.backgroundColor = "red";
}