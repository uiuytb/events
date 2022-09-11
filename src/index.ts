/**
 *
 * @date 06/09/2022 - 16:07:00
 * @author uiuytb
 *
 * @export
 * @class Events
 * @typedef {Events}
 */
export class Events {
	/**
	 * @date 06/09/2022 - 16:07:00
	 * @author uiuytb
	 * @private
	 */
	private listeners: { [name: string]: ((...data: any[]) => void)[] } = {};

	/**
	 *
	 * @date 11/09/2022 - 12:13:00
	 * @author uiuytb
	 * @public
	 */
	public on<name = string, args = any>(
		name: name,
		callback: (data: args) => void
	): void {
		if (!(name in this.listeners)) {
			// @ts-ignore
			this.listeners[name] = [];
		}
		// @ts-ignore
		this.listeners[name].push(callback);
	}

	/**
	 * @date 06/09/2022 - 16:07:00
	 * @author uiuytb
	 *
	 * @public
	 * @param {string} name the event name
	 * @param {(...data: any) => void} listener the listener to remove
	 */
	public removeListener(
		name: string,
		listener: (...data: any) => void
	): void {
		if (name in this.listeners) {
			this.listeners[name] = this.listeners[name].filter(
				(f) => f !== listener
			);
		}
	}

	/**
	 * @date 08/09/2022 - 11:04:41
	 * @author uiuytb
	 *
	 * @public
	 * @param {string} name the event name
	 * @param {...any[]} data the data to send
	 */
	public emit(name: string, ...data: any[]) {
		if (name in this.listeners) {
			for (const callback of this.listeners[name]) {
				callback(...data);
			}
		}
	}
}

export default Events;
