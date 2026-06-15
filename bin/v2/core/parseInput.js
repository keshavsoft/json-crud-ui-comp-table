export default function parseInput({ inTableName, inShowLog, inToPath }) {
    const [tableName, showLog] = process.argv.slice(2);

    return {
        tableName: inTableName || tableName,
        showLog: inShowLog || showLog,
        toPath: inToPath || process.cwd()
    };
};