import dropdownCreator from "./module/menuModules/menuCreator.js"
import {dropMenu, menuCategories} from "./module/menuModules/options.js"
import myEventer from "./module/menuModules/myEventer.js"
import eye from "./module/menuModules/eye.js"
import dropButton from "./module/menuModules/ToggleEffect.js"


const createNav={
    menuID: ['first_drop','second_drop','third_drop','fourth_drop'],
    

    createMenu: function(element, x)
    {
        const id=element;
        const nav=document.getElementsByTagName('nav')[0];
        const menu = document.createElement('button');
        const ul = document.createElement('ul');
        const textMenu = document.createTextNode(menuCategories[x]);

        menu.classList.add("menu");
        ul.setAttribute('id', id)
        ul.classList.add('dropdown')
    
        menu.appendChild(textMenu);
        nav.appendChild(menu);
        nav.appendChild(ul);
        new dropButton(id,menu,ul);
    },

    builder: function()
    {
    this.menuID.forEach(this.createMenu)
    const links= Object.keys(dropMenu.links)
    const names = Object.keys(dropMenu.names)
    for(let x=0; x < links.length; x++)
    {
        let y=links[x]
        let z = names[x]
        dropdownCreator(this.menuID[x], dropMenu.links[y], dropMenu.names[z])
    
    }
    eye.createMenuCanvas()
    myEventer()
    }
}
createNav.builder();

