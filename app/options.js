#!/usr/bin/env node
// jshint esversion:6

import commands from './commands';
import options from './options';
import utilities from './utilities';
import prompts from './prompts';

const DEBUG = false; // Putting here for easy access.

module.exports = {
	debug: DEBUG,
	spinnerString: '⣾⣽⣻⢿⡿⣟⣯⣷⠁⠂⠄⡀⢀⠠⠐⠈',
	spinnerStringTemplate: 'Processing … %s',
};
