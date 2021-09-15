import { AbstractTextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { CaveEntrance } from "./rooms/CaveEntrance";

/**
 * The DragonsLairAdventure is a demo adventure used to show how to
 * extend the {@link AbstractTextAdventure} class.
 */
export class DragonsLairAdventure extends AbstractTextAdventure {

    // At the top, declare all of the variables for your game.
    public hasKey: boolean = false;
    public hasSword: boolean = false;
    public strength: number = 0;

    // Specify the name that will appear on the adventure select menu
    getName(): string {
        return "The Dragon's Lair";
    }

    // Specify the author name that will appear on the adventure select menu
    getAuthor(): string {
        return "Joseph Collard";
    }

    // Specify a description that will appear on the adventure select menu
    getDescription(): string {
        return "Description";
    }

    // This method is called when the adventure begins
    async onStart(): Promise<IRoom> {
        // Set all of the variables to their initial values
        this.strength = 0;
        this.hasKey = false;
        this.hasSword = false;
        
        // Print the title card
        await this.printTextFile("dragonsLair/title.txt");
        this.print("\n                           A text adventure by Joseph Collard\n")
        this.sleep(0.5);

        // Specify the first room to be the CaveEntrance
        return new CaveEntrance();
    }
}