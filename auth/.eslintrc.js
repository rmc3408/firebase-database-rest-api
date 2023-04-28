module.exports = {
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-prettier'],
  extends: ['airbnb-typescript-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 0,
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
