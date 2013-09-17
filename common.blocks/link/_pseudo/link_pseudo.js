modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({'block': 'link', 'modName': 'pseudo'}, {
    _onClick : function(e) {
        e.preventDefault();
        if (this.params.href)
            this.params.href && (window.location=this.params.href);
        this.hasMod('disabled') || this.trigger('click');
    }
}, {
    live : function() {
        this.liveBindTo({'modName': 'pseudo', 'modVal': true}, 'pointerclick', function(e) {
            this._onClick(e);
        });
    }
});

provide(DOM);

});
