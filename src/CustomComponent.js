import * as EH from './EvenHandler.js'

const EventHandler = EH.default

export default class CustomComponent extends HTMLElement {
    static ID = 0;
    constructor(){
        super()

        this.attachShadow({mode: 'open'}); 
        this.mainComp = document.createElement('span')
        this.mainComp.setAttribute('class','custom-comp');

        this.customStyle = "";
        this.__style = document.createElement("style")
        this.__style.textContent = ""

        this.shadowRoot.appendChild(this.__style);
        this.shadowRoot.appendChild(this.mainComp);

        this.compName = "";
        this.compID = CustomComponent.ID
        CustomComponent.ID++;
        this._attributes = {}
        this.isAttached = false;
        console.log("My custom component got instantiated! (", this.compID, ")")
    }

    handleEvent(event, params) {
        console.log("The event ", event, " was triggered with params", params)
    }

    /**
     * Lifecycle method, called whenever an observed property changes
     */
    attributeChangedCallback(name, old, newName){
        this.display()
    }

    /**
     * To be implemented by the child class
     */
    render() {
        return null;
    }

    display(force=false) {
        if(force) {
            [...this.mainComp.children]
                .forEach(this.mainComp.removeChild.bind(this.mainComp))
            this.isAttached = false;
        }
        if(this.isAttached) {
            console.log("Already rendered...")
            return;
        }
        console.log("Displaying...", this.compName)
        this.__style.textContent = this.customStyle;

        let rendered = this.render()
        this.isAttached = true;
        this.mainComp.appendChild(rendered)
    }

    /**
     * Turns a string split with "-" into camel case notation
     */
    sanitizeName(name) {
        let parts = name.split("-")
        return [parts.shift(), ...parts.map(n => n[0].toUpperCase() + n.slice(1))].join("")
    }

    /**
     * Creates one property on this class for every
     * HTML property defined on the element
     */
    setUpAccessors() {
        let attrs = this.getAttributeNames()
        attrs.forEach( name => {
            const sanitizedName = this.sanitizeName(name)
            if(this._attributes[sanitizedName] == undefined) {
                Object.defineProperty(this._attributes, sanitizedName, {
                    set: (value) => this.setAttribute(name, value),
                    get: _ => {
                        return this.getAttribute(name)
                    }
                })
            }
        })
    }

    /**
     * Lifecycle method, called once the component is connected to the DOM
     */
    connectedCallback() {
        this.setUpAccessors()
        this.display()
        EventHandler.triggerEvent('show') 
        for(let i = 0; i < this.childNodes.length; i++) {
            let child = this.childNodes[i]
            this.append(child)
        }
    }
}