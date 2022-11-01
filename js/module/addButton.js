import {halo} from './haloHandler.js'

function addButtons(addHandler, removeHandler)
{
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
  let thatt = addHandler.bind(this);
  let that= removeHandler.bind(this);
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

export {addButtons as default}