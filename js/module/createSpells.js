import removeHandler from "./removeHandler.js";
import addButtons from "./addButton.js";
class spells
{
    constructor(id) {
        this.id = id;
        this.location = document.getElementById(this.id);
        this.counter = 0;
        this.parentlocation = this.location.parentNode;
        this.addButtons = addButtons.bind(this);
        this.removeHandler= removeHandler.bind(this, this.location)
        this.addButtons(this.addHandler, this.removeHandler, this.parentlocation);

      }

      addHandler() {
        const labelClass = "fablabel";
        const spell = document.createElement("div");
        spell.classList.add("spell");
        //div's insides
        
       /* const cost = document.createElement("div")
        const target = document.createElement("div")
        const range = document.createElement("div")
        const duration = document.createElement("div")
        const effect = document.createElement("div")*/
        //name
        this.addName(spell, labelClass, 'inputSpellName', 'Name', 'spellName')
        this.addName(spell, labelClass, 'inputSpellCost', 'DN/Cost', 'spellCost')
        this.addName(spell, labelClass, 'inputSpellTarget', 'Target', 'spellTarget')
        this.addName(spell, labelClass, 'inputSpellRange', 'Range', 'spellRange')
        this.addName(spell, labelClass, 'inputSpellDuration', 'Duration', 'spellDuration')
        this.addName(spell, labelClass, 'inputSpellEffect', 'Effect', 'spellEffect')
       /* const costText = document.createTextNode('Cost')
        const costLabel = document.createElement("label")
        const costInput= document.createElement("input")

        const costInputID='costinput'+this.counter
        costInput.setAttribute('id', costInputID)
        costInput.classList.add('spellCost')
        costInput.setAttribute("type", 'text')

        costLabel.setAttribute('for',costInputID)
        costLabel.classList.add(labelClass)

        cost.appendChild(costLabel)
        cost.appendChild(costInput)
        costLabel.appendChild(costText)*/    
    
        this.location.appendChild(spell);
    
        this.counter++;
      }
      addName(spell,labelClass, inputClass, textNode, dataName){
        const name = document.createElement("div")
        const nameInputID=inputClass+this.counter
        const nameText = document.createTextNode(textNode)
        const nameLabel = document.createElement("label")
        const nameInput= document.createElement("input")

        nameInput.setAttribute('id', nameInputID)
        nameInput.classList.add(inputClass)
        nameInput.setAttribute("type", 'text')
        nameInput.setAttribute("name", dataName+'[]')
        nameLabel.setAttribute('for', nameInputID)
        nameLabel.classList.add(labelClass)

        name.appendChild(nameLabel)
        name.appendChild(nameInput)
        nameLabel.appendChild(nameText)

        spell.appendChild(name)
      }

     
}
export {spells as default}