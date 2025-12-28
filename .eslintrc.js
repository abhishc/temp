module.exports = {
  root: true,
  env: { es2022: true, node: true, jest: true },
  extends: ["eslint:recommended", "plugin:n/recommended", "plugin:prettier/recommended"],
  parserOptions: { ecmaVersion: "latest" },
  ignorePatterns: ["node_modules/", "dist/", "build/", "coverage/", ".github/"],
  rules: {},
};
