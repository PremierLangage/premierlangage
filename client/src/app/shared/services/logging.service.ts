import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
	readonly addEvent: Subject<LogItem> = new Subject();
	readonly openEvent: Subject<any> = new Subject();

	_size: number = 0;
	constructor() { }

	private message(message: any, type: 'info' | 'error' | 'warning') {
		let msg = message;
		if (typeof message !== 'string') {
			msg = message.error;
			if (!msg) {
				if (message.stack) {
					msg = message.stack.split('\n').join('<br/>')
				} else {
					msg = JSON.stringify(message);
				}
			}
		}
		const item = { message: msg, type: type };
		this.addEvent.next(item);
		this._size++;
	}

	info(message: any) {
		this.message(message, 'info');
	}

	warning(message: any) {
		this.message(message, 'warning');
	}

	error(message: any) {
		this.message(message, 'error');
	}

	clear() {
		this._size = 0;
	}

	get size() {
		return this._size;
	}

}

export interface LogItem {
	message: string,
	type: 'error' | 'info' | 'warning';
}