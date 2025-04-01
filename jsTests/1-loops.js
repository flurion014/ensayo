let check = false;

let i = 0;
let test;
let j;
test = 0;
//incluso si en el 99% de veces se convierte en un for
//no es recomendable usar while
//demostracion de que while se vuelve for (optimizacion de bucle)
while (i < 5) {
  i++;
  test = test + 1;
}

//demostracion de que for permanece igual
for(j=10;j>=6;j--){
  test+=1;
}

test = test - (i+j);

check = test === 0;
