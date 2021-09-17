
/**
 * A PrintMessage is created when an adventure executes a print command.
 */
export class PrintMessage {
    public readonly message: string;
    public readonly TYPE = "PrintMessage";
  
    constructor(message: string){
      this.message = message;
    }
}

/**
 * An InputMessage is created when a user types a message into the program.
 */
export class InputMessage {
    public readonly message: string;
    public readonly TYPE = "InputMessage";;

    constructor(message: string){
        this.message = message;
    }
}

export class PickAdventureMessage {
    public readonly TYPE = "PickAdventureMessage";
}

export class RunAdventureMessage {
    public readonly index: number;
    public readonly TYPE = "RunAdventureMessage";

    constructor(index: number){
        this.index = index;
    }
}