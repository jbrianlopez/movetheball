$(function() {

//colorstyles
$('.red').click(function(){
  $('ball').css("background", "red")
})

$('.blue').click(function(){
  $('ball').css("background", "blue")
})

$('.green').click(function(){
  $('ball').css("background", "green")
})


$(document).mousemove(function(x){
    $('ball').stop().animate({left:x.pageX, top:x.pageY});
});
//moving
$('.right').click(function(){
  $('ball').animate({ "left": "+=150px" });
})
$('.left').click(function(){
  $('ball').animate({ "left": "-=150px" });
})
$('.top').click(function(){
  $('ball').animate({"top": "-=100px"});
})
$('.bottom').click(function(){
  $('ball').animate({"top": "+=100px"});
})
//hide/show
$('.hideshow').click(function(){
  $('ball').toggle('4s')
})

//transition

});
