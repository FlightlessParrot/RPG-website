import runnn from "./runnn.js";

class dropButton {
  constructor(id, menu, ul) {
    this.id = id;
    const showDropdown = this.showDropdown.bind(this);
    const hideDropdown = this.hideDropdown.bind(this);
    menu.addEventListener("mouseover", showDropdown);
    menu.addEventListener("mouseout", hideDropdown);
    ul.addEventListener("mouseover", showDropdown);
    ul.addEventListener("mouseout", hideDropdown);
  }

  hideDropdown() {
    const id = this.id;
    const hidedownloc = document.getElementById(id);
    if (runnn.control) {
      hidedownloc.style.display = "none";
    }
  }

  showDropdown() {
    const id = this.id;
    const dropdownloc = document.getElementById(id);
    const dropdownl = dropdownloc.style;
    const leength = 15;
    const navigator = document.getElementsByClassName("dropdown");

    if (runnn.control) {
      dropdownl.display = "block";

      switch (dropdownloc) {
        case navigator[0]:
          break;

        case navigator[1]:
          dropdownl.marginLeft = leength + "em";
          break;

        case navigator[2]:
          dropdownl.marginLeft = leength * 2 + "em";
          break;

        case navigator[3]:
          dropdownl.marginLeft = leength * 3 + "em";
          break;
      }
    }
  }
}
export { dropButton as default };
