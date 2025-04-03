#!/bin/bash
#minimize js file

#USE THIS ONLY FOR INITIAL TEST
#when working with elk the more complete version should be used
#it can detect some code improvements to fix (but for this tests it does not make sense)
#$1 input file name
#$2 output file name

#first uglify to minimize
uglifyjs $1 -c sequences=false,comparisons=false,conditionals=false,typeofs=false --mangle toplevel -o $2

#then ESLint to add missing semicolons
npx eslint --fix --rule "semi":[2,"always"],"no-unused-vars":["off"] $2
