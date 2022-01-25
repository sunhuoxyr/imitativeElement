module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // 解决 defineProps 等的undef 警告
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
