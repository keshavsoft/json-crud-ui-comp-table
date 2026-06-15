import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/start.js`
    )).default;
};

export default load;