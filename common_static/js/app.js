function toggleHeaderNav() {
    const nav = document.querySelector('.app-nav--mobile');
    const visible = nav.style.marginTop === '0px';
    if (visible) {
        nav.style.marginTop = '-100vh';
    } else {
        nav.style.marginTop = '0px';
    }
}
