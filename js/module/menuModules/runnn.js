import { dropMenu } from "./options.js"
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
        control: true,
        //running menu! Try to catch it
        changeDisplay: function(ite)
        {
            if(this.control===true)
            {
            runnn.item = ite
            runnn.item.style.position='relative'
            runnn.item.style.left='0px'
            runnn.item.style.top='0px'
            runnn.item.children[1].innerHTML="CATCH ME!!!"
            this.control=false
            runnn.id = setInterval(runnn.runAnim,30)
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
            let i=0

          for(;i<childdrop.length; ++i)
            {
                if(childdrop[i]===runnn.item)
                {break;}
            }
            switch(parent)
            {
                case first_drop:
                    return dropMenu.links.firstdrop[i]
                
                case second_drop:
                    return dropMenu.links.seconddrop[i]
                
                case third_drop:
                    return dropMenu.links.thirddrop[i]

                case fourth_drop:
                     return dropMenu.links.fourthdrop[i]
                
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
export {runnn as default}