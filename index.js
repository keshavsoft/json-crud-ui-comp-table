import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async (type) => {
    const v = getLatestVersion();

    return (await import(
        `./bin/${v}/commands/${type}.js`
    )).default;
};

const showAll = async (...a) =>
    (await load("tableComp"))(...a);

const simple = async (...a) =>
    (await load("simple"))(...a);

export {
    load, showAll, simple
};