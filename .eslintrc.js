module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],
  env: {
    browser: true,
    node: true,
    es2021: true,
    jquery: true,
  },
  plugins: ["prettier", "import"],
  rules: {
    "no-console": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
