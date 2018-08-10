#!/usr/bin/env node
// jshint esversion:6

// https://stackoverflow.com/a/35120765/922323
require('babel-register')({
  ignore: false,
  only: './app'
});
require('./index');
