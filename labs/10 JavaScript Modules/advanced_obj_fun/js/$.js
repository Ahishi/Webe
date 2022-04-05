(function (window) {
    'use strict';
    function $() {
    }

    this.id = function (getID) {
        return document.getElementById(getID);
    };

    window.app = window.app || {};
    window.app.$ = $;
})(window);