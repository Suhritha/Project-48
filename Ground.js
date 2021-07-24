class Ground{
	constructor(x,y,w,h){
		var options={isStatic:true}
		this.object=Bodies.rectangle(x,y,w,h,options);
		World.add(world,this.object)
		this.w = w;
		this.h = h;
	}
}