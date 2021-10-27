let mousePosX;
let mousePosY;
let ctrl = false;
let moveCam = false;

function getMousePos(c, evt) {
    var rect = c.getBoundingClientRect();

    mousePosX = evt.clientX - rect.x - world.offsetX;
    mousePosY = evt.clientY - rect.y - world.offsetY;
    
    return {
      x: mousePosX,
      y: mousePosY
    };

    event.preventDefault();
}

c.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(c, evt);
    mousePosX = mousePos.x;
    mousePosY = mousePos.y;

    if (moveCam == true && ctrl == true) {
        camera.X = mousePosX;
        camera.Y = mousePosY;
    }

    

}, false);

c.addEventListener('click', function(evt) {
    var mousePos = getMousePos(c, evt);

    var x  = mousePos.x;
    var y = mousePos.y;

    let trans = ctx.getTransform();
    let cX = trans.e;
    let cY = trans.f;

    //console.log("[X: " + cX + "] [Y: " + cY + "]");
    //console.clear();
    //console.log("");
    //console.log("CLICKED POSITION");
    //console.log("[X: " + x + "] [Y: " + y + "]");

    // Collision detection between clicked offset and element.
    elements.forEach(function(obj) {
        if (y > obj.Y && y < obj.Y + obj.H && x > obj.X && x < obj.X + obj.W) {
            //console.clear();
            //console.log("ELEMENT POSITION");
            //console.log("[ElemX: " + obj.X + "] [ElemY: " + obj.Y + "]");

            obj.click();



            //console.log('clicked an object: ');
            //console.log(clickedObject);
            
        }
        
    });

    evt.preventDefault();

}, false);


c.addEventListener('mousedown', function(evt) {

    moveCam = true;

    evt.preventDefault();

}, false);

c.addEventListener('mouseup', function(evt) {

    moveCam = false;


    evt.preventDefault();

}, false);

document.addEventListener("keydown", event => {
    if (event.key == "Control") {
        ctrl = true;
    }

    camera.move(event.key);

    event.preventDefault();


});


document.addEventListener("keyup", event => {
    ctrl = false;

    event.preventDefault();


});