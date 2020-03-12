import Core from "./Core";


var _ = Core._;
var $ = Core.$;


function Grid() {
    this._width = 0;
    this._height = 0;
    this._itemMargin = 0;
    this._padding = 0;
    this.$content = $('.ag-grid-content', this);
    this.$box = $('rect.ag-grid-box', this);
}


Grid.prototype.updateSize = function () {
    // this.
    var children = Array.prototype.slice.call(this.$content.children);
    var bBoxes = children.map(function (e) {
        return e.getBBox();
    });
    var maxWidth = bBoxes.reduce(function (ac, cr) {
        return Math.max(ac, cr.width);
    }, 0);
    var maxHeight = bBoxes.reduce(function (ac, cr) {
        return Math.max(ac, cr.height);
    }, 0);
};


['addChild', 'clearChild', 'removeChild', 'addChildBefore', 'findChildBefore', 'findChildAfter'].forEach(function (name) {
    Grid.prototype[name] = function () {
        return this.$content;
    }
});

Grid.render = function () {
    return _({
        class: 'ag-grid',
        child: [
            'rect.ag-grid-box',
            '.ag-grid-content'
        ]
    });
};

Grid.attribute = {};

Grid.attribute.width = {
    set: function (value) {
        value = parseFloat(value);
        this._width = value;
    },
    get: function () {
        return this._width;
    },
    remove: function () {
        this.attr('width', 0);
    }
};

Grid.attribute.height = {
    set: function (value) {
        value = parseFloat(value);
        this._height = value;
    },
    get: function () {
        return this._height;
    },
    remove: function () {
        this.attr('height', 0);
    }
};

Core.install('grid', Grid);

export default Grid;