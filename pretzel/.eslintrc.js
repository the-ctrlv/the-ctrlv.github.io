module.exports = {
  plugins: ['simple-import-sort', 'import-quotes'],
  parser: "@babel/eslint-parser",
  rules: {
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // Packages. `react` related packages come first.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^react', '^@?\\w'],
          // Absolute imports
          ['^(pages)(/.*|$)', '^(containers|shared|utils)(/.*|$)'],
          // ../ imports
          ['^\\./Modal', '^\\.', '^\\./types', '^\\./constants', '^\\./functions', '^\\./use'],
          // Assets
          ['^(assets)(/.*|$)'],
          // for scss imports.
          ['^[^.]'],
        ],
      },
    ],
    'import-quotes/import-quotes': [1, 'single']
  }
};