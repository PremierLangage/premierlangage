$(function() {
    let { pathname } = document.location;
    pathname = pathname.slice(1, pathname.length - 1);
    const path = pathname.split('/')[0];

    if (['', 'ask', 'courses'].includes(path)) {
        document.querySelector('.app-content').classList
                .add('app-content--padding');
    }
});