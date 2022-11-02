import addButtons from './addButton.js'
export {talentsCreator}

class talentsCreator {
  constructor(id) {
    this.id = id;
    this.location = document.getElementById(this.id);
    this.counter = 0;
    this.parentlocation = this.location.parentNode;
    this.addButtons = addButtons.bind(this);
    this.addButtons(this.addHandler, this.removeHandler, this.parentlocation)
  }

  addHandler() {
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

  removeHandler() {
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
}