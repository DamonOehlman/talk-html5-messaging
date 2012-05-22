function debug() {
    return function() {};
}

$(function() {
    $('section[data-bg]').each(function() {
        var el = $(this),
            bgImage = el.data('bg') || el.attr('data-bg');
        
        el.css('background-image', 'url(' + bgImage + ')');
    });

    //= ../code/xdocmessaging/slidechange.js
});

/*
shout('html5-messaging', {
    server: 'ws://localhost:8000/',
    pcode:  1234,
    keymap: 'reveal.js'
});
*/

//= ../code/eventsource/create-couch

var updateEventId;
remoteEvents.onmessage = function(evt) {
    if (updateEventId && evt.lastEventId !== updateEventId) {
        window.location.reload();
    }
    else {
        updateEventId = evt.lastEventId;
    }
};