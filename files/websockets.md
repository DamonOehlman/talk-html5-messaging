:data-bg:> images/5158715290_f0605b197a_b.jpg
:data-attribution:> http://www.flickr.com/photos/pedrovezini/5158715290/

# Web Sockets

---jade

h2 Why Websockets?

ul

    li.fragment Because you can't beat realtime.

    li.fragment Bi-directional communication.
    
    li.fragment Lightweight!

---

## Creating a Socket

Creating a new websocket connection (and attempting to open that connection) is __really, really__ easy:

[[code code/websockets/open-websocket.js]]

---

## Open Sesame

And, your newly created websocket object will fire an __open__ message when the connection is active:

[[code code/websockets/socket-onopen.js]]

---

:data-bg:> images/5975138384_56b527ac05_b.jpg
:data-attribution:> http://www.flickr.com/photos/pasukaru76/5975138384/

# DEMO: Simple Echo

---



----

## Websockets Live

Using websockets in a production environment is possible, but there are challenges.

- Reverse proxy support

----


