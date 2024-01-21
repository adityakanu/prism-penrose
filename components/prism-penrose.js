Prism.languages.penrose = {
	'string': {
		pattern: /"(?:[^\n\\"]|\\["\\ntbfr])*"/,
		greedy: true
	},
	'comment': {
		pattern: /(?:\/\*[\s\S]*?\*\/|--.*)/
	},
	'keyword': /\b(?:All|AutoLabel|Label|Let|NoLabel|for|in|where)\b/,
	'builtin': /\b(?:above|as|below|collect|delete|encourage|ensure|except|false|forall|foreach|from|has|in|layer|listof|nameof|numberof|override|repeatable|then|true|where|with)\b/,
	'operator': /:=|>=|<=|>|<|==|\\|&&|!|\+|\*|-|%|\/|mod|=/,
	'function': /\$.*?\$/,
	'class-name': /\b(?:bool|color|constraint|file|function|int|list|mat2x2|mat3x3|mat4x4|objective|path|scalar|shape|string|style|vec2|vec3|vec4)\b/i,
	'number': {
		pattern: /\b[+-]?(?:\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)\b/,
		lookbehind: true
	}
};
