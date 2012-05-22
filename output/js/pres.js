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
  
      var activeDemo = '';
      Reveal.addEventListener('slidechanged', function(evt) {
          // find the active slide
          var demo = $('section.present').data('demo');
          
          if (demo && activeDemo !== demo && window.opener) {
              window.opener.postMessage('demo.' + demo, '*');
          }
      });
  });
  
  /*
  shout('html5-messaging', {
      server: 'ws://localhost:8000/',
      pcode:  1234,
      keymap: 'reveal.js'
  });
  */
  
  var url = 'http://localhost:5984/presentations/_changes?feed=eventsource&include_docs=true',
      remoteEvents = new EventSource(url);
  
  remoteEvents.onmessage = function(evt) {
      console.log(evt);
      // window.location.reload();
  };
  
  
   if (typeof pres != 'undefined') glob.pres = pres;
})(this);