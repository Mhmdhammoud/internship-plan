class Car {
  locked = true;
  numberOfWheels = 0;
  numberOfSeats = 0;
  numberOfGears = 0;
  isHatchBack = false;
  engineType = "";
  engineOn = false;
  hasAc = false;
  acOn = false;
  fuelLeft = 0;
  tankSize = 0;
  lightsOn = false;
  model = "";
  brand = "";
  tiresPressure = {
    frontLeft: 0,
    frontRight: 0,
    rearLeft: 0,
    rearRight: 0,
  };
  constructor(props) {
    this.locked = props.locked;
    this.numberOfWheels = props.numberOfWheels;
    this.numberOfSeats = props.numberOfSeats;
    this.numberOfGears = props.numberOfGears;
    this.isHatchBack = props.isHatchBack;
    this.engineType = props.engineType;
    this.engineOn = props.engineOn;
    this.hasAc = props.hasAc;
    this.acOn = props.acOn;
    this.fuelLeft = props.fuelLeft;
    this.tankSize = props.tankSize;
    this.lightsOn = props.lightsOn;
    this.model = props.model;
    this.brand = props.brand;
    this.tiresPressure = props.tiresPressure;
  }

  locked() {
    if (this.locked) {
      return console.log("Car is locked");
    } else {
      this.locked = true;
    }
  }

  unlock() {
    if (!this.locked) {
      return console.log("Car is unlocked");
    } else {
      this.locked = false;
    }
  }

  turnEngineOn() {
    if (this.engineOn === true) {
      return console.log("Engine is already on");
    } else {
      this.engineOn = true;
      return console.log("Engine ignited");
    }
  }

  turnEngineOff() {
    if (this.engineOn === false) {
      return console.log("Engine is already off");
    } else {
      this.engineOn = false;
      return console.log("Engine turned off");
    }
  }

  turnAcOn() {
    if (this.hasAc === true && this.engineOn === true) {
      if (this.acOn === true) {
        return console.log("Ac is turned on");
      } else {
        this.acOn = true;
        return console.log("Ac turned on");
      }
    } else if (this.hasAc === true && this.engineOn === false) {
      return console.log("Ignite the engine to turn on the Ac");
    } else {
      return console.log("Car is not equipped with Ac");
    }
  }

  turnAcOff() {
    if (this.hasAc === true && this.engineOn === true) {
      if (this.acOn === false) {
        return console.log("Ac is already turned off");
      } else {
        this.acOn = false;
        return console.log("Ac turned off");
      }
    } else if (this.hasAc === true && this.engineOn === false) {
      return console.log("Car is already off!!");
    } else {
      return console.log("Car is not equipped with Ac");
    }
  }

  turnLightsOn() {
    if (this.engineOn === true) {
      if (this.lightsOn === true) {
        return console.log("Lights are already on");
      } else {
        this.lightsOn = true;
        return console.log("Lights turned on");
      }
    } else {
      return console.log("Car is off cant turn the lights on");
    }
  }

  turnLightsOff() {
    if (this.engineOn === true) {
      if (this.lightsOn === false) {
        return console.log("Lights are already off");
      } else {
        this.lightsOn = false;
        return console.log("Lights turned off");
      }
    } else {
      return console.log("Car is turned off !!");
    }
  }

  fillTank(amount) {
    if (this.fuelLeft < this.tankSize) {
      if (amount + this.fuelLeft <= this.tankSize) {
        return console.log(`Fuel left: ${amount + this.fuelLeft}`);
      } else {
        return console.log("Amount to be added exceeded tank limit");
      }
    } else {
      return console.log("Tank is full");
    }
  }

  checkTiresPressure() {
    for (let tire in this.tiresPressure) {
      if (this.tiresPressure.hasOwnProperty(tire)) {
        console.log(`${tire}: ${this.tiresPressure[tire]}`);
      }
    }
  }

  move(direction) {
    if (this.engineOn === false) {
      return console.log("Engine is off");
    } else {
      if (Object.values(this.tiresPressure).some((tire) => tire === 0)) {
        return console.log("Cant move car, a tire is low on pressure");
      } else {
        return console.log(`Car moved ${direction}`);
      }
    }
  }

  inflateTire(tire, amount) {
    if (
      this.tiresPressure.hasOwnProperty(tire) &&
      Object.values(this.tiresPressure).some((pressure) => pressure < 32)
    ) {
      this.tiresPressure[tire] += amount;
      return console.log(`${tire} pressure increased by ${amount}`);
    } else {
      return console.log("Tires pressure is good");
    }
  }
}

const myCar = new Car({
  locked: true,
  numberOfWheels: 4,
  numberOfSeats: 4,
  numberOfGears: 8,
  isHatchBack: false,
  engineType: "S63",
  engineOn: false,
  hasAc: true,
  acOn: false,
  fuelLeft: 234,
  tankSize: 400,
  lightsOn: false,
  model: "m8",
  brand: "BMW",
  tiresPressure: {
    frontLeft: 30,
    frontRight: 32,
    rearLeft: 32,
    rearRight: 0,
  },
});

myCar.turnAcOn();
myCar.fillTank(200);
myCar.turnEngineOn();
myCar.turnAcOn();
myCar.move("forward");
myCar.checkTiresPressure();
myCar.inflateTire("rearRight", 32);
myCar.checkTiresPressure();
myCar.move("forward");
