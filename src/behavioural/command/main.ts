import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');

// command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
// lightPowerCommand.execute();
// lightPowerCommand.undo();

// controle - invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');
