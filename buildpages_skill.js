const skillBuilder=
{
    skills: 
    ['Arcana','Athletics','Awareness','Ballistic Skill','Beast Handling', 'Channelling', 'Crafting', 'Determination',
    'Devotion','Dexterity', 'Entertain','Fortitude','Guile','Intimidation','Intuition','Lore',
    'Medicine','Might','Nature','Reflexes','Stealth','Survival','Theology','Weapon Skill'],

    location: document.getElementById('pageform'),
    skilldiv: 0,

    build: function()
    {
        this.skilldiv= document.createElement('div')
        this.location.appendChild(skilldiv)

        let skillBoxName=document.createElement('p')
        let skillBoxText= document.createTextNode('Skills')
        skillBoxName.appendChild(skillBoxText)
        this.skilldiv.appendChild(skillBoxName)

        this.skilldiv.classList.add('categorybox')
        skillBoxName.classList.add('categoryname')

        skillBuilder.skills.forEach(skillBuilder.buildCheckbox)       
    },

    buildCheckbox: function(element)
    {
        let div=document.createElement('div')
        this.skillBoxText.appendChild(div)
        div.classList.add("skillContainer")

        let textG=document.createElement('p')
        let textNodeG=document.createTextNode(element)
        textG.appendChild(textNodeG)
        div.appendChild(textG)
        textG.classList.add("skillName")

        let text=document.createElement('p')
        let textNode=document.createTextNode('trainning')
        text.appendChild(textNode)
        div.appendChild(text)
        text.classList.add("skillab")

        let name=element+"_train"
        let x=0

        let textf=document.createElement('p')
        let textNodef=document.createTextNode('focus')
        textf.appendChild(textNodef)
        div.appendChild(textf)
        textf.classList.add("skillab")

        let classname="skillbox"

        do {
            for (let i = 0; i < 3; i++) 
            {
                let y = document.createElement('input')
                div.appendChild(y)
                y.setAttribute("type", "checkbox")
                y.setAttribute("name", name)
                y.setAttribute("value", i)
                y.classList.add(classname)
                x++
            }

            classname="focusbox"
            name = element + "_focus"

        } while (x < 2)
    }
}