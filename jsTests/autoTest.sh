#!/bin/bash
#test to check if after using uglify and ESLint on a js file
#its syntax is still correct for elk
#compile main.c to obtain cli (a command line using elk to try the code)
cc ../elk/examples/cmdline/main.c ../elk/elk.c -I../elk -o cli -DJS_DUMP

#TEST 1

#process first file
./ugly_linter_onlyTest.sh 1-loops.js output.js

#pass code to cli to execute if the test is passed corectly
#should return true
if [ $(./cli "$(< output.js)") == "true" ]
then
	printf "Test 1-loops was successful\n"
else
	printf "Test 1-loops failed\n"
	exit 1
fi

#repetimos para los otros 4 tests

#TEST 2
./ugly_linter_onlyTest.sh 2-ifs.js output.js

if [ $(./cli "$(< output.js)") == "true" ]
then
	printf "Test 2-ifs was successful\n"
else
	printf "Test 2-ifs failed\n"
	exit 1
fi

#TEST 3
./ugly_linter_onlyTest.sh 3-objects_functions.js output.js

if [ $(./cli "$(< output.js)") == "true" ]
then
	printf "Test 3-objects_functions was successful\n"
else
	printf "Test 3-objects_functions failed\n"
	exit 1
fi

#TEST 4
./ugly_linter_onlyTest.sh 4-misc.js output.js

if [ $(./cli "$(< output.js)") == "true" ]
then
	printf "Test 4-misc was successful\n"
else
	printf "Test 4-misc failed\n"
	exit 1
fi

#TEST 5
./ugly_linter_onlyTest.sh 5-complex.js output.js

if [ $(./cli "$(< output.js)") == "true" ]
then
	printf "Test 5-complex was successful\n"
else
	printf "Test 5-complex failed\n"
	exit 1
fi

#eliminamos archivos innecesarios
rm cli
rm output.js
