#!/usr/bin/env node
'use strict';
const meow = require('meow');
const unicornFun = require('unicorn-fun');

const cli = meow(`
	Usage
	  $ unicorn-fun [input]

	Options
	  --postfix  Lorem ipsum  [Default: rainbows]

	Examples
	  $ cli-name
	  unicorns & rainbows
	  $ cli-name ponies
	  ponies & rainbows
`, {
	flags: {
		postfix: {
			type: 'string',
			default: 'rainbows'
		}
	}
});

console.log(moduleName(cli.input[0] || 'unicorns', cli.flags));
