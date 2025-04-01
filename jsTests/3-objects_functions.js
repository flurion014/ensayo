let check = false;

//demostracion de creacion de un objeto
//posee un string, un numero y una funcion
let paquete = {
  producto: "",
  peso: 0,
  precio: function(x,y){let z = x * 2; return z-y;}
};

//demostracion cambio de las caracteristicas del objeto
paquete.producto = "Sofa";
paquete.peso += 10;

check = paquete.producto === "Sofa" && paquete.peso === 10 && paquete.precio(2,4)===0;
