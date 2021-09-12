
export interface Engine {

     getInput() : Promise<string>;
     print(msg : string, delay?: number) : void;
     printFile(resourceLocation: string, delay?: number) : Promise<void>;
     sleep(seconds : number) : void;

}


