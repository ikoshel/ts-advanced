import {EDeviceType, IDevice} from './IDevice';
import {LightAdapter} from './LightAdapter';
import {AirConditionerAdapter} from './AirConditionerAdapter';
import {AirConditioner} from "./AirConditioner";
import {Light} from "./Light";

class RemoteControl {
    private devices: IDevice[];

    constructor(light: Light, airConditioner: AirConditioner) {
        this.devices = [
            new LightAdapter(light),
            new AirConditionerAdapter(airConditioner),
        ];
    }

    toggleDevice(type: EDeviceType) {
        const device = this.devices.find((dev) => dev.type === type);
        if (device) {
            device.getStatus() ? device.turnOff() : device.turnOn();
        }
    }
}

export {RemoteControl};