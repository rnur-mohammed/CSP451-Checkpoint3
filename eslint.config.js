import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  prettier,
  {
    ignores: ["dist", "coverage", "node_modules", "jest.config.js"],
  },
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        node: true,
        require: true,
        module: true,
        console: true,
        exports: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["__tests__/**/*.{ts,js}"],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        expect: true,
      },
    },
  },
];
