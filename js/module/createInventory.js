import removeHandler from "./removeHandler.js";

class inventoryCreator
{
    constructor(location, labelStyle)
    {
        this.location=location;
        this.counter=0;
        this.removeHandler= removeHandler.bind(this,this.location)
        this.labelStyle=labelStyle
    }

    addHandler()
    {
        
       const element= document.createElement('div')
       const name = this.addNameInput();
       const ifWeapon= this.addWeapon();

        this.counter++;
    }
    addNameInput()
    {
        const nameInputId='nameInput'+this.counter
        const name= document.createElement('div')
        const nameInput=document.createElement('input')
        const nameLabel= document.createElement('label')
        const nameText=document.createTextNode('Name')
        nameInput.setAttribute('type','text')
        nameInput.setAttribute('id',nameInputId)
        nameLabel.setAttribute('for',nameInputId)
        nameLabel.classList.add(this.labelStyle)

        nameLabel.appendChild(nameText)
        name.appendChild(nameLabel)
        name.appendChild(nameInput)

        return name;
    }
    addWeapon()
    {
    
        const weapon= document.createElement('div')

        const question=document.createElement('span')
        question.classList.add(this.labelStyle)
        const questionText=document.createTextNode('Weapon')
        question.appendChild(questionText)

        this.addYesNo('yes')
        this.addYesNo('no')
    }

    addYesNo(textNode)
    {
        const id=textNode+this.counter
        const text=textNode
        const yesDiv=document.createElement('div')
        
        const yesLabel= document.createElement('label')
        const yesText=document.createTextNode(text)
        yesLabel.classList.add(this.labelStyle)
        
        
        const yesInput=document.createElement('input')
        yesInput.setAttribute('type','radio')
        yesInput.setAttribute('id',id)
        yesLabel.setAttribute('for',id)

        yesLabel.appendChild(yesText)
        yesDiv.appendChild(yesLabel)
        yesDiv.appendChild(yesInput)
    }
}