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

//= ../code/eventsource/create-couch