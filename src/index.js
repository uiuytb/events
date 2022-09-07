export default class Events {
    listeners = {};
    /**
     *
     * @param name The name of the event to subscribe
     * @param callback The callback function to execute
     */
    addListener(name, callback) {
        if (!(name in this.listeners)) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(callback);
    }
    on = this.addListener;
    /**
     *
     * @param name The name of the event where the listener is located
     * @param listener the listener to remove
     */
    removeListener(name, listener) {
        if (name in this.listeners) {
            this.listeners[name] = this.listeners[name].filter((f) => f !== listener);
        }
    }
    /**
     *
     * @param name The event to trigger
     * @param data The data to transmit
     */
    emit(name, ...data) {
        if (name in this.listeners) {
            for (const callback of this.listeners[name]) {
                callback(...data);
            }
        }
    }
}
