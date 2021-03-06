import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../DragonsLair";
import { MouthOfCave } from "./MouthOfCave";


export class CaveEntrance implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "Cave Entrance";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You stand before a cave. It is well known that an evil dragon slumbers here.
From time to time, the dragon wakes to terrorize the nearby villages and steal
their gold. Dare you [enter] the cave in search of riches? Or would you rather
[run] home to the comfort of your warm bed?`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {

        // Convert the adventure to a DragonsLairAdventure so you can access the 
        // DragonsLairAdventure variables.
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;

        // Read input from the user, set it to lowercase, and remove all whitespace
        const input: string = (await dla.getInput()).toLowerCase().trim();

        // Check to see if the user typed a valid command
        if (input === "enter") {
            dla.print("You enter the cave.\n");
            return new MouthOfCave();
        }
        else if (input === "run") {
            dla.print("Scared of the dragon, you run home to your bed where fall asleep.\n");
            dla.gameOver();
        }
        else {
            dla.print("Invalid command!");
        }
        return this;
    }

}