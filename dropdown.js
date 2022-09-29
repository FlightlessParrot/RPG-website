
// Yeah, I love control variables (you know they impact the loops)
var control=true;

//why should I make it by hand in my index when I can do this automatically 
const links={

    firstdrop: ['index.php','index.php','index.php','index.php'],
    firstdropnames: ['THIS IS SKINK','THIS IS SKINK','THIS IS SKINK','THIS IS SKINK'],

    seconddrop: ['index.php','index.php','index.php',],
    seconddropnames: ['Ballada', 'THIS IS SKINK','THIS IS LINK'],

    thirddrop: ['index.php'],
    thirddropnames: ['THIS IS SKINK'],

    fourthdrop: ['index.php'],
    fourthdropnames: ['THIS IS SKINK'],

}
//Menu categories

const menuCategories=['Witaj podróżniku!','Witaj podróżniku!','Witaj podróżniku!','Witaj podróżniku!']

// add my menu position
class dropdownCreator{
    constructor(id, chosenarray, arraynames)
    {
        this.linklis=chosenarray
        this.classname="dropdownli"
        this.parent=document.getElementById(id)
        this.i=0

        while(this.i < this.linklis.length)
        {
            this.new=document.createElement('li')
            this.parent.appendChild(this.new)
            this.new.classList.add('dropdownli')

            this.newcanva=document.createElement('canvas')
            this.new.appendChild(this.newcanva)
            this.newcanva.classList.add('menucanvas')
            this.newcanva.setAttribute('width',60)
            this.newcanva.setAttribute('height',32)

            this.textcontainer=document.createElement('p')
            this.text=document.createTextNode(arraynames[this.i])
            this.textcontainer.appendChild(this.text)
            this.new.appendChild(this.textcontainer)
            this.textcontainer.style.marginTop= "0.5em";
            this.textcontainer.style.display="inline-block"

            this.i++
        }
    }
}

//toggle menu
function myEventer()
{
    const item=document.getElementsByClassName('dropdownli')
    const iteml=item.length  

    for(let i=0; i<iteml; ++i)
    {
    item[i].addEventListener('mouseover', changeLi);
    item[i].addEventListener('mouseenter', arrow.animateCanva);
    item[i].addEventListener('mouseleave', noChange);
    item[i].addEventListener('click', function(){runnn.changeDisplay(item[i]);});
    }

    function changeLi()
    {
        const dcolor="black"
        this.style.backgroundColor="lightgrey";
        this.style.color="black";
        this.style.backgroundImage="none";
        nextColor.call(this,dcolor);   
    } 

    function noChange()
    {
            const ccolor="lightgray"
            if(this==this.parentElement.children[1])
            {
                this.style.backgroundImage="linear-gradient(to bottom, black,rgb(68, 68, 68))"
            }
            else 
            {
                this.style.backgroundColor="rgb(68, 68, 68)"
            }

            this.style.color="lightgray"
            nextColor.call(this,ccolor); 
            arrow.hideArrow.call(this);
        
    }

    function nextColor(coloring)
    {
        const fontchild= this.children
        
        for(i=0;i<fontchild.length;++i)
        {
            fontchild[i].style.color=coloring
        }
    }
}

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
         if(control===false && (arrow.runner==runnn.item) && (arrow.x+20<arrow.maxx))
         {
             window.requestAnimationFrame(arrow.drawArrow)
         }
         if(control===true && ((arrow.x+16)<arrow.maxx))
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

const runnn =
{
        id: 0,
        idsec: 0,
        left: 0,
        top: 0, 
        stop:document.querySelectorAll('.menu'),
        item: 0,
        itemindex: 0,
        pagX: 0,
        pagY: 0,

        //running menu! Try to catch it
        changeDisplay: function(ite)
        {
            if(control===true)
            {
            runnn.item = ite
            runnn.item.style.position='relative'
            runnn.item.style.left='0px'
            runnn.item.style.top='0px'
            runnn.item.children[1].innerHTML="CATCH ME!!!"
            control=false
            runnn.id = setInterval(function(){runnn.runAnim();},30)
            setTimeout(runnn.catchMe,500)
            }
        },

        runAnim: function()
        {
            var random=Math.floor(Math.random()*11)
            runnn.left+=20;

            if(Math.random()<=0.7)
            {
                runnn.top+=random;
            }
            else
            {
                runnn.top-= random;
            }

            runnn.item.style.left= runnn.left + 'px';
            runnn.item.style.top= runnn.top +'px';

            if(runnn.left>window.innerWidth)
            {
                clearInterval(runnn.id)
                window.location.assign(runnn.getLink())               
            }

        },

        getLink: function()
        {
            const parent=runnn.item.parentElement
            const childdrop=parent.getElementsByClassName('dropdownli')

            const first_drop=document.getElementById('first_drop')
            const second_drop=document.getElementById('second_drop')
            const third_drop=document.getElementById('third_drop')
            const fourth_drop=document.getElementById('fourth_drop')
            

            for(var i=0;0<childdrop.length; ++i)
            {
                console.log(childdrop.length)
                if(childdrop[i]===runnn.item)
                {break;}
            }
            switch(parent)
            {
                case first_drop:
                    return links.firstdrop[i]
                
                case second_drop:
                    return links.seconddrop[i]
                
                case third_drop:
                    return links.thirddrop[i]

                case fourth_drop:
                     return links.fourthdrop[i]
                
            }
        },

        //it gives events, which let you animate the menu. It is such a nice guy
        catchMe: function()
        {
            
            runnn.item.addEventListener("mouseover",function(){clearInterval(runnn.id);runnn.item.children[1].innerHTML="Kliknij i przeciągnij";})
            runnn.item.addEventListener("mouseleave", function(){runnn.id = setInterval(runnn.runAnim,30);runnn.item.children[1].innerHTML="CATCH ME!!!"})
            runnn.item.addEventListener("mousedown", runnn.holdMee)
            runnn.item.addEventListener("mouseup",function(){document.removeEventListener("mousemove",runnn.moveMousish);})
        },

        // to let you catch menu box
        holdMee: function(event)
        {
            runnn.pagX=event.pageX
            runnn.pagY=event.pageY
            if(event.button==0)
            {
            document.addEventListener("mousemove",runnn.moveMousish)
            }
        },

        // to let you moving the running menu box
        moveMousish: function(eventmove)
        {
            runnn.top+=(eventmove.pageY-runnn.pagY)
            runnn.left+=(eventmove.pageX-runnn.pagX)
            runnn.pagX=eventmove.pageX
            runnn.pagY=eventmove.pageY
            runnn.item.style.top=runnn.top + 'px'
            runnn.item.style.left=runnn.left + 'px'
        }

    }

const dropButton=
{
 
    hideDropdown: function(id)
    {
        let hidedownloc=document.getElementById(id)
        if(control)
        {
            hidedownloc.style.display="none"
        }
    },

    showDropdown: function(id) 
    {
        const dropdownloc=document.getElementById(id)
        const dropdownl=dropdownloc.style
        const leength=15
        const navigator=document.getElementsByClassName('dropdown')
    
        if(control)
        {
        
           dropdownl.display="block";
    
   
            switch(dropdownloc)
            {
                case navigator[0]:
                break;

                case navigator[1]:
                dropdownl.marginLeft=leength +'em'
                break;

                case navigator[2]:
                dropdownl.marginLeft=(leength*2) + 'em'
                break;

                case navigator[3]:
                dropdownl.marginLeft=(leength*3) + 'em'
                break;
            }
        }
    }
}
