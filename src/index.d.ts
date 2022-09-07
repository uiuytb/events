export default class Events {
    private listeners;
    /**
     *
     * @param name The name of the event to subscribe
     * @param callback The callback function to execute
     */
    addListener(name: string, callback: (...data: any[]) => void): void;
    on: (name: string, callback: (...data: any[]) => void) => void;
    /**
     *
     * @param name The name of the event where the listener is located
     * @param listener the listener to remove
     */
    removeListener(name: string, listener: (...data: any) => void): void;
    /**
     *
     * @param name The event to trigger
     * @param data The data to transmit
     */
    emit(name: string, ...data: any[]): void;
}
