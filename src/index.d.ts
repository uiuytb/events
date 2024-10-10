/**
 *
 * @date 06/09/2022 - 16:07:00
 * @author uiuytb
 *
 * @export
 * @class Events
 * @typedef {Events}
 */
export declare class Events {
    /**
     * @date 06/09/2022 - 16:07:00
     * @author uiuytb
     * @private
     */
    private listeners;
    /**
     *
     * @date 11/09/2022 - 12:13:00
     * @author uiuytb
     * @public
     */
    on<name = string, args = any>(name: name, callback: (data: args) => void): void;
    /**
     * @date 06/09/2022 - 16:07:00
     * @author uiuytb
     *
     * @public
     * @param {string} name the event name
     * @param {(...data: any) => void} listener the listener to remove
     */
    removeListener(name: string, listener: (...data: any) => void): void;
    /**
     * @date 08/09/2022 - 11:04:41
     * @author uiuytb
     *
     * @public
     * @param {string} name the event name
     * @param {...any[]} data the data to send
     */
    emit(name: string, ...data: any[]): void;
}
export default Events;
