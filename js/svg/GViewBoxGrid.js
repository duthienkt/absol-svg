import Core, {_, $} from "./Core";
import Turtle from "../controller/Turtle";
import '../../css/svg.css';

/***
 * @extends AElementNS
 * @constructor
 */
function GViewBoxGrid() {
    /***
     *
     * @type {null| SvgViewBox}
     */
    this.$svg = null;
    /**
     *
     * @type {AElementNS}
     */
    this.$primary = this.childNodes[0];
    /**
     *
     * @type {AElementNS}
     */
    this.$secondary = this.childNodes[1];
}

GViewBoxGrid.tag = 'GViewBoxGrid'.toLowerCase();
GViewBoxGrid.render = function () {
    return _({
        tag: 'g',
        class: 'ag-view-box-grid',
        child: [
            'path.ag-view-box-grid-primary',
            'path.ag-view-box-grid-secondary'
        ]
    });
};


GViewBoxGrid.prototype.update = function () {
    if (!this.$svg) return;
    var viewBox = this.$svg.box.viewBox;
    var clientRect = this.$svg.box.clientRect;
    var zoom = this.$svg.box.zoom;
    var primary = new Turtle();
    var secondary = new Turtle();
    var x0 = Math.floor((viewBox.x - viewBox.width) / 100) * 100;
    var y0 = Math.floor((viewBox.y - viewBox.height) / 100) * 100;
    var xM = Math.ceil((viewBox.x + viewBox.width * 2) / 100) * 100;
    var yM = Math.ceil((viewBox.y + viewBox.height * 2) / 100) * 100;
    var dy = yM - y0;
    var dx = xM - x0;
    var x = x0, y = y0;
    var i = 0;
    while (x < xM) {
        if (i % 8 === 0) {
            primary.moveTo(x, y0)
                .vLineBy(dy);
        } else {
            secondary.moveTo(x, y0)
                .vLineBy(dy);
        }
        x += 12.5;
        ++i;
    }
    i = 0;

    while (y < yM) {
        if (i % 8 === 0) {
            primary.moveTo(x0, y)
                .hLineBy(dx);
        }
        else {
            secondary.moveTo(x0, y)
                .hLineBy(dx);
        }
        y += 12.5;
    }

    this.addStyle('--zoom-rev', 1/ zoom +'')
    this.$primary.attr('d', primary.getPath());
    this.$secondary.attr('d', secondary.getPath());
};


Core.install(GViewBoxGrid);

export default GViewBoxGrid;