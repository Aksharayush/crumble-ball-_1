class Paper{
    constructor(x,y,d){
        var option = {
            isStatic:false,
            resitution:0.3,
            friction:0.2,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.d = d;
        this.body = Bodies.circle(this.x,this.y,(this.d/2),option)
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("white")
        ellipse(0,0,this.d,this.d);
       pop();

    }
    }