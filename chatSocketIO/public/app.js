var socket = io('http://localhost:3001/chat');

socket.on("connect", function () {
  // podemos enviar mensajes con el método emit
  socket.emit("message", "nuevo mensaje");
});

socket.on("message", function (data) {
  console.log(data);
});

$(".input-mensaje").on("keypress", function (e) {
  if (e.which === 13) {
    const mensaje = $(".input-mensaje").val()
    socket.emit("message", mensaje);
    $(".input-mensaje").val("");
  }
});

function postChat(chat) {
  $.post("http://localhost:27017/chatio", chat)
}