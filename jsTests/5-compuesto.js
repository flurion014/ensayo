let check = false;

//demostracion de que ante muestras mas complejas no hay problemas
let objeto = {
  numero : 0,
  palabra: "pa",
  booleano: true,
  funcion: function(x){return objeto.numero + x;}
};

let borde = 10;
for(let i=0;i<borde;i+=2){
  if(i<2){
    objeto.palabra += "l";
    if(typeof objeto.palabra === "string"){
      objeto.numero = objeto.funcion(1);
    } else{
      objeto.numero = 5;
    }
  } else if(i>=2 && i<4){
    objeto.palabra += "a";
    if(!objeto.booleano){
      objeto.numero = 5;
    } else{
      objeto.numero = objeto.funcion(1);
    }
  } else if(i > 3 && i <6){
    objeto.palabra = objeto.palabra + "b";
    if(typeof objeto.booleano === "boolean"){
      objeto.numero = objeto.funcion(-1);
    } else{
      objeto.numero = 5;
    }
  } else {
    objeto.palabra = objeto.palabra + "r";
    objeto.numero = objeto.funcion(-1);
    i = i + 4;
  }
}

objeto.palabra += "a";

check = objeto.palabra === "palabra" && objeto.numero === 0;
