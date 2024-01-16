enum EDeviceType {
    Light = "light",
    AirConditioner = "air-conditioner",
    SecuritySystem = "security-system",
}

interface IDevice {
    type: EDeviceType;

    getStatus(): boolean;

    turnOn(): void;

    turnOff(): void;
}

export {IDevice, EDeviceType}