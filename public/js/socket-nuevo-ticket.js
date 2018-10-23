//Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al servidor...');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el server');
});


//Escuchar informacion
socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
    console.log('aqui', resp);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        console.log(siguienteTicket);
        label.text(siguienteTicket);
    });

});