#!/usr/bin/env node
// jshint esversion:6

import Color from 'color';

import options from './options';
import utilities from './utilities';
import prompts from './prompts';

module.exports = {
	
	['do some command line shit']: (args) => {
		
		return `
			ls -la \
			&& \
			pwd
		`;
		
	},
	
};
