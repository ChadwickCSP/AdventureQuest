import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../dragonsLair";
import { Tunnel } from "./Tunnel";


export class Gym implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "Ye Olde Gym";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye
Olde Gym'. It appears all of the equipment is in use except for some [weights].
On the far wall is an [elevator].`
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;
        const input: string = (await dla.getInput()).toLowerCase().trim();
        if (input === "weights" && dla.strength < 10) {
            dla.print("You pick up the weights and do a rep!\n");
            dla.strength = dla.strength + 6;
            dla.sleep(1);
            dla.print(`Your strength is now ${dla.strength}\n`);
        }
        else if (input === "weights" && dla.strength >= 10) {
            dla.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");
        }
        else if (input === "elevator") {
            dla.print("You enter the elevator and begin to ascend.");
            dla.sleep(1);
            dla.print(".");
            dla.sleep(1);
            dla.print(".\n");
            dla.sleep(1);
            dla.print("The door opens and you step out into the cave.\n");
            return new Tunnel();
        }
        else {
            dla.print("Invalid command!\n");
        }
        return this;
    }

}