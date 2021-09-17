import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { config } from 'src/config/config';
import { ITextAdventure } from 'src/support/adventure';
import { InputMessage, PrintMessage, RunAdventureMessage } from 'src/support/messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Adventure-Quest';
  private worker: Worker | undefined = undefined;
  @ViewChild('outputArea') el!: ElementRef;
  private outputArea!: HTMLPreElement;

  @ViewChild('terminal') terminalEl!: ElementRef;
  private terminal!: HTMLDivElement;

  @ViewChild('adventureList') adventureListEl!: ElementRef;
  private adventureList!: HTMLDivElement;

  public adventures: Array<ITextAdventure> = config.getAdventures();
  

  ngAfterViewInit(): void {
    this.outputArea = this.el.nativeElement;
    this.adventureList = this.adventureListEl.nativeElement;
    this.terminal = this.terminalEl.nativeElement;

    if (typeof Worker !== 'undefined') {
      // Create a new Worker
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        if(data.TYPE === "PrintMessage"){
          this.processPrintMessage(data);
          
        } else if (data.TYPE === "PickAdventureMessage") {
          this.pickAdventure();
        } else {
          console.log("Received unknown message: " + data);
        }
      };
      if(config.SINGLE_ADVENTURE_MODE){
        this.worker.postMessage(new RunAdventureMessage(0));
      } else {
        this.pickAdventure();
      }
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.log("This web browser does not support Web Workers.");
      this.outputArea.innerHTML += "Could not start adventure. This web browser does not support Web Workers.";
      
    } 
  }

  ngOnInit(): void {
    
  }

  private processPrintMessage(data: PrintMessage): void {
    this.outputArea.innerHTML += data.message;
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }

  private pickAdventure(): void {
    this.terminal.style.display = "none";
    this.adventureList.style.display = "block";
  }


  public handleInput(inputBox: HTMLInputElement): void {
    const userInput: string = inputBox.value;
    inputBox.value = "";
    this.worker?.postMessage(new InputMessage(userInput));
  }

  public runAdventure(index: number): void {
    this.terminal.style.display = "block";
    this.adventureList.style.display = "none";
    this.worker?.postMessage(new RunAdventureMessage(index));
  }

}

