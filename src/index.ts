export default class Events {
	private listeners: { [name: string]: ((...data: any[]) => void)[] } = {};

	/**
	 *
	 * @param name The name of the event to subscribe
	 * @param callback The callback function to execute
	 */
	public addListener(name: string, callback: (...data: any[]) => void) {
		if (!(name in this.listeners)) {
			this.listeners[name] = [];
		}
		this.listeners[name].push(callback);
	}

	/**
	 *
	 * @param name The name of the event where the listener is located
	 * @param listener the listener to remove
	 */
	public removeListener(name: string, listener: (...data: any) => void) {
		if (name in this.listeners) {
			this.listeners[name] = this.listeners[name].filter(
				(f) => f !== listener
			);
		}
	}

	/**
	 *
	 * @param name The event to trigger
	 * @param data The data to transmit
	 */
	public emit(name: string, ...data: any[]) {
		if (name in this.listeners) {
			for (const callback of this.listeners[name]) {
				callback(...data);
			}
		}
	}
}
