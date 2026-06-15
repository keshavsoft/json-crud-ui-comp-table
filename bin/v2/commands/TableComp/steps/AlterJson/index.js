import fs from "fs";
import path from "path";

import updateColumnsConfig from "./updateColumnsConfig.js";

const readJson = (filePath) => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const writeJson = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

const getSchemaConfig = ({ fromConfigPath, tableName, showLog }) => {
    const schemaPath = path.join(
        fromConfigPath,
        `${tableName}.json`
    );

    const schemaPathAsJson = readJson(schemaPath);

    if (showLog) if (!"columnsConfig" in schemaPathAsJson) console.log("columnsConfig not found in schema source");

    return schemaPathAsJson?.columnsConfig;
};

const getShowAllConfigPath = ({ inDestination }) => {
    return path.join(
        inDestination,
        "Index",
        "Configs"
    );
};

const startFunc = ({ inDestination, inToPath, tableName, fromConfigPath, showLog = false }) => {
    const columnsConfig = getSchemaConfig({ fromConfigPath, tableName, showLog });

    const configRoot = getShowAllConfigPath({ inDestination });

    updateColumnsConfig({
        configRoot,
        columnsConfig,
        tableName
    });
};

export default startFunc;