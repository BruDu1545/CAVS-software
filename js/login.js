function layoutRegister() {
    const login_form = document.querySelector('section.login_form');
    const register_form = document.querySelector('section.register_form');

    login_form.style.display = "none";
    register_form.style.display = "block";
}

function layoutLogin() {
    const login_form = document.querySelector('section.login_form');
    const register_form = document.querySelector('section.register_form');

    login_form.style.display = "block";
    register_form.style.display = "none";
}
function loginUser() {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const savedUser = localStorage.getItem("user");
    const savedPassword = localStorage.getItem("password");

    if (user === savedUser && password === savedPassword) {
        alert(`Welcome back, ${user}!`);
        window.location.href = 'config/dashboard.html';
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function registerUser() {
    event.preventDefault();

    const email = document.getElementById("register_email").value;
    const user = document.getElementById("register_user").value;
    const password = document.getElementById("register_password").value;

    if (email && user && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("user", user);
        localStorage.setItem("password", password);
        alert("Sign up successful! You can now log in.");
        layoutLogin();
    } else {
        alert("Please fill in all the fields.");
    }
}