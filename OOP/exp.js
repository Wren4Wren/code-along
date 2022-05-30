const userOne = {
    username: "Wren",
    email: "renprofessional97@gmail.com",

    login() {
        console.log("The user has logged in");
    },
    logout() {
        console.log("The user has logged out");
    },
};

console.log(userOne.username, userOne.email);
userOne.login();
userOne.logout();