let check = false;

//demostracion de que ante muestras mas complejas no hay problemas
let objeto = {
  numero : 0,
  palabra: "pa",
  booleano: true,
  funcion: function(x){return objeto.numero + x;}
};

//uso de bucle for e if...else if...else a la vez
//aprovechamos para incluir tambien typeof, comparativas, objetos, funciones...
//la evolucion de objeto.numero es 0,1,2,1,0; en caso de error vale 5 (o 0, pero palabra no pasa el check)
//la evolucion de objeto.palabra es pa,pal,pala,palab,palabr,palabra; en caso de error sobraran y/o faltaran letras
let borde = 10;
for(let i=0;i<borde;i+=2){
  if(i<2){
    objeto.palabra += "l";
    if(typeof objeto.palabra === "string"){
      objeto.numero = 1;
    } else {
      objeto.numero = 5;
    }
  } else if(i>=2 && i<4){
    objeto.palabra += "a";
    if(!objeto.booleano){
      objeto.numero = 5;
    } else {
      objeto.numero = objeto.funcion(1);
    }
  } else if(i > 3 && i <6){
    objeto.palabra = objeto.palabra + "b";
    if(typeof objeto.booleano === "boolean"){
      objeto.numero = objeto.funcion(-1);
    } else {
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
