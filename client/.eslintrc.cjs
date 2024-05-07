module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import-alias/import-alias": [
      "error",
      {
        "relativeDepth": 0,
        "aliases": [
          { "alias": "store", "matcher": "^src/store" }, // src/modules/app/test -> @src/modules/app/test
          { "alias": "@test", "matcher": "^test\/unit" }, // test/unit/modules/app -> @test/modules/app
          { "alias": "@testRoot", "matcher": "^(test)\/e2e" } // test/e2e/modules/app -> @testRoot/e2e/modules/app
        ]
      }
    ]
  },
}
