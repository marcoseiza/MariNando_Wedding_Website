/**
 * jQuery Draggable Touch v0.5
 * Jonatan Heyman | http://heyman.info 
 *
 * Make HTML elements draggable by using uses touch events.
 * The plugin also has a fallback that uses mouse events, 
 * in case the device doesn't support touch events.
 * 
 * Licenced under THE BEER-WARE LICENSE (Revision 42):
 * Jonatan Heyman (http://heyman.info) wrote this file. As long as you retain this 
 * notice you can do whatever you want with this stuff. If we meet some day, and 
 * you think this stuff is worth it, you can buy me a beer in return.
 */
;(function($){
    $.fn.draggableTouch = function(action) {
        // check if the device has touch support, and if not, fallback to use mouse
        // draggableMouse which uses mouse events
        
        // check if we shall make it not draggable
        if (action == "disable") {
            this.unbind("touchstart");
            this.unbind("touchmove");
            this.unbind("touchend");
            this.unbind("touchcancel");
            return this;
        }

        var hor = (action.axis == "x")? true: (action.axis == "y")? false: action.axis;
        var cancel = action.cancel.split(", ");
        var containment = (action.containment == "parent");

        
        this.each(function() {
            var element = $(this);
            var offset = null;
            
            var end = function(e) {
                e.preventDefault();
                var orig = e.originalEvent;
                $(this).removeClass("ui-draggable-dragging");
                
                element.trigger("dragend", {
                    top: (hor)? 0: orig.changedTouches[0].pageY - offset.y,
                    left: (hor)? orig.changedTouches[0].pageX - offset.x: 0
                });
            };
            
            element.bind("touchstart", function(e) {
                var orig = e.originalEvent;
                var pos = $(this).position();
                
                offset = {
                    x: (hor)? orig.changedTouches[0].pageX - pos.left: 0,
                    y: (hor)? 0: orig.changedTouches[0].pageY - pos.top
                };
                element.trigger("dragstart", pos);
            });

            element.bind("touchmove", function(e) {
                e.preventDefault();
                var orig = e.originalEvent;
                $(this).addClass("ui-draggable-dragging");
                
                // do now allow two touch points to drag the same element
                if (orig.targetTouches.length > 1)
                    return;

                for (let i = 0; i < cancel.length; i++) {
                    if (orig.path.includes(document.querySelector(cancel[i])))
                      return
                }
                
                $(this).css({
                    top: (hor)? 0: orig.changedTouches[0].pageY - offset.y,
                    left: (hor)? orig.changedTouches[0].pageX - offset.x: 0
                });

                if (containment) {
                  let l = parseFloat(this.style.left),
                      t = parseFloat(this.style.top),
                      mw = this.parentElement.offsetWidth - this.offsetWidth,
                      mh = this.parentElement.offsetHeight - this.offsetHeight
                      ;
                  if (hor) {
                    if (l > mw - 2)
                      this.style.left = mw + "px";

                    if (l < 0)
                      this.style.left = 0;
                  } else {
                    if (t > mh - 2)
                    this.style.left = mh + "px";

                    if (t < 0)
                      this.style.left = 0;
                  }

                }
            });
            element.bind("touchend", end);
            element.bind("touchcancel", end);
        });
        return this;
    };
})(jQuery);
