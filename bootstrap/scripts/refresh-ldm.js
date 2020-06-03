#!/usr/bin/env node

const { workspace, backend } = require("../src/constants");
const path = "./src/ldm/full.ts";
process.argv.push(
    "--project-id",
    workspace,
    "--hostname",
    backend,
    "--output",
    path,
    "--accept-untrusted-ssl",
);
require("../node_modules/.bin/gdc-catalog-export");
