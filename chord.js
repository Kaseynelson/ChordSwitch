$(document).ready(function(){
var NumofChords = ["Am", "D", "G", "A", "E", "Em", "C", "E5", "A5", "D5", "F", "Dm",];
var NewChords =[];
var count = 0;
// the addition will be added 

// the array that is cycled through
$( "form" ).submit(function( event ) {
event.preventDefault();
var cycle = $("#seconds").val()* 1000;
var ChordsNum = $("#ChordNum").val();
var PTime = $("#PTime").val()
var Addition = $("#MoreChord").val()


for(var num = 0; num < ChordsNum ; num++){
    NewChords[num] = NumofChords[num];
}
if(Addition != ""){
       NewChords.push(Addition)
    $("#MoreChord").val("")
       }

var count = 0;
  var id = setInterval(Chords, cycle);
  function Chords() {
    if (count == PTime) {
      clearInterval(id);
       $("#notes").text("Great Practice"); 
    } else {
        count++;
// random Color generator 
var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};
var fullColorHex = function() {    
var r = Math.round(Math.random()*266)
var g = Math.round(Math.random()*266)
var b = Math.round(Math.random()*266)  
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#"+red+green+blue;
};
// end of random color generaotr 
        $("#notes").text(NewChords[Math.round(Math.random()*NewChords.length+1)]);
        $("#notes").animate({fontSize: "90px"});
        $("#notes").animate({fontSize: "80px"});
        $("#notes").css("color",fullColorHex())
        
         
    }
  }
    
});
    


     

 document.onmousemove = e => {
//document.querySelector("body").style.transform = `translate(-${e.clientX * 0.04}px, -${e.clientY * 0.04}px)`;
document.querySelector("body").style.transform = `translate(-${e.clientX * 0.01}px, -${e.clientY * 0.01}px)`;
  }




    
    



})