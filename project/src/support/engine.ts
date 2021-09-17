
/**
 * The Engine defines how input and output are received.
 */
export interface Engine {

     /**
      * An asynchronous method which waits for the user to enter a message.
      */
     getInput() : Promise<string>;

     /**
      * Enqueue's a message to be printed. If the engine supports it, the specified delay determines
      * a pause which occurs between each character being printed.
      * 
      * @param msg The message to be printed
      * @param delay The number of seconds to wait between each character
      */
     print(msg : string, delay?: number) : void;

     /**
      * Enqueue's a file to be printede line by line. If the engine supports it, the specified delay
      * determines a pause which occurs between each line in the specified file.
      * 
      * @param resourceLocation A relative path to the file within the assets directory
      * @param delay The number of seconds to wait between each line being printed
      */
     printFile(resourceLocation: string, delay?: number) : Promise<void>;

     /**
      * Enqueue's a pause in the engine's output. If pausing is supported, the engine will wait
      * the specified number of seconds before printing the next output.
      * @param seconds The number of seconds to wait
      */
     sleep(seconds : number) : void;

}


