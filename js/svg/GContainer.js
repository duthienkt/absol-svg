import Core from "./Core";
import CContainerBox from "../controller/CContainerBox";


var _ = Core._;
var $ = Core.$;

/***
 * @extends {AElementNS}
 * @constructor
 */
function GContainer() {
    this.box = new CContainerBox(this);
}

GContainer.tag = 'gcontainer';
GContainer.render = function () {
    return _('g');
};


Core.install(GContainer);

export default GContainer;