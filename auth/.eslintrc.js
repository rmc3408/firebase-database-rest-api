module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'eslint-plugin-prettier'],
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
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-console": 0
  }
}
