$(document).ready(function () {
  $("#by_ul").click(function () {
    $(".countres").toggleClass("hidden");
  }); 
});


  $("#by_sitis").on("click", function(){
    let btn = $("#kaz");
    $(".sitis").toggleClass("hidden")
  if (btn.is(":visible")){
        $(".sitis").html(
         "<button id='alma' class='by_input alma by_margin_top' onclick = 'alma()'>almata</button>  <button id='ast' class='by_input ast by_margin_top' onclick = 'ast()'>astana</button>"
       );
}
else{
      $(".sitis").html(
       "<button id='msc' class='by_input msc by_margin_top' onclick = 'msc()'>Moscow</button>  <button id='spb' class='by_input spb by_margin_top' onclick = 'spb()'>spb</button>"
      );
}
  })

function kaz() {
  $("#rus").css("display", "none");
 }

 function rus() {
   $("#kaz").css("display", "none");
 }
function alma() {
  $("#ast").css("display", "none");
}
function ast() {
  $("#alma").css("display", "none");
}
function msc() {
  $("#spb").css("display", "none");
}
function spb() {
  $("#msc").css("display", "none");
}