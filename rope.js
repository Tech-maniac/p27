class Rope
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length: 100,
            stiffness : 0.04
        }
        this.pointB= pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        push();
        strokeWeight(5);
        var posA =this.rope.bodyA.position
        var posB =this.pointB;
        line(posA.x,posA.y,posB.x,posB.y)
        pop();

    }





}