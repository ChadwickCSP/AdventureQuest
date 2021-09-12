import { DragonsLairAdventure } from "src/adventure/DragonsLair/DragonsLair";
import { ITextAdventure } from "src/support/adventure";

export class Config {

    public getAdventure(): ITextAdventure {
        return new DragonsLairAdventure();
    }

}

export const config: Config = new Config();