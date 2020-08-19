import Core from "./Core";
import AElementNS from "absol/src/HTML5/AElementNS";
import Turtle from "../controller/Turtle";


var _ = Core._;
var $ = Core.$;


/***
 * @extends {AElementNS}
 * @constructor
 */
function Shape() {
    this._turtle = new Turtle();
}

Shape.tag = 'shape';
Shape.render = function () {
    return _('path');
};

/***
 *
 * @return {Shape}
 */
Shape.prototype.begin = function () {
    this._turtle.reset();
    return this;
};

/***
 *
 * @return {Shape}
 */
Shape.prototype.end = function () {
    this.attr('d', this._turtle.getPath());
    return this;
};

/***
 *
 * @param {Number} angle - degree
 *  @returns {Shape}
 */
Shape.prototype.rotateDirTo = function (angle) {
    this._turtle.rotateDirTo(angle);
    return this;
};

/***
 *
 * @param {Number} dAngle
 * @returns {Shape}
 */
Shape.prototype.rotateDirBy = function (dAngle) {
    this._turtle.rotateDirBy(dAngle);
    return this;
};


/***
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Shape}
 */
Shape.prototype.moveTo = function (x, y) {
    this._turtle.moveTo(x, y);
    return this;
};

/***
 *
 * @param {Number} dx
 * @param {Number} dy
 * @return {Shape}
 */
Shape.prototype.moveBy = function (dx, dy) {
    this._turtle.moveBy(dx, dy);
    return this;
};

/***
 *
 * @return {Shape}
 */
Shape.prototype.closePath = function () {
    this._turtle.closePath();
    return this;
}

/***
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Shape}
 */
Shape.prototype.lineTo = function (x, y) {
    this._turtle.lineTo(x, y);
    return this;
};

/***
 *
 * @param {Number} dx
 * @param {Number} dy
 * @return {Shape}
 */
Shape.prototype.lineBy = function (dx, dy) {
    this._turtle.lineBy(dx, dy);
    return this;
};

/***
 *
 * @param {Number} x
 * @return {Shape}
 */
Shape.prototype.hLineTo = function (x) {
    this._turtle.hLineTo(x);
    return this;
};

/***
 *
 * @param {Number} dx
 * @return {Shape}
 */
Shape.prototype.hLineBy = function (dx) {
    this._turtle.hLineBy(x);
    return this;
};


/***
 *
 * @param {Number} y
 * @return {Shape}
 */
Shape.prototype.vLineTo = function (y) {
    this._turtle.vLineTo(y);
    return this;
};

/***
 *
 * @param {Number} dy
 * @return {Shape}
 */
Shape.prototype.vLineBy = function (dy) {
    this._turtle.vLineBy(dy);
    return this;
};


/**
 * @param {Number} c1x
 * @param {Number} c1y
 * @param {Number} c2x
 * @param {Number} c2y
 * @param {Number} x
 * @param {Number} y
 * @returns {Shape}
 */
Shape.prototype.cubicBezierTo = function (c1x, c1y, c2x, c2y, x, y) {
    this._turtle.cubicBezierTo(c1x, c1y, c2x, c2y, x, y);
    return this;
};


/**
 * @param {Number} c1dx
 * @param {Number} c1dy
 * @param {Number} c2dx
 * @param {Number} c2dy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Shape}
 */
Shape.prototype.cubicBezierBy = function (c1dx, c1dy, c2dx, c2dy, dx, dy) {
    this._turtle.cubicBezierBy(c1dx, c1dy, c2dx, c2dy, dx, dy);
    return this;
};


/**
 * @param {Number} c2x
 * @param {Number} c2y
 * @param {Number} x
 * @param {Number} y
 * @returns {Shape}
 */
Shape.prototype.smoothCubicBezierTo = function (c2x, c2y, x, y) {
    this._turtle.smoothCubicBezierTo(c2x, c2y, x, y);
    return this;
};


/**
 * @param {Number} c2dx
 * @param {Number} c2dy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Shape}
 */
Shape.prototype.smoothCubicBezierBy = function (c2dx, c2dy, dx, dy) {
    this._turtle.smoothCubicBezierBy(c2dx, c2dy, dx, dy);
    return this;
};


/**
 * @param {Number} cx
 * @param {Number} cy
 * @param {Number} x
 * @param {Number} y
 * @returns {Shape}
 */
Shape.prototype.quadraticBezierTo = function (cx, cy, x, y) {
    this._turtle.quadraticBezierTo(cx, cy, x, y);
    return this;
};


/**
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Shape}
 */
Shape.prototype.quadraticBezierBy = function (cdx, cdy, dx, dy) {
    this._turtle.quadraticBezierBy(cdx, cdy, dx, dy);
    return this;
};


/**
 * @param {Number} cx
 * @param {Number} cy
 * @param {Number} x
 * @param {Number} y
 * @returns {Shape}
 */
Shape.prototype.smoothQuadraticBezierTo = function (cx, cy, x, y) {
    this._turtle.smoothQuadraticBezierTo(cx, cy, x, y);
    return this;
};


/**
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Shape}
 */
Shape.prototype.smoothQuadraticBezierBy = function (cdx, cdy, dx, dy) {
    this._turtle.smoothQuadraticBezierBy(cdx, cdy, dx, dy);
    return this;
};


/***
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} lf
 * @param {Number} sf
 * @param {Number} xRotate
 * @return {Shape}
 */
Shape.prototype.arcTo = function (x, y, rx, ry, lf, sf, xRotate) {
    ry = ry || rx;
    lf = lf || 0;
    sf = sf || 0;
    xRotate = xRotate || 0;
    this._turtle.arcTo(rx, ry, xRotate, lf, sf, x, y);
    return this;
};


/***
 *
 * @param {Number} dx
 * @param {Number} yd
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} lf
 * @param {Number} sf
 * @param {Number} xRotate
 * @return {Shape}
 */
Shape.prototype.arcBy = function (dx, yd, rx, ry, lf, sf, xRotate) {
    ry = ry || rx;
    lf = lf || 0;
    sf = sf || 0;
    xRotate = xRotate || 0;
    this._turtle.arcBy(rx, ry, xRotate, lf, sf, dx, yd);
    return this;
};


/***
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} x0
 * @param {Number} y0
 * @param {Number} x1
 * @param {Number} y1
 * @return {Shape}
 */
Shape.prototype.curveTo = function (x, y, x0, y0, x1, y1) {
    this._turtle.cubicBezierTo(x0, y0, x1, y1, x, y);
    return this;
};

Core.install('shape', Shape);
export default Shape;