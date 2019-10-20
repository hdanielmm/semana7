$("#inputNumber").on("keypress", e => {
  if(e.which === 13){
    const userNumber = $("#inputNumber").val();
    $("#inputNumber").val("");
    $.ajax({
      method: "POST",
      url: "/guess",
      data: JSON.stringify({ number: userNumber }),
      contentType: "application/json"
    }).done(data => {
      if (data.won) {
        alert("You won!")
      } else {
        alert("Keep trying")
      }
    }).fail(() => {
      if(404){ 
        alert("Time is over")
      }
      
    });
  }
});