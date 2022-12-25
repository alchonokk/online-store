module.exports = {
  plugins: ["prettier", "@typescript-eslint/tslint"],
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    "no-debugger": "off",
    "no-console": 0,
    "class-methods-use-this": "off",
    "no-explicit-any": "on",
  },
};
