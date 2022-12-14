const skillBuilder=
{
    skills: 0,

       callMe: async function(id)
    {
        const link ="./JSON/skillsarray.json";
        //const request = new Request(link);
        const fetcher = await fetch(link);
        const skillsjson = await fetcher.json();
        skillBuilder.skills=skillsjson;
        skillBuilder.buildSkillsContainer(id);
    },

    buildSkillsContainer: function(id)
    {

        this.location=document.getElementById(id)
        this.skilldiv= document.createElement('div')
        this.location.appendChild(this.skilldiv)

        let skillBoxName=document.createElement('p')
        let skillBoxText= document.createTextNode('Skills')
        skillBoxName.appendChild(skillBoxText)
        this.skilldiv.appendChild(skillBoxName)

        this.skilldiv.classList.add('categorybox')
        skillBoxName.classList.add('categoryname')

        this.skills.forEach(skillBuilder.buildbox)       
    },

 
    buildbox: function(element)
    {
        const greatdiv=document.createElement('div')
        skillBuilder.skilldiv.appendChild(greatdiv)
        greatdiv.classList.add("skillcontainer")


        const textG=document.createElement('p')
        const textNodeG=document.createTextNode(element)
        textG.appendChild(textNodeG)
        greatdiv.appendChild(textG)
        textG.classList.add("skillname")

        const traindiv=document.createElement('div')
        greatdiv.appendChild(traindiv)
        traindiv.classList.add('traindiv')

        const text=document.createElement('p')
        const textNode=document.createTextNode('Trainning')
        text.appendChild(textNode)
        traindiv.appendChild(text)
        text.classList.add("skillab")

        const focusdiv=document.createElement('div')
        greatdiv.appendChild(focusdiv)
        focusdiv.classList.add('focusdiv')

        const textf=document.createElement('p')
        const textNodef=document.createTextNode('Focus')
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
                y.setAttribute("type", "checkbox")
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