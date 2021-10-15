!function(){"use strict";function e(e,t,n,r,o,a,i){try{var s=e[a](i),h=s.value}catch(u){return void n(u)}s.done?t(h):Promise.resolve(h).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function s(t){e(i,o,a,s,h,"next",t)}function h(t){e(i,o,a,s,h,"throw",t)}s(void 0)})}}class n{constructor(){this._gameWon=!1,this._gameLost=!1}print(e,t){this.engine.print(e,t)}printTextFile(e,n){var r=this;return t(function*(){console.log("Printing: "+e),yield r.engine.printFile(e,n)})()}sleep(e){this.engine.sleep(e)}getInput(){var e=this;return t(function*(){const t=yield e.engine.getInput();return e.print(`\n> ${t}\n`),t})()}DisplayRoomName(){const e=this.room.getName(this);let t=" |",n="=-";for(let o=0;o<e.length;o++)n+=o%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");let r="| "+e+t;this.print("\n"+n+"\n"),this.print(r+"\n"),this.print(n+"\n\n")}setEngine(e){this.engine=e}gameOver(){this._gameLost=!0}gameWon(){this._gameWon=!0}onFinish(){this.run()}run(){var e=this;return t(function*(){for(e._gameWon=!1,e._gameLost=!1,e.room=yield e.onStart();!e._gameWon&&!e._gameLost;)e.DisplayRoomName(),yield e.sleep(.5),e.print(e.room.getDescription(e)+"\n"),e.room=yield e.room.handleInput(e);e._gameWon?(e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()):e._gameLost&&(e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),yield e.getInput()),e.onFinish()})()}}class r{getName(e){return"A Dead End"}getDescription(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("boulder"===r&&t.strength<10)t.print("You try to lift the boulder but you're too weak!\n");else if("boulder"===r&&t.strength>=10)t.print("You lift the boulder with ease!\n"),t.hasKey?t.print("Now you're just showing off.\n"):(t.print("Beneath the boulder, you find a key.\n"),t.print("You take the key and place it in your pocket!\n"),t.hasKey=!0);else{if("back"===r)return t.print("You return to the Mouth of the Cave\n"),new h;t.print("Invalid command!\n")}return n})()}}class o{getName(e){return"Ye Olde Gym"}getDescription(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("weights"===r&&t.strength<10)t.print("You pick up the weights and do a rep!\n"),t.strength=t.strength+6,t.sleep(1),t.print(`Your strength is now ${t.strength}\n`);else if("weights"===r&&t.strength>=10)t.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n");else{if("elevator"===r)return t.print("You enter the elevator and begin to ascend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The door opens and you step out into the cave.\n"),new s;t.print("Invalid command!\n")}return n})()}}class a{getName(e){return"The Dragon's Lair"}getDescription(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("You head back the way you came.\n"),new i):("wake"===r?(t.print("You wake the dragon...\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()):"slay"===r&&t.hasSword?(t.print("You draw your sword to slay the dragon.\n"),t.sleep(1),t.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),t.gameWon()):"slay"!==r||t.hasSword?t.print("Invalid command!\n"):(t.print("You attempt to pummel the dragon with your fists!\n"),t.sleep(1),t.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),t.gameOver()),n)})()}}class i{getName(e){return"A Large Natural Cave"}getDescription(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("snoring"===r)return t.print("You slowly approach the snoring...\n"),new a;if("chest"===r&&t.hasKey)!1===t.hasSword?(t.print("The chest is locked.\n"),t.sleep(1),t.print("You take the key from your pocket and unlock the chest.\n"),t.sleep(1),t.print("Inside, you find a beautiful sword!\n"),t.hasSword=!0):t.print("You search the chest again, but it is empty.\n");else if("chest"!==r||t.hasKey){if("tunnel"===r)return t.print("You head back toward the mouth of the cave.\n"),new s;t.print("Invalid command!\n")}else t.print("The chest is locked!\n");return n})()}}class s{getName(e){return"A Long Winding Tunnel"}getDescription(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"button"===r?(t.print("You press the button and wait."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("DING! The wall next to the button opens revealing an elevator!\n"),t.print("Entering the elevator, you begin to descend."),t.sleep(1),t.print("."),t.sleep(1),t.print(".\n"),t.sleep(1),t.print("The elevator door opens and you exit.\n"),new o):"tunnel"===r?(t.print("You continue down the tunnel.\n"),new i):"mouth"===r?(t.print("You return to the mouth of the cave.\n"),new h):(e.print("Invalid command!\n"),n)})()}}class h{getName(e){return"The Mouth of the Cave"}getDescription(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}handleInput(e){var n=this;return t(function*(){const t=e,o=(yield t.getInput()).toLowerCase().trim();return"right"===o?(t.print("You take the path to the right.\n"),new s):"left"===o?(t.print("You take the path to the left.\n"),new r):"entrance"===o?(t.print("On second thought, you return to the entrance.\n"),new u):(t.print("Invalid Command!\n"),n)})()}}class u{getName(e){return"Cave Entrance"}getDescription(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"enter"===r?(t.print("You enter the cave.\n"),new h):("run"===r?(t.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),t.gameOver()):t.print("Invalid command!"),n)})()}}class l extends n{constructor(){super(...arguments),this.hasKey=!1,this.hasSword=!1,this.strength=0}getName(){return"The Dragon's Lair"}getAuthor(){return"Joseph Collard"}getDescription(){return"Description"}onStart(){var e=this;return t(function*(){return e.strength=0,e.hasKey=!1,e.hasSword=!1,yield e.printTextFile("dragonsLair/title.txt"),e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),new u})()}}class p{getName(e){return"StarBucks"}getDescription(e){return"\n    You exit from the [starport] into the aptly-named StarBucks. Alas, you have no \n    money, and as you loiter awkwardly in the lobby the teller glares at you \n    suspiciously... wouldn't want to get into any trouble with them. What to do? \n    Return to the [Starport], or try to [rob] the bank?"}handleInput(e){var n=this;return t(function*(){const t=e;if(t.hasDistractionUsed)return t.print("\nThe bank lies at your feet in smoldering rubble. Wh--"),t.print("\nWhat sort of demon spawn??---it was just a cat!!! I swear!!"),t.print("\nIt blinks at you lovingly as you run away.\n"),new v;const r=(yield t.getInput()).toLowerCase().trim();if("starport"===r)return t.print("\nYou exit StarBucks and return to the starport. No coffee here!.\n"),new v;if("rob"===r)t.print("\nBold move! [Fight] the teller, or use a [distraction]?\n");else if("fight"===r)t.print("\nYou run at the teller screaming."),t.print("\nThe Unicorn teller turns, stares you straight in the eye, and impales you like a kebab."),t.print("\nOuch.\n"),t.gameOver();else{if("distraction"===r&&t.hasDistraction)return t.print("\nIt's a cat!! Your furry fiend runs at the wall and breaks through it like Kool-Aid man."),t.print("\nYou meekly slink over to the safe and grab a sack of coins. Success!"),t.print("\nYou may not want to return here though... you escape to the Starport.\n"),t.hasDistractionUsed=!0,t.hasDistraction=!1,t.hasMoney=!0,new v;"distraction"!==r||t.hasDistraction?t.print("\nInvalid command!\n"):(t.print("\nYou have no cat! Shame. You stand in the corner sadly contemplating your life choices.\n"),t.gameOver())}return n})()}}class d{getName(e){return"Creepy Gargoyles"}getDescription(e){return"\n    They grimace as you draw away, their eye flicking back and forth\n    in apt fascination as people bustle by. Are they alive or dead??? \n    You have no way of knowing. Their sharp teeth indicate that you probably \n    don't want to know the answer."}handleInput(e){var n=this;return t(function*(){const t=e;t.hasEye&&t.print("\nSuddendly, the stones shatter, and at you comes a horrifying demon. I guess they weren't too\n keen on your stealing of their eye. Is this the end?? [Hug] the demon or [run] away??");const r=(yield t.getInput()).toLowerCase().trim();return"run"===r?(t.print("\nYou run away screaming. Close one!\n"),new v):("hug"===r?(t.print("\nYou hug the demon. It consumes you alive."),t.sleep(3),t.print("\nI don't think it likes hugs.\n"),t.gameOver()):t.print("\nInvalid command!\n"),n)})()}}class y{getName(e){return"Creepy Gargoyles"}getDescription(e){return"\n    They grimace as you draw near, their eyes flicking back and forth\n    in apt fascination as the [starport] bustles by. Are they alive or dead??? \n    You have no way of knowing. Their sharp teeth indicate that you probably \n    don't want to know the answer. Very strange creatures indeed... are they \n    the key to something?"}handleInput(e){var n=this;return t(function*(){const t=e;(t.hasEye||t.hasEyeUsed)&&(t.print("\nWhy did you return here???\n"),t.print("\n[Player] has been consumed by demon.\n"),t.gameOver());const r=(yield t.getInput()).toLowerCase().trim();return"starport"===r?(t.print("\nFrightened, you run back to the starport.\n"),new v):"key"===r&&t.hasKey?(t.print("\nYou find the hidden door behind the Gargoyle's ear."),t.print("\nYou turn the key, and it opens with a satisfying click."),t.print("\nYou steal the gargoyle's eye.\n"),t.hasEye=!0,new d):("key"===r&&(t.hasKey1||t.hasKey2)?(t.print("\nNo luck in unlocking the gargoyle..."),t.print("\nIf only you found other key half!\n")):"key"===r&&t.hasKey1&&t.hasKey2?(t.print("\nNo luck in unlocking the gargoyle..."),t.print("\nTry to connect both key halves together?\n")):t.print("key"===r?"\nYou have no key! Look around... perhaps it's hiding somewhere?":"\nInvalid command!\n"),n)})()}}class c{getName(e){return"Starport"}getDescription(e){return"\n    As you greedily collect the coins at the bottom of the pool, you notice a [herring].\n    Follow the [herring], or do you want to [swim] away?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("herring"===r)t.print("\nYou eat the red herring. Turns out, you shouldn't eat stuff you find swimming in public\nfountains."),t.print("\nAn interstellar chasm opens up below you, announcing your demise. \n"),t.gameOver();else{if("swim"===r)return t.print("\nScared witless of the fish, you swim away, leaving your collection of coins."),t.print("\nYou leap out of the fountain.\n"),new v;t.print("\nInvalid command!\n")}return n})()}}class g{getName(e){return"Merchant's Stall"}getDescription(e){return""}handleInput(e){var n=this;return t(function*(){const t=e;yield t.printTextFile("DropsOfJupiter/merchant.txt");const r=(yield t.getInput()).toLowerCase().trim();return"starport"===r?(t.print("\nYou take one last look around the merchant's stall and head back to the starport.\n"),new v):("talk"===r&&0===t.timesTalk?(t.print("\n'Why hello there, good soul! I have many a wond'rful things here in store for you.'"),t.print("\n'First off--look at this beautiful [sword]! Has the strength of a thousand gods,\n I tell you.'"),t.print("\n'I think it's a Super Cool [Sword]. What would you say about buying it... eh?'"),t.sleep(2),t.print("\n\nBuy the [sword], or continue [talk]ing?\n"),t.timesTalk=t.timesTalk+1,t.sleep(2)):"talk"===r&&1===t.timesTalk?(t.print("\n'Well! My next item... uh..' They rummage around their desk, knocking over a few\n wares and potions in the process."),t.print("\n'Whoops! Anyway... I have this piece of scrap.. metal? Kinda funky shaped.'"),t.print("\n\nUpon closer inspection, you notice it kind of looks like half a key. I wonder..."),t.print("\n'Could work as an earring maybe? Mmm, you're a fashionable soul--this stuff is\n all the rage!!'"),t.sleep(2),t.print("\n\nWhat do you say about buying the [key]? Or should you continue [talk]ing?\n"),t.timesTalk=t.timesTalk+1,t.sleep(2)):"talk"===r&&2===t.timesTalk?(t.print("\n'Now! I hope you like spiders.'"),t.print("\nFrom under the table they grab the biggest, and I mean the absolute largest,\n spider that has ever existed in this universe."),t.print("\n'She's been really enjoying all the new customers... ANYWAYS, what would you\n say to becoming a parent?'"),t.print("\n\nSpider parent???? You look at the newly-appeared jar of baby spiders with\n horrified fascination."),t.print("\n'Don't worry, you seem like a good soul... responsible, wouldn't do anything\n reckless, let alone rob a bank or something.'"),t.print("\n\nHuh. Kinda cute tho with the googley eyes.."),t.sleep(2),t.print("\n\nAdopt some [spiders], or [talk] some more?\n"),t.timesTalk=t.timesTalk+1,t.sleep(2)):"talk"===r&&3===t.timesTalk?(t.print("\n'Now, good soul, I've been talking a lot about myself. What about you?'"),t.print("\n\nAs you recount your life's journey... to think of it, what sort of life have you\n had? you don't notice the time slip by as hours turn into days into\n years and you form a deep, priceless friendship with each other\n and before you know it they sell your soul to a passerby."),t.print("\n'I knew you were a good soul! Fetched top-dollar.'"),t.sleep(2),t.print("\n\nWho could've guessed????"),t.gameOver()):"sword"!==r&&"spider"!==r&&"key"!==r||t.hasMoney?"sword"===r&&t.timesTalk>=1&&!t.hasSword&&t.hasMoney?(t.print("\n'I knew you'd like it,' the merchant says with a sly smile."),t.print("\nThey carefully hand you the sword. Ooooo!..... shiny.\n"),t.hasSword=!0):"sword"===r&&t.timesTalk<1&&!t.hasSword?t.print("\nSword? What sword? Talk to the merchant to see what they have!\n"):"sword"===r&&t.hasSword?t.print("\nYou already have a Super Cool Sword... you took the last one! Collector's item.\n"):"key"===r&&t.timesTalk>=2&&!t.hasKey2&&!t.hasKey&&t.hasMoney?(t.print("\n'Yeah, you know what I'm talking about!' they say with a grin. Key to success.\n Hand them coins over!!"),t.print("\nAnother piece of scrap metal for you! Lovely.\n"),t.hasKey2=!0):"key"===r&&t.timesTalk<2&&!t.hasKey2?t.print("\nKey??? Hmm... Talk to the merchant to see what they have!\n"):"key"===r&&t.hasKey2?t.print("\nYou already have the key half!\n"):"key"===r&&t.hasKey?t.print("\nDude.... you just wrapped the key in tape. No more key halves here! What would you\n need another key for anyway??\n"):"spiders"===r&&t.timesTalk>=3&&!t.hasSpider&&t.hasMoney?(t.print("\n'Spooky! Whole jar, or just a lad?'"),t.print("\n\nThere is no way in hell you are carrying a *whole jar of spiders* around with you.\n One is enough."),t.print("\n'Take good care of them for me, will you?'"),t.hasSpider=!0):t.print("spiders"===r&&t.timesTalk<3&&!t.hasSpider?"\nI heard this guy loves spiders. Talk to them more!\n":"spiders"===r&&t.hasSpider?"\nYes, they're cute, but I can see you hoarding the spiders. No more spiders for you >:(\n":"\nInvalid command!\n"):t.print("\nYou have no money! I wonder if you could find any anywhere...\n"),n)})()}}class m{getName(e){return"Dolphin Pod"}getDescription(e){return"\n    You leave the Kraken's madness behind and peacefully follow the dolphins \n    jumping through the sparkling waves. Before you lies the vastness of the \n    universe, countless places to go and lives to experience. Your new friends\n    play in the boat's wake, gently butting the Dragonship with their heads. \n    Suddenly, they all speed away, leaving you in the middle of a suspiciously \n    calm patch of water. [Oh no]!"}handleInput(e){var n=this;return t(function*(){const t=e;return"oh no"===(yield t.getInput()).toLowerCase().trim()?(t.print("\nHaving had nothing better to do, the dolphins led you into a wormhole."),t.print("\nStill squeaking happily, the dolphins watch as you fall to your demise."),t.print("\nBack to the rooftop you go!!\n"),t.gameOver()):t.print("\nInvalid command!\n"),n})()}}class w{getName(e){return"The Almighty Kraken"}getDescription(e){return"\n    The Kraken hisses as it barrels towards you at top speed, leaving chaos \n    in its wake. How to stop it?? Use your [sword] to slay it, once and for \n    all, try chucking your [spider], or call for [help]?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"spider"===r&&t.hasSpider?(t.print("\nYou pitifully throw the poor spider. It lands in the water and begins sinking with a sad\n gurgle."),t.print("\nWell then."),t.sleep(2),t.print("\nBoth you and the Kraken watch it dissapear under the waves before making awkward eye contact."),t.print("\nStill staring at you, the Kraken lets out a terrified screech and explodes. What????"),t.gameWon()):"sword"===r&&t.hasSword?(t.print("\nWith only seconds to spare, you unsheathe your Super Cool Sword."),t.print("\n'That's a super cool sword,' you think."),t.print("\nDistracted, you play with the little pom-poms hanging off of the handle. They're very sparkly!"),t.sleep(3),t.print("\nThe Kraken eats you alive.\n"),t.gameOver()):"sword"!==r||t.hasSword?"spider"!==r||t.hasSpider?"help"===r?(t.print("\nYou try yelling at the Kraken. It screams back."),t.print("\n[Player] was eaten by the Kraken.\n"),t.gameOver()):t.print("\nInvalid command!\n"):t.print("\nYou don't have a spider!\n"):t.print("\nYou don't have a sword!\n"),n})()}}class f{getName(e){return"The High Seas"}getDescription(e){return"\n    You peacefully slip across the ocean, occasionally launching off waves with\n    a cloud of sparks before gracefully landing back in the water. A pod of \n    [dolphins] comes to chirp at you, and your ship growls back. Once you get past \n    Saturn's rings, you'll be free to explore the universe... not too much longer \n    to go! A monstrous [kraken] lunges out of the water in the distance, before \n    stopping to rise and track you with a menacing red-eyed glare. \n    \n    Apparenly, it's been terrorizing these seas for as long as you can \n    remember\u2013\u2013maybe it's about time its reign is ended, once and for all. \n    Where do you go? What do you do? Follow the [kraken] or the [dolphins]?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"kraken"===r?(t.print("\nAlbeit frightening, you barrel towards the Kraken.\n"),new w):"dolphins"===r?(t.print("\nNo time for heroics...Wary of the Kraken, you follow the dolphins.\n"),new m):(t.print("\nInvalid command!\n"),n)})()}}class k{getName(e){return"Dragonship"}getDescription(e){return""}handleInput(e){var n=this;return t(function*(){const t=e;yield t.printTextFile("DropsOfJupiter/dragonship.txt"),t.hasDragon&&t.print("\nThere you are! Shall we [sail]?\n");const r=(yield t.getInput()).toLowerCase().trim();if("starport"===r)return t.print("\nYou sneak back past the guards into the starport.\n"),new v;if("read"===r)t.print("\nYou read the scroll."),t.print("\n Apparently, a gargoyle somewhere in town has the key to making this ship sail."),t.print("\nEye wonder if you can find it!\n");else if("eye"===r&&t.hasEyeUsed)t.print("\nYou already used your eye!\n");else if("eye"!==r||t.hasEye)if("eye"===r&&t.hasEye)t.print("\nYou climb up to the bowhead of the ship and tentatively place the eye in the dragon's mouth."),t.print("\nAs you walk away, you swear you see the bowhead's eyes blink. The ship hums with new energy."),t.print("\nI think you're ready to [sail]!"),t.hasDragon=!0,t.hasEye=!1,t.hasEyeUsed=!0;else{if("sail"===r&&t.hasDragon)return t.print("\nThe Dragonship uncasts its moorings and slips off through the waves.\n"),new f;t.print("sail"!==r||t.hasDragon?"gargoyle"===r||"gargoyles"===r?"\nI wonder where they're hidden.... try looking in town!\n":"\nInvalid command!\n":"\nAlas, this is no normal ship. Try reading the scroll!\n")}else t.print("\nEye??? What eye?");return n})()}}class v{getName(e){return"Starport"}getDescription(e){return""}handleInput(e){var n=this;return t(function*(){const t=e;yield t.printTextFile("DropsOfJupiter/starport.txt");const r=(yield t.getInput()).toLowerCase().trim();if("alleyway"===r)return t.print("\nYou disappear back into the alleyway.\n"),new b;if("ship"===r)return t.print("\nYou push your way through the crowd and quickly scale a wall to get to the shipyard.\n"),new k;if("merchant"===r)return t.print("\nYou approach the merchant's stand. Its lights twinkle mischieviously at you as you enter.\n"),new g;if("bank"===r)return t.print("\nThe bank's extravagant pillars tower over you. Hesitantly, you enter anyway.\n"),new p;if("gargoyle"===r||"gargoyles"===r)return t.print("\nYou hadn't noticed them before, glaring at you from the sides of the bank's ominous columns."),t.print("\nTheir eyes seem to follow you around too.... \n"),new y;if("plant"!==r||t.hasKey1||t.hasKey)if("plant"===r&&(t.hasKey1||t.hasKey))t.print("\nYou already looked here! Do you just like digging through dirt? Weird.\n");else if("lamppost"===r)t.print("\nYou climb up the lamppost. Nice view from up here, huh?"),t.sleep(3),t.print("\nWhy did you do this anyway? You climb back down.\n");else{if("fountain"===r)return t.print("\nYou jump into the fountain with a splash."),new c;"tape"===r&&t.hasKey?t.print("\nYou wrap more tape around the key. Why though?\n"):"tape"===r&&t.hasKey1&&t.hasKey2?(t.print("\nYou use the tape to connect the key halves together.\n"),t.hasKey1=!1,t.hasKey2=!1,t.hasKey=!0):"tape"===r?t.hasKey1||t.hasKey2?t.print("\nYou poke the tape with your key. If only the other half was around here somewhere!\n"):(t.print("\nYou pick up the spool of tape and spin it around your finger."),t.print("\nThe simplest things seem to amaze you!\n")):t.print("\nInvalid command!")}else t.print("\nYou lift up the plant. As you dig through the dirt, something metallic brushes your fingers."),t.print("\nA key! Or... half of one.\n"),t.hasKey1=!0;return n})()}}class b{getName(e){return"Hidden Alleyway"}getDescription(e){return"\n    You carefully make your way down the dark alleyway, dimly lit with the [Starport]'s \n    colorful light. Behind you lies the [roof]. Suddenly, you spot a [distraction] out \n    of the corner of your eye... eerie. What to do?"}handleInput(e){var n=this;return t(function*(){const t=e;t.hasDistraction&&t.print("\nYou can still [pet] the cat!\n");const r=(yield t.getInput()).toLowerCase().trim();return"roof"===r?(t.print("\nYou climb up the wall and return to the roof.\n"),new Y):"starport"===r?(t.print("\nYou walk out of the shadows and into the starport.\n"),new v):(("pet"===r||"pick up"===r)&&t.hasDistractionUsed||"distraction"===r&&t.hasDistraction?(t.print("\nJust a box...\n"),t.hasDistractionUsed&&t.print("\nThe cat is gone! :(\n")):"distraction"!==r||t.hasDistraction||t.hasDistractionUsed?"pet"===r&&t.timesPet<2?(t.print("\nYou pet the cat.\n"),t.timesPet=t.timesPet+1,t.print("\nIt purrs happily. Would you like to [pet] the cat again?"),t.hasDistraction||t.print("\nYou can also [pick up] the cat.\n")):"pet"===r&&t.timesPet>=2?(t.print("\nYou pet the cat. You cannot stop petting the cat."),t.print("\n You become forever distracted by the cat.\n"),t.gameOver()):"pick up"===r&&t.hasDistraction?t.print("\nYou already have the cat!\n"):"pick up"===r&&t.timesPet>=1?(t.print("\nYou pick up the cat. It yawns and falls asleep in your arms.\n"),t.hasDistraction=!0):t.print("\nInvalid command!\n"):t.print("\nIt's a cat!! Would you like to [pet] it?\n"),n)})()}}class I{getName(e){return"The Window"}getDescription(e){return"You find yourself standing in a dark, cold room.[Spooky]!"}handleInput(e){var n=this;return t(function*(){const t=e;return"spooky"===(yield t.getInput()).toLowerCase().trim()?(t.print("\nYou take a step forward and fall into a hole.\n"),t.gameOver()):t.print("\nInvalid command!"),n})()}}class Y{getName(e){return"Strange Roof"}getDescription(e){return"\n    The stars above glitter joyously as Jupiter announces your impending doom \n    with missiles of flame. Time is running out to escape your moon\u2013fortunately, \n    the Starport, a hub for intragalactic travel, lies below in sparkling splendor. \n    How to reach the Starport? Take the [alleyway] or [window]?"}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"alleyway"===r?(t.print("\nYou slide down the side of the roof into the alleyway.\n"),new b):"window"===r?(t.print("\nYou jump through the window.\n"),new I):(t.print("\nInvalid command!\n"),n)})()}}class T extends n{constructor(){super(...arguments),this.timesPet=0,this.timesTalk=0,this.hasDistraction=!1,this.hasDistractionUsed=!1,this.hasKey1=!1,this.hasKey2=!1,this.hasKey=!1,this.hasMoney=!1,this.hasSpider=!1,this.hasSword=!1,this.hasDragon=!1,this.hasEye=!1,this.hasEyeUsed=!1}getName(){return"Drops Of Jupiter"}getAuthor(){return"Marielle Alden"}getDescription(){return"Will you survive the world's end?"}onStart(){var e=this;return t(function*(){return e.timesPet=0,e.timesTalk=0,e.hasDistraction=!1,e.hasDistractionUsed=!1,e.hasKey1=!1,e.hasKey2=!1,e.hasKey=!1,e.hasMoney=!1,e.hasSpider=!1,e.hasSword=!1,e.hasDragon=!1,e.hasEye=!1,e.hasEyeUsed=!1,yield e.printTextFile("DropsOfJupiter/title.txt"),e.print("\n                           A text adventure by Marielle Alden\n"),e.sleep(.5),e.print("\nThe sky above becomes alit as the planet Jupiter, nearing the end of its life,\nmourns its death with tears of flame.\n\n"),e.sleep(.5),e.print("You find yourself trapped on one of its moons. How will you escape?\n\n\n"),e.sleep(2),e.print("The night has been long, and you awake on a strange roof of this strange, strange land...\n\n"),e.sleep(.5),e.print("But be careful! Other things wish to make you cry\u2013\u2013Will the stars align in your favor?\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new Y})()}}class S{getName(e){return"Broken Escalator"}getDescription(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();return"back"===r?(t.print("\nSeeing no way forward, you return to the subway platform.\n"),new D):("goat"===r?(t.print("\nThere is an angry looking goat blocking the escalator.\n"),t.print("\nThe goat looks very [hungry]. BAAAA!\n"),t.isGoatOnFire&&t.print("\nThe goat is on [fire].\n")):"fire"===r&&t.isGoatOnFire?t.hasSpryte?(t.print("\nYou take the Spryte from your pocket and pour it over the goat."),t.print("\nThe flames go out.\n"),t.isGoatOnFire=!1):t.print("\nYep! That's a fire!\n"):"fire"!==r||t.isGoatOnFire?"hungry"===r&&t.isGoatOnFire?t.print("\nThe goat is on fire. Perhpas you should find a way to put it out.\n"):"hungry"!==r||t.isGoatOnFire?t.print("\nInvalid command!\n"):(t.print("\nThe goat looks quite hungry. You hand it the empty Spryte can."),t.print("\nThe goat crunches it in a matter of seconds."),t.print("\nIt 'BAAAAS' happily before hopping away."),t.print("\nYou continue up the broken escalator and return home."),t.print("\nDid that really happen?\n"),t.gameWon()):t.print("\nNo fire here!\n"),n)})()}}class D{getName(e){return"Subway Platform"}getDescription(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}handleInput(e){var n=this;return t(function*(){const t=e,r=(yield t.getInput()).toLowerCase().trim();if("escalator"===r)t.print("\nIt's broken. You'll have to [walk] up it.\n");else{if("walk"===r)return t.print("\nYou start to walk up the escalator.\n"),new S;"machine"===r?t.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot.\n"):"coin"!==r||t.hasSpryte?t.print("coin"===r&&t.hasSpryte?"\nYou already have a Spryte.\n":"\nInvalid command!"):(t.print("\nYou drop 4 coins into the vending machine.\n"),t.print("You hear a loud whirring sound followed by a loud *KA-CHUNK*.\n"),t.print("You reach down and pickup a Spryte.\n"),t.hasSpryte=!0)}return n})()}}class A extends n{constructor(){super(...arguments),this.isGoatOnFire=!0,this.hasSpryte=!1}getName(){return"Flaming Goat"}getAuthor(){return"Goat Man Jones"}getDescription(){return"Can you pass the Goat's challenge?"}onStart(){var e=this;return t(function*(){return e.isGoatOnFire=!0,e.hasSpryte=!1,yield e.printTextFile("FlamingGoat/title.txt"),e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),yield e.getInput(),new D})()}}const K=new class{constructor(){this.SINGLE_ADVENTURE_MODE=!0}getAdventures(){const e=[];return e.push(new l),e.push(new A),e}getAdventure(){return new T}};class C{constructor(e){this.TYPE="PrintMessage",this.message=e}}class N{constructor(){this.TYPE="PickAdventureMessage"}}const O=new class{constructor(){this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}threadSleep(e){var n=this;return t(function*(){if(0==n.printQueue.length)return new Promise(t=>setTimeout(t,1e3*e));const t=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e;return new Promise(e=>setTimeout(e,t))})()}sleep(e){const t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}getInput(){var e=this;return t(function*(){for(;0==e.inputQueue.length;)yield e.threadSleep(.1);const t=e.inputQueue.shift();return Promise.resolve(t)})()}getStartTime(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}print(e,t=.01){const n=1e3*t;let r=this.getStartTime();for(let o=0;o<e.length;o++)r+=n,this.printQueue.push({message:e[o],renderAfter:r})}printLines(e,t){const n=1e3*t;let r=this.getStartTime();e.forEach(e=>{r+=n,this.printQueue.push({message:e+"\n",renderAfter:r})})}printFile(e,n=.1){var r=this;return t(function*(){return new Promise(t=>{if(r.fileCache.has(e)){const o=r.fileCache.get(e);return r.printLines(o,n),void t()}const o=new XMLHttpRequest,a="assets/"+e;o.addEventListener("load",i=>{let s=[];o.status>=200&&o.status<300?s=o.responseText.split("\n"):(s=[`Could not load file: "${e}". Error Code: ${o.status} - ${o.statusText}`],console.error(`Could not load: ${a}`)),r.fileCache.set(e,s),r.printLines(s,n),t()}),o.open("GET",a),o.send()})})()}startPrintThread(){var e=this;return t(function*(){for(;;){for(;0==e.printQueue.length;)yield e.threadSleep(.1);const t=(new Date).getTime();for(;e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;){const t=e.printQueue.shift();postMessage(new C(t.message))}}})()}pushInput(e){this.inputQueue.push(e.message)}};addEventListener("message",({data:e})=>{if("RunAdventureMessage"===e.TYPE){let t=K.SINGLE_ADVENTURE_MODE?K.getAdventure():K.getAdventures()[e.index];t.setEngine(O),console.log("Starting PrintThread."),O.startPrintThread(),console.log("Starting adventure."),t.run(),K.SINGLE_ADVENTURE_MODE||(t.onFinish=()=>postMessage(new N))}else"InputMessage"==e.TYPE?O.pushInput(e):(console.error("An illegal message was received by the engine: "),console.error(e))})}();