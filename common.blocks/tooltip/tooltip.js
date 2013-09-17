modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, DOM) {

DOM.decl('tooltip', {

    onSetMod: {
        js: {
            inited: function() {
                this._massage = this.params && this.params.massage || '';
            }
        },

        visible: {
            true : function() {

                this._drawPopup();
                this.bindToWin('scroll resize', this._updatePopupPosition);
            },

            '': function() {

                this._getPopup().hide();
                this.unbindFromWin('scroll resize');
            }
        }

    },

    setMessage : function(massage) {

        this._massage = massage;
        if (this._popup)
            DOM.update(this.findElem(this._popup.domElem, 'text'), massage);

        return this;
    },

    _drawPopup : function() {
        var popup = this._getPopup();
        this._updatePopupPosition();
        popup.show();
    },

    _getPopup : function() {

		if(this._popup)
			return this._popup;

        var popupMods =  this.params &&  this.params.popupMods || {},
            popup = {
            block: 'popup',
            mods: $.extend({ to: this._getSide() }, popupMods ),
            content: { block: 'tooltip', elem: 'text', tag: 'span', content: this._massage }
        };

		this._popup = this.findBlockOn($(BEMHTML.apply(popup)), 'popup');
		DOM.append('body', this._popup.domElem);
		return this._popup
	},

    _getPopupPosition: function() {

        var side = this._getSide(),
            windowWidth = this.__self.win.width(),
            offset = this.domElem.offset(),
            blockOuterWidth = this.domElem.outerWidth(),
            //blockInnerWidth = this.domElem.innerWidth(),
            margin = this.__self.MARGIN,
            popupWidth = this._getPopup().domElem.outerWidth(),
            popupHeight = this._getPopup().domElem.outerHeight(),
            rightOffset = windowWidth - blockOuterWidth - margin - offset.left,
            leftOffset = windowWidth - margin - offset.left;


        if(side == 'right' && rightOffset < popupWidth && rightOffset < leftOffset)
            side = 'left';

        if(side == 'left' && leftOffset < popupWidth && rightOffset > leftOffset)
            side = 'right';

        this._getPopup().setMod('to', side);
		side == 'right'?
            offset.left += blockOuterWidth + margin:
            offset.left -= (margin + popupWidth);
        offset.top -= popupHeight / 8;
        return offset;
    },

    _updatePopupPosition : function() {

        this._getPopup().domElem.css(this._getPopupPosition());
	},

    _getSide : function() {

        return this.params && this.params.to || 'right';
    }

}, {

    live : function() {

        return false
    },
    MARGIN: 15
});

provide(DOM);

});
