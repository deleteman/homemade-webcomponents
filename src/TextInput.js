import * as CC from './CustomComponent.js'

const CustomComponent = CC.default

export default class HMTextInput extends CustomComponent{
    static observedAttributes = [];
    constructor() {
        super()

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

  

    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        const elem = document.createElement('input')

        if(this._attributes.isPassword) {
            elem.setAttribute("type", "password")

        } else  {
            elem.isDefaultNamespace
        }

        elem.setAttribute("placeholder", this._attributes.placeholder || "")

        if(this._attributes.label) {
            const label = document.createElement("label")
            label.textContent = this._attributes.label
            label.appendChild(elem)
            wrapper.append(label)
        } else {
            wrapper.appendChild(elem)
        }
        return wrapper
    }

    
}

customElements.define("hm-text-input", HMTextInput)
