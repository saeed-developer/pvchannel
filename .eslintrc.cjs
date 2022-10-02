module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: 'module',
  },
  plugins: [
      'react',
      'prettier',
      'react-hooks'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
    curly: [2, 'all'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/no-array-index-key': 'off',
    'no-use-before-define': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
      
      'no-param-reassign': [2, { props: false }],
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'linebreak-style': 'off',
      'no-nested-ternary': 'off',
      camelcase: 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
    ],
  },
  settings: {
    react: {
      version: 'detect'
    },
   }
}
