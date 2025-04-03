let check = false;

//proof that more complex code is still usable after processing

let pack = {
  number : 0,
  something: "some",
  boolean: true,
  func: function(x){return pack.number + x;}
};

//use of for loop and if-else together
//also include comparisons, typeof, objects, functions...
//pack.number evolution is 0,1,2,1,0; in case of error its value is 5 (or 0, but pack.something would not pass the check)
//pack.something evolution is  ; in case of error some letters would be duplicated and/or missing
let limit = 10;
for(let i=0;i<limit;i+=2){
  if(i<2){
    pack.something += "t";
    if(typeof pack.something === "string"){
      pack.number = 1;
    } else {
      pack.number = 5;
    }
  } else if(i>=2 && i<4){
    pack.something += "h";
    if(!pack.boolean){
      pack.number = 5;
    } else {
      pack.number = pack.func(1);
    }
  } else if(i > 3 && i <6){
    pack.something = pack.something + "i";
    if(typeof pack.boolean === "boolean"){
      pack.number = pack.func(-1);
    } else {
      pack.number = 5;
    }
  } else {
    pack.something = pack.something + "n";
    pack.number = pack.func(-1);
    i = i + 4;
  }
}

pack.something += "g";

check = pack.something === "something" && pack.number === 0;
