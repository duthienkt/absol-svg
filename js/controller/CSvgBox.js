/***
 *
 * @param {SvgCanvas} $svg
 * @constructor
 */
function CSvgBox($svg) {
    this.$svg = $svg;
    this._width = 0;
    this._height = 0;
    this.width = 0;
    this.height = 0;

}

/***
 *
 * @param {number} width
 * @param {number} height
 */
CSvgBox.prototype.setSize = function (width, height) {
    this.$svg.attr('width', width + '');
    this.$svg.attr('height', height + '');
    this.$svg.attr('viewBox', [0.5, 0.5, width, height].join(' '));
    this._width = width;
    this._height = height;
};

Object.defineProperty(CSvgBox.prototype, 'width', {
    /***
     *
     * @param {Number} width
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

Object.defineProperty(CSvgBox.prototype, 'height', {
    /***
     *
     * @param {Number} height
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


Object.defineProperty(CSvgBox.prototype, 'size', {
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


export default CSvgBox;