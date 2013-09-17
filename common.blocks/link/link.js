modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('link', {

}, {
    live : function() {
        return false
    }
});


provide(DOM);

});
