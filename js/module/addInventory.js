import removeHandler from "./removeHandler.js";
import addButton from "./addButton.js";
import inventoryElement from "./inventoryElement.js";

class inventoryCreator {
  constructor(location, labelStyle) {
    this.location = location;
    this.parentLocation=location.parentNode
    this.counter = 0;
    this.removeHandler = removeHandler.bind(this, this.location);
    addButton.call(this, this.addHandler, this.removeHandler, this.parentLocation)
    this.labelStyle = labelStyle;
  }

  addHandler() {
    new inventoryElement(this.location, this.counter, this.labelStyle).addHandler()
    this.counter++
  }
  
}

export { inventoryCreator as default };
