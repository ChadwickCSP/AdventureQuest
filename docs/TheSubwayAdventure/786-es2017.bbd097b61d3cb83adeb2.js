!function(){"use strict";function e(e,t,n,r,o,a,s){try{var i=e[a](s),h=i.value}catch(u){return void n(u)}i.done?t(h):Promise.resolve(h).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var s=t.apply(n,r);function i(t){e(s,o,a,i,h,"next",t)}function h(t){e(s,o,a,i,h,"throw",t)}i(void 0)})}}class n{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,t){this.engine.print(e,t)}printTextFile(e,n){var r=this;return t(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,n)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return t(function*(){const t=yield e.engine.getInput();return e.print(`\n> ${t}\n`),t})()}DisplayRoomName(){const e=this.room.getName(this);let t=" |",n="=-";for(let o=0;o<e.length;o++)n+=o%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");let r="| "+e+t;this.print("\n"+n+"\n"),this.print(r+"\n"),this.print(n+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return t(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("boulder"===r&&t.strength<10)t.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&t.strength>=10)t.print("You lift the boulder with ease!\n"),t.hasKey?t.print("Now you're just showing off.\n"):(t.print("Beneath the boulder, you find a key.\n"),t.print("You take the key and place it in your pocket!\n"),t.hasKey=!0);else{if("back"===r)return t.print("You return to the Mouth of the Cave\n"),new h;t.print("Invalid command!\n")}return n})()}}class o{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("weights"===r&&t.strength<10)t.print("You pick up the weights and do a rep!\n"),t.strength=t.strength+6,t.sleep(1),t.print(`Your strength is now ${t.strength}\n`);else if("weights"===r&&t.strength>=10)t.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return t.print("You enter the elevator and begin to ascend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The door opens and you step out into the cave.\n"),new i;t.print("Invalid command!\n")}return n})()}}class a{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("You head back the way you came.\n"),new s):("wake"===r?(t.print("You wake the dragon...\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()):"slay"===r&&t.hasSword?(t.print("You draw your sword to slay the dragon.\n"),t.sleep(1),t.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),t.gameWon()):"slay"!==r||t.hasSword?t.print("Invalid command!\n"):(t.print("You attempt to pummel the dragon with your fists!\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()),n)})()}}class s{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("snoring"===r)return t.print("You slowly approach the snoring...\n"),new a;if("chest"===r&&t.hasKey)!1===t.hasSword?(t.print("The chest is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the chest.\n"),t.sleep(1),t.print("Inside, you find a beautiful sword!\n"),t.hasSword=!0):t.print("You search the chest again, but it is empty.\n");else if("chest"!==r||t.hasKey){if("tunnel"===r)return t.print("You head back toward the mouth of the cave.\n"),new i;t.print("Invalid command!\n")}else t.print("The chest is locked!\n");return n})()}}class i{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"button"===r?(t.print("You press the button and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("DING! The wall next to the button opens revealing an elevator!\n"),t.print("Entering the elevator, you begin to descend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The elevator door opens and you exit.\n"),new o):"tunnel"===r?(t.print("You continue down the tunnel.\n"),new s):"mouth"===r?(t.print("You return to the mouth of the cave.\n"),new h):(e.print("Invalid command!\n"),n)})()}}class h{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,o=(yield t.getInput()).toLowerCase().trim();return"right"===o?(t.print("You take the path to the right.\n"),new i):"left"===o?(t.print("You take the path to the left.\n"),new r):"entrance"===o?(t.print("On second thought, you return to the entrance.\n"),new u):(t.print("Invalid Command!\n"),n)})()}}class u{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("You enter the cave.\n"),new h):("run"===r?(t.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class l extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return t(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new u})()}}class c{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("\nSeeing no way foward, you return to the subway platform\n"),new d):("goat"===r?(t.print("\nThere is an angry looking goat blocking the escalator.\n"),t.print("\nThe goat looks very [hungry]. BAAAA!\n"),t.isGoatOnFire&&t.print("\nThe goat is on [fire].\n")):"fire"===r&&t.isGoatOnFire?t.hasSpryte&&(t.print("\nyou take the Spryte from your pocket and pour it over the goat. The flames go out.\n"),t.isGoatOnFire=!1):"fire"!==r||t.isGoatOnFire?"fire"!==r||t.isGoatOnFire?"hungry"===r&&t.isGoatOnFire?t.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"!==r||t.isGoatOnFire?t.print("\nInvalid command!"):(t.print("\nThe goat looks quite hungry. You hand it the empty Spryte can. The goat crunches through it \nina\xa0\xa0matter of seconds.\nIt 'BAAAS' happily before hopping away.\nYou continue to the broken escalator and return home.\nDid that really happen?"),t.gameWon()):t.print("\nNo fire here!"):t.print("\nYep! thats a fire!\n"),n)})()}}class d{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("escalator"===r)t.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return t.print("\nYou start to walk up the escalator.\n"),new c;"machine"===r?t.print("\nOh wow!Its one of those cool new spryte machines it has a [coin] slot.\n"):"coin"!==r||t.hasSpryte?t.print("coin"===r&&t.hasSpryte?"\nYou already have a Spryte":"\nInvalid command!"):(t.print("\nYou drop 4 coins into the vending machine. You hear a loud whirling sound followed by a loud \n*KA-CHUNK*. You reach down and pick up a Spryte.\n"),t.hasSpryte=!0)}return n})()}}class p extends n{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return t(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new d})()}}class g{getName(e){return"Cheese Room"}getDescription(e){return"Welcome to the CheesRoom. \nThre is some [cheese] hiding over there under the counter. \nThere is also a door leading back to the [stairway]\nOH! What are those???\nAre those the [keys] to the Sauce Room!\n"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("cheese"===r)t.hasCheese=!0,t.print("Nice you got some Cheese for the BLt! Only a few more ingredients left!.\n");else if("cheese"===r&&t.hasCheese)t.print("\n You already have some cheese!");else if("keys"===r)t.hasKeystoSauce=!0,t.print("\n You now have the keys to the Sauce Room");else{if("stairway"===r)return new w;t.print("\nInvalid command!")}return n})()}}class m{getName(e){return"Sauce Room"}getDescription(e){return"Welcome to the Sauce Room. \nGo get that [sauce] from the dispenser for the BLT.\nOnce you have your sauce, you will go back to the stairway and then the kitchen. \n"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"sauce"===r?(t.hasSauce=!0,t.print("You got sauce!\n"),new w):"sauce"===r&&t.hasSauce?(t.print("\n You have all your sauce!"),new w):(t.print("\nInvalid command!"),n)})()}}class y{getName(e){return"Garden"}getDescription(e){return"Welcome to the Garden.\nYou see some [tomato] in the garden pots over there. \nThere is also a door leading back the [stairway] over in the corner.\nMake sure to get your cheese before heading into the Sauce Room.\nThere might even be a door to the [sauce room]from here"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("tomato"===r&&t.hasScissors)t.hasTomato=!0,t.print("Congrats! You got some tomatoes Only a few more ingredients left.\n");else if("tomato"!==r||t.hasScissors)if("tomato"===r&&t.hasTomato)t.print("\n You already have tomatoes go find more\n");else{if("stairway"===r)return new w;if("sauce room"!==r||t.hasKeystoSauce){if("sauce room"===r&&t.hasKeystoSauce)return t.print("\nLets go check whats in the Sauce Room"),new m;t.print("\nInvalid command!")}else t.print("\n The Sauce room is locked. Go get the keys from the Cheese room")}else t.print("\nOh NO!!! You need the scissors from the tool shed to pick the tomatoes!");return n})()}}class f{getName(e){return"Tool Shed"}getDescription(e){return"Welcome to the Toolshed. You see some [scissors] over in the corner. \nThere is also a door leading back to the [stairway]"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("scissors"===r)t.hasScissors=!0,t.print("You got some scissors to pick the tomato in the Garden!!!\nHowever, you can only get to the Garden through the stairway.\n");else{if("stairway"===r)return new w;t.print("\nInvalid command!")}return n})()}}class w{getName(e){return"Stairway"}getDescription(e){return"Welcome to the stairway.\nfrom here you see 4 doors. The first one leads to the [tool shed].\nThe second leads to the [garden]. \nThe third leads to the [cheese room]. \nMAKE SURE YOU GO TO THE CHEESE ROOM BEFORE GOING BACK TO KITCHEN!\nand the last one leads back to the [basement].\nOnce you have all your ingredients from these final rooms\nCome back to the Stairway and go back to the [kitchen] and then check the customer out"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"tool shed"===r?(t.print("Lets go check out the tool shed!.\n"),new f):"garden"===r?(t.print("\n Maybe we can find some tomatoes in the Garden"),new y):"cheese room"===r?(t.print("\n Lets see whats in the Cheese Room!"),new g):"basement"===r?new v:"kitchen"===r?new T:(t.print("\nInvalid Command!"),n)})()}}class v{getName(e){return"Basement"}getDescription(e){return"Welcome to the basement. It looks like there is some [bacon] over there in the fridge.\n There is also a door over there leading to [stairway].\n Go check those out!\n Or you can go [back]"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("bacon"!==r||t.hasBacon)if("bacon"===r&&t.hasBacon)t.print("\nYou already have bacon!");else{if("stairway"===r)return t.print("\n Lets go see whats in the Stairway"),new w;if("back"===r)return new b;t.print("\nInvalid Command!")}else t.print("\n You got the Bacon!!! Where to from here?"),t.hasBacon=!0;return n})()}}class b{getName(e){return"Deli Room"}getDescription(e){return"You enter the deli room and you see.....\nNOTHING! ARG! Where is that bacon??\nYou see a door leading [back] to the kitchen \nas door leading to the [basement]\nWhere are you going to go"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"basement"===r?(t.print("\nlets see whats in the basement"),new v):"back"===r?new T:(t.print("\nInvalid Command!"),n)})()}}class k{getName(e){return"Bosses Office"}getDescription(e){return"You see your boss working hard at his desk!\nYou ask him if you can [talk] about where some of the ingredients are.\nMaybe you should just [ask] him for some of the keys. \nMaybe then you can go the [deli room].\nOr you can always go [back]"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("talk"===r)t.print(" He says...I dont think we have any more bacon in the kitchen.\n");else if("ask"===r)t.print("Here take my keys to the Deli Room and check in there.\n"),t.hasKey=!0;else{if("deli room"===r&&t.hasKey)return new b;if("deli room"!==r||t.hasKey){if("back"===r)return new T;t.print("\nInvalid command!")}else t.print("\n Its locked!!! Ask your boss for some help\n")}return n})()}}class I{getName(e){return"Cash Register"}getDescription(e){return"Your customer asks for their sandwich and you [give] it to them"}handleInput(e){var n=this;return t(function*(){const t=e;return"give"===(yield t.getInput()).toLowerCase().trim()?(t.print("Nice job with your first costumer of the day! CONGRATS!!!!!!.\n"),t.gameWon()):t.print("\nInvalid Command!"),n})()}}class T{getName(e){return"Kitchen"}getDescription(e){return e.hasBacon&&e.hasCheese&&e.hasKey&&e.hasLettuce&&e.hasSauce&&e.hasScissors&&e.hasTomato?(e.hasAllingredients=!0,"You have all the ingredients get 'er done! Time to [construct] your sandwich"):"Welcome to the kitchen.\nI think I see some [lettuce] under that counter over there.\nMaybe try your [bosses office] to see if he can help\nIf not, see whats going on in the [deli room]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("lettuce"===r)t.hasLettuce?t.print("yummy...you already have your lettuce\n"):(t.hasLettuce=!0,t.print("You now have your lettuce for the BLT with mayo.\n"));else{if("bosses office"===r)return t.print("\n Lets see if your boss can help you find some more ingredients\n"),new k;if("deli room"===r)t.print("\nOOPS! Its locked! Go get the keys from your boss!\n");else{if("construct"===r&&!0===t.hasAllingredients)return t.print("\nYou have constructed your BLT with cheese and sauce \nits time for you to check out your costumer.\n"),new I;t.print("\nInvalid command!")}}return n})()}}class S{getName(e){return"Subway Entrance"}getDescription(e){return"It seems like you need to get behind the counter. \nIts time for you to get to work! [enter]"}handleInput(e){var n=this;return t(function*(){const t=e;return"enter"===(yield t.getInput()).toLowerCase().trim()?(t.print("You get behind the counter and start working.\n"),new T):(t.print("\nInvalid command!"),n)})()}}class Y extends n{constructor(){super(...arguments),this.hasLettuce=!0,this.hasBacon=!1,this.hasTomato=!1,this.hasBread=!1,this.hasCheese=!1,this.hasKey=!1,this.hasScissors=!1,this.hasSauce=!1,this.hasAllingredients=!1,this.hasKeystoSauce=!1}getName(){return"The Subway Adventure"}getAuthor(){return"Subway KING!"}getDescription(){return"Can you create a perfect BLT with Cheese and Sauce?"}onStart(){var e=this;return t(function*(){return e.hasLettuce=!1,e.hasBacon=!1,e.hasTomato=!1,e.hasKey=!1,e.hasCheese=!1,e.hasSauce=!1,e.hasScissors=!1,e.hasAllingredients=!1,e.hasKeystoSauce=!1,e.print("\n                           A text adventure by The Subway King\n"),e.sleep(.5),e.print("\nIts bright and early in the morning and you are ready to start your shift at Subway.\n\n"),e.sleep(.5),e.print("It seems that your first customer had already come in!!!.\n\n"),e.sleep(.5),e.print("She walks over to the counter and asks for a BLT with sauce and cheese.\nOH NO! You do not feel like working this early. but DUTY CALLS. Time for work.....\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new S})()}}const C=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new l),e.push(new p),e}getAdventure(){return new Y}};class L{constructor(e){this.TYPE="PrintMessage",this.message=e}}class A{constructor(){this.TYPE="PickAdventureMessage"}}const O=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var n=this;return t(function*(){if(0==n.printQueue.length)return new Promise(t=>setTimeout(t,1e3*e));const t=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,t))})()}sleep(e){const t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}getInput(){var e=this;return t(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const t=e.inputQueue.shift();return Promise.resolve(t)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,t=.01){const n=1e3*t;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=n,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,t){const n=1e3*t;let r=this.getStartTime();e.forEach(e=>{r+=n,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,n=.1){var r=this;return t(function*(){return new Promise(t=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,n),void t()}const o=new XMLHttpRequest,a="assets/"+e;o.addEventListener("load",s=>{let i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${a}`)),r.fileCache.set(e,i),r.printLines(i,n),t()}),o.open("GET",a),o.send()})})()}startPrintThread(){var e=this;return t(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const t=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;){const t=e.printQueue.shift();postMessage(new L(t.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let t=C.SINGLE_ADVENTURE_MODE?C.getAdventure():C.getAdventures()[e.index];t.setEngine(O),console.log("Starting PrintThread."),O.startPrintThread(),console.log("Starting adventure."),t.run(),C.SINGLE_ADVENTURE_MODE||(t.onFinish=()=>postMessage(new A))}else"InputMessage"==e.TYPE?O.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();