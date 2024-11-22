import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume() //volume antigo
    this.device.setVolume(this.device.getVolume() + 10) //novo volume
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`
    )
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume() //volume antigo
    this.device.setVolume(this.device.getVolume() - 10) //novo volume
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} agora tem ${this.device.getVolume()}`
    )
  }
}