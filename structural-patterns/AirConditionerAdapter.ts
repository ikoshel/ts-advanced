import {EDeviceType, IDevice} from './IDevice';
import {AirConditioner} from './AirConditioner';

class AirConditionerAdapter implements IDevice {
    type = EDeviceType.AirConditioner;

    constructor(private adaptee: AirConditioner) {
    }

    getStatus(): boolean {
        return this.adaptee.isWorking;
    }

    turnOn(): void {
        this.adaptee.start();
    }

    turnOff(): void {
        this.adaptee.stop();
    }
}

export {AirConditionerAdapter};