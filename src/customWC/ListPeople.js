import * as CC from '../CustomComponent.js'
import * as EH from '../EvenHandler.js'

const CustomComponent = CC.default
const EventHandler = EH.default



export default class HMListPeople extends CustomComponent{
    static observedAttributes = [];
    constructor() {
        super()
        this.compName = "ListPeople"
        this.customStyle = `
            .custom-comp{
                padding: 10px;
                display: block;
            }
            li {
                padding: 5px;
                border: 2px solid #aaa;
                margin-top: 3px;
            }
            ul {
                list-style-type: none;
            }
        `;

        this.people = []
        EventHandler.subscribeToEvent('person-added', this)
    }                 

    handleEvent(event, data) {
        if(event !== 'person-added') return;
        this.people.push(data)
        this.display(true)
    }

    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        const list = document.createElement("ul")

        this.people.forEach( p => {
            const elem = document.createElement('li')
            elem.textContent = p
            list.appendChild(elem)
        })

        wrapper.appendChild(list)

        return wrapper
    }

    
}

customElements.define("hm-list-people", HMListPeople)
