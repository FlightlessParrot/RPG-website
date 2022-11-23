import arrow from "./arrow.js"
import runnn from "./runnn.js"
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
        const dcolor="#16294A"
        this.style.backgroundColor="lightgrey";
        this.style.color="#16294A";
        this.style.backgroundImage="none";
        nextColor.call(this,dcolor);   
    } 

    function noChange()
    {
            const ccolor="lightgray"
            if(this==this.parentElement.children[0])
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
        
        for(let i=0;i<fontchild.length;++i)
        {
            fontchild[i].style.color=coloring
        }
    }
}
export {myEventer as default}