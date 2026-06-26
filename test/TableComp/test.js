import { showAll } from "../../index.js";
import path from "path";

const folderName = process.argv[2];
const tableName = process.argv[3];
const showLog = process.argv[4];

// const run = await load();

await showAll({
    toPath: path.join(process.cwd(), folderName),
    tableName,
    configPath: path.join(process.cwd(), "Config", "Schemas"),
    showLog
});