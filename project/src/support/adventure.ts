import { Engine } from "./engine";
import { IRoom } from "./room";

/**
 * An ITextAdventure defines a text based adventure. It is recommended that you
 * extend the {@link AbstractTextAdventure} class to create a new adventure as it provides
 * default implementations of almost all of the methods for this interface.
 */
export interface ITextAdventure {

    /**
     * This method is used to display the Name of the adventure on the selection screen.
     * 
     * @returns The name of this {@link ITextAdventure}
     */
    getName(): string;

    /**
     * This method is used to display the Author on the selection screen.
     * 
     * @returns The author this {@link ITextAdventure}
     */
    getAuthor(): string;

    /**
     * This method is used to display a short description of your adventure on the selection screen.
     * 
     * @returns A short description of this {@link ITextAdventure}
     */
    getDescription(): string;

    /**
      * Enqueue's a message to be printed. If the engine supports it, the specified delay determines
      * a pause which occurs between each character being printed.
      * 
      * @param msg The message to be printed
      * @param delay The number of seconds to wait between each character
      * 
      * Example Usage:
      * 
      * ```typescript
      * adventure.print("A green orb is before you.\n");
      * ```
      */
    print(message: string, delay?: number): void;

    /**
      * Enqueue's a file to be printed line by line. If the engine supports it, the specified delay
      * determines a pause which occurs between each line in the specified file.
      * 
      * @param resourceLocation A relative path to the file within the assets directory
      * @param delay The number of seconds to wait between each line being printed
      * 
      * Example Usage:
      * 
      * ```typescript
      * await adventure.printTextFile("FlamingGoat/title.txt");
      * ```
      * 
      */
    printTextFile(resourceName: string, delay?: number): Promise<void>;

    /**
      * Enqueue's a pause in the engine's output. If pausing is supported, the engine will wait
      * the specified number of seconds before printing the next output.
      * 
      * @param seconds The number of seconds to wait
      * 
      * Example Usage:
      * 
      * ```typescript
      * adventure.print("You press the button and await");
      * adventure.sleep(0.5);
      * adventure.print(".");
      * adventure.sleep(0.5);
      * adventure.print(".");
      * adventure.sleep(0.5);
      * adventure.print("\nDing! An elevator door opens.");
      * ```
      * 

      */
    sleep(delay: number): void;

    /**
      * An asynchronous method which waits for the user to enter a message.
      * 
      * Example:
      * 
      * ```typescript
      * const userInput: string = await adventure.getInput();
      * ```
      */
    getInput(): Promise<string>;

    /**
     * Sets the engine that should be used to run this game. This method is useful for testing.
     * 
     * @param engine The Engine to use for testing
     */
    setEngine(engine: Engine): void;

    /**
     * This method is called when the player loses the adventure.
     * 
     * Example Usage:
     * 
     * ```typescript
     * adventure.print("The dragon eats you!");
     * adventure.gameOver();
     * ```
     */
    gameOver(): void;

    /**
     * This method is called when the player wins the adventure.
     * 
     * Example Usage:
     * 
     * ```typescript
     * adventure.print("You defeat the dragon!");
     * adventure.gameWon();
     * ```
     */
    gameWon(): void;
    
    /**
     * This method is called when the adventure begins. It should clear all variables to their default
     * values, display a title screen, and specify the room the player starts in.
     */
    onStart(): Promise<IRoom>;

    /**
     * This method is the main loop of the adventure. 
     */
    run(): Promise<void>;
}

/**
 * An AbstractTextAdventure provids a default implementation of almost all of the
 * methods necessary to create a Text Adventure game. To extend this class,
 * you only need to implement the following methods:
 * 
 * - {@link ITextAdventure.onStart}
 * - {@link ITextAdventure.getName}
 * - {@link ITextAdventure.getAuthor}
 * - {@link ITextAdventure.getDescription}
 * 
 * An example implementation can be found be viewing the {@link DragonsLairAdventure}
 */
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

    private DisplayRoomName() : void
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