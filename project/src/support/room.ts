import { ITextAdventure } from "./adventure";

export interface IRoom {

    getName(adventure: ITextAdventure): string;
    getDescription(adventure: ITextAdventure): string;
    handleInput(adventure: ITextAdventure): Promise<IRoom>;

}