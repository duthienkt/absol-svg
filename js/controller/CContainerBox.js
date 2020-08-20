import CSvgBox from "./CSvgBox";

/***
 *
 * @param {GContainer} $g
 * @constructor
 */
function CContainerBox($g) {
    this.$g = $g;
    this._width = 0;
    this._height = 0;
    this._x = 0;
    this._y = 0;
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
}

/***
 *
 * @param {number} width
 * @param {number} height
 * @returns {CContainerBox}
 */
CContainerBox.prototype.setSize = function (width, height) {
    this._width = width;
    this._height = height;
    return this;
};

/***
 *
 * @param {number} x
 * @param {number} y
 * @returns {CContainerBox}
 */
CContainerBox.prototype.setPosition = function (x, y) {
    if (x === 0 && y === 0) {
    }
    else {
        this.$g.attr('transform', 'translate(' + x + ',' + y + ')');
    }
    this._x = x;
    this._y = y;
};


Object.defineProperty(CContainerBox.prototype, 'width', {
    /***
     *
     * @param {number} width
     */
    set: function (width) {
        this.setSize(width, this._height);
    },
    /***
     *
     * @return {number}
     */
    get: function () {
        return this._width;
    }
});

Object.defineProperty(CContainerBox.prototype, 'height', {
    /***
     *
     * @param {number} height
     */
    set: function (height) {
        this.setSize(this._width, height);
    },
    /***
     *
     * @return {number}
     */
    get: function () {
        return this._height;
    }
});


Object.defineProperty(CContainerBox.prototype, 'size', {
    /***
     *
     * @param {{width: number, height:number}} size
     */
    set: function (size) {
        this.setSize(size.width, size.height);
    },
    /***
     *
     * @return {{width: number, height: number}}
     */
    get: function () {
        return { width: this._width, height: this._height };
    }
});

Object.defineProperty(CContainerBox.prototype, 'x', {
    /***
     *
     * @param {number} x
     */
    set: function (x) {
        this.setPosition(x, this._y);
    },
    /***
     *
     * @return {number}
     */
    get: function () {
        return this._x;
    }
});

Object.defineProperty(CContainerBox.prototype, 'y', {
    /***
     *
     * @param {number} y
     */
    set: function (y) {
        this.setPosition(this._x, y);
    },
    /***
     *
     * @return {number}
     */
    get: function () {
        return this._y;
    }
});


Object.defineProperty(CContainerBox.prototype, 'position', {
    /***
     *
     * @param {{x: number, y:number}} position
     */
    set: function (position) {
        this.setPosition(position.x, position.y);
    },
    /***
     *
     * @return {{x: number, y:number}}
     */
    get: function () {
        return { x: this._x, y: this._y };
    }
});

export default CContainerBox;