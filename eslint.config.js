import { defineConfig } from "eslint-define-config";
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import typescriptParser from "@typescript-eslint/parser"; // Import the parser directly

export default defineConfig([
  {
    languageOptions: {
      parser: typescriptParser, // Use the imported parser directly
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint recommended rules
      "no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: "error",

      // React recommended rules
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "error",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "warn",
      "react/jsx-no-undef": "warn",

      // TypeScript recommended rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // ESLint built-in rules
      indent: ["error", 2], // Use ESLint's built-in indent rule

      // Prettier rules
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
