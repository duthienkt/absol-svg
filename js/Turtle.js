import Vec2 from 'absol/src/Math/Vec2';

/**
 * @typedef {TurtleCommand}
 * @property {String} cmd
 * @property {String} action
 * @property {Array<Number>} args
 * @property {Vec2} dest
 * @property {Vec2} tangent
 */


function Turtle() {
    /**
     * @type {Array<TurtleCommand>}
     */
    this._commands = [];
    this._lastCommandName = null;
    /**
     * @type {Vec2}
     */
    this._pos = new Vec2(0, 0);
    /**
     * @type {Vec2}
     */
    this._startPos = this._pos;
    /**
     * @type {Vec2}
     */
    this._tangent = new Vec2(0, 0);
}

/**
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.moveBy = function (dx, dy) {
    this._pos = this._pos.add(new Vec2(dx, dy));
    this._tangent = new Vec2(dx, dy);
    this._startPos = this._pos;
    this._commands.push({
        cmd: 'm',
        action: 'moveBy',
        args: [dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.moveTo = function (x, y) {
    this._tangent = this._pos;
    this._pos = new Vec2(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._startPos = this._pos;
    this._commands.push({
        cmd: 'M',
        action: 'moveTo',
        args: [x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};




/**
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.lineBy = function (dx, dy) {
    this._tangent = new Vec2(x, y);
    this._pos = this._pos.add(this._startPos);
    this._commands.push({
        cmd: 'l',
        action: 'lineBy',
        args: [dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.lineTo = function (x, y) {
    this._tangent = this._pos;
    this._pos = new Vec2(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'L',
        action: 'lineTo',
        args: [x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.lineBy = function (dx, dy) {
    this._tangent = new Vec2(dx, dy);
    this._pos = this._pos.add(this._startPos);
    this._commands.push({
        cmd: 'l',
        action: 'lineBy',
        args: [dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};



/**
 * @param {Number} x
 * @returns {Turtle}
 */
Turtle.prototype.hLineTo = function (x) {
    this._tangent = this._pos;
    this._pos = new Vec2(x, this._pos.y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'H',
        action: 'hLineTo',
        args: [x],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};

/**
 * @param {Number} x
 * @returns {Turtle}
 */
Turtle.prototype.hLineBy = function (x) {
    this._tangent = new Vec2(x, 0);
    this._pos = this._pos.add(new Vec2(x, 0));
    this._commands.push({
        cmd: 'h',
        action: 'hLineBy',
        args: [x],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.vLineTo = function (y) {
    this._tangent = this._pos;
    this._pos = new Vec2(this._pos.x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'V',
        action: 'vLineTo',
        args: [y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};

/**
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.vLineBy = function (y) {
    this._tangent = new Vec2(0, y);
    this._pos = this._pos.add(new Vec2(0, y));
    this._commands.push({
        cmd: 'v',
        action: 'vLineBy',
        args: [y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};

/**
 * @param {Number} c1x
 * @param {Number} c1y
 * @param {Number} c2x
 * @param {Number} c2y
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.cubicBezierTo = function (c1x, c1y, c2x, c2y, x, y) {
    this._tangent = new Vec2(c2x, c2y);
    this._pos = new Vec2(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'C',
        action: 'cubicBezierTo',
        args: [c1x, c1y, c2x, c2y, x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} c1dx
 * @param {Number} c1dy
 * @param {Number} c2dx
 * @param {Number} c2dy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.cubicBezierBy = function (c1dx, c1dy, c2dx, c2dy, dx, dy) {
    this._tangent = this._pos.add(new Vec2(c2dx, c2dy));
    this._pos = new Vec2(dx, dy);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'c',
        action: 'cubicBezierBy',
        args: [c1dx, c1dy, c2dx, c2dy, dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};




/**
 * @param {Number} c2x
 * @param {Number} c2y
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.smoothCubicBezierTo = function (c2x, c2y, x, y) {
    this._tangent = new Vec2(c2x, c2y);
    this._pos = new Vec2(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'S',
        action: 'smoothCubicBezierTo',
        args: [c2x, c2y, x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};



/**
 * @param {Number} c2dx
 * @param {Number} c2dy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.smoothCubicBezierBy = function (c2dx, c2dy, dx, dy) {
    this._tangent = this._pos.add(new Vec2(c2dx, c2dy));
    this._pos = new Vec2(dx, dy);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 's',
        action: 'smoothCubicBezierBy',
        args: [c2dx, c2dy, dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};



/**
 * @param {Number} cx
 * @param {Number} cy
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.quadraticBezierTo = function (cx, cy, x, y) {
    this._tangent = new Vec(cx, cy);
    this._pos = new Vec(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'Q',
        action: 'quadraticBezierTo',
        args: [cx, cy, x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.quadraticBezierBy = function (cdx, cdy, dx, dy) {
    this._tangent = this._pos.add(new Vec(cdx, cdy));
    this._pos = new Vec(dx, dy);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'q',
        action: 'quadraticBezierBy',
        args: [cdx, cdy, dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};




/**
 * @param {Number} cx
 * @param {Number} cy
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.smoothQuadraticBezierTo = function (cx, cy, x, y) {
    this._tangent = new Vec(cx, cy);
    this._pos = new Vec(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'T',
        action: 'smoothQuadraticBezierTo',
        args: [cx, cy, x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};



/**
 * @param {Number} cdx
 * @param {Number} cdy
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.smoothQuadraticBezierBy = function (cdx, cdy, dx, dy) {
    this._tangent = this._pos.add(new Vec(cdx, cdy));
    this._pos = new Vec(dx, dy);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 't',
        action: 'smoothQuadraticBezierBy',
        args: [cdx, cdy, dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};




/**
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.arcTo = function (rx, ry, angle, large, sweep, x, y) {
    //todo: wrong_tangent
    this._tangent = this._pos;
    this._pos = new Vec2(x, y);
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'A',
        action: 'lineTo',
        args: [rx, ry, angle, large, sweep, x, y],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};


/**
 * @param {Number} dx
 * @param {Number} dy
 * @returns {Turtle}
 */
Turtle.prototype.arcBy = function (rx, ry, angle, large, sweep, dx, dy) {
    //todo: wrong_tangent
    this._tangent = new Vec2(dx, dy);
    this._pos = this._pos.add(this._startPos);
    this._commands.push({
        cmd: 'a',
        action: 'arcBy',
        args: [rx, ry, angle, large, sweep, dx, dy],
        dest: this._pos,
        tangent: this._tangent
    });
    return this;
};




/**
 * @returns {String} 
 */
Turtle.prototype.closePath = function () {
    this._tangent = this._pos;
    this._pos = this._startPos;
    this._tangent = this._pos.sub(this._tangent);
    this._commands.push({
        cmd: 'z',
        action: 'closePath',
        args: [],
        dest: this._pos
    });
    return this;
};


/**
 * @param {Number} x
 * @param {Number} y
 * @returns {Turtle}
 */
Turtle.prototype.translate = function (dx, dy) {
    var command;
    var deltaVec = new Vec2(dx, dy);
    for (var i = 0; i < this._commands.length; ++i) {
        command = this._commands[i];
        command.dest = command.dest.add(deltaVec);
        switch (command.cmd) {
            case 'M':
            case 'L':
                command.args[0] = command.dest.x;
                command.args[1] = command.dest.y;
                break;
            case 'H':
                command.args[0] = command.dest.x;
                break;
            case 'V':
                command.args[0] = command.dest.y;
                break;
            case 'C':
                command.args[0] += dx;
                command.args[1] += dy;
                command.args[2] += dx;
                command.args[3] += dy;
                command.args[4] = command.dest.x;
                command.args[5] = command.dest.y;
                break;
            case 'Q':
                command.args[0] += dx;
                command.args[1] += dy;
                command.args[3] = command.dest.x;
                command.args[4] = command.dest.y;
                break;

            case 'A':
                command.args[5] = command.dest.x;
                command.args[6] = command.dest.y;
                break;
        }

    }
    return this;
};


/**
 * @returns {String}
 */
Turtle.prototype.getPath = function () {

    return this._commands.map(function (command) {
        return command.cmd + ' ' + command.args.join(',');
    }).join(' ');
};

Turtle.prototype.clone = function () {
    var res = new Turtle();
    res._commands.push.apply(res._commands, this._commands);
    res._lastCommandName = this._commands;
    res._x = this._x;
    res._y = this._y;
    return res;
};

export default Turtle;