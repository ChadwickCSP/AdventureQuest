
export class PrintMessage {
    public readonly message: string;
    public readonly TYPE = "PrintMessage";
  
    constructor(message: string){
      this.message = message;
    }
}

export class InputMessage {
    public readonly message: string;
    public readonly TYPE = "InputMessage";;

    constructor(message: string){
        this.message = message;
    }
}