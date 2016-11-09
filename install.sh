#!/bin/bash

# Install files:
function install() {
	
	echo "Installing into ${1} …"
	
	# Remote repo zip file:
	SOURCE_ZIP="https://github.com/mhulse/node-boilerplate-cli/tarball/master"
	# Get the zip file and extract all files:
	curl -sS -#L "$SOURCE_ZIP" | tar -xzv --strip-components 1 --exclude={install.sh,.*}
	
	# Testing (comment out the above and run these lines instead):
	#SOURCE_ZIP="/Users/mhulse/Desktop/test.tar.gz"
	#tar --strip-components=1 -zxf $SOURCE_ZIP
	
	echo "# My new project"$'\n' > README.md
	
	# Let the use know that we are done:
	echo $'\n'"Congrats! Installation was successful!"$'\n'
	
	# Open installation folder:
	open "."
	
}

# Check if installation directory meets our requirements:
function empty() {
	
	# Use `ls -A` if you want to account for hidden files:
	if [ -d "$1" ] && [ "$(ls $1)" ]; then
		# If chosen directory exists, and it’s not empty:
		echo "$1 must be an empty directory."
		echo "Remove files and try running this script again."
	else
		# Move on to the installation function:
		install $1
	fi
	
}

# Tidy up the terminal window:
clear

# Create menu:
empty "$(pwd)"

# Exit program:
exit 0

# Done!
# For more information about this script, see:
# https://github.com/mhulse/install-scripts
