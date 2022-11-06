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
    addWeapon
    {
        const yesId='yes'+this.counter
        const noId='no'+this.counter

        const weapon= document.createElement('div')

        const yesInput=document.createElement('input')
        yesInput.setAttribute('type','radio')
        const noInput=document.createElement('input')

        const question=document.createElement('span')
        question.classList.add(this.labelStyle)
        const questionText=document.createTextNode('Weapon')
        question.appendChild(questionText)

        const yesLabel= document.createElement('label')
        const noText=document.createTextNode('Name')


    }
}