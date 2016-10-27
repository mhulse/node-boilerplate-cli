#!/usr/bin/env node
// jshint esversion:6

import prompt from 'prompt';
import Spinner from 'cli-spinner';

import commands from './commands';
import options from './options';
import utilities from './utilities';
import prompts from './prompts';

prompt.start();
prompt.delimiter = ' ';
prompt.message = '';

const spinner = new Spinner.Spinner(options.spinnerStringTemplate);
spinner.setSpinnerString(options.spinnerString);

function startName() {
	
	prompt.get([{
		utilities.getPrompt('ask for name', {
			required: true,
		}),
	}], (error, promptResult) => {
		
		spinner.start();
		
		if ( ! error) {
			
			utilities.o('log', `Your name is ${result['get name']}.`);
			
			nextStep();
			
		} else {
			
			utilities.o('log', error);
			
			utilities.exitGraceful();
			
		}
		
	});
	
	
}

function nextStep() {
	
	spinner.stop(true);
	
	// Do some other shit here …
	
}

startName();
