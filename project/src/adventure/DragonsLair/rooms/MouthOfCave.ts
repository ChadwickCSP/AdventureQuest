import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../DragonsLair";
import { CaveEntrance } from "./CaveEntrance";
import { DeadEnd } from "./DeadEnd";
import { Tunnel } from "./Tunnel";


export class MouthOfCave implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "The Mouth of the Cave";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are at the mouth of the cave. It is dark and damp. Luckily, you brought your
trusty flashlight with you! You can see two paths here. One leads to the [left]
and the other leads to the [right]. You can also see the [entrance] of the cave.`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;
        const input: string = (await dla.getInput()).toLowerCase().trim();
        if (input === "right")
            {
                dla.print("You take the path to the right.\n");
                return new Tunnel();
            }
            else if (input === "left")
            {
                dla.print("You take the path to the left.\n");
                return new DeadEnd();
            }
            else if (input === "entrance")
            {
                dla.print("On second thought, you return to the entrance.\n");
                return new CaveEntrance();
            }
            else
            {
                dla.print("Invalid Command!\n");
            }
        return this;
    }

}