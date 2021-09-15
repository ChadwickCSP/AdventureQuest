import { AbstractTextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { SubwayPlatform } from "./rooms/SubwayPlatform";

export class FlamingGoatAdventure extends AbstractTextAdventure {

    public isGoatOnFire: boolean = true;
    public hasSpryte: boolean = false;

    getName(): string {
        return "Flaming Goat";
    }
    getAuthor(): string {
        return "Goat Man Jones";
    }

    getDescription(): string {
        return "Can you pass the Goat's challenge?";
    }

    async onStart(): Promise<IRoom> {

        this.isGoatOnFire = true;
        this.hasSpryte = false;

        await this.printTextFile("FlamingGoat/title.txt");
        this.print("\n                           A text adventure by Goat Man Jones\n")
        this.sleep(0.5);

        this.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n");
        this.sleep(0.5);
        this.print("It slows as it approaches your stop.\n\n");
        this.sleep(0.5);
        this.print("The doors open and you step out onto an empty platform.\n\n");
        this.sleep(0.5);
        this.print("Press Enter to Continue...");
        await this.getInput();
        return new SubwayPlatform();
    }
}