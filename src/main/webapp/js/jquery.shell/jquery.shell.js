(function($){
  var histList = [""],
          histPos = 0,
          _win, // a top-level context
          question,
          _in,
          _out,
          tooManyMatches = null,
          lastError = null;

  /**
   * added a log function for development
   */
  var log = function(msg, a, b, c){
    if (typeof console !== "undefined") console.log('%s: ' + msg, a || '', b || '', c || ''); //, "%s: %o", this
    return this;
  }
  $.log = log;
  $.fn.log = log;


  $.fn.shell = function(cfg){
    log('initializing shell - id: #%d', this.attr('id'))

    shell = this;

    $('<div id="output" class="output"></div>').appendTo(this);
    $('<textarea id="input" class="input" wrap="off" rows="1"></textarea>').appendTo(this).keydown(inputKeydown)
    init();
  }


})(jQuery);