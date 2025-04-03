let check = false;

let i = 0;
let test;
let j;
test = 0;

//WARNING: even if %99 of times while becomes for
//it is NOT RECOMMENDED using while as it may lead to errors
//proof of while loop becoming a for loop (loop optimization)
while (i < 5) {
  i++;
  test = test + 1;
}

//proof of for loop staying the same
for(j=10;j>=6;j--){
  test+=1;
}

test = test - (i+j);

check = test === 0;
