// eslint.config.cjs
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
    // Игнорируем node_modules/dist/coverage
    {
        ignores: ["node_modules/**", "dist/**", "coverage/**"]
    },

    // Общие правила для TypeScript файлов
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser, // <- важная часть: передаём сам модуль парсера
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json" // если нужен (TS-rules)
            }
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "prettier": prettierPlugin
        },
        rules: {
            "prettier/prettier": "error",
            "no-console": "warn",
            "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
        }
    },

    // JS файлы (если нужны)
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {}
    }
];
