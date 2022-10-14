module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    // 加入 prettier 的 eslint 插件
    'prettier'
  ],
  rules: {
    // 开启 prettier 自动修复的功能
    'prettier/prettier': 'error'
  }
};
