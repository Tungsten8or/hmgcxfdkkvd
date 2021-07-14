class Slingshot{
constructor(bodyA,pointB){
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.09

    }
    this.pointB=pointB
    this.sling = Matter.Constraint.create(options)
    World.add(world,this.sling)
}
fly(){
    this.sling.bodyA=null
}
display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB
        push ()
        strokeWeight(15)
        stroke ("purple")
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        pop ()
    }
    
}


}