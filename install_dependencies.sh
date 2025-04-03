#!/bin/bash
#nodejs and npm for javascript
sudo apt install nodejs
sudo apt install npm

#for dependencies (uglify-js ESLint)
npm ci
sudo npm install uglify-js -g

#for C
sudo apt install gcc
