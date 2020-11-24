class Chain{
    
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:300,
            stiffness:0.01
        }
    this.Chain=Constraint.create(options)
    World.add(world, this.Chain)
        
    
    }
    display(){
    push()
strokeWeight(5)
var pointA=this.Chain.bodyA.position
var pointB=this.Chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}
}