import Core from "./Core";


var _ = Core._;
var $ = Core.$;

function Container(){

}

Container.render = function(){
    return _('g.ag-container');
};

// Container.attr()



Core.install('container', Container);
export default Container;