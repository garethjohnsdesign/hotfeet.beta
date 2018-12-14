// first animate in
setTimeout(function () {
    document.documentElement.classList.remove('is-animating');
}, 100)

// enable swup
const swup = new Swup({
    debugMode: true,
    LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
});