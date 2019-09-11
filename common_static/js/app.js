$(function() {
   /*  let { pathname } = document.location;
    pathname = pathname.slice(1, pathname.length - 1);
    const path = pathname.split('/')[0];
    if (['', 'ask', 'activity'].includes(path)) {
        document.querySelector('.app-content').classList
                .add('app-content--padding');
    } */
});

function toggleHeaderNav() {
    const nav = document.querySelector('.app-nav--mobile');
    const visible = nav.style.marginTop === '0px';
    if (visible) {
        nav.style.marginTop = '-100vh';
    } else {
        nav.style.marginTop = '0px';
    }
}

function openURL(url) {
    document.open(url);
}