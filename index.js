require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

await fs.writeFile("README.md", readme);