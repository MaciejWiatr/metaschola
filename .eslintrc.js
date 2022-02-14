module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.js', '.jsx', '.tsx', '.ts', '.svg'] },
		],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		'import/prefer-default-export': 'off',
		'react/function-component-definition': [
			2,
			{ namedComponents: 'arrow-function' },
		],
	},
};
