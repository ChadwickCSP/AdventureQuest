
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