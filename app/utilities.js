#!/usr/bin/env node
// jshint esversion:6, laxbreak:true

import child_process from 'child_process';
import path from 'path';

import _ from 'underscore';
import colors from 'colors';
import del from 'del';
import fs from 'fs-extra';
import sfx from 'sfx';

import commands from './commands';
import options from './options';
import prompts from './prompts';

const exec = child_process.exec;

module.exports = {
	
	// Promisifying `child_process`:
	promiseFromChildProcess: function(child) {
		
		return new Promise((resolve, reject) => {
			
			child.addListener('error', (code, signal) => {
				
				this.o('log', 'ChildProcess error', code, signal);
				
				reject();
				
			});
			
			child.addListener('exit', (code, signal) => {
				
				if (code === 0) {
					
					resolve();
					
				} else {
					
					reject();
					
				}
				
			});
			
		});
		
	},
	
	childProcess: function(command) {
		
		let child = exec(command);
		
		child.stdout.on('data', (data) => {
			
			this.o('log', 'stdout:', data);
			
		});
		
		child.stderr.on('data', (data) => {
			
			this.o('log', 'stderr:', data);
			
			this.exitGraceful();
			
		});
		
		child.on('close', (code) => {
			
			//this.o('log', 'closing code:', code);
			
		});
		
		return this.promiseFromChildProcess(child);
		
	},
	
	getPrompt: function(key, object = {}) {
		
		let p = prompts[key];
		
		p.name = key;
		
		return Object.assign({}, p, object);
		
	},
	
	cleanDirs: function(paths, callback) {
		
		del(paths, {
			force: true
		})
		.then(paths => {
			
			let count = paths.length;
			
			paths = _(paths).map((value, key) => {
				
				return path.relative('./', value);
				
			}).join(', ');
			
			if (paths.length) {
				
				this.o('log', `Deleted ${count} files:`.red);
				this.o('log', `${paths}`.italic);
				this.o('log');
				
			}
			
			this.o('log', 'All paths clean!'.bold);
			
			callback.call();
			
		});
		
	},

	copyFile: function({
		sourceFile = '',
		toLocation = '',
		filter = {},
		silent = false,
	}) {
		
		try {
			
			fs.copySync(sourceFile, toLocation, filter);
			
			if ( ! silent) {
				
				this.o(
					'log',
					`${path.relative('./', sourceFile)}`.bold,
					'copied to'.gray,
					`${path.relative('./', toLocation)}.`.green.bold
				);
				
			}
			
		} catch (err) {
			
			// Let this process pass even if a file is missing.
			
		}
		
	},
	
	o: function(type, ... messages) {
		
		console[type].apply(this, messages);
		
	},
	
	title: function(string) {
		
		this.o('log');
		this.o('log', ` ${string.toUpperCase()} `.bold.bgBlack.white);
		this.o('log');
		
	},
	
	done: function({
		speak = '',
		before = true,
		after = false,
	} = {}) {
		
		if (before) this.o('log');
		
		this.o('log', 'Done!');
		
		if (after) this.o('log');
		
		if (speak.length) {
			
			// https://github.com/adriancooney/node-sfx/issues/5
			//sfx.say(speak, 'random');
			
			sfx.random();
			
		}
		
	},
	
	cleanString: function(string) {
		
		return string.trim().replace(/(\r\n|\n|\r)/gm, '');
		
	},
	
	safelyParseJSON: function(string) {
		
		let result;
		
		try {
			
			result = JSON.parse(string);
			
		} catch (error) {
			
			// What to log and where?
			
		}
		
		return result;
		
	},
	
	// http://stackoverflow.com/a/32749571/922323
	fileExists: function(filePath) {
		
		try {
			return fs.statSync(filePath).isFile();
		} catch (err) {
			return false;
		}
		
	},
	
	exitGraceful: function(exitCode = 1) {
		
		process.exitCode = 1;
		
	},
	
};
