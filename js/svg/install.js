import Shape from "./Shape";
import Dom from "absol/src/HTML5/Dom";
import Svg from "absol/src/HTML5/Svg";
import SvgCanvas from "./SvgCanvas";

export var Creators = [
    Shape, SvgCanvas
];

/***
 *
 * @param {Dom | Svg} core
 */
export default function install(core) {
    core.install(Creators);
};