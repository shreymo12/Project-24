class Paper{
    constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(this.x, this.y, 30, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push();
			translate(pos.x, pos.y);
			rectMode(RADIUS);
			strokeWeight(3);
			fill("orange");
			ellipse(0,0,30, 30);
			pop();
			
	}

     
}