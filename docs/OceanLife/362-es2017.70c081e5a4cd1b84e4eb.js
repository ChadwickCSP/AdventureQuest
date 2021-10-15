!function(){"use strict";function e(e,t,n,r,o,a,i){try{var s=e[a](i),h=s.value}catch(u){return void n(u)}s.done?t(h):Promise.resolve(h).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function s(t){e(i,o,a,s,h,"next",t)}function h(t){e(i,o,a,s,h,"throw",t)}s(void 0)})}}class n{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,t){this.engine.print(e,t)}printTextFile(e,n){var r=this;return t(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,n)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return t(function*(){const t=yield e.engine.getInput();return e.print(`\n> ${t}\n`),t})()}DisplayRoomName(){const e=this.room.getName(this);let t=" |",n="=-";for(let o=0;o<e.length;o++)n+=o%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");let r="| "+e+t;this.print("\n"+n+"\n"),this.print(r+"\n"),this.print(n+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return t(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("boulder"===r&&t.strength<10)t.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&t.strength>=10)t.print("You lift the boulder with ease!\n"),t.hasKey?t.print("Now you're just showing off.\n"):(t.print("Beneath the boulder, you find a key.\n"),t.print("You take the key and place it in your pocket!\n"),t.hasKey=!0);else{if("back"===r)return t.print("You return to the Mouth of the Cave\n"),new h;t.print("Invalid command!\n")}return n})()}}class o{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("weights"===r&&t.strength<10)t.print("You pick up the weights and do a rep!\n"),t.strength=t.strength+6,t.sleep(1),t.print(`Your strength is now ${t.strength}\n`);else if("weights"===r&&t.strength>=10)t.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return t.print("You enter the elevator and begin to ascend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The door opens and you step out into the cave.\n"),new s;t.print("Invalid command!\n")}return n})()}}class a{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("You head back the way you came.\n"),new i):("wake"===r?(t.print("You wake the dragon...\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()):"slay"===r&&t.hasSword?(t.print("You draw your sword to slay the dragon.\n"),t.sleep(1),t.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),t.gameWon()):"slay"!==r||t.hasSword?t.print("Invalid command!\n"):(t.print("You attempt to pummel the dragon with your fists!\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()),n)})()}}class i{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("snoring"===r)return t.print("You slowly approach the snoring...\n"),new a;if("chest"===r&&t.hasKey)!1===t.hasSword?(t.print("The chest is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the chest.\n"),t.sleep(1),t.print("Inside, you find a beautiful sword!\n"),t.hasSword=!0):t.print("You search the chest again, but it is empty.\n");else if("chest"!==r||t.hasKey){if("tunnel"===r)return t.print("You head back toward the mouth of the cave.\n"),new s;t.print("Invalid command!\n")}else t.print("The chest is locked!\n");return n})()}}class s{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"button"===r?(t.print("You press the button and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("DING! The wall next to the button opens revealing an elevator!\n"),t.print("Entering the elevator, you begin to descend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The elevator door opens and you exit.\n"),new o):"tunnel"===r?(t.print("You continue down the tunnel.\n"),new i):"mouth"===r?(t.print("You return to the mouth of the cave.\n"),new h):(e.print("Invalid command!\n"),n)})()}}class h{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,o=(yield t.getInput()).toLowerCase().trim();return"right"===o?(t.print("You take the path to the right.\n"),new s):"left"===o?(t.print("You take the path to the left.\n"),new r):"entrance"===o?(t.print("On second thought, you return to the entrance.\n"),new u):(t.print("Invalid Command!\n"),n)})()}}class u{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("You enter the cave.\n"),new h):("run"===r?(t.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class l extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return t(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new u})()}}class p{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("Seeing no way forward, you return to the subway platform.\n"),new d):("goat"===r?(t.print("\nThere is an angry looking goat blocking the escalator.\n"),t.print("\nThe goat looks very [hungry]. BAAAA.\n"),!0===t.isGoatOnFire&&t.print("\nThe goat is on [fire].\n")):"fire"===r&&!0===t.isGoatOnFire?!1===t.hasSpryte?t.print("\nYep! That's a fire!\n"):(t.print("\nYou take the Spryte from your pocket and pour it over the goat. The flames go out.\n "),t.isGoatOnFire=!1):"fire"===r&&!1===t.isGoatOnFire?t.print("\nNo fire here!\n"):"hungry"===r&&!0===t.isGoatOnFire?t.print("The goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"===r&&!1===t.isGoatOnFire?(t.print("The goat looks quite hungry. You hand it the empty Spyte can.\n The goat crunches it in a matter of seconds. It 'BAAAAS' happily before hopping away.\n You continue up the broken escalator and return home.\n Did that really happen?"),t.gameWon()):t.print("\nInvalid command!"),n)})()}}class d{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("escalator"===r)t.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return t.print("\nYou start to walk up the escalator.\n"),new p;"machine"===r?t.print("Oh wow! Its one of those cool new Spryte machines. It has a [coin] slot.\n"):"coin"===r&&!1===t.hasSpryte?(t.print("You drop 4 coins into the vending machine. You hear a loud whirring sound followed by a\n loud *KA-CHUNK*. You reach down and pickup a Spyrte.\n"),t.hasSpryte=!0):t.print("coin"===r&&t.hasSpryte?"You already have a Spryte.\n":"\nInvalid command!")}return n})()}}class c extends n{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return t(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new d})()}}class g{getName(e){return"Dingy"}getDescription(e){return"You arrive back to the boat.\n When you get out of the water you immediatley dry.\n Uh oh footsteps.\nYou lay on the Dingy and pretend to [tan]"}handleInput(e){var n=this;return t(function*(){const t=e;return"tan"===(yield t.getInput()).toLowerCase().trim()?(t.print("Your friends are confused. They haven't seen you in hours.\nYou tell them you fell asleep and had a weird dream...."),t.gameWon()):t.print("\nInvalid command!"),n})()}}class m{getName(e){return"Mermaid Club"}getDescription(e){return'You escaped from the Sea Witch!\n You find your mermaid friend in the Mermaid Club\nand you [tell] her everything"'}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"tell"===r&&t.print("Your mermaid friend is impressed and asks if you want to\n [stay] in Ocean City."),"stay"===r&&t.print("You tell her you will miss her but you have to get [home]."),"home"===r?(t.print("You give the mermaid the shell, and she gives you a ring so you can breathe.\n You now return to the boat"),new g):(t.print("\nInvalid command"),n)})()}}class y{getName(e){return"Cave"}getDescription(e){return'You are locked in a dungy lair with the Sea Witch.\n The witch tells you that you can not leave until you give her the shell.\n Do you [give] it to her or [keep] it.\n"'}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("give"===r)t.print("You give her the shell and immediatley start to lose your breathe.\n You forgot you need the shell to breathe.\n You [take] it back"),t.hasShell=!1;else if("take"===r)t.print("You take the shell away from her and regain your breathe."),t.hasShell=!0;else if("keep"===r)t.print("You keep the shell away from her.\n She looks frustrated.\n Should you [compliment] her or call her [fat]?\n");else if("fat"===r)t.print("You call the witch fat, and she throws a fit.\n You should just try and [leave]."),t.isWitchAngry=!0;else if("compliment"===r)t.print("You tell the witch she has a nice smile. She looks happy.\n Maybe you can try and [leave]."),t.isWitchAngry=!1;else if("leave"===r&&!0===t.isWitchAngry)t.print("You are attemping to leave, but the witch screams at you. You should [fight] her.");else{if("leave"===r&&!1===t.isWitchAngry)return t.print("You ask politley if you can leave.\n Charmed by your manners, the witch lets you go!"),new m;if("fight"===r&&!0===t.hasShavingCream)return t.print("You remeber the shaving cream in your pocket.\n You spray the Sea Witch with the shavign cream\n and she dies. Now you are able to escape!"),new m;"fight"===r&&!1===t.hasShavingCream?(t.print("You try and fight her, but she is bigger and stronger :(\n Better luck next time.\n"),t.gameOver()):t.print("\nInvalid command")}return n})()}}class f{getName(e){return"Mall"}getDescription(e){return"You are at the mall. You need to go to the [supermarket] and the [tail] store."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("supermarket"===r)t.print("You are at the supermarket. There is a piece of[hair] and shaving[cream] on the shelf.");else if("cream"===r&&!1===t.hasShavingCream)t.print("You chose the shaving cream. This is probably the smarter option."),t.hasShavingCream=!0;else if("cream"===r&&!0===t.hasShavingCream)t.print("You already have the shaving cream in your pocket.");else if("hair"===r)t.print("You chose the piece of hair. This looks useless.");else if("tail"===r)t.print("You need a tail to blend in. There is a [pink] tail and a [blue] tail.");else if("blue"===r)t.print("Your blue tail is very pretty... Uh oh..\n Who is [that]?? ");else if("pink"===r)t.print("Your pink tail is very pretty... Uh oh..\n Who is [that]?? ");else if("that"===r)t.print("It's the SEA WITCH! She spots the necklace around your neck"),t.sleep(.5),t.print("You begin to swim away...\n but her sharks capture you and bring you to her sea [cave]");else{if("cave"===r)return t.print("You get dragged to the Witch Lair."),new y;t.print("\nInvalid command!")}return n})()}}class w{getName(e){return"Ocean City"}getDescription(e){return"You are swimming towards Ocean City.\n This is so cool there are so many mermaids!\n You [ask] the mermaid why you are here."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("ask"===r)t.print("The mermaid tells you it is the duty of whoever holds the shell to defeat the\n Evil Sea Witch. "),t.sleep(.5),t.print("As you swim through the city, you make sure that no one can see you.\n Uh oh, these [girls] start swimming towards you.");else if("girls"===r)t.print("You panick. What if you've been discovered??\n"),t.sleep(.5),t.print("Oh, the meramid seems to know them.\n They are her friends!\n You get introduced, and they say you can't swim around like this.\n "),t.sleep(.5),t.print("It's time to go to the [mall]!");else{if("mall"===r)return new f;t.print("\nInvalid command!")}return n})()}}class v{getName(e){return"UnderWater"}getDescription(e){return'"You\'re in the water! Wait.. You can breathe??\n The meramid tells you to keep the shell around\n your neck to keep you safe.\n Do you [throw] the shell or keep it around your [neck]"'}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("throw"===r)t.print("You get angry and throw the shell.\n Your lungs begin to fill up with water and you cant breathe."),t.hasShell=!1;else if("neck"===r)t.print("You put the necklace around your neck and are safe from drowning!\n"),t.hasShell=!0,t.print("The mermaid asks you to follow her to the [Ocean City]!");else if("ocean city"===r)return t.print("You go towards Ocean City. This is going to be fun?"),new w;return n})()}}class b{getName(e){return"Deck"}getDescription(e){return'You go back to the deck with your friends.\n They ask you what took so long.\n Do you [show] them the shell or keep it [hidden]?"'}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("hidden"===r)t.print("You tell them there was no soap and do not mention the shell.\n What was that? Something just splashed\n in the [water]."),t.isShellHidden=!0;else if("show"===r)t.print("You decide to show them the shell, but it disappears!! What was that?\n Something just splashed in the [water].");else if("water"===r)t.print("You see something splash in the water. You should probably go [check] it out?");else{if("check"===r&&!1===t.isShellHidden)return t.print("You look over the edge and there's nothing there.\n You should probably go back inside. "),new Y;if("check"===r&&t.isShellHidden)t.print("Omg! You see a tail splash up from the water!\n It pops its head up...\n It's a girl? A [mermaid]!");else if("mermaid"===r)t.print("The mermaid calls you over. You slowly approach..."),t.sleep(.5),t.print("She tells you it is important for you to\n follow her. Do you jump [in] or go back [inside]?");else{if("inside"===r)return t.print("This is too sketchy to be real. You decide to ignore it."),new Y;if("in"===r)return t.print("You do what she says and jump in the water cuz why not"),new v;t.print("\nInvalid command")}}return n})()}}class k{getName(e){return"Bathroom"}getDescription(e){return"Phew! Thank god you made it to the bathroom in time.\n That coudl've been bad. Now where is the soap?\n It may be in the [drawer] or the [cabinent].\""}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("drawer"===r)t.print("Nope! No soap in there.");else if("cabinent"===r)t.print("You found a shell! It appears to be almost magical. You return to the [deck].");else{if("deck"===r)return new b;t.print("\nInvalid command")}return n})()}}class Y{getName(e){return"Inside Boat"}getDescription(e){return'You are on the boat. Some of your friends [dance] and some want to get a [snack].\n There are also some people taking selfies in the [bathroom]."'}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("dance"===r)t.print("You are dancing with your friends to the best songs ever.");else if("snack"===r)t.print("You become hungry and go to the snack table.\n There are so many flavors of [juice].\n");else if("juice"===r)t.print("You have to try all the flavors of juice!\nYou taste 7 different juices!!"),t.hasToPee=!0;else{if("bathroom"===r&&t.hasToPee)return t.print("Too much juice! You hurry to the bathroom to pee."),new k;t.print("bathroom"===r&&!1===t.hasToPee?"You don't have to use the restroom yet.":"\nInvalid Command")}return n})()}}class I{getName(e){return"Dock"}getDescription(e){return"You are on a Dock about to board the [boat] to party with your friends. Would you\n rather jump in the [water]?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("water"===r)t.print("You jump of the dock and can not get back up. You begin to drown."),t.gameOver();else{if("boat"===r)return t.print("You board the boat with all your friends. This party is going to be so fun!"),new Y;t.print("\nInvalid command!")}return n})()}}class T extends n{constructor(){super(...arguments),this.hasToPee=!0,this.isWitchAngry=!0,this.isShellHidden=!0,this.hasShell=!1,this.hasShavingCream=!0}getName(){return"Ocean Life"}getAuthor(){return"Millie the Mermaid"}getDescription(){return"Can you make it as a mermaid?"}onStart(){var e=this;return t(function*(){return e.hasToPee=!1,e.isWitchAngry=!1,e.isShellHidden=!1,e.hasShell=!0,e.hasShavingCream=!1,e.print("\n                           A text adventure by Millie the Mermaid\n"),e.sleep(.5),e.print("\nHow cool! A yacht party. You are so excited. \n\n "),e.sleep(.5),e.print("The Boat pulls into the dock.\n\n"),e.sleep(.5),e.print("Your friends begin boarding the boat.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new I})()}}const S=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new l),e.push(new c),e}getAdventure(){return new T}};class C{constructor(e){this.TYPE="PrintMessage",this.message=e}}class D{constructor(){this.TYPE="PickAdventureMessage"}}const A=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var n=this;return t(function*(){if(0==n.printQueue.length)return new Promise(t=>setTimeout(t,1e3*e));const t=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,t))})()}sleep(e){const t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}getInput(){var e=this;return t(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const t=e.inputQueue.shift();return Promise.resolve(t)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,t=.01){const n=1e3*t;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=n,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,t){const n=1e3*t;let r=this.getStartTime();e.forEach(e=>{r+=n,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,n=.1){var r=this;return t(function*(){return new Promise(t=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,n),void t()}const o=new XMLHttpRequest,a="assets/"+e;o.addEventListener("load",i=>{let s=[];o.status>=200&&o.status<300?s=o.responseText.split("\n"):(s=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${a}`)),r.fileCache.set(e,s),r.printLines(s,n),t()}),o.open("GET",a),o.send()})})()}startPrintThread(){var e=this;return t(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const t=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;){const t=e.printQueue.shift();postMessage(new C(t.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let t=S.SINGLE_ADVENTURE_MODE?S.getAdventure():S.getAdventures()[e.index];t.setEngine(A),console.log("Starting PrintThread."),A.startPrintThread(),console.log("Starting adventure."),t.run(),S.SINGLE_ADVENTURE_MODE||(t.onFinish=()=>postMessage(new D))}else"InputMessage"==e.TYPE?A.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();