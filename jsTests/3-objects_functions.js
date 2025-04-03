let check = false;

//proof of object creation containing different types of properties
let pack = {
  something: "",
  number: 0,
  func: function(x,y){let z = x * 2; return z-y;}
};

//proof that properties can be changed
pack.something = "Something";
pack.number += 10;

check = pack.something === "Something" && pack.number === 10 && pack.func(2,4)===0;
