module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*',
  ],
  overrides: [
    {
      files: [
        '*.ts',
      ],
      parserOptions: {
        'project': [
          'tsconfig.json',
        ],
        'createDefaultProgram': true,
      },
      plugins: ['simple-import-sort'],
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-host-metadata-property': 'off',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/template/banana-in-box': 'off',
        '@angular-eslint/template/no-negated-async': 'off',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        //
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@angular-eslint/no-input-rename': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        'sort-imports': 'off',
        "simple-import-sort/exports": "error",
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^@?(?!mediu@nrwl/eslint-plugin-nxm-stories)\\w'],
              ['^@medium-stories?\\w'],
              ['^[^.]'],
              ['^\\.'],
            ],
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
            singleQuote: true,
            trailingComma: 'all',
            printWidth: 120,
            tabWidth: 2,
            bracketSpacing: true,
            semi: true,
            parser: 'typescript',
            useTabs: false,
            arrowParens: 'avoid',
          },
        ],
      },
    },
    // {
    //   files: ['*.component.ts'],
    //   extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    //   parser: '@typescript-eslint/parser',
    //   parserOptions: {
    //     ecmaVersion: 2020,
    //     sourceType: 'module',
    //   },
    //   plugins: ['@angular-eslint/template'],
    //   processor: '@angular-eslint/template/extract-inline-html',
    // },
    {
      'files': [
        '*.html',
      ],
      'extends': [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      'rules': {},
    },
  ],
};
