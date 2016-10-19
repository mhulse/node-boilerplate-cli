#!/usr/bin/env node
// jshint esversion:6

import yargs from 'yargs';

switch (yargs.argv._[0]) {
	
	case 'name':
		
		console.log('Getting user’s name');
		
		require('./name');
		
		break;
	
	default:
		
		console.log('warn', 'What do you want to do?');
	
}
