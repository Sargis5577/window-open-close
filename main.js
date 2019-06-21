var closePopup = function() {
  var element = document.querySelector(".main")
  element.classList.add("hidden")
}
var openPopup = function() {
  var element = document.querySelector(".main")
  element.classList.remove("hidden")
}
var keyCodeClose = function(number,evt) {
 if(evt.keyCode === number) {
 closePopup()
 } 
}
var keyCodeOpen = function(number,evt) {
 if(evt.keyCode === number) {
 openPopup()
 } 
} 


var openWindow = document.querySelector(".open-window")
  openWindow.addEventListener("click",function(){
 openPopup()
})
var closeWindow = document.querySelector(".close-window")
  closeWindow.addEventListener("click",function(){
 closePopup()
})

document.addEventListener("keyup",function(evt){
 keyCodeClose(27,evt)
})
document.addEventListener("keyup",function(evt){
 keyCodeOpen(13,evt)
})
