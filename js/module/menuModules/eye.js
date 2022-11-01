import { menuCategories } from "./options.js"
const eye =
{
    xMaskL: 100,   
    xMaskR: 100,
    pupil: 0,

    createMenuCanvas: function()
    {  
        this.menu = document.querySelectorAll('.menu')
        this.mLength=this.menu.length

        this.ul= document.getElementsByClassName('dropdown')
      
        for(let i = 0; i<this.mLength; ++i)
        {
            this.menu[i].addEventListener("mouseenter",function(){eye.forMenu(eye.menu[i]);})
            this.menu[i].addEventListener("mouseleave",function(){eye.removeCanva.call(eye.menu[i],i);})

            this.ul[i].addEventListener("mouseenter",function(){eye.forDropdown(eye.menu[i]);})
            this.ul[i].addEventListener("mouseleave",function(){eye.removeCanva.call(eye.menu[i],i);})
        }
    },

    forMenu: function(menu)
    {

        eye.addCanva.call(menu)
        eye.animation=window.requestAnimationFrame(eye.drawEye)
    },

    forDropdown: function(menu)
    {   
        eye.addCanva.call(menu)
        eye.animation=window.requestAnimationFrame(eye.changePupil)
    },

    addCanva: function()
    {
        this.innerHTML=""
        const y = document.createElement('canvas')
        this.appendChild(y)

        y.classList.add('eye')
        y.width=200;
        y.height=60;
        
        eye.canva=y
        
    },

    removeCanva: function(i)
    {
        window.cancelAnimationFrame(eye.animation)
        eye.xMaskL=100
        eye.xMaskR=100
        eye.pupil=0

        this.innerHTML="";
        const y = document.createElement('span')
        this.appendChild(y)
        y.innerHTML=menuCategories[i]
    },

    canvasEye: function ()
    {
    const ctx=eye.canva.getContext('2d')
    const fCircle=((Math.PI/180)*360)

    ctx.beginPath()
    ctx.lineWidth=2
    ctx.strokeStyle='white'
    ctx.moveTo(20,20)
    ctx.quadraticCurveTo(100,45, 180,20)
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo(20,20)
    ctx.quadraticCurveTo(100,5, 180,20)
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(100, 22.5, 10, 0, fCircle)
    ctx.fillStyle='white'
    ctx.fill()
    },

    drawPupil: function ()
    {
        const ctx=eye.canva.getContext('2d')
        const y=eye.pupil

        ctx.beginPath()
        ctx.moveTo(100,11+y)
        ctx.fillStyle='black'
        ctx.quadraticCurveTo(105, 20+y, 100,34+y)
        ctx.moveTo(100,11+y)
        ctx.fillStyle='black'
        ctx.quadraticCurveTo(95, 20+y, 100,34+y)
        ctx.fill()
    },


    drawEye: function()
    {
        const theCanva = eye.canva
        const ctx = theCanva.getContext('2d')

        //draw an eye
        eye.canvasEye()
        eye.drawPupil()

        //erase - appear efekt
        ctx.clearRect(0,0, eye.xMaskL,60)
        ctx.clearRect(eye.xMaskR, 0, 200,60)

        eye.xMaskL-=5
        eye.xMaskR+=5
        
        if(eye.xMaskL<=0)
        {
            window.cancelAnimationFrame(eye.animation)
        }
        else
        {
            eye.animation=window.requestAnimationFrame(eye.drawEye)
        }
    },
    
    changePupil: function()
    {
        const theCanva = eye.canva
        const ctx= theCanva.getContext('2d')
        

        ctx.clearRect(0,0,theCanva.width,theCanva.height)

        eye.canvasEye()
        eye.drawPupil()
        
        ctx.clearRect(0,32.5,theCanva.width,theCanva.height)
        
        if(eye.pupil>=10)
        {
            window.cancelAnimationFrame(eye.animation)
        }
        else
        {
        eye.pupil++
        eye.animation=window.requestAnimationFrame(eye.changePupil)
        }
    }
}
export {eye as default}