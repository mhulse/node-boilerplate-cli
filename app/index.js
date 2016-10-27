#!/usr/bin/env node
// jshint esversion:6

import yargs from 'yargs';

import commands from './commands';
import options from './options';
import utilities from './utilities';
import prompts from './prompts';

switch (yargs.argv._[0]) {
	
	case 'name':
		
		utilities.title('Starting user’s name');
		
		require('./name');
		
		break;
	
	case 'other':
		
		utilities.title('Starting other script');
		
		require('./other');
		
		break;
	
	default:
		
		utilities.o('log', 'What do you want to do?');
	
}
