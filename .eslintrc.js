module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    /*    'react/jsx-indent': [2, 2], // to require 2 indents for jsx/tsx
        'react/jsx-indent-props': [2, 2], // to require 2 indents for props
        */
    indent: [
      2,
      2,
      { ignoredNodes: ['ConditionalExpression'] },

    ], // to require 2 indents
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off', // to enable absolute import
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off', // to enable optional props without default value
    'react/react-in-jsx-scope': 'off', // to enable using react without import
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off', // to not prefer function declaration
    'no-shadow': 'off', // to not use the same names for different scopes in a file
    'import/extensions': 'off', // to not import extension
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off', // to enable use underscores
    'react/button-has-type': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, onlyAttribute: [''] },
    ], // to use i18next plugin only fot text
    'max-len': ['error', { ignoreComments: true, code: 120 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
