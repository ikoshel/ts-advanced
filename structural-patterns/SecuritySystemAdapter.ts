import {EDeviceType, IDevice} from './IDevice';
import {SecuritySystem} from './SecuritySystem';

class SecuritySystemAdapter implements IDevice {
    type = EDeviceType.SecuritySystem;

    constructor(private adaptee: SecuritySystem) {
    }

    getStatus(): boolean {
        return this.adaptee.isWatching;
    }

    turnOn(): void {
        this.adaptee.enable();
    }

    turnOff(): void {
        this.adaptee.disable();
    }
}

export {SecuritySystemAdapter};