!function(){"use strict";function e(e,n,t,r,o,a,s){try{var i=e[a](s),u=i.value}catch(h){return void t(h)}i.done?n(u):Promise.resolve(u).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,a){var s=n.apply(t,r);function i(n){e(s,o,a,i,u,"next",n)}function u(n){e(s,o,a,i,u,"throw",n)}i(void 0)})}}class t{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,n){this.engine.print(e,n)}printTextFile(e,t){var r=this;return n(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,t)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return n(function*(){const n=yield e.engine.getInput();return e.print(`\n> ${n}\n`),n})()}DisplayRoomName(){const e=this.room.getName(this);let n=" |",t="=-";for(let o=0;o<e.length;o++)t+=o%2==0?"=":"-";e.length%2==1?t+="-=":(t+="=-=",n="  |");let r="| "+e+n;this.print("\n"+t+"\n"),this.print(r+"\n"),this.print(t+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return n(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("boulder"===r&&n.strength<10)n.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&n.strength>=10)n.print("You lift the boulder with ease!\n"),n.hasKey?n.print("Now you're just showing off.\n"):(n.print("Beneath the boulder, you find a key.\n"),n.print("You take the key and place it in your pocket!\n"),n.hasKey=!0);else{if("back"===r)return n.print("You return to the Mouth of the Cave\n"),new u;n.print("Invalid command!\n")}return t})()}}class o{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("weights"===r&&n.strength<10)n.print("You pick up the weights and do a rep!\n"),n.strength=n.strength+6,n.sleep(1),n.print(`Your strength is now ${n.strength}\n`);else if("weights"===r&&n.strength>=10)n.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return n.print("You enter the elevator and begin to ascend."),n.sleep(1),n.print("."),n.sleep(1),n.print(".\n"),n.sleep(1),n.print("The door opens and you step out into the cave.\n"),new i;n.print("Invalid command!\n")}return t})()}}class a{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();return"back"===r?(n.print("You head back the way you came.\n"),new s):("wake"===r?(n.print("You wake the dragon...\n"),n.sleep(1),n.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),n.gameOver()):"slay"===r&&n.hasSword?(n.print("You draw your sword to slay the dragon.\n"),n.sleep(1),n.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),n.gameWon()):"slay"!==r||n.hasSword?n.print("Invalid command!\n"):(n.print("You attempt to pummel the dragon with your fists!\n"),n.sleep(1),n.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),n.gameOver()),t)})()}}class s{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("snoring"===r)return n.print("You slowly approach the snoring...\n"),new a;if("chest"===r&&n.hasKey)!1===n.hasSword?(n.print("The chest is locked.\n"),n.sleep(1),n.print("You take the key from your pocket and unlock the chest.\n"),n.sleep(1),n.print("Inside, you find a beautiful sword!\n"),n.hasSword=!0):n.print("You search the chest again, but it is empty.\n");else if("chest"!==r||n.hasKey){if("tunnel"===r)return n.print("You head back toward the mouth of the cave.\n"),new i;n.print("Invalid command!\n")}else n.print("The chest is locked!\n");return t})()}}class i{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();return"button"===r?(n.print("You press the button and wait."),n.sleep(1),n.print("."),n.sleep(1),n.print(".\n"),n.sleep(1),n.print("DING! The wall next to the button opens revealing an elevator!\n"),n.print("Entering the elevator, you begin to descend."),n.sleep(1),n.print("."),n.sleep(1),n.print(".\n"),n.sleep(1),n.print("The elevator door opens and you exit.\n"),new o):"tunnel"===r?(n.print("You continue down the tunnel.\n"),new s):"mouth"===r?(n.print("You return to the mouth of the cave.\n"),new u):(e.print("Invalid command!\n"),t)})()}}class u{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var t=this;return n(function*(){const n=e,o=(yield n.getInput()).toLowerCase().trim();return"right"===o?(n.print("You take the path to the right.\n"),new i):"left"===o?(n.print("You take the path to the left.\n"),new r):"entrance"===o?(n.print("On second thought, you return to the entrance.\n"),new h):(n.print("Invalid Command!\n"),t)})()}}class h{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();return"enter"===r?(n.print("You enter the cave.\n"),new u):("run"===r?(n.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),n.gameOver()):n.print("Invalid command!"),t)})()}}class l extends t{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return n(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new h})()}}class p{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();return"back"===r?(n.print("\nSeeing no way forward, you return to the subway platform.\n"),new d):("goat"===r?(n.print("\nThere is an angry looking goat blocking the escalator.\n"),n.print("\nThe goat looks very [hungry]. BAAAAAAA!!\n"),n.isGoatOnFire&&n.print("\nThe goat is on [fire].")):"fire"===r&&n.isGoatOnFire?n.hasSpryte?(n.print("\nYou take the Spryte from your pocket and pur it over the goat.\nThe flames go out.\n"),n.isGoatOnFire=!1):n.hasSpryte||n.print("\nYep! That's a fire!\n"):"fire"!==r||n.isGoatOnFire?"hungry"===r&&n.isGoatOnFire?n.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"!==r||n.isGoatOnFire?n.print("\nInvalid comment!\n"):(n.print("\nThe goat looks quite hungry. You hand it the empty Spryte can. The goat crunches through it in a\nmatter of seconds. It 'BaAaAs' happily before hopping away. You continue up the broken escalator\n and return home. Did that really happen?\n"),n.gameWon()):n.print("\nNo fire here!\n"),t)})()}}class d{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("escalator"===r)n.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return n.print("\nYou start to walk up the elevator.\n"),new p;"machine"===r?n.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot."):"coin"===r&&!1===n.hasSpryte?(n.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring sound followed by \na loud *KA-CHUNK*. You reach down and pick up a Spryte.\n"),n.hasSpryte=!0):n.print("coin"===r&&n.hasSpryte?"\nYou already have a Spryte!\n":"Invalid Command!\n")}return t})()}}class c extends t{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return n(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new d})()}}class g{getName(e){return"Goodbye Sicily"}getDescription(e){return"The afternoon sun hits your face as you crawl your way out of Polyphemus' Cave.\nYou are so ready to [board] your boat and get off of this cursed island.\nThe tiny hole behind you leads [back] into the cave.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("board"===r)n.print("\nYou board the boat, exhausted from your long day.\nSicily soon becomes a small dot on the horizon.\n"),n.hasGoldenFleece?n.gameWon():(n.print("\nWhy are you leaving?\nThe whole point of coming to Sicily was to retrieve the Golden Fleece!\n"),n.gameOver());else if("back"===r)return new T;return t})()}}class y{getName(e){return"Alchemy Room"}getDescription(e){return"Holding your nose, you look around the seldom used alchemy room.\nShelves full of colorful vials line the walls.\nA row of ominous green [vials] catches your eyes.\nIn the center of the room stands a gray alchemy [table].\nThe door behind you leads [back] to the Hallway.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("vials"!==r||n.hasPoison)if("vials"===r&&n.hasPoison)n.print("\nYou took one already! Don't be greedy >:(\n");else if("table"===r)n.hasSpear&&n.hasPoison&&!n.hasPoisonSpear?(n.print("\nYou place the spear and posion vial onto the table. The table glows, blinding you for a moment.\nWhen you recover your sight, a Posion Spear lies in front of you!\n"),n.hasPoisonSpear=!0):n.print("\nYou don't have enough materials to craft.\n");else{if("back"===r)return new k;n.print("\nInvalid Comment!\n")}else n.print("\nYou pick up one vials to examine it closely.\nThe liquid inside glows ominously.\nYou drop the vial into your sachel.\nPerhaps it can combined with something else to create an effective weapon?\n"),n.hasPoison=!0;return t})()}}class m{getName(e){return"Dusty Library"}getDescription(e){return"Behind the door lies a dusty, neglected library.\nIt's obvious Polyphemus rarely uses it.\nRows and rows of bookshelves fill the large space and\nin the left corner is a cushy reading corner near a stack of [books].\nA [chess] board lies on the ground.\nThe door behind you leads [back] to the Hallway.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("books"===r)n.iq<20?(yield n.printTextFile("pgfa/book.txt"),n.print("\nYou select a book from the shelf, blow the dust off, and read it.\n"),n.iq=n.iq+5,n.print(`Your iq is now ${n.iq}\n`)):n.print("\nThat's enough brain work for today.\n");else if("chess"===r)n.iq<20?(yield n.printTextFile("pgfa/chess.txt"),n.print("\nYou play an exciting game of chess against yourself.\n"),n.iq=n.iq+10,n.print(`Your iq is now ${n.iq}\n`)):n.print("\nThat's enough brain work for today.\n");else if("back"===r)return new k;return t})()}}class f{getName(e){return"Human Graves"}getDescription(e){return"You enter the hidden passage behind the bookshelf and\nfind yourself at the graveyard of Polyphemus' past victims.\nPolyphemus' respect for the dead surprises you.\nA beam of light that crept in through a crevice highlights\nthe graves of [james smith] and [sherry park].\nThe passage behind you leads [back] to Polyphemus' bedroom\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("james smith"===r)yield n.printTextFile("pgfa/grave.txt"),n.print("\nThe grave reads,\n'Here lies archer James Smith. He tried to slay Polyphemus with a bow and arrow\nbut the arrows simply bounced off. He was crushed shortly after'.\n"),n.sleep(2),n.hasBow||(n.print("\nYou pick up his bow and arrows.\n"),n.hasBow=!0);else if("sherry park"===r)yield n.printTextFile("pgfa/grave.txt"),n.print("\nThe grave reads,\n'Here lies Sherry Park. An excellent hunter, Sherry underestimated \nthe thickness of Polyphemus' skin and her spear did no harm to Polyphemus.\nShe was snapped in half'.\n"),n.sleep(2),n.hasSpear||(n.print("\nYou pick up the spear resting against her grave.\n"),n.hasSpear=!0);else{if("back"===r)return new b;n.print("\nInvalid  Comment!\n")}return t})()}}class w{getName(e){return"Subterranean Garden"}getDescription(e){return"As you descend down the staircase, you notice a sudden drop in temperature.\nIcy plants illuminate the ground below you.\nIn the middle of the vast cavern stands a massive oak tree,\nits branches reaching as far you can see.\nEnveloped in a gentle, silvery light, the Golden Fleece lies on top of the tree,\nready to [judge] you.\nThe path behind you leads [back] to Polyphemus' bedroom\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("judge"===r){if(n.print("\nWait a sec. The Golden Fleece is trying to determine if you're worthy enough!\n"),n.iq>=20&&n.strength>=20&&n.hasEyeball)return n.print("\nGreat news! The Golden Fleece has deemed you worthy enough to relocate it.\nYou take the Golden Fleece off the tree and tie it around your neck.\n"),n.hasGoldenFleece=!0,n.print("\nAs you begin to exit, the entire garden begins to shake and\nthe rocks start falling from the ceiling. You barely make it out.\n"),new b;n.print(n.hasEyeball?(n.iq<20||n.strength<20)&&n.hasEyeball?"\nSorry! The Golden Fleece doesn't think you are good enough to touch it.\nTry increasing your personal stats.\n":"\nSorry! The Golden Fleece doesn't think you are good enough to touch it. Explore a bit more.\n":"\nSorry! The Golden Fleece doesn't think you are good enough to touch it.\nMaybe slaying its current owner will help...\n")}else{if("back"===r)return new b;n.print("\nInvalid Comment!\n")}return t})()}}class b{getName(e){return"Master Bedroom"}getDescription(e){return"The shiny door leads to Polyphemus' bedroom.\nIt's a rather plain room.\nThe only thing that really stands out\nis a [lever] beneath the lamp and a small [button] on the mirror.\nThe door behind you leads [back] to the Hallway.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("lever"===r){if(!n.hasGoldenFleece)return n.print("You pull the lever and the wall moves aside, revealing another room.\n"),new w;n.print("\nAn entrance reveals itself, but the ceiling above has completely caved in,\nfilling the room with debris.\nIt seems there is no way to enter.\n")}else{if("button"===r)return n.print("\nYou push the button and the bookshelf slides into the floor, revealing another room.\n"),new f;if("back"===r)return new k;n.print("\nInvalid Comment!\n")}return t})()}}class v{getName(e){return"Sheep House"}getDescription(e){return"The last door reveals a super luxurious sheep house.\nEach sheep had its own queen sized bed, food tray with a balanced meal of fruits and meat,\nand in the middle of the room stands a skillfully crafted marble sheep\nthat spits water into a shallow pool.\nThe sheep seem [excited].\nThe door behind you leads [back] to the Hallway.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("excited"===r)n.strength<20?(yield n.printTextFile("pgfa/sheep.txt"),n.print("\nYou approach the sheep slowly and one pounces on you.\nThe two of you wrestle for awhile.\n"),n.strength=n.strength+10,n.print(`Your strength is now ${n.strength}\n`)):n.print("\nThe sheep are bored of your repetitive wrestling.\n");else{if("back"===r)return new k;n.print("\nInvalid Comment!\n")}return t})()}}class k{getName(e){return"Hallway"}getDescription(e){return"You enter a long hallway with four doors.\nFrom a glance, the [first] door smells bad,\nthe [second] door looks old,\nthe [third] door looks shiny,\nand last but not least, you can hearing a distant 'baaing' behind the [fourth] door.\nYou can also [return] to the main entrance of the cave.\n"}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();return"first"===r?new y:"second"===r?new m:"third"===r?new b:"fourth"===r?new v:"return"===r?new T:(n.print("\nInvalid Command!\n"),t)})()}}class I{getName(e){return"Attack on Polyphemus"}getDescription(e){return"You tiptoe into the room where Polyphemus lies drunk and asleep.\nHe seems defenseless; you got this!\nYou consider your current options: take on Polyphemus with a [spear] or [bow];\nor [return] to the Hallway to explore more."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("spear"===r){if(n.hasPoisonSpear&&n.strength>=20)return n.print("\nYou tiptoe next to the snoring Polyphemus and plunge the posion spear into his eyeball.\nPolyphemus bellows and struggles but you keep him on ground.\nHe eventually stops moving and his body dissolves into golden dust and\nthe only thing that remains is his eyeball, impaled by your spear.\nYou pick up the eyeball and sigh in relief.\n"),n.hasEyeball=!0,new g;n.hasPoisonSpear&&n.strength<20?(n.print("\nYou tiptoe next to the snoring Polyphemus and plunge the posion spear into his eyeball.\nPolyphemus bellows and struggles, toppling you. A now enraged Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),n.gameOver()):n.hasSpear&&!n.hasPoisonSpear?(n.print("\nYou tiptoe next to the snoring Polyphemus and plunge the spear into his eyeball,\nbut the spear does not penetrate his skin.\nA now enraged Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),n.gameOver()):!n.hasSpear&&!n.hasPoisonSpear&&n.print("\nSilly goose! You don't have a spear.\n")}else if("bow"===r)n.hasBow?(n.print("\nYou pull out and arrow from the quiver and shoot it right into Polyphemus' eye.\nThe arrow bounces off harmlessly and wakes Polyphemus up.\nAnnoyed, Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),n.gameOver()):n.hasBow||n.print("\nSilly goose! You don't have a bow.");else{if("return"===r)return new k;n.print("\nInvalid Command!\n")}return t})()}}class T{getName(e){return"To Do or Not To Do"}getDescription(e){return"It seems you have three options: [explore] the cave, go back [home], or [confront] Polyphemus."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("home"===r)return new g;if("explore"===r)return new k;if("confront"===r){if(!n.hasEyeball)return new I;n.print("\nSorry you actually have two options.\nPolyphemus is already dead!\n")}else n.print("\nInvalid Command!\n");return t})()}}class Y{getName(e){return"Welcome to Sicily"}getDescription(e){return"You open your eyes to find yourself in a dimly lit but spacious cave.\nConfused, you sit up and find yourself face to face with Polyphemus himself.\nPolyphemus grins widely as he watches you scramble in terror.\nYou frantically search your sachel for anything that might save you.\nInside, you find a [slingshot] and the jug of [wine] you had with your dinner."}handleInput(e){var t=this;return n(function*(){const n=e,r=(yield n.getInput()).toLowerCase().trim();if("slingshot"===r)yield n.printTextFile("pgfa/polyphemus.txt"),n.print("\nYou grab your slingshot a send a rock flying at Polyphemus.\nThe puny pebble itches Polyphemus. He steps on you.\n"),n.gameOver();else{if("wine"===r)return n.print("\nYou tap Polyphemus on the shoulder and offer him a final toast.\nHe agrees and you both take a swig.\nThankfully he's a light drinker and falls asleep immediately.\n"),new T;n.print("\nInvalid Comment!\n")}return t})()}}class P extends t{constructor(){super(...arguments),this.hasSpear=!0,this.hasBow=!1,this.iq=0,this.strength=0,this.hasPoison=!1,this.hasGoldenFleece=!1,this.hasPoisonSpear=!1,this.hasEyeball=!1}getName(){return"Polyphemus' Golden Fleece"}getAuthor(){return"Janet"}getDescription(){return"Can you escape with the Golden Fleece?"}onStart(){var e=this;return n(function*(){return e.hasBow=!1,e.hasSpear=!1,e.hasPoisonSpear=!1,e.hasPoison=!1,e.strength=0,e.iq=0,e.hasEyeball=!1,e.hasGoldenFleece=!1,yield e.printTextFile("pgfa/title.txt"),e.print("\n                                  A text adventure by Janet\n\n\n\n"),e.sleep(.5),e.print("\n     On a quest to retrieve the Golden Fleece, you and your crew sailed through\n\n"),e.sleep(.5),e.print(" the Sea of Monsters, facing tradgedies that wiped out everyone but you.\n\n"),e.sleep(.5),e.print(" Finally you have arrived safely on the island of Sicily.\n\n"),e.sleep(.5),e.print(" You explore the island all day, trailing sheep remains to find the infamous cave of Polyphemus.\n\n"),e.sleep(.5),e.print(" Exhausted, you set up camp and crash for the night.\n\n"),e.sleep(.5),e.print(" Press Enter to Continue..."),yield e.getInput(),new Y})()}}const S=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new l),e.push(new c),e}getAdventure(){return new P}};class C{constructor(e){this.TYPE="PrintMessage",this.message=e}}class A{constructor(){this.TYPE="PickAdventureMessage"}}const x=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var t=this;return n(function*(){if(0==t.printQueue.length)return new Promise(n=>setTimeout(n,1e3*e));const n=t.printQueue[t.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,n))})()}sleep(e){const n=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:n})}getInput(){var e=this;return n(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const n=e.inputQueue.shift();return Promise.resolve(n)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,n=.01){const t=1e3*n;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=t,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,n){const t=1e3*n;let r=this.getStartTime();e.forEach(e=>{r+=t,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,t=.1){var r=this;return n(function*(){return new Promise(n=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,t),void n()}const o=new XMLHttpRequest,a="assets/"+e;o.addEventListener("load",s=>{let i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${a}`)),r.fileCache.set(e,i),r.printLines(i,t),n()}),o.open("GET",a),o.send()})})()}startPrintThread(){var e=this;return n(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const n=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=n;){const n=e.printQueue.shift();postMessage(new C(n.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let n=S.SINGLE_ADVENTURE_MODE?S.getAdventure():S.getAdventures()[e.index];n.setEngine(x),console.log("Starting PrintThread."),x.startPrintThread(),console.log("Starting adventure."),n.run(),S.SINGLE_ADVENTURE_MODE||(n.onFinish=()=>postMessage(new A))}else"InputMessage"==e.TYPE?x.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();