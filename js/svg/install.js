import Shape from "./Shape";
import Dom from "absol/src/HTML5/Dom";
import Svg from "absol/src/HTML5/Svg";

export var Creators = [
    Shape
];

/***
 *
 * @param {Dom | Svg} core
 */
export default function install(core) {
    core.install(Creators);
};