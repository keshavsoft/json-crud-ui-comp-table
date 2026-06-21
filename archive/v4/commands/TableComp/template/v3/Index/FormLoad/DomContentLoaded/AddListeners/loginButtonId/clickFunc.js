const clickFuncToRun = async () => {
    const UserName =
        document.getElementById("Username").value;

    const Password =
        document.getElementById("Password").value;

    const response = await fetch("/Secured/V1/GenerateToken/ToCookie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            UserName,
            Password
        })
    });

    if (response.status === 200) {
        document
            .getElementById("loginError")
            .classList.add("hidden");

        document
            .getElementById("loginModalContent")
            .classList.remove("border-2", "border-red-500");

        const loginModal =
            document.getElementById("loginModal");

        loginModal.classList.add("hidden");
    } else {
        document
            .getElementById("loginError")
            .textContent = "Invalid username or password";

        document
            .getElementById("loginError")
            .classList.remove("hidden");

        document
            .getElementById("loginModalContent")
            .classList.add("border-2", "border-red-500");
    };
};

export { clickFuncToRun };