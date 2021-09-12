import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../DragonsLair";
import { Gym } from "./Gym";
import { MouthOfCave } from "./MouthOfCave";
import { Snoring } from "./Snoring";


export class Tunnel implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "A Long Winding Tunnel";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are in a long winding tunnel. It is pitch black except for the beam emitting
from your flashlight. You notice a [button] on the wall here. In one direction,
the tunnel leads to the [mouth] of the cave. In the other, the [tunnel]
continues.`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;
        const input: string = (await dla.getInput()).toLowerCase().trim();
        if (input === "button")
            {
                dla.print("You press the button and wait.");
                dla.sleep(1);
                dla.print(".");
                dla.sleep(1);
                dla.print(".\n");
                dla.sleep(1);
                dla.print("DING! The wall next to the button opens revealing an elevator!\n");
                dla.print("Entering the elevator, you begin to descend.");
                dla.sleep(1);
                dla.print(".");
                dla.sleep(1);
                dla.print(".\n");
                dla.sleep(1);
                dla.print("The elevator door opens and you exit.\n");
                return new Gym();
            }
            else if (input === "tunnel")
            {
                dla.print("You continue down the tunnel.\n");
                return new Snoring();
            }
            else if (input === "mouth")
            {
                dla.print("You return to the mouth of the cave.\n");
                return new MouthOfCave();
            }
            else
            {
                adventure.print("Invalid command!\n");
            }
        return this;
    }

}