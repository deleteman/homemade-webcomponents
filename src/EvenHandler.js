
export default class EventHandler {
    static events = {}

    static subscribeToEvent(event, elem) {
        if(!EventHandler.events[event]) {
            EventHandler.events[event] = []
        } 
        EventHandler.events[event].push(elem)
    }

    static triggerEvent(event, params) {
        if(!EventHandler.events[event]) return;
        EventHandler.events[event].forEach(elem => {
            if(elem.handleEvent) {
                elem.handleEvent(event, params)
            }
        })
    }
}