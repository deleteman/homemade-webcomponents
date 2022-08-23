import * as CC from './CustomComponent.js'

const CustomComponent = CC.default

export default class HMCard extends CustomComponent{

    static observedAttributes = [];
    constructor() {
        super()
        this.compName = "Card"
        this.customStyle = `
            .hm-card{
                padding: 10px;
                display: block;
                border: 3px solid #000;
            }

            .hm-card.with-shadow {
                box-shadow: 5px 10px #cbbaba
            }
        `;
    }                 

  
    render() {

        // the wrapper element
        const wrapper = document.createElement("div")

        let elemClass = []
        if(this._attributes.withshadow != null) {
            elemClass.push("with-shadow")
        }
        elemClass.push("hm-card")

        let mySlotID = Date.now()
        wrapper.innerHTML = `
        <div class="${elemClass.join(" ")}">
            <slot ></slot>
        </div>
`

        console.log("returning from rendering....")
        console.log(wrapper)
        return wrapper
    }

    
}

customElements.define("hm-card", HMCard)