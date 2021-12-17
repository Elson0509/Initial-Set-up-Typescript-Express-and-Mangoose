module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    es2021: true
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
