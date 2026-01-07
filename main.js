let menu = document.querySelector('nav');

document.querySelector('main .top .menu-but').onclick = () => {
    menu.classList.add('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}