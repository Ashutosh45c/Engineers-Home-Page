let navbar = $("#navbar")
let slider = $(".slider")
let middleSection = $("#middle-section");
let bottomSection = $("#bottom-section");
let options = $(".options")
let wings = $("#wings")

options.hide();
middleSection.hide();
bottomSection.hide();

wings.fadeOut(300)
wings.fadeIn(300);
$("#brand-logo").hide();
slider.click(function(){
    slider.fadeOut(300);
    $(".tagline").fadeOut(300);
    $(".title").fadeOut(300);
    wings.fadeOut(300);
    middleSection.show();
    bottomSection.show();
    navbar.animate({
    height:"3.5rem"
  },1500);
setTimeout(function(){
  $("#top-section").css({"flex-direction":"row" , "padding":"1rem 0"}) 
  options.fadeIn(500);
  $(".title").fadeIn(500);
  $("#navbar").css("flex-direction","row")
  $("#brand-logo").fadeIn();
},1000)
 


var txt = 'aspiring and innovative minds'; /* The text */
  var i = 0;
  var speed = 70;
  setTimeout(function typeWriter() {
    if (i < txt.length) {
      document.querySelector("#demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  },1500); 

})




  