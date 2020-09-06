module.exports = {
  env: {
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    wx: 'readonly',
    getApp: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': [2, 'never']
  }
}
