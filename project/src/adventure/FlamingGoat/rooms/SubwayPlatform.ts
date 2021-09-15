import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { FlamingGoatAdventure } from "../FlamingGoat";
import { Escalator } from "./Escalator";


export class SubwayPlatform implements IRoom {
    getName(adventure: ITextAdventure): string {
        //TODO:
        return "TODO: Name";
    }
    getDescription(adventure: ITextAdventure): string {
        //TODO:
        return `TODO: Description`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const fga: FlamingGoatAdventure = adventure as FlamingGoatAdventure;
        const input: string = (await fga.getInput()).toLowerCase().trim();
        //TODO: Implement the games logic
        return this;
    }

}