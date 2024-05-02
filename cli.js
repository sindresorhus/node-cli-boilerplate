#!/usr/bin/env node
import meow from 'meow';
import unicornFun from 'unicorn-fun';

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
	importMeta: import.meta,
	flags: {
		postfix: {
			type: 'string',
			default: 'rainbows',
		},
	},
});

console.log(unicornFun(cli.input[0] ?? 'unicorns', cli.flags));
