let check = false;

//demostracion comportamiento de strings
let palabra = "p";
let ala = "ala"; 
let borde = 5;
palabra += ala;
palabra += "br";
for (let i = 0; i < borde; i++) {
  palabra += "a";
}

//demostracion de NO conversion a exponencial
let numero = borde*borde*borde*borde*borde;

//demostracion de funcionamiento de typeof
check = palabra === "palabraaaaa" && numero === 3125 && typeof borde === "number" && typeof palabra === "string" && typeof ala !== "number";

