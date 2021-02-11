module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:jsdoc/recommended'],
  overrides: [
    {
      files: ['**/__tests__/**/*.ts'],
      rules: {
        '@typescript-eslint/no-invalid-this': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-undef': 'off',
      },
    },
  ],
  plugins: ['jsdoc'],
};
