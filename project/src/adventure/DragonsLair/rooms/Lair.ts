import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { DragonsLairAdventure as DragonsLairAdventure } from "../DragonsLair";
import { Snoring } from "./Snoring";


export class Lair implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "The Dragon's Lair";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are standing inside of a dragon's lair! The air is hot and dank. A tunnel
leads [back] the way you came. In the center of the room is a massive pile of
gold atop which a massive red dragon slumbers. Probably best not to [wake] the
dragon. If you could [slay] it, you would be a hero!`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const dla: DragonsLairAdventure = adventure as DragonsLairAdventure;
        const input: string = (await dla.getInput()).toLowerCase().trim();
        if (input === "back")
            {
                dla.print("You head back the way you came.\n");
                return new Snoring();
            }
            else if (input === "wake")
            {
                dla.print("You wake the dragon...\n");
                dla.sleep(1);
                dla.print(`The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with
disdain and smiles crookedly before devouring you. The dragon lets out a
satisfying belch before closing its eyes and drifting back to sleep.`);
                dla.gameOver();
            }
            else if (input === "slay" && dla.hasSword)
            {
                dla.print("You draw your sword to slay the dragon.\n");
                dla.sleep(1);
                dla.print(`With your sword in hand, you sneak up to the dragon and drive it into the
beast's heart. The evil dragon winces as it realizes its reign of terror is
over. Congratulations, you are a hero!`);
                dla.gameWon();
            }
            else if (input === "slay" && !dla.hasSword)
            {
                dla.print("You attempt to pummel the dragon with your fists!\n");
                dla.sleep(1);
                dla.print(`The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with
disdain and smiles crookedly before devouring you. The dragon lets out a
satisfying belch before closing its eyes and drifting back to sleep.`);
                dla.gameOver();
            }
            else
            {
                dla.print("Invalid command!\n");
            }
        return this;
    }

}