class Tv {
  brand = '';
  model = '';
  size = 32;
  resolution = '1080p';
  isSmart = false;
  powerOn = false;
  volume = 0;
  channel = 1;
  maxChannels = 100;
  previousVolume = 0;
  source = 'HDMI1';
  maxSources = 4;
  sources = ['HDMI1', 'HDMI2', 'AV', 'VGA'];
  availablePrograms = ['Netflix', 'Hulu', 'Prime Video', 'Disney+'];
  activeProgram = '';
  // 100% Correct but no neat
  // constructor(
  //   brand,
  //   model,
  //   size,
  //   resolution,
  //   isSmart,
  //   powerOn,
  //   volume,
  //   channel
  // ) {
  //   this.brand = brand;
  //   this.model = model;
  //   this.size = size;
  //   this.resolution = resolution;
  //   this.isSmart = isSmart;
  //   this.powerOn = powerOn;
  //   this.volume = volume;
  //   this.channel = channel;
  // }
  // Cleaner way to write
  constructor(props) {
    this.brand = props.brand;
    this.model = props.model;
    this.size = props.size;
    this.resolution = props.resolution;
    this.isSmart = props.isSmart;
    this.maxChannels = props.maxChannels;
    this.maxSources = props.maxSources;
    this.sources = props.sources;
  }

  turnOn() {
    if (this.powerOn) {
      throw new Error('TV is already on');
    } else {
      this.powerOn = true;
    }
  }
  turnOff() {
    if (!this.powerOn) {
      throw new Error('TV is already off');
    } else {
      this.powerOn = false;
    }
  }
  increaseVolume() {
    this.checkPower();
    if (this.volume === 100) {
      throw new Error('Volume is already at max');
    } else {
      this.volume++;
    }
  }
  decreaseVolume() {
    this.checkPower();
    if (this.volume === 0) {
      throw new Error('Volume is already at min');
    } else {
      this.volume--;
    }
  }
  getSources() {
    this.checkPower();
    return this.sources;
  }
  increaseChannel() {
    this.checkPower();
    if (this.channel === this.maxChannels) {
      this.channel = 1;
    } else {
      this.channel++;
    }
  }
  decreaseChannel() {
    this.checkPower();
    if (this.channel === 1) {
      this.channel = this.maxChannels;
    } else {
      this.channel--;
    }
  }
  changeChannel(channelNumber) {
    this.checkPower();
    if (channelNumber > this.maxChannels) {
      throw new Error('Channel number exceeds max channels');
    } else {
      this.channel = channelNumber;
    }
  }
  mute() {
    this.checkPower();
    this.previousVolume = this.volume;
    this.volume = 0;
  }
  unmute() {
    this.checkPower();
    this.volume = this.previousVolume;
  }
  switchSource(sourceNumber) {
    this.checkPower();
    if (sourceNumber > this.maxSources) {
      throw new Error('Source number exceeds max sources');
    } else {
      this.source = sourceNumber;
    }
  }
  checkPower() {
    if (!this.powerOn) {
      throw new Error('TV is off');
    }
  }
  startProgram(programName) {
    this.checkPower();
    if (!this.isSmart) {
      throw new Error('TV is not smart there are no programs available');
    } else {
      if (!this.availablePrograms.includes(programName)) {
        throw new Error('Program not available');
      } else {
        this.activeProgram = programName;
      }
    }
  }
  displayInfo() {
    try {
      this.checkPower();
      console.log(
        `This TV has the following properties:\n
      Brand: ${this.brand}\n
      Model: ${this.model}\n
      Size: ${this.size}\n
      Resolution: ${this.resolution}\n
      Smart: ${this.isSmart}\n
      Power: ${this.powerOn}\n
      Volume: ${this.volume}\n
      Channel: ${this.channel}\n
      Source: ${this.sources}\n
      Active Program: ${this.activeProgram}`
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = Tv;
