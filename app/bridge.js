#!/usr/bin/env node

require('@babel/register')({
  only: [
    './app'
  ]
});
require('./index');
