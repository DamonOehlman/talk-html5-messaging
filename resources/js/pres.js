(function (glob) {
  function debug() {
      return function() {};
  }
  
  $(function() {
      $('section[data-bg]').each(function() {
          var el = $(this),
              bgImage = el.data('bg') || el.attr('data-bg');
          
          el.css('background-image', 'url(' + bgImage + ')');
      });
  });
  
  /*
  shout('html5-messaging', {
      server: 'ws://localhost:8000/',
      pcode:  1234,
      keymap: 'reveal.js'
  });
  */
  
  var url = 'http://localhost:5984/presentations/_changes?feed=eventsource',
      remoteEvents = new EventSource(url);
      
  console.log(remoteEvents);
  
  
   if (typeof pres != 'undefined') glob.pres = pres;
})(this);