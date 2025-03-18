import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
      ...reactPlugin.configs.flat.recommended,
      settings: {
        react: {
          version: "detect",
        },
      },
    reactPlugin.configs.flat["jsx-runtime"],
    files: ["**/*.js"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
