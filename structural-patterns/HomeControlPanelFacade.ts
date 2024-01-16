import {EDeviceType, IDevice} from './IDevice';
import {LightAdapter} from './LightAdapter';
import {AirConditionerAdapter} from './AirConditionerAdapter';
import {SecuritySystemAdapter} from './SecuritySystemAdapter';
import {Light} from "./Light";
import {AirConditioner} from "./AirConditioner";
import {SecuritySystem} from "./SecuritySystem";

class HomeControlPanelFacade {
    private devices: IDevice[];

    constructor(light: Light, airConditioner: AirConditioner, securitySystem: SecuritySystem) {
        this.devices = [
            new LightAdapter(light),
            new AirConditionerAdapter(airConditioner),
            new SecuritySystemAdapter(securitySystem),
        ];
    }

    leaveHome(): void {
        for (const device of this.devices) {
            if (device.type === EDeviceType.SecuritySystem) {
                device.turnOn();
                continue;
            }
            device.turnOff();
        }
    }

    backHome(): void {
        for (const device of this.devices) {
            if (device.type === EDeviceType.SecuritySystem) {
                device.turnOff();
                continue;
            }
            device.turnOn();
        }
    }

    toggleDevice(type: EDeviceType) {
        const device = this.devices.find((dev) => dev.type === type);
        if (device) {
            device.getStatus() ? device.turnOff() : device.turnOn();
        }
    }
}

export {HomeControlPanelFacade};