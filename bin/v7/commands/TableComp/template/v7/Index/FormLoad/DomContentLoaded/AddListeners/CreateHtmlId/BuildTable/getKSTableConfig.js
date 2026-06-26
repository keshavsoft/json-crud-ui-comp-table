// import onReadFail from "../../../CommonFuncs/onReadFail.js";
import onVerticalSuccess from "../../../CommonFuncs/onVerticalSuccess.js";

export const getKSTableConfig = async () => {

    const config = await fetch("./Index/Configs/Create/config.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = onVerticalSuccess;

    return configJson;
};