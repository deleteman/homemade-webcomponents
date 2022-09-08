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

            .centered {
                margin: 0 auto;
            }

            .w-80 {
                width: 80%;
            }
            .w-50 {
                width: 50%;
            }
            .w-70 {
                width: 70%;
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

        if(this._attributes.width != null) {
            elemClass.push("w-" + this._attributes.width)
        }

        if(this._attributes.centered != null) {
            elemClass.push('centered')
        }

        elemClass.push("hm-card")

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