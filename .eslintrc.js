module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    test: true,
    it: true,
    expect: true,
    describe: true,
    jest: true,
    jsdom: false,
    beforeEach: true,
    afterEach: true,
    POLO_URL: false,
    BLACKBOX_URL: false,
    BLACKBOX_SHORT_URL: false,
    FLAPBOOK_URL: false,
    BUDGIE_URL: false,
    fail: false,
    USER_IDENTITY_POOL_ID: false,
    FACEBOOK_API_VERSION: false,
    FACEBOOK_APP_ID_V1: false,
    FACEBOOK_APP_ID: false,
    FACEBOOK_SDK_URL: false,
    FACEBOOK_API_ACCESS_LEVEL: false,
    STRIPE_APP_ID: false,
    MAPBOX_ACCESS_TOKEN: false,
    FILESTACK_API_KEY: false,
    __webpack_public_path__: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.css.d.ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.spec.tsx', '*.spec.ts'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-no-inline-styles',
    'import',
    'jest',
    'jest-formatting',
    'jsx-a11y',
    'new-with-error',
    'react',
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_+$', ignoreRestSiblings: true, args: 'after-used' },
    ],
    'class-methods-use-this': 0,
    camelcase: ['off'],
    curly: ['error'],
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jest/no-done-callback': 'warn',
    // TODO: Remove to set a11y warnings back to errors once codebase is up to par
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'new-with-error/new-with-error': 'error',
    'no-inline-styles/no-inline-styles': 'warn',
    'no-console': ['warn'],
    'no-throw-literal': 'error',
    'no-underscore-dangle': ['off'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
    ],
    // TODO: Destructure everywhere
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'off',
    // TODO: Enforce JSX boolean value style
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
    // TODO: Optimize performance by disallowing bind calls or arrow functions in JSX props
    'react/jsx-no-bind': 'warn',
    // This is now secure in all modern browsers. See https://stackoverflow.com/a/67839804/10791482
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react/no-array-index-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/state-in-constructor': ['warn', 'never'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports (0 at start).
          ['^\u0000'],
          ['^(core-js/stable|regenerator-runtime/runtime|babel-polyfill|whatwg-fetch)$'],
          ['^normalize.css$'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ['^[^.]'],
          // Relative imports.
          // @feathr package imports.
          ['^(@feathr/[^.]+(?!\\.css|\\.gif|\\.jpg|\\.json|\\.png)\\..+)|(@feathr/[^.]+$)'],
          // Anything that starts with a dot.
          ['^\\.'],
          // Style imports.
          ['^@feathr/.+\\.css$', '^.+\\.css$'],
          // Json imports.
          ['^@feathr/.+\\.json$', '^.+\\.json$'],
          // Asset imports.
          ['^@feathr/.+\\.(gif|jpg|png)$', '^.+\\.(gif|jpg|png)$'],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
