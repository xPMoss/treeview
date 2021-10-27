var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

elements = [];
var clickedObject;

var sceneObject;

var world = {
    gravity : -9.8,
    groundPos : c.height,
    offsetX: 0,
    offsetY: 0
}


document.addEventListener("keydown", event => {

});


class Camera {
    constructor() {
        this.W = 700;
        this.H = 500;

        this.X = 0;
        this.Y = 0;
    }

    update(){


    }

    move(_key){
        let X_ = 0;
        let Y_ = 0;

        let step = 10;

        if (_key == "w") {
            this.Y += step;
            Y_ = +step;
        }

        if (_key == "s") {
            this.Y -= step;
            Y_ = -step;
        }

        if (_key == "a") {
            this.X += step;
            X_ = +step;
        }

        if (_key == "d") {
            this.X -= step;
            X_ = -step;
        }

        
        elements.forEach(element => {
            element.updatePosition(X_, Y_);
        });

    }


}

class Scene {
    constructor() {
        this.minX;
        this.maxX;
        this.minY;
        this.maxY;
    }

    update(){


    }

    draw(){
        this.drawCoordSystem();
        /*
        for (let i = 0; i < elements.length - 1; i++) {
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(elements[i].cX, elements[i].cY);
            ctx.lineTo(elements[i+1].cX, elements[i+1].cY);
            ctx.stroke();

        }
        */

        
    }

    drawCoordSystem(){

        ctx.fillStyle = "blue";

        for (let i = 0; i < 1100; i += 100) {
            ctx.beginPath();
            ctx.setLineDash([5, 15]);
            ctx.moveTo(i + camera.X, camera.Y);
            ctx.lineTo(i+2 + camera.X, 1000);
            ctx.stroke();
    
            //ctx.fillRect(i + camera.X, camera.Y, 2, 1000);
            
        }
        for (let i = 0; i < 1100; i += 100) {

            ctx.beginPath();
            ctx.setLineDash([5, 15]);
            ctx.moveTo(camera.X, camera.Y +i);
            ctx.lineTo(1000, i+2 + camera.Y);
            ctx.stroke();

            //ctx.fillRect(camera.X, i + camera.Y, 1000, 2);
            
        }



    }

}
