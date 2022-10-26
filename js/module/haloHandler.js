

class halo
{
    constructor(object, color, max)
    {
        this.object=object
        this.color=color
        this.maxSpread=max
        this.spread=0
        this.blur=0
   
    }

haloHandler()
{
    if(this.time===undefined)
    {
    this.time = setInterval(this.haloGrower.bind(this), 50)
    }
}

haloGrower()
{
let property="0px 0px "+this.blur+'px '+this.spread+'px '+this.color
this.object.style.boxShadow=property
console.log("0px 0px "+this.spread+'px '+this.blur+'px '+this.color)
console.log(this.object.style.boxShadow)
this.spread++
this.blur+=5
if(this.spread>=this.maxSpread)
{
this.cleaner()
this.haloHandler()
}

}
cleaner()
{

    clearInterval(this.time)
    this.object.style.boxShadow='0px 0px 0px 0px'
    this.spread=0
    this.blur=0
    this.time=undefined   
}

}
export {halo}