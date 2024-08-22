class Car {
  locked = false;
  numberOfWheels = 4;
  numberOfSeats;
  numberOfGears;
  isHatchback = false;
  engineType = "";
  engineOn = false;
  hasAc = true;
  acOn = true;
  fuelLeft;
  tankSize;
  lightsOn;
  model = "";
  brand = "";
  tirePressure;
  tires = [`frontLeft`, `frontRight`, `rearLeft`, `rearRight`];
  fuelTankCapicityMax = 0;

  constructor(props) {
    this.locked = props.locked;
    this.numberOfWheels = props.numberOfWheels;
    this.numberOfSeats = props.numberOfSeats;
    this.numberOfGears = props.numberOfGears;
    this.isHatchback = props.isHatchback;
    this.engineType = props.engineType;
    this.engineOn = props.engineOn;
    this.hasAc = props.hasAc;
    this.acOn = props.acOn;
    this.fuelLeft = props.fuelLeft;
    this.tankSize = props.tankSize;
    this.lightsOn = props.lightsOn;
    this.model = props.model;
    this.brand = props.brand;
    this.tirePressure = props.tirePressure;
  }

  lock() {
    if (!this.locked) {
      throw new Error("Car is already locked");
    } else {
      this.locked = true;
    }
  }

  unlock() {
    if (!this.locked) {
      throw new Error("Car is already unlocked");
    } else {
      this.locked;
    }
  }
  turnEngineOn() {
    if (!this.locked) {
      if (this.engineOn) {
        throw new Error("Engine is already On");
      } else this.engineOn = true;
    } else if (this.locked) {
      throw new Error("Car is locked");
    }
  }
  turnEngineOff() {
    if (!this.locked) {
      if (!this.engineOn) {
        throw new Error("Car is already off");
      } else this.engineOn = false;
    } else if (this.locked) {
      throw new Error("Car is locked");
    }
  }
  turnAcOn() {
    if ((this.hasAc = true)) {
      if ((this.acOn = true)) {
        throw new Error("Ac Already on");
      } else this.acOn = true;
    } else if ((this.hasAc = false)) {
      throw new Error("Car has no Ac");
    }
  }
  turnAcOff() {
    if ((this.hasAc = true)) {
      if ((this.acOn = false)) {
        throw new Error("Ac Already off");
      } else this.acOn = false;
    } else if ((this.hasAc = false)) {
      throw new Error("Car has no Ac");
    }
  }
  turnLightsOn() {
    if ((this.lightsOn = true)) {
      throw new Error("Lights are already on");
    } else this.lightsOn;
  }
  turnLightsOff() {
    if ((this.lightsOn = false)) {
      throw new Error("Lights are already off");
    } else this.lightsOn = false;
  }
  fillTank(amount) {
    if (fuelLeft + amount > this.fuelTankCapicityMax) {
      throw new Error("Tank limit exceeded");
    } else {
      this.fuelLeft = this.fuelLeft + amount;
    }
  }
}
