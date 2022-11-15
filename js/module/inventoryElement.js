
class inventoryElement
{
    constructor(location, number, labelStyle) 
    {
        this.labelStyle = labelStyle;
        this.number=number
        this.location=location
        this.equipment=
        ['Inventory','Head', 'Cloak','Armour','Hand', 
        'Arms','Boots', 'Jewelry', 'Other'];
        this.damageState=false
    }

    addHandler() {
    const element = document.createElement("div");
    this.element = element;
    const name = this.addNameInput();
    const ifWeapon = this.addWeapon();
    const equiped =this.addEquipment()
    element.classList.add('inventoryDiv')
    element.setAttribute('id','inventoryDiv'+this.number)
    element.appendChild(name);
    element.appendChild(ifWeapon);
    element.appendChild(equiped)
    this.location.appendChild(element)
  }

  addNameInput() {
    const nameInputId = "nameInput" + this.number;
    const name = document.createElement("div");
    const nameInput = document.createElement("input");
    const nameLabel = document.createElement("label");
    const nameText = document.createTextNode("Name");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", nameInputId);
    nameInput.setAttribute('flex-grow','1')
    nameLabel.setAttribute("for", nameInputId);
    nameLabel.classList.add(this.labelStyle);

    nameLabel.appendChild(nameText);
    name.appendChild(nameLabel);
    name.appendChild(nameInput);

    return name;
  }
  addWeapon() {
    const weapon = document.createElement("div");

    const question = document.createElement("span");
    question.classList.add(this.labelStyle);
    const questionText = document.createTextNode("Weapon");
    question.appendChild(questionText);

    const yesDiv = this.addYesNo("yes");
    const noDiv = this.addYesNo("no");
    weapon.appendChild(question);
    weapon.appendChild(yesDiv);
    weapon.appendChild(noDiv);

    return weapon;
  }

  addYesNo(textNode) {
    const id = textNode + this.number;
    const text = textNode;
    const yesDiv = document.createElement("div");
    yesDiv.classList.add('yesNoWeapon')

    const yesLabel = document.createElement("label");
    const yesText = document.createTextNode(text);
    yesLabel.classList.add(this.labelStyle);

    const yesInput = document.createElement("input");
    yesInput.setAttribute("type", "radio");
    yesInput.setAttribute('name','weapon')
    yesInput.setAttribute('value',textNode)
    yesInput.setAttribute("id", id);
    yesLabel.setAttribute("for", id);

    yesLabel.appendChild(yesText);
    yesDiv.appendChild(yesLabel);
    yesDiv.appendChild(yesInput);

    if (textNode === "yes") {
      yesInput.checked = false;
      const addDamage = this.addDamage.bind(this);
      yesInput.addEventListener("change", addDamage);
    } else {
      yesInput.checked = true;
      const removeDamage = this.removeDamage.bind(this);
      yesInput.addEventListener("change", removeDamage);
    }

    return yesDiv;
  }

  addDamage(event)
  {
    if(this.damageState===false)
    {
    const id='damage'+this.number
    const element=this.element
    const damageDiv=document.createElement('div')
    const label=document.createElement('label')
    const textNode=document.createTextNode('damage')
    const input=document.createElement('input')
    const span=document.createElement('span')
    const sNode=document.createTextNode(' + S')

    input.setAttribute('id',id)
    input.setAttribute('type', 'number')
    input.classList.add('inputDamage')
    label.setAttribute('for',id)
    label.classList.add(this.labelStyle)
    span.classList.add(this.labelStyle)

    label.appendChild(textNode)
    span.appendChild(sNode)

    damageDiv.appendChild(label)
    damageDiv.appendChild(input)
    damageDiv.appendChild(span)
    element.appendChild(damageDiv)

    this.damageState=true;
    }
  }
  removeDamage(event)
  {
    if(this.damageState===true)
    {
        const id='damage'+this.number
    const damage=document.getElementById(id)
    damage.parentNode.remove();
    this.damageState=false
    }
  }
  addEquipment()
  {
    const div=document.createElement('div')
    const label=document.createElement('label')
    const text=document.createTextNode('Equiped')
    const select=document.createElement('select')
    const id='equipment'+this.counter

    select.setAttribute('id',id)
    select.setAttribute('flex-grow','1')
    for( let x in this.equipment)
    {
        let option=document.createElement('option')
        let optionText=document.createTextNode(x)
        option.appendChild(optionText)
        select.append(option)
    }
    label.setAttribute('for',id)
    label.classList.add(this.labelStyle)
    label.appendChild(text)
    div.appendChild(label)
    div.appendChild(select)

    return div;
  }

}
export {inventoryElement as default}