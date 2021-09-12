import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../dragonsLair";
import { Lair } from "./Lair";
import { Tunnel } from "./Tunnel";


export class Snoring implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "A Large Natural Cave";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are in a large natural room within a cave. It is unnaturally warm here and
you can hear what sounds like a giant creature [snoring] around a corner. In the
center of the room is a [chest]. A [tunnel] leads back toward the mouth of the
cave.`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;
        const input: string = (await dla.getInput()).toLowerCase().trim();
        if (input === "snoring") {
            dla.print("You slowly approach the snoring...\n");
            return new Lair();
        }
        else if (input === "chest" && dla.hasKey) {

            if (dla.hasSword == false) {
                dla.print("The chest is locked.\n");
                dla.sleep(1);
                dla.print("You take the key from your pocket and unlock the chest.\n");
                dla.sleep(1);
                dla.print("Inside, you find a beautiful sword!\n");
                dla.hasSword = true;
            }
            else {
                dla.print("You search the chest again, but it is empty.\n");
            }

        }
        else if (input === "chest" && !dla.hasKey) {
            dla.print("The chest is locked!\n");
        }
        else if (input === "tunnel") {
            dla.print("You head back toward the mouth of the cave.\n");
            return new Tunnel();
        }
        else {
            dla.print("Invalid command!\n");
        }
        return this;
    }

}