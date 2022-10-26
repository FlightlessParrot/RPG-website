import {halo} from './haloHandler.js'
export {talentsCreator}

class talentsCreator {
  constructor(id) {
    this.id = id;
    this.location = document.getElementById(this.id);
    this.counter = 0;
    this.parentlocation = this.location.parentNode;
  }

  addTalent() {
    console.log('działam')
    const talent = document.createElement("div");
    talent.classList.add("talent");

    //declarations
    const inputid = "talinput"+this.counter;
    const areaid = "talarea"+this.counter;
    const labelClass = "fablabel";
    const textAreaRows = "20";
    const textAreaCols = "50";

    //input creation
    const inputdiv = document.createElement("div");
    const namelabel = document.createElement("label");
    const nametext = document.createTextNode("Talent's name");
    const input = document.createElement("input");

    input.classList.add("herotextinput");
    input.setAttribute("id", inputid);

    namelabel.classList.add(labelClass);
    namelabel.setAttribute("for", inputid);

    inputdiv.classList.add("talentInput");
    input.setAttribute("name", "talentName[]");

    namelabel.appendChild(nametext);
    inputdiv.appendChild(namelabel);
    inputdiv.appendChild(input);
    talent.appendChild(inputdiv);

    //area creation
    const descriptiondiv = document.createElement("div");
    const desclabel = document.createElement("label");
    const desctext = document.createTextNode("Talent's description");
    const descarea = document.createElement("textarea");

    descriptiondiv.classList.add("talentInput");
    descarea.setAttribute("id", areaid);

    desclabel.classList.add(labelClass);
    desclabel.setAttribute("for", areaid);

    descarea.setAttribute("rows", textAreaRows);
    descarea.setAttribute("cols", textAreaCols);
    descarea.setAttribute("name", "descArea[]");

    desclabel.appendChild(desctext);

    descriptiondiv.appendChild(desclabel);
    descriptiondiv.appendChild(descarea);
    talent.appendChild(descriptiondiv);

    this.location.appendChild(talent);

    this.counter++;
  }

  removeTalent() {
    console.log(this)
    if (this.counter > 0) {
      const talents = this.location.lastElementChild;
      talents.remove();
      this.counter--;
      return true;
    } 
    else {
      return false;
    }
  }

  addButtons()
  {
    console.log('działam')
    //create buttons' elements
    const buttonsdiv = document.createElement("div");
    const addButton = document.createElement("button");
    const plus = document.createTextNode('+');
    const removeButton = document.createElement("button");
    const minus = document.createTextNode('-');
    //you need to additional div to set text in the middle of button
    const p=document.createElement('p');
    const addButtonHalo=new halo(addButton,'#12223d',10)
    const removeButtonHalo=new halo(removeButton,'#12223d',10)
    
    //Add button creation
    let thatt = this.addTalent.bind(this);
    let that= this.removeTalent.bind(this);
    buttonsdiv.classList.add("buttonsdiv");
    addButton.classList.add("addButton");
    addButton.setAttribute("type", "button");
    addButton.appendChild(plus)
    
    removeButton.classList.add("removeButton");
    removeButton.setAttribute("type", "button");
    p.appendChild(minus)
    removeButton.appendChild(p)
    
    addButton.addEventListener('mouseover', addButtonHalo.haloHandler.bind(addButtonHalo));
    addButton.addEventListener('mouseleave', addButtonHalo.cleaner.bind(addButtonHalo));
    addButton.addEventListener("click", thatt);
    removeButton.addEventListener('mouseover', removeButtonHalo.haloHandler.bind(removeButtonHalo));
    removeButton.addEventListener('mouseleave', removeButtonHalo.cleaner.bind(removeButtonHalo));
    removeButton.addEventListener("click", that);
    buttonsdiv.appendChild(removeButton);
    buttonsdiv.appendChild(addButton);
    this.parentlocation.appendChild(buttonsdiv);
  }
}