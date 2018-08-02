const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
// Line 4 is the second circle which moves away from the mouse
const NEWCIRCLE = document.querySelector('.new-circle');
const CLONECIRCLE = document.querySelector('.in-circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Captures the event object (mouse movement)
    // Get X and Y coordinates (distance from left viewport edge) via clientX property
    // Take the total window width and subtract current coordinate and width of circle
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    console.log("The mouseCoordinates function is being executed");
}

function newMouseCoordinates(e) {
  var randomNumber = Math.floor(Math.random() * 100);
  var horPosRev = windowWidth - e.clientX + randomNumber;
  var vertPosRev = windowHeight - e.clientY + randomNumber;

  CLONECIRCLE.style.right = horPosRev + 'px';
  CLONECIRCLE.style.top = vertPosRev + 'px';
  console.log("The newMouseCoordinates function is being executed");
}

function changeColorOnHover() {
    CIRCLE.style.backgroundColor = "pink";
    CIRCLE.style.borderColor = "purple";
}

function newChangeHover() {
  CLONECIRCLE.style.backgroundColor = "pink";
  CLONECIRCLE.style.borderColor = "blue";
}

function cloneOnClick() {
  //Using cloneNode
  const COPY = CIRCLE.querySelector('.in-circle').cloneNode(true);
  NEWCIRCLE.appendChild(COPY);
  console.log("The copy is being executed");
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', newMouseCoordinates, false);

// When the mouse hovers the circle, run the changeColorOnHover function.
CIRCLE.addEventListener('mouseenter', changeColorOnHover, false);

//line 59 when clicked logs in console but does not copy
CIRCLE.addEventListener('click', cloneOnClick, false);

// CLONECLICK.addEventListener('click', cloneOnClick, false);
// NEWCIRCLE.addEventListener('mouseenter', newChangeHover, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CLONECIRCLE.addEventListener('mouseleave', function(){CLONECIRCLE.removeAttribute("style");}, false);
