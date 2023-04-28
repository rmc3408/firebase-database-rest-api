module.exports = {
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-prettier', 'prettier'],
  extends: ['airbnb-typescript-prettier', 'prettier', 'prettier/@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 1,
    "quotes": 'error'
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
