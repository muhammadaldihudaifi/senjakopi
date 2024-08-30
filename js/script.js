// Ketika Hamburger/menu icon di klik
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Klik di luar sidebar untuk menghilangkan nav 

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navlist.contains(e.target)) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }   
});  