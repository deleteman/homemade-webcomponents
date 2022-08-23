import * as CC from './CustomComponent.js'

const CustomComponent = CC.default

export default class HMStack extends CustomComponent{

    static observedAttributes = [];
    constructor() {
        super()
        this.compName = "Stack"
        this.customStyle = `
            .hm-stack{
                display: flex;
            }

            .hm-stack.vertical {
                flex-direction: column;
            }
            .hm-stack.horizontal {
                flex-direction: row;
            }
        `;
    }                 

    render() {

        // the wrapper element
        const wrapper = document.createElement("div")



      

        const direction = this._attributes.dir // this.getAttribute("dir")
        let elemClasses = []

        switch(direction) {
            case "horizontal":
                elemClasses.push("horizontal")
            break;
            case "vertical": 
            default:
                elemClasses.push("vertical")
            break;
        }
        elemClasses.push("hm-stack")

        wrapper.innerHTML = `
        <div class="${elemClasses.join(" ")}">
            <slot></slot>
        </div>
        `

        return wrapper
    }

    
}

customElements.define("hm-stack", HMStack)