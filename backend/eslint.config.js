/** @type {import('eslint').Linter.Config} */
module.exports = {
  languageOptions: {
    globals: {
      node: true
    }
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "warn"
  }
};

