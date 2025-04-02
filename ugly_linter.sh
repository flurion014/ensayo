#!/bin/bash
#$1 es el nombre del archivo
#$2 es la salida
#$3 es para la opcion de usar toplevel

#correccion, por si se quiere revisar mas cosas que uglify no va a corregir
#else if duplicados o inalcanzables y que haya == en vez de ===
#COMENTAR SI NO SE QUIERE USAR
npx eslint --fix --rule "no-dupe-else-if":[2],"eqeqeq":[2,"always"] salida.js $2

#prepara archivo js para ejecucion
#primero pasamos uglify
uglifyjs $1 -c sequences=false,comparisons=false,conditionals=false,typeofs=false --mangle $3 -o $2

#luego pasamos el linter
npx eslint --fix --rule "semi":[2,"always"] salida.js $2
