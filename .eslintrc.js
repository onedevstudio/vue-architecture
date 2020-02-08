module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
  },
};
