import Core, {_, $} from "./Core";
import ResizeSystem from "absol/src/HTML5/ResizeSystem";
import CViewBox from "../controller/CViewBox";
import '../../css/svg.css';


/***
 * @augments AElementNS
 * @augments SVGElement
 * @constructor
 */
function SvgViewBox() {
    this.box = new CViewBox(this);
    this.$attachhook = $('sattachhook', this)
        .on('attached', this.eventHandler.svgAttached);
    this.$attachhook.requestUpdateSize = this.eventHandler.requestUpdateSize;
}


SvgViewBox.tag = 'SvgViewBox'.toLowerCase();

SvgViewBox.render = function () {
    return _({
        tag: 'svg',
        class: 'ag-view-box',
        child: ['sattachhook']
    });
};


SvgViewBox.eventHandler = {};

/***
 * @this SvgViewBox
 */
SvgViewBox.eventHandler.requestUpdateSize = function () {
    this.box.updateClientRect();
};


/***
 * @this SvgViewBox
 */
SvgViewBox.eventHandler.svgAttached = function () {
    this.box.updateClientRect();
    ResizeSystem.add(this.$attachhook);
};


export default SvgViewBox;