var url = 'http://localhost:5984/presentations/_changes?feed=eventsource',
    remoteEvents = new EventSource(url);
    
console.log(remoteEvents);