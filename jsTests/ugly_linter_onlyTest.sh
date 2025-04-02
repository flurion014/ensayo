#!/bin/bash
#SOLO USAR PARA EL AUTOTEST
#para trabar con elk hay otra version mas completa que considera
#otras posibles mejoras de codigo, pero que para los tests no tienen sentido
#$1 es el nombre del archivo
#$2 es la salida
#$3 es para la opcion de usar toplevel

#prepara archivo js para ejecucion
#primero pasamos uglify
uglifyjs $1 -c sequences=false,comparisons=false,conditionals=false,typeofs=false --mangle $3 -o $2

#luego pasamos el linter
npx eslint --fix --rule "semi":[2,"always"],"no-unused-vars":["off"] salida.js $2
