module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    indent: 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'eol-last': 'off', // ESLint 자체의 eol-last 규칙 비활성화
    'prettier/prettier': 'off',
  },
};
