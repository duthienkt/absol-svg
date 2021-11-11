import Shape from "./Shape";
import Dom from "absol/src/HTML5/Dom";
import Svg from "absol/src/HTML5/Svg";
import SvgCanvas from "./SvgCanvas";
import GContainer from "./GContainer";
import SvgViewBox from "./SvgViewBox";
import GViewBoxGrid from "./GViewBoxGrid";

export var Creators = [
    Shape, SvgCanvas, GContainer, SvgViewBox,
    GViewBoxGrid
];

/***
 *
 * @param {Dom | Svg} core
 */
export default function install(core) {
    core.install(Creators);
};