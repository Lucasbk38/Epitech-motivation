var main = document.querySelector('main');
var sections = Array.from(main.children);
var _a = document.querySelectorAll('button'), previousBtn = _a[0], nextBtn = _a[1];
var shown = 0;
var update = function (delta) {
    if (!(0 <= shown + delta && shown + delta < sections.length))
        return;
    var nextShown = shown + delta;
    previousBtn.classList.toggle('disabled', nextShown === 0);
    nextBtn.classList.toggle('disabled', nextShown === sections.length - 1);
    if (delta === 0)
        sections.slice(1).forEach(function (section) { return section.style.display = 'none'; });
    else {
        var toHide_1 = sections[shown];
        var toShow_1 = sections[nextShown];
        toHide_1.style.opacity = '0';
        toShow_1.style.opacity = '0';
        setTimeout(function () {
            toHide_1.style.display = 'none';
            toShow_1.style.display = '';
            setTimeout(function () {
                toShow_1.style.opacity = '1';
            }, 500);
        }, 500);
    }
    shown = nextShown;
};
previousBtn.onclick = function () { return update(-1); };
nextBtn.onclick = function () { return update(+1); };
update(0);
window.addEventListener('keyup', function (_a) {
    var key = _a.key;
    if (['q', 'ArrowLeft', 'ArrowUp', 'Backspace'].includes(key))
        update(-1);
    if (['d', 'ArrowRight', 'ArrowDown', 'Enter', ' '].includes(key))
        update(+1);
});
//# sourceMappingURL=index.js.map