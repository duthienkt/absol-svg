import Vec2 from "absol/src/Math/Vec2";

/***
 *
 * @param {SvgViewBox}  $svg
 * @constructor
 */
function CViewBox($svg) {
    this.$svg = $svg;
    this.clientRect = {
        width: 0,
        height: 0
    };

    this.viewBox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    this._zoom = 1;
    this._origin = new Vec2(0, 0);
}

/***
 *
 * @param {Vec2} v
 * @return Vec2
 */
CViewBox.prototype.screen2view = function (v){
  return v.div(this._zoom).sub(this._origin);
};


/***
 *
 * @param {Vec2} v
 * @return Vec2
 */
CViewBox.prototype.view2screen = function (v){
    return v.add(this._origin).mult(this._zoom);
};

CViewBox.prototype.updateClientRect = function () {
    var bound = this.$svg.getBoundingClientRect();
    this.clientRect.width = bound.width;
    this.clientRect.height = bound.height;
    this.updateViewBox();
};

CViewBox.prototype.updateViewBox = function () {
    var o = this._origin;
    var cRect = this.clientRect;
    var zoom = this._zoom;
    var viewBox = this.viewBox;
    viewBox.x = -o.x / this.zoom;
    viewBox.y = -o.y / zoom;
    viewBox.width = cRect.width / zoom;
    viewBox.height = cRect.height / zoom;
    this.$svg.attr('viewBox', [viewBox.x, viewBox.y, viewBox.width, viewBox.height].join(' '));
};


Object.defineProperty(CViewBox.prototype, 'zoom', {
    set: function (val) {
        this._zoom = val;
        this.updateViewBox();
    },
    get: function () {
        return this._zoom;
    }
});


Object.defineProperty(CViewBox.prototype, 'origin', {
    set: function (val) {
        this._origin = val;
        this.updateViewBox();
    },
    get: function () {
        return this._zoom;
    }
});


export default CViewBox;