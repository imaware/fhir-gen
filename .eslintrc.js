module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/__tests__/**/*.ts'],
      rules: {
        '@typescript-eslint/no-invalid-this': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-undef': 'off',
        semi: 'off',
      },
    },
  ],
  plugins: ['jsdoc'],
  rules: {
    '@typescript-eslint/semi': ['error'],
  },
};
