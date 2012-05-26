(function (glob) {
  function debug() {
      return function() {};
  }
  
  var url = 'http://localhost:5984/presentations/_changes?feed=eventsource&include_docs=true',
      remoteEvents = new EventSource(url);
  
  var updateEventId;
  remoteEvents.onmessage = function(evt) {
      if (updateEventId && evt.lastEventId !== updateEventId) {
          // window.location.reload();
      }
      else {
          updateEventId = evt.lastEventId;
      }
  };
  
  
   if (typeof pres != 'undefined') glob.pres = pres;
})(this);