import { DragonsLairAdventure } from "src/adventure/DragonsLair/DragonsLair";
import { FlamingGoatAdventure } from "src/adventure/FlamingGoat/FlamingGoat";
import { ITextAdventure } from "src/support/adventure";

export class Config {

    /**
     * This variable defines if AdventureQuest should start a specific adventure
     * or list all available adventures. If true, this will run the adventure
     * returned by {@link Config.getAdventure}. Otherwise, a list of the adventures
     * will appear for the player to select.
     */
    public readonly SINGLE_ADVENTURE_MODE = true;

    /**
     * 
     * @returns an array of all adventures to be listed on the adventure selection screen
     */
    public getAdventures(): Array<ITextAdventure> {
        const adventures : Array<ITextAdventure> = [];
        adventures.push(new DragonsLairAdventure());
        adventures.push(new FlamingGoatAdventure());

        //TODO: Uncomment and add your adventure below
        //adventures.push(new YourClassNameHere());

        return adventures;
    }

    public getAdventure(): ITextAdventure {
        //TODO: 
        // Comment the line below then...
        return new DragonsLairAdventure();
        // Uncomment the line beneath this to run the FlamingGoatAdventure
        //return new FlamingGoatAdventure();
    }

}

export const config: Config = new Config();