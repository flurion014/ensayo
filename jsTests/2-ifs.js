let check = false;

let i = 0;
let j = 1;
let k = 2;
let alfa = 6;

//demostracion de multiples if-else con distintos tipos de comparativa
//uglify NO debe convertirlo en condicionales ternarios (NO optimizacion condicional)
if(i > 0){
  alfa = 1;
} else if(j >= 2){
  alfa = 2;
} else if(k === 2){
  alfa = 3;
  if(i+j+k !== 3){
    alfa = 4;
  } else{
    alfa = 0;  
  }
} else {
    alfa = 5;
}

check = alfa === 0;
