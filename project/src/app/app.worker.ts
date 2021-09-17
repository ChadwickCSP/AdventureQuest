/// <reference lib="webworker" />
import { config } from "src/config/config";
import { InputMessage, PickAdventureMessage, PrintMessage } from "src/support/messages";
import { Engine } from "../support/engine";

interface PrintQueueElement {
  message: string;
  renderAfter: number;
}

class WorkerEngine implements Engine {

  private readonly fileCache: Map<string, string[]> = new Map<string, string[]>();
  private readonly inputQueue: string[] = [];
  private readonly printQueue: PrintQueueElement[] = [];

  public async threadSleep(seconds: number): Promise<void> {
    if (this.printQueue.length == 0) {
      return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
    const lastRender: number = this.printQueue[this.printQueue.length-1].renderAfter;
    const diff = lastRender - new Date().getTime() + (seconds * 1000);
    return new Promise(resolve => setTimeout(resolve, diff));
  }

  public sleep(seconds: number): void {
    const startTime = this.getStartTime() + seconds*1000;
    this.printQueue.push({ message: "", renderAfter: startTime });
  }

  public async getInput(): Promise<string> {
    while (this.inputQueue.length == 0) {
      // If there is no input, throttle with a sleep
      await this.threadSleep(.1);
    }
    const next: string = this.inputQueue.shift() as string;
    return Promise.resolve(next);
  }

  private getStartTime(): number {
    if (this.printQueue.length == 0) {
      return new Date().getTime();
    }
    return this.printQueue[this.printQueue.length - 1].renderAfter;
  }

  public print(msg: string, delay: number = 0.01): void {
    const delayMS = delay * 1000;
    let startTime: number = this.getStartTime();
    for (let i = 0; i < msg.length; i++) {
      startTime += delayMS;
      this.printQueue.push({ message: msg[i], renderAfter: startTime });
    }
  }

  private printLines(lines: string[], delay: number): void {
    const delayMS = delay * 1000;
    let startTime: number = this.getStartTime();
    lines.forEach(v => {
      startTime += delayMS;
      this.printQueue.push({ message: v + '\n', renderAfter: startTime });
    });
  }

  public async printFile(resourceLocation: string, delay: number = 0.1): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.fileCache.has(resourceLocation)) {
        const lines: string[] = this.fileCache.get(resourceLocation) as string[];
        this.printLines(lines, delay);
        resolve();
        return;
      }

      const request: XMLHttpRequest = new XMLHttpRequest();
      const requestURL: string = "assets/" + resourceLocation;
      request.addEventListener("load", (e) => {
        let lines: string[] = [];
        if (request.status >= 200 && request.status < 300) {
          lines = request.responseText.split('\n');
        } else {
          lines = [`Could not load file: "${resourceLocation}". Error Code: ${request.status} - ${request.statusText}`];
          console.error(`Could not load: ${requestURL}`);
        }
        this.fileCache.set(resourceLocation, lines);
        this.printLines(lines, delay);
        resolve();
        return;
      });
      request.open("GET", requestURL);
      request.send();
    });
  }

  public async startPrintThread(): Promise<void> {
    while (true) {
      while (this.printQueue.length == 0) {
        // If the printQueue is empty, throttle by sleeping
        await this.threadSleep(.1);

      }
      const currentTime = new Date().getTime();
      // Get all of the messages that are ready to be printed
      while (this.printQueue.length > 0 && this.printQueue[0].renderAfter <= currentTime) {
        const next: PrintQueueElement = this.printQueue.shift() as PrintQueueElement;
        // TODO: Try to group characters to speed up print?
        postMessage(new PrintMessage(next.message));
      }
    }
  }

  public pushInput(data: InputMessage): void {
    this.inputQueue.push(data.message);
  }

}

const engine: WorkerEngine = new WorkerEngine();

addEventListener('message', ({ data }) => {
  if (data.TYPE === "RunAdventureMessage") {
    let adventure = config.SINGLE_ADVENTURE_MODE ? config.getAdventure() : config.getAdventures()[data.index];
    adventure.setEngine(engine);
    console.log("Starting PrintThread.");
    engine.startPrintThread();
    console.log("Starting adventure.");
    adventure.run();
    if(!config.SINGLE_ADVENTURE_MODE){
      adventure.onFinish = () => postMessage(new PickAdventureMessage());
    }
  } else if (data.TYPE == "InputMessage") {
    engine.pushInput(data);
  } else {
    console.error("An illegal message was received by the engine: ");
    console.error(data);
  }
});
