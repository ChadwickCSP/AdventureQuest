import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { FlamingGoatAdventure } from "../FlamingGoat";
import { SubwayPlatform } from "./SubwayPlatform";


export class Escalator implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "Broken Escalator";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are standing on a broken escalator. There is a [goat] here blocking your 
way forward. The steps of the escalator lead [back] to the subway platform.`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const fga: FlamingGoatAdventure = adventure as FlamingGoatAdventure;
        const input: string = (await fga.getInput()).toLowerCase().trim();
        //TODO:
        return this;
    }

}