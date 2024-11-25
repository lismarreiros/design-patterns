export class SmartHouseLight {
  private isOn = false
  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF'
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`)
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`)
    return this.isOn;
  }

}