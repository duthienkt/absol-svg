import Core from "./Core";
import AElementNS from "absol/src/HTML5/AElementNS";
import ResizeSystem from "absol/src/HTML5/ResizeSystem";
import CSvgBox from "../controller/CSvgBox";

var _ = Core._;
var $ = Core.$;


/***
 * @extends AElementNS
 * @constructor
 */
function SvgCanvas() {
    var thisSC = this;
    this.box = new CSvgBox(this);
    this.$attachhook = $('sattachhook', this)
        .on('attached', this.eventHandler.svgAttached);
    this.$attachhook.requestUpdateSize = function (){
        thisSC.updateSize();
    }
}


SvgCanvas.tag = 'svgcanvas';

SvgCanvas.render = function () {
    return _({
        tag: 'svg',
        class:'ag-canvas',
        child: 'sattachhook'
    });
};

SvgCanvas.prototype.clearChild = function () {
    while (this.lastChild && this.lastChild !== this.$attachhook) {
        this.removeChild(this.firstChild);
    }
    return this;
};

SvgCanvas.prototype._updateCanvasSize = function () {
    var bound = this.getBoundingClientRect();
    var width = bound.width;
    var height = bound.height;
    this.box.setSize(width, height);
};



SvgCanvas.prototype.updateSize = function (){
    this._updateCanvasSize();
};

/***
 * @type {SvgCanvas}
 */
SvgCanvas.eventHandler = {};

SvgCanvas.eventHandler.svgAttached = function (){
    ResizeSystem.add(this.$attachhook);
    this.updateSize();
}

Core.install(SvgCanvas);

export default SvgCanvas;