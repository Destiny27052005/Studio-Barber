const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('menu', 'menu-id')

const buttons = document.querySelectorAll('.btn')
function linkAction() {
    buttons.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

buttons.forEach(n => n.addEventListener('click', linkAction));
