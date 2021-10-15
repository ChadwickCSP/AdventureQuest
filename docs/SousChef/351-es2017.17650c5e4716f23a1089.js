!function(){"use strict";function e(e,t,n,r,o,i,a){try{var s=e[i](a),h=s.value}catch(u){return void n(u)}s.done?t(h):Promise.resolve(h).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=t.apply(n,r);function s(t){e(a,o,i,s,h,"next",t)}function h(t){e(a,o,i,s,h,"throw",t)}s(void 0)})}}class n{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,t){this.engine.print(e,t)}printTextFile(e,n){var r=this;return t(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,n)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return t(function*(){const t=yield e.engine.getInput();return e.print(`\n> ${t}\n`),t})()}DisplayRoomName(){const e=this.room.getName(this);let t=" |",n="=-";for(let o=0;o<e.length;o++)n+=o%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");let r="| "+e+t;this.print("\n"+n+"\n"),this.print(r+"\n"),this.print(n+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return t(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("boulder"===r&&t.strength<10)t.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&t.strength>=10)t.print("You lift the boulder with ease!\n"),t.hasKey?t.print("Now you're just showing off.\n"):(t.print("Beneath the boulder, you find a key.\n"),t.print("You take the key and place it in your pocket!\n"),t.hasKey=!0);else{if("back"===r)return t.print("You return to the Mouth of the Cave\n"),new h;t.print("Invalid command!\n")}return n})()}}class o{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("weights"===r&&t.strength<10)t.print("You pick up the weights and do a rep!\n"),t.strength=t.strength+6,t.sleep(1),t.print(`Your strength is now ${t.strength}\n`);else if("weights"===r&&t.strength>=10)t.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return t.print("You enter the elevator and begin to ascend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The door opens and you step out into the cave.\n"),new s;t.print("Invalid command!\n")}return n})()}}class i{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("You head back the way you came.\n"),new a):("wake"===r?(t.print("You wake the dragon...\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()):"slay"===r&&t.hasSword?(t.print("You draw your sword to slay the dragon.\n"),t.sleep(1),t.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),t.gameWon()):"slay"!==r||t.hasSword?t.print("Invalid command!\n"):(t.print("You attempt to pummel the dragon with your fists!\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()),n)})()}}class a{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("snoring"===r)return t.print("You slowly approach the snoring...\n"),new i;if("chest"===r&&t.hasKey)!1===t.hasSword?(t.print("The chest is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the chest.\n"),t.sleep(1),t.print("Inside, you find a beautiful sword!\n"),t.hasSword=!0):t.print("You search the chest again, but it is empty.\n");else if("chest"!==r||t.hasKey){if("tunnel"===r)return t.print("You head back toward the mouth of the cave.\n"),new s;t.print("Invalid command!\n")}else t.print("The chest is locked!\n");return n})()}}class s{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"button"===r?(t.print("You press the button and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("DING! The wall next to the button opens revealing an elevator!\n"),t.print("Entering the elevator, you begin to descend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The elevator door opens and you exit.\n"),new o):"tunnel"===r?(t.print("You continue down the tunnel.\n"),new a):"mouth"===r?(t.print("You return to the mouth of the cave.\n"),new h):(e.print("Invalid command!\n"),n)})()}}class h{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,o=(yield t.getInput()).toLowerCase().trim();return"right"===o?(t.print("You take the path to the right.\n"),new s):"left"===o?(t.print("You take the path to the left.\n"),new r):"entrance"===o?(t.print("On second thought, you return to the entrance.\n"),new u):(t.print("Invalid Command!\n"),n)})()}}class u{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("You enter the cave.\n"),new h):("run"===r?(t.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class l extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return t(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new u})()}}class d{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("\nSeeing no way forward, you return to the subway platform.\n"),new p):("goat"===r?(t.print("\nThere is an angry looking goat blocking the escalator."),t.print("\nThe goat looks very [hungry]. BAAAA!"),t.isGoatOnFire&&t.print("\nThe goat is on [fire].")):"fire"===r&&t.isGoatOnFire?t.hasSpryte?(t.print("\nYou take the Spryte from your pocket and pour it over the goat. The flames go out."),t.isGoatOnFire=!1):t.print("\nYep! That's a fire!"):"fire"!==r||t.isGoatOnFire?"hungry"===r&&t.isGoatOnFire?t.print("\nThe goat is on fire. Perhaps you should find a way to put it out."):"hungry"!==r||t.isGoatOnFire?t.print("\nInvalid command!"):(t.print("\nThe goat looks quite hungry. You had it the empty Spryte can. The goat crunches through it in a \nmatter of seconds. It 'BAAAAS' happily before hopping away. You continue up the broken escalator before \nreturning home. Did that really happen?"),t.gameWon()):t.print("\nNo fire here!"),n)})()}}class p{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("escalator"===r)t.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return t.print("\nYou start to walk up the escalator.\n"),new d;"machine"===r?t.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot."):"coin"===r&&!1===t.hasSpryte?(t.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring \nsound followed by a KA-CHUNK. You reach down and pick up a Spryte."),t.hasSpryte=!0):t.print("coin"===r&&t.hasSpryte?"\nYou already have a Spryte.":"\nInvalid command!")}return n})()}}class c extends n{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return t(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new p})()}}class g{getName(e){return"Dining Room"}getDescription(e){return"You enter the DiningRoom yourself and [serve] the dishes to the critic."}handleInput(e){var n=this;return t(function*(){const t=e;return"serve"===(yield t.getInput()).toLowerCase().trim()?(t.print("\nThe first dish is a Clam Chowder soup with marries together the best\n of the sea and land. The second dish is a plump grade A-5, true japanese Wagyu Beef,\n the best money could buy. The third dish is a palate clenser salad;\n a caesar salad with the freshest greens. The fourth and final dish is \na dessert lava cake with a spongy outside and a flowing ganash inside.\n YUM!!! The critic cannot get enough of your dishes and continues to eat \nwhile promising you a bright future. Great Job!!!!\n You have won the SousChefAdventure."),t.gameWon()):t.print("\nInvalid command!"),n})()}}class m{getName(e){return"Ingredient Room"}getDescription(e){return"You are now in the ingredients room...you should probably [prep] your [ingredients] \nor go [back] to the Kitchen."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("prep"===r&&!1===t.hasIngredients)t.print("\nYou do not have the ingredients necesary to prep.");else if("prep"===r&&!0===t.hasIngredients)t.print("\nWith your ingredients you prep everything necesary for your dishes."),t.hasPrep=!0;else if("ingredients"===r&&!1===t.hasIngredients)t.print("\nYou get all of the ingredients you will need for your dishes. \nAll that's left is to prep them..."),t.hasIngredients=!0;else if("ingredients"===r&&!0===t.hasIngredients)t.print("\nYou already have all of the ingredients necesary for your dishes.");else{if("back"===r)return t.print("\nYou go back to the Kitchen to make more dishes..."),new b;t.print("\nInvalid command!")}return n})()}}class f{getName(e){return"Dessert Spot"}getDescription(e){return"Now at the DessertSpot, you can start your fourth and final dish by making the [batter], \n[bake]ing the batter, or going [back] to the kitchen."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("batter"===r)t.print("\nYou mix and stir and finally create a batter perfect for your dessert."),t.hasBatter=!0;else if("bake"===r&&!1===t.hasBatter)t.print("\nYou cannot bake the dish without the batter.");else if("bake"===r&&!0===t.hasBatter)t.print("\nHaving created the batter for your dessert, you pour it into small bowls and finish \noff the recepite. After preparations have been completed you bake the batter and \ncomplete your Dessert. Congrats! You have completed all of the dishes.\n Now all that's left is to serve it."),t.hasDishes=!0;else{if("back"===r)return t.print("\nYou decide to go back to the Kitchen..."),new b;t.print("\nInvalid command!")}return n})()}}class y{getName(e){return"Salad Spot"}getDescription(e){return"Now at the SaladSpot, you can start your Third dish by putting [dressing] on the salad, \n[toss]ing the salad, going [back] to the kitchen, or going to the [dessert spot]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("dressing"===r)t.print("\nYou take the freshly prepped greens and add a homemade dressing on top. \nBeautiful colors burst from the bowl, and a salad tapestry is created."),t.hasDressing=!0;else if("toss"===r&&!1===t.hasDressing)t.print("\nYou cannot toss the salad without the dressing.");else if("toss"===r&&!0===t.hasDressing)t.print("\nHaving put the dressing on the salad, you toss the dressing and salad together\n and finish your salad dish!!!!!"),t.hasToss=!0;else{if("back"===r)return t.print("\nYou decide to go back to the Kitchen..."),new b;if("dessert spot"===r&&!1===t.hasToss)t.print("\nYou have not finished your third dish yet.");else{if("dessert spot"===r&&!0===t.hasToss)return t.print("\nHaving been to the SaladSpot, you move on to the DessertSpot."),new f;t.print("\nInvalid command!")}}return n})()}}class w{getName(e){return"Meat Spot"}getDescription(e){return"Now at the MeatSpot, you can start your Second dish by [sear]ing the meat, \n[grill]ing the meat, going [back] to the kitchen, or going to the [salad spot]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("sear"===r)t.print("\nYou start your meat dish by lightly searing your meats. MMMMM! \nA wonderful smell envelopes the room."),t.hasSear=!0;else if("grill"===r&&!1===t.hasSear)t.print("\nYou cannot grill the meats until they have been seared.");else if("grill"===r&&!0===t.hasSear)t.print("\nHaving seared the meats, you grill the meats and finish your meat dish!!!"),t.hasGrill=!0;else{if("back"===r)return t.print("\nYou decide to go back to the Kitchen..."),new b;if("salad spot"===r&&!1===t.hasGrill)t.print("\nYou have not finished your second dish yet.");else{if("salad spot"===r&&!0===t.hasGrill)return t.print("\nHaving been to the MeatSpot, you move on to the SaladSpot."),new y;t.print("\nInvalid command!")}}return n})()}}class v{getName(e){return"Soup Spot"}getDescription(e){return"Now at the SoupSpot, you can start your first dish by [stir]ing, \n[cook]ing, going [back] to the kitchen, or going to the [meat spot]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("stir"===r&&!1===t.hasPrep)t.print("\nYou have not done the necesary prep for this dish...");else if("stir"===r&&!0===t.hasPrep)t.print("\nYou add in the prepped ingredients and begin the soup dish by stiring\n....now you need to cook the soup."),t.hasStir=!0;else if("cook"===r&&!1===t.hasStir)t.print("\nYou have not stirred the dish yet. You cannot cook the \ndish without stiring.");else if("cook"===r&&!0===t.hasStir)t.print("\nHaving stirred the soup and now cooked it, you have finished \none of your dishes."),t.hasCook=!0;else{if("back"===r)return t.print("\nYou decide to go back to the Kitchen..."),new b;if("meat spot"===r&&!1===t.hasCook)t.print("\nYou have not finished your first dish yet.");else{if("meat spot"===r&&!0===t.hasCook)return t.print("\nHaving been to the SoupSpot, you move on to the MeatSpot."),new w;t.print("\nInvalid command!")}}return n})()}}class b{getName(e){return"Kitchen"}getDescription(e){return"Now in the Kitchen, you can either go get the [Ingredients], \ngo to the [soup spot], or [Serve] your dishes."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("ingredients"===r)return t.print("\nYou go to the ice room where all of the ingredients are stored."),new m;if("serve"===r&&!1===t.hasDishes)t.print("\nYou haven't prepared all of the dishes yet...\n");else{if("serve"===r&&!0===t.hasDishes)return t.print("\nHaving prepared all of the dishes, you walk into the DiningRoom to serve them.\n"),new g;if("soup spot"===r)return t.print("\nReady to create your dishes you walk to the SoupSpot to create a dish."),new v;t.print("\nInvalid command!")}return n})()}}class k{getName(e){return"Kitchen Enterance"}getDescription(e){return"Now in the KitchenEnterance, you start to get nervous and question whether \nyou should go back to the [changing room], or to clench your fists and \n[enter] the kitchen."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("\nYou stand in front of the door leading to the Kitchen, take a few deep breaths and enter..."),new b):"changing room"===r?(t.print("\nYou decide to leave the KitchenEnterance and go back to the ChangingRoom."),new I):(t.print("\nInvalid command!"),n)})()}}class I{getName(e){return"Changing Room"}getDescription(e){return"Now in the ChangingRoom, you look around for your locker, open it, \nand prepare to [change] or go back to the [changing room enterance]..."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("change"===r&&!1===t.isWearingUniform)t.print("\nYou quickly change into your chef's uniform and walk towards the KitchenEnterance's door. \nWould you like to [enter]?\n"),t.isWearingUniform=!0;else if("change"===r&&!0===t.isWearingUniform)t.print("\nYou are already wearing your uniform...\n");else{if("enter"===r)return t.print("\nYou stand in front of the door leading to the KitchenEnterance, \ntake a few deep breaths and enter."),new k;if("changing room enterance"===r)return t.print("\nYou decide to leave the ChangingRoom and go back to the ChangingRoomEnterance."),new Y;t.print("\nInvalid command!")}return n})()}}class Y{getName(e){return"Changing Room Enterance"}getDescription(e){return"You are standing in front of the ChangingRoom. You are only able to [enter] the \nchanging room as you are pressed for time."}handleInput(e){var n=this;return t(function*(){const t=e;return"enter"===(yield t.getInput()).toLowerCase().trim()?(t.print("\nYou walk over to the ChangingRoom door and open it with confidence.\n"),new I):(t.print("\nInvalid command!"),n)})()}}class S extends n{constructor(){super(...arguments),this.isWearingUniform=!1,this.hasDishes=!1,this.hasIngredients=!1,this.hasPrep=!1,this.hasStir=!1,this.hasCook=!1,this.hasSear=!1,this.hasGrill=!1,this.hasDressing=!1,this.hasToss=!1,this.hasBatter=!1}getName(){return"Sous Chef"}getAuthor(){return"Anastasia"}getDescription(){return"Can you make a dish that suits the critic's tastes?"}onStart(){var e=this;return t(function*(){return e.isWearingUniform=!1,e.hasDishes=!1,e.hasIngredients=!1,e.hasPrep=!1,e.hasStir=!1,e.hasCook=!1,e.hasSear=!1,e.hasGrill=!1,e.hasDressing=!1,e.hasToss=!1,e.hasBatter=!1,e.print("\n                           A text adventure by Anastasia\n"),e.sleep(.5),e.print("You are a sous chef working in a renound restraunt \nwho aspires for cooking greatness. \nOver the years of working at the restraunt you have gained the \ntrust and admiration of your coworkers through your hard work. \nFinally your time to shine has come as a famous food critic has \ncome to your restraunt and you, as the sous chef have been put \nin charge of creating the perfect dish to serve him. If you \nsucceed in impressing the critic you will be able to open \nyou own renound restraunts and become a super famous chef. \nDon't miss this chance!!!"),e.sleep(.5),e.print("\n\nPress Enter to Continue..."),yield e.getInput(),new Y})()}}const T=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new l),e.push(new c),e}getAdventure(){return new S}};class C{constructor(e){this.TYPE="PrintMessage",this.message=e}}class D{constructor(){this.TYPE="PickAdventureMessage"}}const A=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var n=this;return t(function*(){if(0==n.printQueue.length)return new Promise(t=>setTimeout(t,1e3*e));const t=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,t))})()}sleep(e){const t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}getInput(){var e=this;return t(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const t=e.inputQueue.shift();return Promise.resolve(t)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,t=.01){const n=1e3*t;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=n,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,t){const n=1e3*t;let r=this.getStartTime();e.forEach(e=>{r+=n,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,n=.1){var r=this;return t(function*(){return new Promise(t=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,n),void t()}const o=new XMLHttpRequest,i="assets/"+e;o.addEventListener("load",a=>{let s=[];o.status>=200&&o.status<300?s=o.responseText.split("\n"):(s=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${i}`)),r.fileCache.set(e,s),r.printLines(s,n),t()}),o.open("GET",i),o.send()})})()}startPrintThread(){var e=this;return t(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const t=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;){const t=e.printQueue.shift();postMessage(new C(t.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let t=T.SINGLE_ADVENTURE_MODE?T.getAdventure():T.getAdventures()[e.index];t.setEngine(A),console.log("Starting PrintThread."),A.startPrintThread(),console.log("Starting adventure."),t.run(),T.SINGLE_ADVENTURE_MODE||(t.onFinish=()=>postMessage(new D))}else"InputMessage"==e.TYPE?A.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();