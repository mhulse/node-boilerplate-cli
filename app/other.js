#!/usr/bin/env node
// jshint esversion:6

import prompt from 'prompt';

import commands from './commands';
import options from './options';
import utilities from './utilities';
import prompts from './prompts';

prompt.start();
prompt.delimiter = ' ';
prompt.message = '';

prompt.get([
	utilities.getPrompt('woot woot woot …'),
	utilities.getPrompt('this is a prompt'),
], function(error, promptResult) {
	if ( ! error) {
		
		utilities.o('log', promptResult['woot woot woot …']);
		utilities.o('log', promptResult['this is a prompt']);
		utilities.o('log');
		
	} else {
		
		utilities.o('log', error);
		
		utilities.exitGraceful();
		
	}
});
