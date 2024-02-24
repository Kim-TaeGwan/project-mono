const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
    "airbnb/hooks",
  ],
  plugins: [
    'only-warn',
    'eslint-plugin-simple-import-sort',
    "@typescript-eslint",
    "@emotion",
    'turbo',
  ],
  rules: {
    "@emotion/jsx-import": "error",
    "@emotion/styled-import": "error",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/self-closing-comp": "error",
    "no-undeclared-env-vars": "off",
    'react/jsx-sort-props': [
      2,
      {
        'callbacksLast': true,
        'shorthandFirst': false,
        'shorthandLast': true,
        'ignoreCase': true,
        'noSortAlphabetically': false,
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ],
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-undef" : "off",
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
