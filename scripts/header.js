if (650 >= window.innerWidth) {
    alert('申し訳ございません。\nスマホにはまだ対応しておりません。\nおとなしくお待ちやがれください。')
}
function get() {
    var windowSize = window.innerHeight;
    var scrollSize = window.scrollY;
    if (scrollSize >= windowSize) {
        document.getElementById('header').classList.add('addstyle');
    } else {
        document.getElementById('header').classList.remove('addstyle');
    }
    if (650 >= window.innerWidth) {
        document.getElementById('all').style.display = "none";
    } else {
        document.getElementById('all').style.display = "block";
    }
}

setInterval(() => {
    get();
}, 100);