
import Vec2 from 'absol/src/Math/Vec2';

/**
 * 
 * @param {Array<Array<Number>>} points 
 * @param {Number} strong 
 * @param {Number} free 
 */
export function autoCurve(points, strong, free) {
    if (!(strong > 0)) strong = 0.5;
    if (points.length == 0) {
        return '';
    };
    var paddingLeft = points[0].slice();
    var paddingRight = points[points.length - 1].slice();
    if (typeof free == "number") {
        paddingLeft[0] -= (points[1][0] - points[0][0]) * free;
        paddingLeft[1] -= (points[1][1] - points[0][1]) * free;

        paddingRight[0] += (points[points.length - 1][0] - points[points.length - 2][0]) * free;
        paddingRight[1] += (points[points.length - 1][1] - points[points.length - 2][1]) * free;
    }
    else if (free instanceof Array) {
        paddingLeft[0] -= free[0][0];
        paddingLeft[1] -= free[0][1];

        paddingRight[0] += free[1][0];
        paddingRight[1] += free[1][1];
    }
    points = [paddingLeft].concat(points).concat([paddingRight]);
    var Cs = [];
    Cs.push('M' + points[1].join(' '));

    for (var i = 1; i < points.length - 2; ++i) {
        var A = Vec2.make(points[i - 1]);
        var B = Vec2.make(points[i]);
        var C = Vec2.make(points[i + 1]);
        var D = Vec2.make(points[i + 2]);
        var AB = B.sub(A);
        var BC = C.sub(B);
        var CB = BC.inv();
        var DC = C.sub(D);
        var lAB = AB.abs();
        var lBC = BC.abs();
        var lDC = DC.abs();
        var lCB = lBC;
        var h1 = Math.sqrt(lAB * lBC);
        var h2 = Math.sqrt(lBC * lDC);
        if (h1 == 0) h1 = 1;
        if (h2 == 0) h2 = 1;

        var N1 = (AB.normalized()).add(BC.normalized()).normalized();
        var N2 = (CB.normalized()).add(DC.normalized()).normalized();

        var lN1 = lBC == 0 ? 0 : lBC * (N1.dot(BC) / (N1.abs() * BC.abs())) * h1 / (h1 + h2) * strong;
        var lN2 = lCB == 0 ? 0 : lCB * (N2.dot(CB) / (N2.abs() * CB.abs())) * h2 / (h1 + h2) * strong;
        N1 = N1.mult(lN1);
        N2 = N2.mult(lN2);
        var P1 = B.add(N1);
        var P2 = C.add(N2);
        var x1 = P1.x;
        var y1 = P1.y;
        var x2 = P2.x;
        var y2 = P2.y;
        var x = C.x;
        var y = C.y;
        Cs.push('C ' + x1 + ' ' + y1 + ', ' + x2 + ' ' + y2 + ', ' + x + ' ' + y);
    }
    return Cs.join('');
};
