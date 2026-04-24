class GasolineEngine {
  constructor() {
    this.internalSpeed = 0;
  }
  increase() {
    this.internalSpeed++;
  }
  decrease() {
    this.internalSpeed--;
  }
  setInternalSpeed(speed) {
    this.internalSpeed = speed;
  }
}

class ElectronicEngine {
  constructor() {
    this.internalSpeed = 0;
  }
  increase() {
    this.internalSpeed++;
  }
  decrease() {
    this.internalSpeed--;
  }
  setInternalSpeed(speed) {
    this.internalSpeed = speed;
  }
}

class MixedHybridEngine {
  constructor() {
    this.gas = new GasolineEngine();
    this.electric = new ElectronicEngine();
    this.currentSpeed = 0;
  }

  setInternalSpeed(speed) {
    this.currentSpeed = speed;
  }

  increase() {
    if (this.currentSpeed < 50) {
      this.electric.increase();
    } else {
      this.gas.increase();
    }
  }

  decrease() {
    if (this.currentSpeed < 50) {
      this.electric.decrease();
    } else {
      this.gas.decrease();
    }
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
    this.speed = 0;
  }

  setEngine(newEngine) {
    this.engine = newEngine;
  }

  start() {
    this.speed = 0;
    this.engine.setInternalSpeed(0);
    console.log("Car started. Speed: 0");
  }

  accelerate() {
    if (this.speed <= 180) {
      this.speed += 20;
      this.engine.setInternalSpeed(this.speed);
      for (let i = 0; i < 20; i++) {
        this.engine.increase();
      }
      console.log("Speed: " + this.speed);
    }
  }

  brake() {
    if (this.speed >= 20) {
      this.speed -= 20;
      this.engine.setInternalSpeed(this.speed);
      for (let i = 0; i < 20; i++) {
        this.engine.decrease();
      }
      console.log("Speed: " + this.speed);
    }
  }

  stop() {
    if (this.speed === 0) {
      console.log("Car stopped.");
    } else {
      console.log("Cannot stop while moving.");
    }
  }
}

class CarFactory {
  static createCar(type) {
    if (type === "Gasoline") return new Car(new GasolineEngine());
    if (type === "Electronic") return new Car(new ElectronicEngine());
    if (type === "Hybrid") return new Car(new MixedHybridEngine());
    return null;
  }
}

const myCar = CarFactory.createCar("Hybrid");

myCar.start();
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.stop();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.stop();
