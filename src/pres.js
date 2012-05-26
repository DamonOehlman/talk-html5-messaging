function debug() {
    return function() {};
}

//= ../code/eventsource/create-couch

var updateEventId;
remoteEvents.onmessage = function(evt) {
    if (updateEventId && evt.lastEventId !== updateEventId) {
        // window.location.reload();
    }
    else {
        updateEventId = evt.lastEventId;
    }
};