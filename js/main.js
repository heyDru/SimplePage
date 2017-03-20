
window.onload = function() {

var text = document.getElementById("colorText");
var colorScheme = ["blue","yellow","green","purple"];
var i = 0;

function changeColor() {
    if(i>colorScheme.length){
      i=0;
    }
     text.style.color = colorScheme[i];  
     i++;
  } 
      setInterval(changeColor,1000);
}
