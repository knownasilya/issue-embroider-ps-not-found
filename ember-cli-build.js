"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const tailwind = require("tailwindcss");
const postcssNested = require("postcss-nested");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");

const plugins = {
  before: [postcssNested()],
  after: [
    postcssImport({
      path: ["node_modules"],
    }),
    tailwind("./app/tailwind/config.js"),
    autoprefixer("last 2 versions"),
  ],
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    cssModules: {
      plugins: plugins,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Testing embroider compat, if broken uncomment the next line and comment out the existing return
  // return app.toTree();

  const { Webpack } = require("@embroider/webpack");
  return require("@embroider/compat").compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
  });
};
