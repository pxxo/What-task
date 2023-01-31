
function get() {
    var windowSize = window.innerHeight;
    var scrollSize = window.scrollY;
    if (scrollSize >= windowSize) {
        document.getElementById('header').classList.add('addstyle');
    } else {
        document.getElementById('header').classList.remove('addstyle');
    }
}

setInterval(() => {
    get();
}, 100);