!function(){"use strict";function e(e,t,n,r,o,a,i){try{var s=e[a](i),h=s.value}catch(u){return void n(u)}s.done?t(h):Promise.resolve(h).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function s(t){e(i,o,a,s,h,"next",t)}function h(t){e(i,o,a,s,h,"throw",t)}s(void 0)})}}class n{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,t){this.engine.print(e,t)}printTextFile(e,n){var r=this;return t(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,n)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return t(function*(){const t=yield e.engine.getInput();return e.print(`\n> ${t}\n`),t})()}DisplayRoomName(){const e=this.room.getName(this);let t=" |",n="=-";for(let o=0;o<e.length;o++)n+=o%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");let r="| "+e+t;this.print("\n"+n+"\n"),this.print(r+"\n"),this.print(n+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return t(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"Room of Treasure"}getDescription(e){return"You stand before the Room of Treasure. Gold and jewels collect in tall piles in every direction. \nfeel as if you are dreaming. You blink a few times and realize you have really made it! You can \nreturn back to the [hall] but you must want to collect the [gold]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"hall"===r?(t.print("You return back to the hall.\n"),new i):("gold"!==r||t.hasSack?"gold"===r&&t.hasSack?(t.print("You fill the sack you found in the storeroom with pounds of treasure. \nCongratulations, you are the first to find the treasure within in the Castle Of Hypnosis!"),t.gameWon()):t.print("Invalid command!"):t.print("There is far too much treasure for you to hold in your hands! You did not come this far \nfor just a handful of gold.\n"),n)})()}}class o{getName(e){return"Gate"}getDescription(e){return"You are stopped by at a tall, black gate. You can easily turn back and return to the [hall], but \nyou notice a [wheel] beside the gate."}handleInput(e){var n=this;return t(function*(){const t=e,o=(yield t.getInput()).toLowerCase().trim();if("wheel"===o&&t.gate<4)t.print("You spin the wheel.\n"),t.gate=t.gate+1,t.sleep(1),t.print("The gate rises slightly.\n");else if("wheel"===o&&t.gate>=4)t.print("The gate is already lifted enough for you to squeeze [under]!\n");else{if("under"===o)return new r;if("hall"===o)return t.print("You return to the hall.\n"),new i;t.print("Invalid command!\n")}return n})()}}class a{getName(e){return"Storeroom"}getDescription(e){return"You walk into the castle storeroom. There is little in the room, but you see a large woven \n[sack] laying on the floor."}handleInput(e){var n=this;return t(function*(){const t=e;return"sack"===(yield t.getInput()).toLowerCase().trim()?(t.print("You take the sack thinking you may need it to collect the hidden treasure."),t.hasSack=!0,new i):(t.print("Invalid command!"),n)})()}}class i{getName(e){return"Grand Hall"}getDescription(e){return"The path leads to the Grand Hall that is decorated quite elegantly. The hall branches in two \npaths. One leads to the [left] and the other leads to the [right]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"left"===r?(t.print("You take the path to the left.\n"),new o):"right"===r?(t.print("You take the path to the right.\n"),new a):(t.print("Invalid command!"),n)})()}}class s{getName(e){return"Bed Chamber"}getDescription(e){return"You enter the monster's bed chamber. Do you dare continue though the room where you will [see] \nthe monster or would you rather go [back] to the staircase?\n"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("back"===r)return t.print("You go back to the staicase.\n"),new l;if("see"!==r||t.hasGlasses){if("see"===r&&t.hasGlasses)return t.print("As you walk through the bedroom you hear the heavy breathing of the monster that gets \nlouder with every step forward. Soon he stands before you and you look up into his eyes. The \nglasses shield you from his powers of hypnosis and you make it to the path at the other end of \nhis room.\n"),new i;t.print("Invalid command!")}else t.print("As you walk through the bedroom you hear the heavy breathing of the monster that gets \nlouder with every step forward. Soon he stands before you and you look up into his eyes. \nWithout glasses to shield your eyes, you are hypnotised and find yourself back at home with no \nrecolection of your adventure.\n"),t.gameOver();return n})()}}class h{getName(e){return"Kitchen"}getDescription(e){return"You are in the kitchen. In the middle of the room is a rusted [cabinet]. There is also a door \nthat leades [back] to the staircase and a [path] that leads to the monter's room."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("back"===r)return t.print("You walk through the door back to the staircase\n"),new l;if("cabinet"===r&&t.hasKey)!1===t.hasGlasses?(t.print("The cabinet is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the cabinet.\n"),t.sleep(1),t.print("Inside, you find a single pair of glasses.\n"),t.sleep(1),t.print("You put the glasses on.\n"),t.sleep(1),t.hasGlasses=!0):t.print("You search the cabinet again, but it is empty.\n");else if("cabinet"!==r||t.hasKey){if("path"===r)return t.print("You crawl through the path.\n"),new s;t.print("Invalid command!\n")}else t.print("The cabinet is locked!\n");return n})()}}class u{getName(e){return"Power Center"}getDescription(e){return"You are in a small room with cables and switches along the walls and a sign that reads, 'Power \nHouse'. You notice a big red [switch] with the symbol of a light bulb directly above it. The \n[rope] stil hangs from the ceiling right above you."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("switch"===r&&t.brightness<6)t.print("You flip the switch!\n"),t.brightness=t.brightness+3,t.sleep(1),t.print(`The brightness of the house is now ${t.brightness}.\n`);else if("switch"===r&&t.brightness>=6)t.print("The castle is already pretty lit, maybe you should go back to the office to search for the key!\n");else{if("rope"===r)return t.print("You pull the rope and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The hidden door is visisble again. The door opens and you step back onto the staircase.\n"),new l;t.print("Invalid command!\n")}return n})()}}class l{getName(e){return"Narrow Spiral Staircase"}getDescription(e){return"You walk down a narrow spiral staircase. It is pretty dark but you notice a [rope] hanging from \nthe ceiling. In one direction, the staircase leads to back to the [windowless] room. In the \nother, the [staircase] continues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"rope"===r?(t.print("You pull the rope and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("A hidden door in the tunnel opens!\n"),t.print("You walk through the door.\n"),new u):"windowless"===r?(t.print("You return to the Windowless Room.\n"),new d):"staircase"===r?(t.print("You continue down the staircase.\n"),new h):(t.print("Invalid command!"),n)})()}}class p{getName(e){return"Office"}getDescription(e){return e.brightness>=6&&!e.hasKey?"AHA! The lights are on. You are in an office and can see a [key] on the table.":e.brightness>=6&&e.hasKey?"You already have the key. You can return [back] to the windowless room.":"It is too dark to see anything in this room. You can return [back] to the windowless room."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("key"===r&&t.brightness>=6)t.print("You take the key from the table and slip it in your pocket.\n"),t.hasKey=!0;else{if("back"===r)return new d;t.print("Invalid command!")}return n})()}}class d{getName(e){return"Windowless Room"}getDescription(e){return"You enter the Windowless Room. From here you can see only two lighted paths- \none to the [left] and one to the [right]. It's not too late to [exit] the room.\n"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"right"===r?(t.print("You take the path to the right.\n"),new p):"left"===r?(t.print("You take the path to the left.\n"),new l):"exit"===r?(t.print("You exit the castle. You'll have to search for the gold another day.\n"),new c):(t.print("Invalid Command!\n"),n)})()}}class c{getName(e){return"Castle Door"}getDescription(e){return"You stand at the entrance of the Castle Of Hypnosis home to only one powerful monster, the\nStormcloud Predator Freak. Rumor has it, those who enter in search of the chest of treasure are \ntrapped as they look into the monster's eyes and never find their way out of the Castle. \nYou look at the stone door and consider whether you should [push] it open or [return] home."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"push"===r?(t.print("With great force you push the door open and walk into the windowless room.\n"),new d):("return"===r?(t.print("Looks like you'd like to play it safe for now. You return home and quickly go to bed. Maybe\nnext time.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class g extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasGlasses=!1,this.hasSack=!1,this.brightness=0,this.gate=0}getName(){return"Castle of Hypnosis"}getAuthor(){return"K"}getDescription(){return"Can you find the treasure hidden deep within the monster's castle?"}onStart(){var e=this;return t(function*(){return e.hasKey=!1,e.hasGlasses=!1,e.hasSack=!1,e.brightness=0,e.gate=0,yield e.printTextFile("CastleOfHypnosis/castle.txt"),e.print("\n                                    A text adventure by K\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new c})()}}class m{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("boulder"===r&&t.strength<10)t.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&t.strength>=10)t.print("You lift the boulder with ease!\n"),t.hasKey?t.print("Now you're just showing off.\n"):(t.print("Beneath the boulder, you find a key.\n"),t.print("You take the key and place it in your pocket!\n"),t.hasKey=!0);else{if("back"===r)return t.print("You return to the Mouth of the Cave\n"),new v;t.print("Invalid command!\n")}return n})()}}class y{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("weights"===r&&t.strength<10)t.print("You pick up the weights and do a rep!\n"),t.strength=t.strength+6,t.sleep(1),t.print(`Your strength is now ${t.strength}\n`);else if("weights"===r&&t.strength>=10)t.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return t.print("You enter the elevator and begin to ascend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The door opens and you step out into the cave.\n"),new b;t.print("Invalid command!\n")}return n})()}}class f{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("You head back the way you came.\n"),new w):("wake"===r?(t.print("You wake the dragon...\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()):"slay"===r&&t.hasSword?(t.print("You draw your sword to slay the dragon.\n"),t.sleep(1),t.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),t.gameWon()):"slay"!==r||t.hasSword?t.print("Invalid command!\n"):(t.print("You attempt to pummel the dragon with your fists!\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()),n)})()}}class w{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("snoring"===r)return t.print("You slowly approach the snoring...\n"),new f;if("chest"===r&&t.hasKey)!1===t.hasSword?(t.print("The chest is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the chest.\n"),t.sleep(1),t.print("Inside, you find a beautiful sword!\n"),t.hasSword=!0):t.print("You search the chest again, but it is empty.\n");else if("chest"!==r||t.hasKey){if("tunnel"===r)return t.print("You head back toward the mouth of the cave.\n"),new b;t.print("Invalid command!\n")}else t.print("The chest is locked!\n");return n})()}}class b{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"button"===r?(t.print("You press the button and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("DING! The wall next to the button opens revealing an elevator!\n"),t.print("Entering the elevator, you begin to descend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The elevator door opens and you exit.\n"),new y):"tunnel"===r?(t.print("You continue down the tunnel.\n"),new w):"mouth"===r?(t.print("You return to the mouth of the cave.\n"),new v):(e.print("Invalid command!\n"),n)})()}}class v{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"right"===r?(t.print("You take the path to the right.\n"),new b):"left"===r?(t.print("You take the path to the left.\n"),new m):"entrance"===r?(t.print("On second thought, you return to the entrance.\n"),new k):(t.print("Invalid Command!\n"),n)})()}}class k{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("You enter the cave.\n"),new v):("run"===r?(t.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class I extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return t(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new k})()}}class Y{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("\nSeeing no way forward, you return to the subway platform.\n"),new T):("goat"===r?(t.print("\nThere is an angry looking goat blocking the escalator.\n"),t.print("\nThe goat looks very [hungry]. BAAAA!\n"),!0===t.isGoatOnFire&&t.print("\nThe goat is on [fire].\n")):"fire"===r&&!0===t.isGoatOnFire?!1===t.hasSpryte?t.print("\nYep! That's a fire!\n"):(t.print("\nYou take the Spryte from your pocket and pour it over the goat. The flame goes out.\n"),t.isGoatOnFire=!1):"fire"===r&&!1===t.isGoatOnFire?t.print("\nNo fire here!\n"):"hungry"===r&&!0===t.isGoatOnFire?t.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"===r&&!1===t.isGoatOnFire?(t.print("\nThe goat look quite hungry. \nYou hand it the empty Spryte can. The goat crunches through it in a matter of seconds. It 'BAAAAS' happily before hopping away. \nYou continue up the broken escalator and return home. Did that really happen?\n"),t.gameWon()):t.print("\nInvalid command!"),n)})()}}class T{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("escalator"===r)t.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return t.print("\nYou start to walk up the escalator.\n"),new Y;"machine"===r?t.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot.\n"):"coin"===r&&!1===t.hasSpryte?(t.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring sound followed by a loud \n*KA-CHUNK*. You reach down and pickup a Spryte.\n"),t.hasSpryte=!0):t.print("coin"===r&&t.hasSpryte?"\nYou already have a Spryte.\n":"\nInvalid command!")}return n})()}}class C extends n{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return t(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new T})()}}const S=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new I),e.push(new C),e}getAdventure(){return new g}};class A{constructor(e){this.TYPE="PrintMessage",this.message=e}}class D{constructor(){this.TYPE="PickAdventureMessage"}}const L=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var n=this;return t(function*(){if(0==n.printQueue.length)return new Promise(t=>setTimeout(t,1e3*e));const t=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,t))})()}sleep(e){const t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}getInput(){var e=this;return t(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const t=e.inputQueue.shift();return Promise.resolve(t)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,t=.01){const n=1e3*t;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=n,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,t){const n=1e3*t;let r=this.getStartTime();e.forEach(e=>{r+=n,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,n=.1){var r=this;return t(function*(){return new Promise(t=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,n),void t()}const o=new XMLHttpRequest,a="assets/"+e;o.addEventListener("load",i=>{let s=[];o.status>=200&&o.status<300?s=o.responseText.split("\n"):(s=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${a}`)),r.fileCache.set(e,s),r.printLines(s,n),t()}),o.open("GET",a),o.send()})})()}startPrintThread(){var e=this;return t(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const t=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;){const t=e.printQueue.shift();postMessage(new A(t.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let t=S.SINGLE_ADVENTURE_MODE?S.getAdventure():S.getAdventures()[e.index];t.setEngine(L),console.log("Starting PrintThread."),L.startPrintThread(),console.log("Starting adventure."),t.run(),S.SINGLE_ADVENTURE_MODE||(t.onFinish=()=>postMessage(new D))}else"InputMessage"==e.TYPE?L.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();