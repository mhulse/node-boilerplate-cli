#!/usr/bin/env node
// jshint esversion:6

import prompt from 'prompt';

prompt.start();
prompt.delimiter = ' ';
prompt.message = '';

function startName() {
	
	prompt.get([{
		name: 'get name',
		description: 'What’s your name?',
		default: 'Billy',
	}], (error, result) => {
		
		if ( ! error) {
			
			console.log(`Your name is ${result['get name']}.`);
			
		} else {
			
			console.error(error);
			
			process.exitCode = 1;
			
		}
		
	});
	
	
}

startName();
