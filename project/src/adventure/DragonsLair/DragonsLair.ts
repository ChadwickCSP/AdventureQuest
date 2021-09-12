import { AbstractTextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { CaveEntrance } from "./rooms/CaveEntrance";

export class DragonsLairAdventure extends AbstractTextAdventure {

    public hasKey: boolean = false;
    public hasSword: boolean = false;
    public strength: number = 0;

    getName(): string {
        return "The Dragon's Lair";
    }
    getAuthor(): string {
        return "Joseph Collard";
    }

    getDescription(): string {
        return "Description";
    }

    async onStart(): Promise<IRoom> {
        this.strength = 0;
        this.hasKey = false;
        this.hasSword = false;
        console.log("Starting dragons lair!");
        await this.printTextFile("dragonsLair/title.txt");
        this.print("\n                           A text adventure by Joseph Collard\n")
        this.sleep(0.5);
        return new CaveEntrance();
    }
}