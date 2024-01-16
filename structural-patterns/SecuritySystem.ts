import {EDeviceType} from './IDevice';

class SecuritySystem {
    type = EDeviceType.SecuritySystem;
    #isWatching = false;

    get isWatching(): boolean {
        return this.#isWatching;
    }

    enable() {
        this.#isWatching = true;
        console.log("Security system is ON");
    }

    disable() {
        this.#isWatching = false;
        console.log("Security system is OFF");
    }
}

export {SecuritySystem}