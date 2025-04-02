#!/bin/bash
#test para comprobar que uglify y eslint minimizan correctamente el codigo
#sin dejarlo inutilizable para elk
#compilamos main.c con lo que obtenemos cli
cc ../elk/examples/cmdline/main.c ../elk/elk.c -I../elk -o cli -DJS_DUMP

#TEST 1

#preparamos el primer archivo
./ugly_linter_onlyTest.sh 1-loops.js salida.js toplevel

#comprobamos si el test ha ido bien
#cuando todo funciona devuelven true
if [ $(./cli "$(< salida.js)") == "true" ]
then
	printf "Test 1-loops ha terminado correctamente\n"
else
	printf "Test 1-loops ha terminado erroneamente\n"
	exit 1
fi

#repetimos para los otros 4 tests

#TEST 2
./ugly_linter_onlyTest.sh 2-ifs.js salida.js toplevel

if [ $(./cli "$(< salida.js)") == "true" ]
then
	printf "Test 2-ifs ha terminado correctamente\n"
else
	printf "Test 2-ifs ha terminado erroneamente\n"
	exit 1
fi

#TEST 3
./ugly_linter_onlyTest.sh 3-objects_functions.js salida.js toplevel

if [ $(./cli "$(< salida.js)") == "true" ]
then
	printf "Test 3-objects_functions ha terminado correctamente\n"
else
	printf "Test 3-objects_functions ha terminado erroneamente\n"
	exit 1
fi

#TEST 4
./ugly_linter_onlyTest.sh 4-misc.js salida.js toplevel

if [ $(./cli "$(< salida.js)") == "true" ]
then
	printf "Test 4-misc ha terminado correctamente\n"
else
	printf "Test 4-misc ha terminado erroneamente\n"
	exit 1
fi

#TEST 5
./ugly_linter_onlyTest.sh 5-compuesto.js salida.js toplevel

if [ $(./cli "$(< salida.js)") == "true" ]
then
	printf "Test 5-compuesto ha terminado correctamente\n"
else
	printf "Test 5-compuesto ha terminado erroneamente\n"
	exit 1
fi

#eliminamos archivos innecesarios
rm cli
rm salida.js
