const skillBuilder=
{
    skills: 
    ['Arcana','Athletics','Awareness','Ballistic Skill','Beast Handling', 'Channelling', 'Crafting', 'Determination',
    'Devotion','Dexterity', 'Entertain','Fortitude','Guile','Intimidation','Intuition','Lore',
    'Medicine','Might','Nature','Reflexes','Stealth','Survival','Theology','Weapon Skill'],

    location: document.getElementById('pageform'),

    build: function()
    {
        skillBuilder.skills.forEach(skillBuilder.buildCheckbox)
        
    },

    buildCheckbox: function(element, index)
    {
        let div=document.createElement('div')
        this.location.appendChild(div)
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

        let name=element+"_train"
        let x=0

        let textf=document.createElement('p')
        let textNodef=document.createTextNode('focus')
        textf.appendChild(textNodef)
        div.appendChild(textf)

        do
        {
        for(let i=0;i<3;i++ )
        {
        let y=document.createElement('input')
        this.location.appendChild(y)
        y.setAttribute("type","checkbox")
        y.setAttribute("name", name)
        y.setAttribute("value", i)
        y.setAttribute("class","skillsbox")
        x++
        }
        name=element+"_focus"
        }while(x<2)


    }
}