"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-react-stokingerl:app", () => {
  const prompts = {
    appName: "test name",
    description: "test description"
  };

  const setUp = async prompts =>
    helpers.run(path.join(__dirname, "../generators/app")).withPrompts(prompts);

  it("creates files", async () => {
    await setUp(prompts);
    assert.file("cypress/integration/press-button.ts");
    assert.file("cypress/plugins/index.js");
    assert.file("cypress/support/commands.js");
    assert.file("cypress/support/index.js");
    assert.file("public/favicon.ico");
    assert.file("public/index.html");
    assert.file("public/robots.txt");
    assert.file("src/app/__tests__/index.spec.tsx");
    assert.file("src/app/__tests__/__snapshots__/index.spec.tsx.snap");
    assert.file("src/app/index.scss");
    assert.file("src/app/index.scss.d.ts");
    assert.file("src/app/index.tsx");
    assert.file("src/testing-library/setup-tests.ts");
    assert.file("src/types/declarations.d.ts");
    assert.file("src/index.tsx");
    assert.file(".browserslistrc");
    assert.file(".editorconfig");
    assert.file(".eslintignore");
    assert.file(".eslintrc");
    assert.file(".gitignore");
    assert.file("cypress.json");
    assert.file("jest.config.js");
    assert.file("package.json");
    assert.file("README.md");
    assert.file("webpack.config.js");
    assert.file("tsconfig.json");
    assert.file("yarn.lock");
  });

  it("writes appropriate content to the files", async () => {
    await setUp(prompts);
    assert.fileContent("package.json", /"name": "test name"/);
    assert.fileContent("package.json", /"description": "test description"/);
    assert.fileContent("README.md", /# test name/);
    assert.fileContent("README.md", /test description/);
    assert.fileContent(".gitignore", /node_modules/);
  });
});
