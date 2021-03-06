module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0,
    "jsx-a11y/control-has-associated-label": 0
  }
};
