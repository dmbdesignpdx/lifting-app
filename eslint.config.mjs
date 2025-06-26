import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/semi": "error",
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/array-bracket-newline": ["error", "consistent"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@stylistic/block-spacing": "error",
      "@stylistic/brace-style": "error",
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": "error",
      "@stylistic/comma-style": "error",
      "@stylistic/computed-property-spacing": "error",
      "@stylistic/curly-newline": ["error", "always"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": "error",
      "@stylistic/function-call-spacing": "error",
      "@stylistic/function-paren-newline": ["error", "consistent"],
      "@stylistic/implicit-arrow-linebreak": "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-closing-bracket-location": 2,
      "@stylistic/jsx-closing-tag-location": 2,
      "@stylistic/jsx-curly-brace-presence": [2, { props: "never", children: "never" }],
      "@stylistic/jsx-curly-newline": [2, "consistent"],
      "@stylistic/jsx-curly-spacing": [2, { when: "never", children: false }],
      "@stylistic/jsx-equals-spacing": [2, "never"],
      "@stylistic/jsx-first-prop-new-line": [2, "multiline-multiprop"],
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "@stylistic/jsx-pascal-case": 2,
      "@stylistic/jsx-wrap-multilines": ["error", {
        "declaration": "parens-new-line",
        "return": "parens-new-line",
        "assignment": "parens-new-line",
      }],
      "@stylistic/jsx-self-closing-comp": ["error", {
        "component": true,
        "html": true,
      }],
      "@stylistic/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/no-whitespace-before-property": 1,
      "@stylistic/no-trailing-spaces": 1,
      "@stylistic/space-before-blocks": 1,
      "@stylistic/space-before-function-paren": [1, {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always",
      }],
      "@stylistic/space-in-parens": 1,
      "@stylistic/spaced-comment": [1, "always", {
        "exceptions": ["-", "*"],
        "markers": ["/"],
      }],
      "@stylistic/switch-colon-spacing": 1,
    },
  },
];

export default eslintConfig;
