module.exports = {
  plugins: ["stylelint-order", "stylelint-prettier", "stylelint-scss"],
  rules: {
    "prettier/prettier": true,
    "order/properties-alphabetical-order": true,
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "at-rule-no-unknown": null,
    "function-calc-no-unspaced-operator": true,
    "declaration-block-no-duplicate-properties": [
      true,
      { severity: "warning" },
    ],
    "declaration-empty-line-before": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["use", "forward", "function", "mixin", "extend"],
      },
    ],
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/percent-placeholder-pattern": null,
    "function-url-quotes": ["always", { severity: "warning" }],
    "alpha-value-notation": ["number", { severity: "warning" }],
    "no-descending-specificity": [true, { severity: "warning" }],
    "no-duplicate-selectors": [true, { severity: "warning" }],
    "number-max-precision": [3, { severity: "warning" }],
    "function-name-case": ["lower", { severity: "warning" }],
  },
  extends: ["stylelint-config-standard-scss"],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
};
