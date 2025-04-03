let check = false;

//proof of string manipulation and expected behaviour
let something = "som";
let eth = "eth"; 
let limit = 5;
something += eth;
for (let i = 0; i < limit; i++) {
  something += "i";
}
something += "ng";

//proof that it is NOT transforming the exponencial
let number = limit*limit*limit*limit*limit;

//proof of typeof beahviour
check = something === "somethiiiiing" && number === 3125 && typeof limit === "number" && typeof something === "string" && typeof eth !== "number";

