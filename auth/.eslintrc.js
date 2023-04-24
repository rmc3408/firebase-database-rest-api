module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  extends: ['airbnb-typescript-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    settings: {
      react: {
        version: 'detect'
      },
    }
  },
}
