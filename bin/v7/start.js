import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import resolveCommand from './core/resolveCommand.js';

// import tableComp from "./commands/tableComp.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async ({ type, tableName, showLog, toPath, configPath }) => {
  if (!configPath) {
    console.log("configPath not supplied ");
  };

  const input = parseInput({
    inTableName: tableName,
    inShowLog: showLog, inToPath: toPath,
    configPath
  });

  if (input.action === "--help" || input.action === "-h" || input.action === "help") return showUsage(version);

  const commandToRun = resolveCommand(type);

  await commandToRun({
    tableName: input.tableName,
    showLog: input.showLog,
    toPath: input.toPath,
    configPath: input.configPath
  });
};

export default run;