import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async () => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/start.js`
    )).default;
};

const showAll = async (...a) =>
    (await load())(...a);

export {
    load, showAll
};