class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world, this.sling);

    }
    display(){
        if (this.sling.pointB!=null){
        var posA= this.sling.bodyA.position;
    var posB= this.sling.pointB;
    strokeWeight(5)
    line(posA.x,posA.y,posB.x,posB.y) 
        }
    }

    fly(){
        this.sling.pointB = null
    
    }

}