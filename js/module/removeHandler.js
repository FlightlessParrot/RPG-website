function removeHandler(location) {
    if (this.counter > 0) {
      const talents = location.lastElementChild;
      talents.remove();
      this.counter--;
      return true;
    } 
    else {
      return false;
    } 
}
export {removeHandler as default}