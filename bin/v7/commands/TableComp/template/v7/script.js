function loadScriptAsModuleCommon(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");

        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`Failed to load: ${src}`));
        script.type = "module";

        document.head.appendChild(script);
    });
};

async function ensureTailwind() {
    function loadCss(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement("link");

            link.rel = "stylesheet";
            link.href = href;

            link.onload = resolve;
            link.onerror = reject;

            document.head.appendChild(link);
        });
    };

    const tryLocal = async () => {
        try {
            // await loadCss("./tailwind-3.css");
            await loadCss("./tailwind-3-min.css");

            console.log("Tailwind loaded locally");
            return true;
        } catch { return false; }
    };

    const tryKsWebExtension = async () => {
        try {
            await loadCss("https://keshavsoft.github.io/KsWebExtension/tailwind-3.css");

            console.log("Tailwind loaded from KsWebExtension");
            return true;
        } catch { return false; }
    };

    const tryGit = async () => {
        try {
            await loadCss("https://keshavsoft.github.io/tailwind-gen-css/tailwind-3.css");

            console.log("Tailwind loaded from tailwind-gen-css");
            return true;
        } catch { return false; }
    };

    if (document.getElementById("KSTableTailwind")) {
        console.log("Tailwind loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;
    if (await tryKsWebExtension()) return;
    if (await tryGit()) return;

    throw new Error("Tailwind could not be loaded");
};

async function ensureKSHeader() {
    function isKSTableLoaded() {
        return !!window.KSHeader;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModuleCommon("https://keshavsoft.github.io/tailwind-header-dom/Public/v5.10/ksheader.js");

            console.log("KSHeader loaded from git : tailwind-header-dom-5.10");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModuleCommon("/header/v11/initHeader.js");

            console.log("KSHeader loaded from local : header-v11");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSHeader loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSCompNav() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSNav;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/ks-web-comp-nav/Public/v4/ksCompNav.js");

            console.log("KSNav loaded from git : ks-web-comp-nav-4");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/header/v9/initHeader.js");

            console.log("KSHeader loaded from local : header-v9");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSHeader loaded from Firefox Extension");
        return;
    };

    // if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSMenuItem() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSMenuItem;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/ks-web-comp-menuItem/Public/v1/KSMenuItem.js");

            console.log("KSMenuItem loaded from git : ks-web-comp-menuItem-1");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/header/v9/initHeader.js");

            console.log("KSHeader loaded from local : header-v9");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSHeader loaded from Firefox Extension");
        return;
    };

    // if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSComponents() {
    async function tryMenu() {
        try {
            const fromPromise = await loadScriptAsModuleCommon("https://keshavsoft.github.io/ks-web-comp-menuItem/Public/v1/KSMenuItem.js");

            console.log("KSMenuItem loaded from git : ks-web-comp-menuItem-1");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryNav() {
        try {
            const fromPromise = await loadScriptAsModuleCommon("https://keshavsoft.github.io/ks-web-comp-nav/Public/v4/ksCompNav.js");

            console.log("ksCompNav loaded from git : ks-web-comp-nav-4");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    tryMenu().then();
    tryNav().then();
};

async function ensureKSTable() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        return !!window.KSTable;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-table-dom/Public/v12/kstable.js");

            console.log("KSTable loaded from Local Server");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/KSTable/v1/entry.js");

            console.log("KSTable loaded from Local Server");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSTable loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTable could not be loaded");
};

async function ensureKSTableComp() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSTableLoaded() {
        // console.log("aaaaaaaa : ", window.KSTableComp, window.KSHeader);

        return !!window.KSTableComp;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-table-dom-comp/Public/v8/kstable.js");

            console.log("KSTableComp loaded from git : tailwind-table-dom-comp-8");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/TableComp/v10/entry.js");

            console.log("KSTableComp loaded from Local Server : TableComp/v10");

            if (fromPromise) return true;
        } catch {
            console.log("KSTableComp failed from Local Server : TableComp/v7");

            return false
        };

        return false;
    };

    if (isKSTableLoaded()) {
        console.log("KSTableComp loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSTableComp could not be loaded");
};

async function ensureKSVertical() {
    function loadScriptAsModule(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load: ${src}`));
            script.type = "module";

            document.head.appendChild(script);
        });
    };

    function isKSVerticalLoaded() {
        return !!window.KSVertical;
    };

    async function tryGitHub() {
        try {
            const fromPromise = await loadScriptAsModule("https://keshavsoft.github.io/tailwind-vertical-dom/Public/v4/ksvertical.js");

            console.log("KSVertical loaded from git : tailwind-vertical-dom");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    async function tryLocal() {
        try {
            const fromPromise = await loadScriptAsModule("/TableComp/v4/entry.js");

            console.log("KSVertical loaded from Local Server : TableComp/v4");

            if (fromPromise) return true;
        } catch { return false };

        return false;
    };

    if (isKSVerticalLoaded()) {
        console.log("KSVertical loaded from Firefox Extension");
        return;
    };

    if (await tryLocal()) return;

    if (await tryGitHub()) return;

    throw new Error("KSVertical could not be loaded");
};

ensureTailwind().then();
// await ensureKSCompNav();
// await ensureKSMenuItem();
ensureKSComponents().then();

await ensureKSHeader();

await ensureKSTableComp();
await ensureKSVertical();