"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const slugify = require("slugify");

module.exports = class extends Generator {
  constructor(args, options, features) {
    super(args, options, features);

    this.env.options.nodePackageManager = "yarn";
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the barely mediocre ${chalk.red(
          "generator-react-stokingerl"
        )} generator!`
      )
    );

    const prompts = [
      {
        name: "appName",
        message: "What's the name of the application?",
        default: slugify(this.appname)
      },
      {
        name: "description",
        message: "What is the app's description?",
        default: "This application could be improved a bit."
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const plainFiles = [
      "cypress/integration/press-button.ts",
      "cypress/plugins/index.js",
      "cypress/support/commands.js",
      "cypress/support/index.js",
      "public/favicon.ico",
      "public/index.html",
      "public/robots.txt",
      "src/app/__tests__/index.spec.tsx",
      "src/app/__tests__/__snapshots__/index.spec.tsx.snap",
      "src/app/index.scss",
      "src/app/index.scss.d.ts",
      "src/app/index.tsx",
      "src/testing-library/setup-tests.ts",
      "src/types/declarations.d.ts",
      "src/index.tsx",
      ".browserslistrc",
      ".editorconfig",
      ".eslintignore",
      ".eslintrc",
      ".gitignore",
      "cypress.json",
      "jest.config.js",
      "tsconfig.json",
      "webpack.config.js",
      "yarn.lock"
    ];
    const tplFiles = ["package.json", "README.md"];

    plainFiles.forEach(file => {
      this.fs.copy(this.templatePath(file), this.destinationPath(file));
    });
    tplFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.props
      );
    });
  }
};
