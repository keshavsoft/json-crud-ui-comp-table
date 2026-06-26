import path from "path";

export default function parseInput({ inTableName, inShowLog, inToPath, configPath }) {
    const [folderName, tableName, showLog] = process.argv.slice(2);

    return {
        tableName: inTableName || tableName,
        showLog: inShowLog || showLog,
        toPath: inToPath || path.join(process.cwd(), folderName),
        configPath: path.join(process.cwd(), "Config", "Schemas"),
        configPath
    };
};