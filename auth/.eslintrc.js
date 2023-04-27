/* eslint-disable */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-prettier'],
  extends: ['airbnb-typescript-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2023,
    //project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: '999.999.999',
    },
  },
}
