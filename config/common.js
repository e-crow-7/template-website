/**
 * Requirements
 */
const path = require("path");

/**
 * Constants
 */
const ROOT_PATH = path.resolve(".");
const BUILD_PATH = `${ROOT_PATH}/.build`;
const BUNDLE_PATH = `${ROOT_PATH}/.bundle`;
const REPORT_PATH = `${ROOT_PATH}/.reports`;

module.exports = {
  ROOT_PATH,
  BUILD_PATH,
  BUNDLE_PATH,
  REPORT_PATH
};
