class Object {
    constructor(_fName, _eName, _date, _lvl, _V, _X, _Y, _sex) {
        // RELATIONS //
        this.relations = {
            father : [],
            mother : [],
            syblings : [],
            children : []
        }

        this.parents = [];

        this.rel = [];

        this.lvl = _lvl;
        this.vert = _V;
         // INFO //

        this.id = elements.length;
        this.sex = _sex;
        this.fName = _fName;
        this.eName = _eName;
        this.date = _date;

        // TRANSLATE //
        this.scale = 1;

        this.minX;
        this.maxX;
        this.minY;
        this.maxY;
        this.X = _X + camera.X;
        this.Y = _Y + camera.Y;
        this.Z;

        this.W = 100;
        this.H = 100;
        this.cX = this.X + this.W/2;
        this.cY = this.Y + this.H/2;

        this.isMoving = false;

        this.headX;
        this.headY;

        this.minY = this.Y - 500;
        this.maxY = this.Y + 500;
        this.minX = this.X - 600;
        this.maxX = this.X + 600;

        this.timer = 0;
        this.lCon;
        this.hCon;
    }


    draw() {
      
    }

    update(){


    }

  }



class box3D extends Object{
    
    constructor(_fName, _eName, _date, _lvl, _V, _X, _Y, _sex) {
        super(_fName, _eName, _date, _lvl, _V, _X, _Y, _sex);
        this.oX;
        this.oY;

        console.log("Created: " + this.fName + " " + this.eName)
    }

    draw(){
        let parent = this.parents;
        let child = this.relations.children;
        this.lCon = 0;
        this.hCon = 0;

        for (let i = 0; i < this.parents.length; i++) {
            this.hCon += parent[i].Y;
            
        }

        this.hCon = this.hCon/this.parents.length;

        for (let i = 0; i < parent.length; i++) {
            let XD = parent[i].X -this.X;
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(this.cX, this.Y);
            ctx.lineTo(this.cX, this.Y - (this.Y - parent[i].Y - parent[i].H)/2);
            ctx.lineTo(this.cX + XD/2, this.Y - (this.Y - parent[i].Y - parent[i].H)/2);
            ctx.stroke();
            
        }

        for (let i = 0; i < child.length; i++) {
            this.lCon += child[i].Y;
            
        }

        this.lCon = this.lCon/child.length;

        for (let i = 0; i < child.length; i++) {
            let XD = child[i].X -this.X;
            let YD = child[i].Y -this.Y + this.H;
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(this.cX, this.Y + this.H);
            ctx.lineTo(this.cX, this.Y - (this.Y - child[i].Y - child[i].H)/2);
            ctx.lineTo(this.cX + XD/2, this.Y - (this.Y - child[i].Y - child[i].H)/2);
            ctx.stroke();
            
        }

        /*
        if (parent[0] != "" && this.relations.mother == "") {
            let obj = this.relations.father[0];
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(this.cX, this.Y);
            ctx.lineTo(this.cX, this.Y - (this.Y - obj.Y - obj.H)/2);
            ctx.lineTo(obj.cX, this.Y - (this.Y - obj.Y - obj.H)/2);
            ctx.lineTo(obj.cX, obj.Y + this.H);
            ctx.stroke();
        }

        if (this.relations.mother != "" && this.relations.father == "") {
            let obj = this.relations.mother[0];
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(this.cX, this.Y);
            ctx.lineTo(this.cX, this.Y - (this.Y - obj.Y - obj.H)/2);
            ctx.lineTo(obj.cX, this.Y - (this.Y - obj.Y - obj.H)/2);
            ctx.lineTo(obj.cX, obj.Y + this.H);
            ctx.stroke();
        }
        */

        if (this.relations.syblings != "") {
            for (let i = 0; i < this.relations.syblings.length; i++) {
                let obj = this.relations.syblings[i];
                ctx.beginPath();
                ctx.setLineDash([]);
                if (this.X > obj.X) {
                    ctx.moveTo(this.X, this.cY);
                    ctx.lineTo(obj.X + obj.W, obj.cY);
                }
                else{
                    ctx.moveTo(this.X+this.W, this.cY);
                    ctx.lineTo(obj.X, obj.cY);
                }
                
                
                ctx.stroke();
                
            }
            
        }



        ctx.fillStyle = "lightgray";
        ctx.fillRect(this.X, this.Y, this.W, this.H);

        if (mousePosY > this.Y && mousePosY < this.Y + this.H && mousePosX > this.X && mousePosX < this.X + this.W) {
            ctx.fillStyle = "pink";
            ctx.fillRect(this.X, this.Y, this.W/2, 20);

            ctx.fillStyle = "lightblue";
            ctx.fillRect(this.X + this.W/2, this.Y, this.W/2, 20);

            ctx.fillStyle = "yellow";
            ctx.fillRect(this.X, this.Y+20, 20, this.H - 20*2);
            
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.X + this.W -20, this.Y +20, 20, this.H -20*2);
            
            ctx.fillStyle = "pink";
            ctx.fillRect(this.X, this.Y + this.H -20, this.W/2, 20);

            ctx.fillStyle = "lightblue";
            ctx.fillRect(this.X + this.W/2, this.Y + this.H -20, this.W/2, 20);
        }


        ctx.fillStyle = "black";
        ctx.font = "15px Arial";
        ctx.fillText(this.id, this.X+10, this.Y + 20+5);
        ctx.fillText(this.fName, this.X+10, this.Y + 40+5);
        ctx.fillText(this.eName, this.X+10, this.Y + 60+5);
        ctx.fillText(this.date, this.X+10, this.Y + 80+5);


        // Y //
        if (this.cY > camera.Y) {

        }
        // BOTTOM //
        if (this.cY < camera.Y) {

        }
        // X //
        if (this.cX > camera.X) {

        }
        if (this.cX < camera.X) {

        }

        
    }

    updatePosition(_X, _Y){
        this.X = this.X + _X;
        this.Y = this.Y + _Y;

        this.minY = this.minY + _Y;
        this.maxY = this.maxY + _Y;
        this.minX = this.minX + _X;
        this.maxX = this.maxX + _X;


    }

    update(){
        let m = this.relations.mother[0];
        let f = this.relations.father[0];
        let c = this.relations.children;

        if (this.relations.father == "" && this.relations.mother != "") {
            this.minY = m.Y + m.H + 10;
        }
        else if (this.relations.mother == "" && this.relations.father != "") {
            this.minY = f.Y + f.H + 10;
        }
        else if (this.relations.mother != "" && this.relations.father != ""){

            this.minY = Math.max(f.Y + f.H, m.Y + m.H)+ 10;

        }

        
        if (c[0] != undefined) {
            this.maxY = c[0].Y - 10;

            for (let i = 0; i < c.length; i++) {
                //console.log("Child: " + c[i].Y);
            }

        }

        this.cX = this.X + this.W/2;
        this.cY = this.Y + this.H/2;

        this.oX = mousePosX - this.X;
        this.oY = mousePosY - this.Y;

        if(this.isMoving == true){
            
            /*
            if(mousePosX - this.W/2 > 0 && mousePosX + this.W/2 < c.width){
                this.X = mousePosX - this.W/2;

            }
            
            if(mousePosY - this.H/2 > 0 && mousePosY + this.H/2 < world.groundPos){
                this.Y = mousePosY - this.H/2;

            }
            */

            this.X = mousePosX - (this.W/2) ;
            this.Y = mousePosY - (this.H/2) ;

            
            if( this.Y > this.maxY - this.H){
                this.Y = this.maxY - this.H;
            }
            if( this.Y < this.minY){
                this.Y = this.minY;
            }
            if( this.X > this.maxX - this.W){
                this.X = this.maxX - this.W;
            }
            if( this.X < this.minX){
                this.X = this.minX;
            }
            
        }


    }

    CD(){      
        if(this.isMoving == true){
            for (let i = 0; i < elements.length; i++) {
                var obj = elements[i];
                if (this.X + this.W > obj.X && this.X < obj.X + obj.W && this.Y + this.H > obj.Y && this.Y < obj.Y + obj.H && obj != this) {
                    /*
                    console.log("COLLISION!");

                    if (this.X + this.W >= obj.X && this.X < obj.X + obj.W) {
                        this.X = obj.X - this.W;
                    }

                    if (this.X < obj.X + obj.W && this.X >= obj.X + obj.W) {
                        this.X = obj.X + obj.W;
                    }
                    */
                }
            }

        }

    }

    click(){
        let type_ = "";

        // PARENTS //
        if (mousePosY <= this.Y + 20 && this.isMoving == false) {
            if (mousePosX > this.X + this.W/2) {
                type_ = "m";
            }
            else{
                type_ = "f";

            }
            
            
            
        }

        // SYBLINGS //
        if (mousePosX <= this.X + 20 && this.isMoving == false) {
            if (mousePosY >= this.Y + 20) {
                type_ = "sl";
            }
            
        }

        if (mousePosX >= this.X + this.W - 20 && this.isMoving == false) {
            type_ = "sr";
            
        }

        // CHILDREN //
        if (mousePosY >= this.Y + this.H - 20 && this.isMoving == false) {
            type_ = "c";
            
            
        }

        if (mousePosY > this.Y + 20 && mousePosY < this.Y + this.H - 20 && mousePosX > this.X + 20 && mousePosX < this.X + this.W - 20) {
            if(this.isMoving == true){
                this.isMoving = false;
    
            }
            else{
                this.isMoving = true;
    
            }

            type_ = "";
            
        }

        this.createRelation(type_);


    }

    createRelation(_type){
        let newRel;

        if (_type == "f" || _type == "m") {
            if (this.relations.father == "" && _type == "m") {
                newRel = new box3D("Name", "Name", "----", this.lvl+1, this.vert+1, this.X+150, this.Y-150, "m");
                newRel.relations.children.push(this)
                
                elements.push(newRel);
                this.relations.father.push(newRel);
                this.parents.push(newRel);
            }
            else if(this.relations.mother == "" && _type == "f") {
                newRel = new box3D("Name", "Name", "----", this.lvl+1, this.vert-1, this.X-150, this.Y-150, "f");
                newRel.relations.children.push(this)

                elements.push(newRel);
                this.relations.mother.push(newRel);
                this.parents.push(newRel);
            }
        }


        if (_type == "sl") {
            newRel = new box3D("Name", "Name", "----", this.lvl, this.vert -1, this.X-150, this.Y, "m");
            
            let col = true;

            while(col == true){
                col = this.spawnCD(newRel);
                if (col) {
                    newRel.X -= 150;
                }

            }

            elements.push(newRel);
            this.relations.syblings.push(newRel)
        }

        if (_type == "sr") {
            newRel = new box3D("Name", "Name", "----", this.lvl, this.vert -1, this.X+150, this.Y, "m");
            
            let col = true;

            while(col == true){
                col = this.spawnCD(newRel);
                if (col) {
                    newRel.X += 150;
                }

            }

            elements.push(newRel);
            this.relations.syblings.push(newRel)
        }
        
        if (_type == "c") {
            newRel = new box3D("Child", "Name", "----", this.lvl-1, this.vert, this.X, this.Y+150, "m");

            let col = true;

            while(col == true){
                col = this.spawnCD(newRel);
                if (col) {
                    newRel.X += 150;
                }

            }

            if (this.sex == "f") {
                newRel.relations.mother.push(this)
            }
            else{
                newRel.relations.father.push(this)
    
            }
    
            elements.push(newRel);
            this.relations.children.push(newRel)
            newRel.parents.push(this);
        }

        


    }

    spawnCD(_elem){
        let col = false;

        for (let i = 0; i < elements.length; i++) {
            var obj = elements[i];
            if (_elem.X + _elem.W > obj.X && _elem.X < obj.X + obj.W && _elem.Y + _elem.H > obj.Y && _elem.Y < obj.Y + obj.H) {
                col = true;

            }
            
        }

        return col;

    }

}
