import ASvg from ".";

import absol from 'absol';
import install from "./js/svg/install";

window.absol = window.absol || absol;
install(absol.coreSvg);
install(absol.coreDom);
absol.ASvg = ASvg;
window.ASvg = ASvg;