import * as CC from './CustomComponent.js'
import * as EH from './EvenHandler.js'

const CustomComponent = CC.default
const EventHandler = EH.default

export default class HMButton extends CustomComponent{
    static observedAttributes = [];
    constructor() {
        super()
        this.compName = "Button"
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

        EventHandler.subscribeToEvent('show', this)
    }                 

   
    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        // the span where the text goes
        const buttonElem = document.createElement('button')
        buttonElem.textContent = this._attributes.dataText 

        let clickHandler = this.getAttribute("onClick")
        if(typeof clickHandler == "string") {
            clickHandler = eval(clickHandler)
        }
        buttonElem.addEventListener("click", clickHandler)
        wrapper.appendChild(buttonElem)

        return wrapper
    }

    
}

customElements.define("hm-button", HMButton)
