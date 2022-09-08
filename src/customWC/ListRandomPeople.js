import * as CC from '../CustomComponent.js'
import * as EH from '../EvenHandler.js'

const CustomComponent = CC.default
const EventHandler = EH.default


const randomFirstNames = ["John", "Daniel", "Jonathan",  "Steve", "Bruce", "Sarah", "Maria", "Laura"]
const randomLastNames = ["Meyers", "Reyes", "Toriro", "Jhons", "Rogers", "Banner", "Parker"]

export default class HMListRandomPeople extends CustomComponent{
    static observedAttributes = [];
    constructor() {
        super()
        this.compName = "ListRandomPeople"
        this.customStyle = `
            .custom-comp{
                padding: 10px;
                display: block;
                color: red;
            }
            .legend {
                display: block;
            }
            button {
                margin: 5px;
            }
        `;

    }                 

    generateRandomPerson() {
        const nIndex = Math.round(Math.random() * (randomFirstNames.length - 1))
        const lnIndex = Math.round(Math.random() * (randomLastNames.length - 1))
        const name = randomFirstNames[nIndex] + " " + randomLastNames[lnIndex]
        EventHandler.triggerEvent('person-added', name)
    }

   
    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        const buttonElem = document.createElement('button')
        buttonElem.textContent = "Generate new person"

        buttonElem.addEventListener("click", this.generateRandomPerson.bind(this))

        const list = document.createElement('hm-list-people')

        wrapper.appendChild(buttonElem)
        wrapper.appendChild(list)

        return wrapper
    }

    
}

customElements.define("hm-list-random-people", HMListRandomPeople)
