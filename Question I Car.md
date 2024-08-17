### Task: Implement a `Car` Class in JavaScript

You are required to create a `Car` class using Object-Oriented Programming principles in JavaScript. The class should encapsulate the following properties and methods:

#### **Properties:**

1. `locked` (boolean): Indicates whether the car is locked or unlocked.
2. `numberOfWheels` (number): Specifies the number of wheels the car has.
3. `numberOfSeats` (number): Specifies the number of seats in the car.
4. `numberOfGears` (number): Specifies the number of gears the car has.
5. `isHatchback` (boolean): Indicates whether the car is a hatchback or not.
6. `engineType` (string): Specifies the type of engine (e.g., "petrol", "diesel", "electric").
7. `engineOn` (boolean): Indicates whether the engine is on or off.
8. `hasAc` (boolean): Indicates whether the car has an air conditioning system.
9. `acOn` (boolean): Indicates whether the air conditioning is on or off (only applicable if the car has an AC).
10. `fuelLeft` (number): Represents the amount of fuel left in the tank.
11. `tankSize` (number): Specifies the size of the fuel tank.
12. `lightsOn` (boolean): Indicates whether the lights are on or off.
13. `model` (string): The model of the car.
14. `brand` (string): The brand of the car.
15. `tirePressure` (object): Keeps track of the pressure for each tire. This should be an object with properties `frontLeft`, `frontRight`, `rearLeft`, and `rearRight`, each representing the pressure (in psi or another unit) of the corresponding tire.

#### **Methods:**

1. `lock()`: Locks the car.
2. `unlock()`: Unlocks the car.
3. `turnEngineOn()`: Turns the engine on.
4. `turnEngineOff()`: Turns the engine off.
5. `turnAcOn()`: Turns the air conditioning on. This method should only work if the car has an AC (`hasAc` is true).
6. `turnAcOff()`: Turns the air conditioning off. This method should only work if the car has an AC (`hasAc` is true).
7. `turnLightsOn()`: Turns the lights on.
8. `turnLightsOff()`: Turns the lights off.
9. `fillTank(amount)`: Adds a specified amount of fuel to the tank, ensuring the total doesn't exceed the tank size.
10. `move(direction)`: Moves the car in the specified direction, which can be "left", "right", "forward", or "reverse". **Note:** The car should not move if the pressure of any tire is 0.
11. `checkTirePressure()`: Returns the current pressure of each tire.
12. `inflateTire(tire, amount)`: Increases the pressure of the specified tire (`frontLeft`, `frontRight`, `rearLeft`, `rearRight`) by a given amount.

---

### Deliverables:

- A fully implemented `Car` class in JavaScript, complete with the properties and methods listed above.
- The class should be well-encapsulated, with appropriate access controls for properties (e.g., use of getters/setters where necessary).
- Provide example usage of the `Car` class, demonstrating the initialization of a car object and calling each of the methods to show expected functionality.

### Notes:

- Consider edge cases, such as attempting to move the car when the engine is off, trying to fill the tank beyond its capacity, or trying to move the car when any tire has a pressure of 0.
- Ensure that the AC-related methods only function if the car has an AC (`hasAc` is true). If the car does not have an AC, these methods should either throw an error or return a message indicating that the car does not have an AC.
- Ensure that the class is easily extendable for future features.
