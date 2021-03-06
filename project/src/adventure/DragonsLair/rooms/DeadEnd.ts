import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../DragonsLair";
import { MouthOfCave } from "./MouthOfCave";


export class DeadEnd implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "A Dead End";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are at a dead end. There is a large [boulder] here. A path leads [back] to
the mouth of the cave.`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        // Convert the adventure to a DragonsLairAdventure so you can access the 
        // DragonsLairAdventure variables.
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;

        // Read input from the user, set it to lowercase, and remove all whitespace
        const input: string = (await dla.getInput()).toLowerCase().trim();

        // Check to see if the user typed a valid command
        if (input === "boulder" && dla.strength < 10) {
            dla.print("You try to lift the boulder but you're too weak!\n");
        }
        else if (input === "boulder" && dla.strength >= 10) {
            dla.print("You lift the boulder with ease!\n");
            if (dla.hasKey) {
                dla.print("Now you're just showing off.\n");
            }
            else {
                dla.print("Beneath the boulder, you find a key.\n");
                dla.print("You take the key and place it in your pocket!\n");
                dla.hasKey = true;
            }

        }
        else if (input === "back") {
            dla.print("You return to the Mouth of the Cave\n");
            return new MouthOfCave();
        }
        else {
            dla.print("Invalid command!\n");
        }
        return this;
    }

}