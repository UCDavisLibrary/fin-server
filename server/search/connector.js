
var Stomp = require('stomp-client');

class MessageConsumer {
    init() {
        var stompClient = new Stomp('127.0.0.1', 61613);
        
        stompClient.connect((sessionId) => {
            console.log('connected', sessionId);


            stompClient.subscribe('/topic/fedora', function(body, headers){
                console.log('Stomp Message Recieved', '/topic/fedora');
                console.log(headers);
                console.log(body);
             });
        });
    }
}

var mc = new MessageConsumer();
mc.init();