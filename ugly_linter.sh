#!/bin/bash
#$1 input file name
#$2 output file name
#$3 pass "toplevel" to also mangle toplevel variables

#improvements not automatically fixable by uglify or ESLint
# some extra help for manual adjustments
#duplicated or unreachable else if branches or having == instead of ===
#COMMENT IF YOU DO NOT WANT TO USE IT
npx eslint --fix --rule "no-dupe-else-if":[2],"eqeqeq":[2,"always"] salida.js $2

#first uglify to minimize
uglifyjs $1 -c sequences=false,comparisons=false,conditionals=false,typeofs=false --mangle $3 -o $2

#then ESLint to add missing semicolons
npx eslint --fix --rule "semi":[2,"always"] salida.js $2
