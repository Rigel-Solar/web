module.exports = {
	env: {
		node: true,
		es2020: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		"no-undef": "off",
	},
};