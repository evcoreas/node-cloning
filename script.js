const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
// Line 4 is the second circle which moves away from the mouse
const newCircle = document.querySelector('.new-circle');
const cloneCircle = document.querySelector('.in-circle');

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

  cloneCircle.style.right = horPosRev + 'px';
  cloneCircle.style.top = vertPosRev + 'px';
  console.log("The newMouseCoordinates function is being executed");
}

function changeColorOnHover() {
    CIRCLE.style.backgroundColor = "black";
    CIRCLE.style.borderColor = "purple";
}

function newCircleStyle() {
  cloneCircle.style.backgroundColor = "white";
  cloneCircle.style.border = "3px solid pink";
}

function cloneOnClick() {
  //Using cloneNode
  const COPY = CIRCLE.querySelector('.in-circle').cloneNode(true);
  newCircle.appendChild(COPY);
  console.log("The copy is being executed");
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', newMouseCoordinates, false);

// When the mouse hovers the circle, run the changeColorOnHover function.
CIRCLE.addEventListener('mouseenter', changeColorOnHover, false);

//line 59 when clicked logs in console and copies
CIRCLE.addEventListener('click', cloneOnClick, false);
cloneCircle.addEventListener('mousemove', newCircleStyle, false);


// CLONECLICK.addEventListener('click', cloneOnClick, false);
// NEWCIRCLE.addEventListener('mouseenter', newChangeHover, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
cloneCircle.addEventListener('mouseleave', function(){cloneCircle.removeAttribute("style");}, false);
