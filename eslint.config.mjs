// eslint.config.mjs
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

/**
 * Flat config for ESLint 9+
 * - ignores dist/ and coverage/
 * - enables TypeScript parser for .ts files
 * - allows Node and Jest globals
 */

export default [
  // base JS recommended rules
  js.configs.recommended,

  // prettier integration (turns off formatting rules that conflict)
  prettier,

  // global ignores so compiled/test artifacts aren't linted
  {
    ignores: ["dist", "coverage", "node_modules", "jest.config.cjs"],
  },

  // rules for normal source files (.ts and .js)
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node globals
        console: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      // prefer warnings for some TS-specific things while developing
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off"
    },
  },

  // additional environment for tests (Jest globals)
  {
    files: ["**/__tests__/**/*.ts", "**/*.test.{ts,js}"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },
];

