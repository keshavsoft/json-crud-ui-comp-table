import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/tableComp.js`
    )).default;
};

export default load;