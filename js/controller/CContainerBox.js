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
        return this.width;
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


export default CContainerBox;