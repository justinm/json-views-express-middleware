"use strict";
function middleware(view) {
    return function (req, res, next) {
        res.view = function (descriptorName, data) {
            res.send(view.view(descriptorName, data));
        };
        next(null);
    };
}
exports.middleware = middleware;
