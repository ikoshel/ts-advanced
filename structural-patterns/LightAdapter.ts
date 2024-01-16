import {EDeviceType, IDevice} from './IDevice';
import {Light} from './Light';

class LightAdapter implements IDevice {
    type = EDeviceType.Light;

    constructor(private adaptee: Light) {
    }

    getStatus(): boolean {
        return this.adaptee.isTurnedOn;
    }

    turnOn(): void {
        this.adaptee.turnOn();
    }

    turnOff(): void {
        this.adaptee.turnOff();
    }
}

export {LightAdapter};