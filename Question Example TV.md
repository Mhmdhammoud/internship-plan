# Example Question: TV Class in JavaScript

## Task: Implement a `TV` Class in JavaScript

You are required to create a `TV` class using Object-Oriented Programming principles in JavaScript. The class should encapsulate the following properties and methods:

### **Properties:**

1. `brand` (string): The brand of the TV.
2. `model` (string): The model of the TV.
3. `size` (number): The size of the TV in inches.
4. `resolution` (string): The resolution of the TV (e.g., "1080p", "4K").
5. `isSmart` (boolean): Indicates whether the TV is a smart TV or not.
6. `powerOn` (boolean): Indicates whether the TV is on or off.
7. `volume` (number): Represents the current volume level (e.g., 0 to 100).
8. `channel` (number): Represents the current channel number.
9. `maxChannels` (number): The maximum number of channels available on the TV.

### **Methods:**

1. `turnOn()`: Turns the TV on.
2. `turnOff()`: Turns the TV off.
3. `increaseVolume(amount)`: Increases the volume by the specified amount, ensuring it doesn't exceed the maximum level.
4. `decreaseVolume(amount)`: Decreases the volume by the specified amount, ensuring it doesn't go below the minimum level.
5. `changeChannel(channelNumber)`: Changes the TV to the specified channel number.
6. `increaseChannel()`: Changes the TV to the next channel.
7. `decreaseChannel()`: Changes the TV to the previous channel.
8. `mute()`: Mutes the TV by setting the volume to 0.
9. `unmute()`: Unmutes the TV by restoring the volume to the previous level before muting.
10. `switchSource(sourceNumber)`: Switches the TV input to the specified HDMI source (e.g., HDMI1, HDMI2).
11. `startProgram(programName)`: Starts the specified program (e.g., Netflix, Twitch, YouTube) if the TV is a smart TV. If the TV is not smart, this method should return a message indicating that the feature is not available.
12. `displayInfo()`: Displays the current status of the TV, including the brand, model, size, resolution, whether it's a smart TV, power status, current volume, and current channel.

---

### Deliverables:

- A fully implemented `TV` class in JavaScript, complete with the properties and methods listed above.
- The class should be well-encapsulated, with appropriate access controls for properties (e.g., use of getters/setters where necessary).
- Provide example usage of the `TV` class, demonstrating the initialization of a TV object and calling each of the methods to show expected functionality.

### Notes:

- Consider edge cases, such as attempting to change the channel when the TV is off, or increasing the volume beyond its maximum level.
- Ensure that the `startProgram` method only works if the TV is a smart TV. If the TV is not smart, this method should return a message indicating that the feature is not available.
- Ensure that the methods behave logically, for example, the TV should only change channels or adjust volume if it's turned on.
- Ensure that the class is easily extendable for future features.
