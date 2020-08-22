"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var Navigation = function () {
    return (react_1["default"].createElement(core_1.AppBar, { position: 'static' },
        react_1["default"].createElement(core_1.Toolbar, null,
            react_1["default"].createElement(core_1.IconButton, null,
                react_1["default"].createElement(icons_1.Menu, null)))));
};
exports["default"] = Navigation;
;
