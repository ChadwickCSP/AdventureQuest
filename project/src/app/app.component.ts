import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputMessage, PrintMessage } from 'src/support/messages';


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

  ngAfterViewInit(): void {
    this.outputArea = this.el.nativeElement;

    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({ data }) => {
        if(data.TYPE == "PrintMessage"){
          this.processPrintMessage(data);
          
        } else {
          console.log("Received unknown message: " + data);
        }
      };
      this.worker.postMessage("run");
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


  public handleInput(inputBox: HTMLInputElement): void {
    const userInput: string = inputBox.value;
    inputBox.value = "";
    this.worker?.postMessage(new InputMessage(userInput));
  }

}

