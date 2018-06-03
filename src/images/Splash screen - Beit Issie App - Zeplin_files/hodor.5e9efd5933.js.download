/* eslint-disable strict, no-eval */

(function () {
    "use strict";

    function supportEsClass() {
        try {
            eval("class Test {}");
            return true;
        } catch (err) {
            return false;
        }
    }

    if (!Object.assign ||
        !Array.from ||
        !Array.prototype.find ||
        !Array.prototype.findIndex ||
        !String.prototype.startsWith ||
        !window.CSS ||
        !supportEsClass()) {
        location.replace("/hodor");
    }
}());
