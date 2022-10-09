const skillBuilder=
{
    skills: 
    ['Arcana','Athletics','Awareness','Ballistic Skill','Beast Handling', 'Channelling', 'Crafting', 'Determination',
    'Devotion','Dexterity', 'Entertain','Fortitude','Guile','Intimidation','Intuition','Lore',
    'Medicine','Might','Nature','Reflexes','Stealth','Survival','Theology','Weapon Skill'],

    buildSkillsContainer: function()
    {
        this.location=document.getElementById('pageform')
        this.skilldiv= document.createElement('div')
        this.location.appendChild(this.skilldiv)

        let skillBoxName=document.createElement('p')
        let skillBoxText= document.createTextNode('Skills')
        skillBoxName.appendChild(skillBoxText)
        this.skilldiv.appendChild(skillBoxName)

        this.skilldiv.classList.add('categorybox')
        skillBoxName.classList.add('categoryname')

        this.skills.forEach(skillBuilder.buildRadio)       
    },

    buildRadio: function(element)
    {
        console.log(this)
        let greatdiv=document.createElement('div')
        skillBuilder.skilldiv.appendChild(greatdiv)
        greatdiv.classList.add("skillcontainer")


        let textG=document.createElement('p')
        let textNodeG=document.createTextNode(element)
        textG.appendChild(textNodeG)
        greatdiv.appendChild(textG)
        textG.classList.add("skillname")

        let traindiv=document.createElement('div')
        greatdiv.appendChild(traindiv)
        traindiv.classList.add('traindiv')

        let text=document.createElement('p')
        let textNode=document.createTextNode('Trainning')
        text.appendChild(textNode)
        traindiv.appendChild(text)
        text.classList.add("skillab")

        let focusdiv=document.createElement('div')
        greatdiv.appendChild(focusdiv)
        focusdiv.classList.add('focusdiv')

        let textf=document.createElement('p')
        let textNodef=document.createTextNode('Focus')
        textf.appendChild(textNodef)
        focusdiv.appendChild(textf)
        textf.classList.add("skillab")

        let inputdivt;
        inputdivt=document.createElement('div')
        traindiv.appendChild(inputdivt)
        inputdivt.classList.add('inputdivt')

        let inputdivf
        inputdivf=document.createElement('div')
        focusdiv.appendChild(inputdivf)
        inputdivf.classList.add('inputdivf')

        let name=element+"_train"
        let x=0
        let classname="skillbox"

        do 
        {
            for (let i = 0; i < 3; i++) 
            {
                let y = document.createElement('input')

                if(x===0)
                {
                    inputdivt.appendChild(y)
                }
                else
                {
                    inputdivf.appendChild(y)
                }
                y.setAttribute("type", "radio")
                y.setAttribute("name", name)
                y.setAttribute("value", (i+1))
                y.classList.add(classname)
            }
            x++
            classname="focusbox"
            name = element + "_focus"

        } while (x < 2)
    }
}