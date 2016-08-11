"use strict";
const j2c_1 = require('j2c');
let style = '';
function cleanStyle(s) {
    return s.replace(/\n/g, '');
}
function attach(...s) {
    const scoped = j2c_1.sheet(s);
    style += scoped;
    return scoped;
}
exports.attach = attach;
function dispatchStyle(clean = true) {
    if (!clean) {
        return <style>{style}</style>;
    }
    return <style>{cleanStyle(style)}</style>;
}
exports.dispatchStyle = dispatchStyle;
function styled(target) {
    if (typeof target.computedStyle === 'function') {
        target.style = attach(target.componentStyle());
    }
    else {
        target.style = {};
    }
}
exports.styled = styled;
//# sourceMappingURL=styler.jsx.map