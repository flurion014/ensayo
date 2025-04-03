let check = false;

let i = 0;
let j = 1;
let k = 2;
let number = 6;

//proof of multiple if-else with different types of comparisons
//uglify MUST NOT transform them in ternary conditionals (NO optimization)
if(i > 0){
  number = 1;
} else if(j >= 2){
  number = 2;
} else if(k === 2){
  number = 3;
  if(i+j+k !== 3){
    number = 4;
  } else{
    number = 0;  
  }
} else {
    number = 5;
}

check = number === 0;
