/** @requires BEMBEM */
/** @requires BEM.DOM */

modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('popup', {

    onSetMod : {

        'js' : function() {
            /* ... */
            this._owner = null;
        },

        'visibility' : function(modName, modVal) {
        	modVal === 'visible' ? this._onShowed() : this._onHide() 
        }

    },

    show : function(owner) {

    	owner && (this._owner = owner);
    	this.setMod('visibility', 'visible');
        this.trigger('show');
    	return this;
    },

    hide : function() {

    	this.delMod('visibility');
    	this.trigger('hide');
    	return this;
    },

    _onDocEvent : function(e) {

    	var targetDom = $(e.target),
    		isAutoclosable = this.hasMod('autoclosable');

    	isAutoclosable && e.keyCode === 27 && this.hide();
    	isAutoclosable &&
            !this.containsDomElem(targetDom) &&
            !this._owner.containsDomElem(targetDom) &&
            (this.hide(), this.trigger('outside-click'));
    },

    _onShowed : function() {

    	this.bindToDoc('pointerclick keydown', function(e){this._onDocEvent(e);});
    },

    _onHide : function() {

    	this.unbindFromDoc('pointerclick');
    	this.unbindFromDoc('keydown');
    }

}, {

    live : function() {
    	return true
    }

});


provide(DOM);

});