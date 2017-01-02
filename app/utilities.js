#!/usr/bin/env node
// jshint esversion:6, laxbreak:true

import fs from 'fs-extra';
import colors from 'colors';

module.exports = {
	
	fileExists: function(filePath) {
		
		try {
			return fs.statSync(filePath).isFile();
		} catch (error) {
			return false;
		}
		
	},
	
	dirExists: function(dirPath) {
		
		try {
			return fs.statSync(dirPath).isDirectory();
		} catch (error) {
			return false;
		}
		
	},
	
	title: function(string) {
		
		this.o('log');
		this.o('log', ` ${string.toUpperCase()} `.bold.bgBlack.white);
		this.o('log');
		
	},
	
	exitGraceful: function(exitCode = 1) {
		
		process.exitCode = exitCode;
		
	},
	
	done: function({
		text = 'Done!',
		before = true,
		after = false,
	} = {}) {
		
		if (before) this.o('log');
		
		this.o('log', text);
		
		if (after) this.o('log');
		
	},
	
	o: function(type, ... messages) {
		
		console[type].apply(this, messages);
		
	},
	
};
