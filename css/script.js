document.addEventListener('DOMContentLoaded', function () {
    let label_menu = document.querySelector('label[for="menu-toggle"]');
    let menu_bar = document.querySelector('input#menu-toggle');
    let toggle_list = document.getElementById('toggle-unorded-list-header');

    // Listener para o clique no checkbox
    menu_bar.addEventListener('change', function() {
        if (menu_bar.checked) {
            toggle_list.style.maxHeight = "500px";  // Expande o menu
            label_menu.textContent = 'Fechar Menu'; // Alterar texto do botão
        } else {
            toggle_list.style.maxHeight = "0";  // Recolhe o menu
            label_menu.textContent = 'Menu'; // Texto padrão
        }
    });
});
