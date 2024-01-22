Prism.languages.penrose = {
	'string': {
		pattern: /"(?:[^\n\\"]|\\["\\ntbfr])*"/,
		greedy: true
	},
	'comment': /(?:\/\*[\s\S]*?\*\/|--.*)/,
	'keyword': /\b(?:All|AutoLabel|Label|Let|NoLabel|for|in|where)\b/,
	'operator': /:=|>=|<=|>|<|==|\\|&&|!|\+|\*|-|%|\/|mod|=/,
	'function': /\$.*\$/,
	'number': {
		pattern: /\b[+-]?(?:\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)\b/,
		lookbehind: true
	}
};
