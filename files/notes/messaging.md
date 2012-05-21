## Cross Document Messaging

<http://www.w3.org/TR/html5/comms.html#crossDocumentMessages>

---

### Cross Document Messaging Security

__From the spec:__

Authors should check the origin attribute to ensure that messages are only accepted from domains that they expect to receive messages from. Otherwise, bugs in the author's message handling code could be exploited by hostile sites.

Furthermore, even after checking the origin attribute, authors should also check that the data in question is of the expected format. Otherwise, if the source of the event has been attacked using a cross-site scripting flaw, further unchecked processing of information sent using the postMessage() method could result in the attack being propagated into the receiver.

Authors should not use the wildcard keyword (*) in the targetOrigin argument in messages that contain any confidential information, as otherwise there is no way to guarantee that the message is only delivered to the recipient to which it was intended.

---

## Sending Data

The message parameter is not limited to strings. Structured objects, data objects (such as File and ArrayBuffer), or arrays can also be sent as messages. Be aware, however, that Internet Explorer 8 and 9, and Firefox versions 3.6 and below only support strings.

---

## Web Messaging is Broken?

<http://paul.kinlan.me/webmessaging-is-broken/>

---

## Channel Messaging

<http://www.w3.org/TR/html5/comms.html#channel-messaging>

---

## Additional Resources

- <http://dev.opera.com/articles/view/window-postmessage-messagechannel/>