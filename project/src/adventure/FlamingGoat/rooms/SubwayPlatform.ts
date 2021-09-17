import { ITextAdventure } from "src/support/adventure";
import { IRoom } from "src/support/room";
import { FlamingGoatAdventure } from "../FlamingGoat";
import { Escalator } from "./Escalator";


export class SubwayPlatform implements IRoom {
    getName(adventure: ITextAdventure): string {
        return "Subway Platform";
    }
    getDescription(adventure: ITextAdventure): string {
        return `You are standing on the subway platform. There is a broken [escalator] here
and a vending [machine].`;
    }

    async handleInput(adventure: ITextAdventure): Promise<IRoom> {
        const fga: FlamingGoatAdventure = adventure as FlamingGoatAdventure;
        const input: string = (await fga.getInput()).toLowerCase().trim();
        //TODO
        return this;
    }

}