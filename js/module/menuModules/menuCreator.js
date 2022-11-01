
// add my menu position
function dropdownCreator(id, chosenarray, arraynames)
{
        const linkLis=chosenarray
        const liClass="dropdownli"
        const locate=document.getElementById(id)

        for(let index in linkLis)
        {

            const liElement=document.createElement('li')
            locate.appendChild(liElement)
            liElement.classList.add(liClass)

            const newCanva=document.createElement('canvas')
            liElement.appendChild(newCanva)
            newCanva.classList.add('menucanvas')
            newCanva.setAttribute('width',60)
            newCanva.setAttribute('height',32)

            const textContainer=document.createElement('p')
            const text=document.createTextNode(arraynames[index])
            textContainer.appendChild(text)
            liElement.appendChild(textContainer)
        }
}
export {dropdownCreator as default}