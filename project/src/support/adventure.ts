import { Engine } from "./engine";
import { IRoom } from "./room";

export interface ITextAdventure {
    getName(): string;
    getAuthor(): string;
    getDescription(): string;
    print(message: string, delay?: number): void;
    printTextFile(resourceName: string, delay?: number): Promise<void>;
    sleep(delay: number): void;
    getInput(): Promise<string>;
    setEngine(engine: Engine): void;
    gameOver(): void;
    gameWon(): void;
    //TODO: Should return IRoom
    onStart(): Promise<IRoom>;
    run(): Promise<void>;
}

export abstract class AbstractTextAdventure implements ITextAdventure {

    private engine!: Engine;
    private room!: IRoom;
    private _gameWon: boolean = false;
    private _gameLost: boolean = false;

    abstract getName(): string;
    abstract getAuthor(): string;
    abstract getDescription(): string;
    abstract onStart(): Promise<IRoom>;

    print(message: string, delay?: number): void {
        this.engine.print(message, delay);
    }

    async printTextFile(resourceName: string, delay?: number): Promise<void> {
        console.log("Printing: " + resourceName);
        await this.engine.printFile(resourceName, delay);
    }

    sleep(delay: number): void {
        this.engine.sleep(delay);
    }

    async getInput(): Promise<string> {
        const output: string = await this.engine.getInput();
        this.print(`\n> ${output}\n`);
        return output;
    }

    public DisplayRoomName() : void
    {
        const roomName: string = this.room.getName(this);
        let end: string = " |" ;
        let border: string = "=-";
        for (let ix = 0; ix < roomName.length; ix++)
        {
            border += ix % 2 == 0 ? "=" : "-";
        }
        if (roomName.length % 2 == 1)
        {
            border += "-=";
        }
        else
        {
            border += "=-=";
            end = "  |";
        }
        let middle: string = "| " + roomName + end;
        this.print("\n" + border + "\n");
        this.print(middle + "\n");
        this.print(border + "\n\n");
    }

    setEngine(engine: Engine): void {
        this.engine = engine;
    }

    gameOver(): void {
        this._gameLost = true;
    }

    gameWon(): void {
        this._gameWon = true;
    }

    public async run() {
        this.room = await this.onStart();
        while (!this._gameWon && !this._gameLost) {
            this.DisplayRoomName();
            await this.sleep(.5);
            this.print(this.room.getDescription(this) + "\n");
            this.room = await this.room.handleInput(this);
        }
    }
}