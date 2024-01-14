import {EDeviceType} from './IDevice';

class AirConditioner {
    type = EDeviceType.AirConditioner;
    #isWorking = false;

    get isWorking(): boolean {
        return this.#isWorking;
    }

    start() {
        this.#isWorking = true;
        console.log("Air Conditioner is ON");
    }

    stop() {
        this.#isWorking = false;
        console.log("Air Conditioner is OFF");
    }
}

export {AirConditioner}