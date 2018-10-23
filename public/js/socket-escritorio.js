var socket = io();

var searchParams = new URLSearchParams(window.location.search);

let label = $('small');
if (!searchParams.has('escritorio')) {
    window.location('index.html');
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

console.log(escritorio);

$('h1').text('Escritorio: ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === 'No hay tickets') {
            //alert(resp);
            label.text(resp);
            return;
        }
        console.log(resp);
        label.text(' Ticket: ' + resp.numero);
    });
});