module.exports = {
  extends: ['plugin:import/typescript', 'alloy', 'alloy/typescript'],
  plugins: ['import', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    jest: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    'no-unused-vars': 'error'
  },
  ignorePatterns: ['dist/**/*']
};
