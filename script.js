
function start() {

    // START //
    scene = new Scene();
    camera = new Camera();

    c.width = camera.W;
    c.height = camera.H;
    
    elements.push(new box3D("Name", "Name", "----", 0, 0, 500, 200, "f"));

}

function update() {
    ctx.clearRect(0, 0, camera.W, camera.H);

    scene.update();
    camera.update();


    elements.forEach(element => {
        element.update();
    });

    elements.forEach(element => {
        element.CD();
    });

    scene.draw();

    elements.forEach(element => {
        element.draw();
    });

    

    cnsole();
    setTimeout(update, 20);
    
}

start();
update();

function cnsole(){
    let info = document.getElementById("info");

    let lista;

    info.innerHTML = "";

    info.innerHTML += "c.X: " + camera.X + ". c.Y: " + camera.Y + "<br><br>";


    for (let i = 0; i < elements.length; i++) {

        el = elements[i];

        info.innerHTML += el.id + ". " + el.fName + " " + el.eName + " (" + el.date + ")<br>";
        info.innerHTML += "X: " + el.X + ". Y: " + el.Y + " lvl: " + el.lvl + " vert: " + el.vert + "<br><br>";

        
        
    }
    

}


