import runnn from "./runnn.js"
const arrow =
{
 //drawing arrow image when you are over an element
 animateCanva: function()
 {
    arrow.runner=this
    arrow.el=this.firstElementChild
    arrow.canv=arrow.el.getContext("2d")
    arrow.maxy=arrow.el.height;
    arrow.maxx=arrow.el.width;
    arrow.x=0;

    arrow.el.style.display='block'

    window.requestAnimationFrame(arrow.drawArrow)
    },

    drawArrow: function ()
        {
        arrow.canv.clearRect(0,0,arrow.maxx,arrow.maxy)
        arrow.canv.beginPath()
        arrow.canv.moveTo(arrow.x,0)
         
        arrow.canv.lineTo((arrow.x+8),(arrow.maxy/2))
        arrow.canv.lineTo(arrow.x,arrow.maxy)
        arrow.canv.closePath()
        arrow.canv.fillStyle='black'
        arrow.canv.fill()
         if(runnn.control===false && (arrow.runner==runnn.item) && (arrow.x+20<arrow.maxx))
         {
             window.requestAnimationFrame(arrow.drawArrow)
         }
         if(runnn.control===true && ((arrow.x+16)<arrow.maxx))
         {
             window.requestAnimationFrame(arrow.drawArrow)
         }
     arrow.x+=8
     },
 
 hideArrow: function()
 {
     arrow.elhide=this.firstElementChild
     arrow.elhide.style.display="none"
 }
}
export {arrow as default}