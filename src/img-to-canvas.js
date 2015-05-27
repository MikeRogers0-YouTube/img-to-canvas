/*!
  img-to-canvas 1.0.0 - 27h May 2015
  license: MIT
  @MikeRogers0
  */
(function ( $ ) {
  'use strict';

  $.fn.imgToCanvas = function( options_override ) {
    var options = $.extend({
    }, options_override);

    $(this).each(function(){
      var img = new Image(),
      width = $(this).width(),
      height = $(this).height(),
      element = $(this);

      // When the images is loaded, resize it in canvas.
      img.onload = function(){
        var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height= height;

        // draw the img into canvas
        ctx.drawImage(this, 0, 0, width, height);

        element.after(canvas);
        element.remove();
      };

      img.src = element.attr("src");

    });
  };

}(window.jQuery || window.Zepto || window.$)); // jQuery or jQuery-like library, such as Zepto 
