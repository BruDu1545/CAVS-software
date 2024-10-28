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

document.addEventListener('DOMContentLoaded', function () {
    let label_menu = document.querySelector('label[for="menu-toggle"]');
    let menu_bar = document.querySelector('input#menu-toggle');
    let toggle_list = document.getElementById('toggle-unorded-list-header');

    menu_bar.addEventListener('change', function() {
        if (menu_bar.checked) {
            toggle_list.style.maxHeight = "500px"; 
            toggle_list.style.padding = '15px'
            toggle_list.style.gap = '15px';
            toggle_list.style.textAlign = 'center';
            label_menu.textContent = 'Fechar Menu';
        } else {
            toggle_list.style.maxHeight = "0";
            toggle_list.style.padding = '0px'
            label_menu.innerHTML = '<i class="fa-solid fa-bars"></i> Menu';
        }
    });
});
