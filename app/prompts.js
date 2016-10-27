#!/usr/bin/env node
// jshint esversion:6

import colors from 'colors';

import commands from './commands';
import options from './options';
import utilities from './utilities';

module.exports = {
	'this is a prompt': {
		description: 'Hello!'.green.underline,
		default: 'Goodbye!',
	},
	'woot woot woot …': {
		description: 'Woot!',
		message: 'This is a woot, fo sho!',
		pattern: /^([A-Za-z\s!]+)$/,
		required: true,
	},
	'ask for name': {
		description: 'What’s your name?',
		default: 'Billy',
	},
};
