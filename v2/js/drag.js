dragElement(document.getElementById("scroll"));

console.log("JS loaded")

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // otherwise, move the DIV from anywhere inside the DIV: 
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
      var newY = elmnt.offsetLeft - pos1;
      console.log(2800 - document.getElementById('scroll').offsetWidth);
      if(newY <= 0 && newY >= -(2800 - document.getElementById('section4').offsetWidth)){
        elmnt.style.left = (newY) + "px";
      }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
