module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.ts',
    ],
    'import/resolver': {
      node: {
        paths: ['ts'],
      },
    },
  },
  rules: {
  },
};
