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
