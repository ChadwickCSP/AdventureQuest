!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var u=a(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}!function(){"use strict";function t(e,t,n,r,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var n=this,r=arguments;return new Promise(function(a,o){var u=e.apply(n,r);function i(e){t(u,a,o,i,s,"next",e)}function s(e){t(u,a,o,i,s,"throw",e)}i(void 0)})}}var a=function(){function e(){o(this,e),this._gameWon=!1,this._gameLost=!1}return i(e,[{key:"print",value:function(e,t){this.engine.print(e,t)}},{key:"printTextFile",value:function(e,t){var n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Printing: "+e),r.next=3,n.engine.printFile(e,t);case 3:case"end":return r.stop()}},r)}))()}},{key:"sleep",value:function(e){this.engine.sleep(e)}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.engine.getInput();case 2:return n=t.sent,t.abrupt("return",(e.print("\n> ".concat(n,"\n")),n));case 4:case"end":return t.stop()}},t)}))()}},{key:"DisplayRoomName",value:function(){for(var e=this.room.getName(this),t=" |",n="=-",r=0;r<e.length;r++)n+=r%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");var a="| "+e+t;this.print("\n"+n+"\n"),this.print(a+"\n"),this.print(n+"\n\n")}},{key:"setEngine",value:function(e){this.engine=e}},{key:"gameOver",value:function(){this._gameLost=!0}},{key:"gameWon",value:function(){this._gameWon=!0}},{key:"onFinish",value:function(){this.run()}},{key:"run",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e._gameWon=!1,e._gameLost=!1,t.next=4,e.onStart();case 4:e.room=t.sent;case 5:if(e._gameWon||e._gameLost){t.next=15;break}return e.DisplayRoomName(),t.next=9,e.sleep(.5);case 9:return e.print(e.room.getDescription(e)+"\n"),t.next=12,e.room.handleInput(e);case 12:e.room=t.sent;case 13:t.next=5;break;case 15:if(!e._gameWon){t.next=22;break}return e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=20,e.getInput();case 20:t.next=28;break;case 22:if(t.t0=e._gameLost,!t.t0){t.next=28;break}return e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=28,e.getInput();case 28:e.onFinish();case 29:case"end":return t.stop()}},t)}))()}}]),e}(),u=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Home"}},{key:"getDescription",value:function(e){return"You fade back into reality and wake up in your own [bed]..."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return",("bed"===a?r.print("\nYou look at the [clock]."):"clock"===a&&(r.print("\nIt reads 1:02 AM\n'I saved the princess! * :() *' You say to yourself as you drift back into slumber..."),r.gameWon()),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),s=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Dungeon"}},{key:"getDescription",value:function(e){return"You slowly walk into the dark entrance of the [dungeon]..."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("dungeon"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nWalking through the corridor of empty cells you guys finally spot an orange [glow] at the end of the tunnel.\nMaybe I am just [hallucinating] because I am so tired."),n.next=11;break;case 8:if("glow"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nFlame Princess! You cut the steel bars with the sharpness of the Sword and help her out of\nthe cell.\nYou both look into eachothers eyes and..."),r.IsPrincessRescued=!0,new u));case 10:"hallucinating"===a&&(r.print("\nI couldn't save her...I'm such a failure...I loved her..."),r.IsPrincessRescued=!1,r.gameOver());case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),c=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Forest"}},{key:"getDescription",value:function(e){return"Lurking ominously through the dead trees, you spot the [Lich]..."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("lich"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nJake hands you the binoculars. You put them up to your eyes and see the Lich's pale, rotting skin\nand eyes looking right back at you.\nYou scream in [horror]."),n.next=23;break;case 8:if("horror"!==a){n.next=12;break}r.print("\nthe Lich's hanging jaw grins and starts to sprint towards you.\nYou quickly activate the arm [sword]."),n.next=23;break;case 12:if("sword"!==a||!0!==r.IsArmSwordActivated){n.next=16;break}r.print("\nThe sheerness of the sword creates a whisp as it cuts through the air.\nThe Lich grabs the sword with its dead boney hand.\nYou look through its wide emotionless eyes. You have one last thought, where is [Gunther]???"),n.next=23;break;case 16:if("sword"!==a||!1!==r.IsArmSwordActivated){n.next=20;break}r.print("\nYou do not have a weapon"),r.gameOver(),n.next=23;break;case 20:if("gunther"!==a||!0!==r.hasGunther){n.next=22;break}return n.abrupt("return",(r.print("\nYou see Gunther sneak up behind the Lich wearing the gauntlet and Punch the Lich in the back.\nThe Lich instantly desinigrates and lets go of the sword as its hand turns to ash. Booyah!\nGuys c'mon! We gotta go find the princess in the [dungeon] somewhere."),new s));case 22:"sword"===a&&!1===r.hasGunther?(r.print("\nYou do not have a Gunther"),r.gameOver()):"sword"===a&&!1===r.IsGauntletAquired&&(r.print("\nGunther did not have the necassary power from a worthless glove..."),r.gameOver());case 23:return n.abrupt("return",t);case 24:case"end":return n.stop()}},n)}))()}}]),e}(),h=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Prismo Room"}},{key:"getDescription",value:function(e){return"Oh hey guys I could sense you coming. Is there something I could [help] with?."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("help"!==(a=n.sent.toLowerCase().trim())||!0!==r.WasApplePieConsumed){n.next=8;break}r.print("\nAh, its the Lich isn't it. Yeah he can be pretty mean. I'll let yall sort it out between you all.\nI can't say anything besides where he is right now or else I'll mess up this reality.\nHe is in the [forest] right now though."),n.next=14;break;case 8:if("help"!==a||!1!==r.WasApplePieConsumed){n.next=12;break}r.print("\nI sense you are low on energy, come back when you have eaten"),r.gameOver(),n.next=14;break;case 12:if("forest"!==a){n.next=14;break}return n.abrupt("return",(r.print("\nAwesome, thanks Prismo we owe you!."),new c));case 14:return n.abrupt("return",t);case 15:case"end":return n.stop()}},n)}))()}}]),e}(),p=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"TreeTrunks House"}},{key:"getDescription",value:function(e){return"You walk into TreeTrunks house and instantly smell\nthe fresh, warm aroma of her famous [apple pie]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("apple pie"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nTree Trunks opens her oven and delivers a slice of apple pie to you.\nShe tells you that she has been making this one especially for you since\nshe heard about the adventure\nYou fellas should talk to my friend [Prismo] he knows everything in the universe"),n.next=10;break;case 8:if("prismo"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nYou know where he lives so just invite yourself in he can be weird."),r.WasApplePieConsumed=!0,new h));case 10:return n.abrupt("return",t);case 11:case"end":return n.stop()}},n)}))()}}]),e}(),l=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"IceKingdom"}},{key:"getDescription",value:function(e){return"Welcome to the Ice Kingdom. The Ice King should be expecting us. His\npet penguins [Gunther] and [\xe5udemar] has special abiities that are hard to explain."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","gunther"===a?(r.print("\n*Quack* Oh sick, this one likes you! We should borrow him.\n"),r.hasGunther=!0,new p):"audemar"===a?(r.print("\n*Snarl* Oh, this one is kinda mean, you sure you want this one?\n"),r.hasGunther=!1,new p):(r.print("\nInvalid Command."),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),f=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"CandyKingdom"}},{key:"getDescription",value:function(e){return"Welcome to the Candy Kingdom. We should go find princess [bubblegum]. She has been working\non a new potion for something like this adventure."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("bubblegum"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nHey, it is very nice to meet you! I heard about your adventure, and\nI have spent days working on this potion for you. However, there is a catch-\nYou must chose between the [red] or [blue] potion to drink. If you are worthy,\nyou will chose correctly..\n"),n.next=11;break;case 8:if("blue"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nThank Glob, you scared me there for a bit. Don't be scared, but if\nyou look down at your right hand you will start to notice a sword start to form."),r.IsArmSwordActivated=!0,new l));case 10:"red"===a&&!1===r.IsArmSwordActivated&&(r.print("\nYou were not worthy."),r.gameOver());case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),d=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Stairway"}},{key:"getDescription",value:function(e){return"Lets head down these [stairs]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("stairs"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nWatch your step before you open the [door].\n"),n.next=10;break;case 8:if("door"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nFollow us."),new f));case 10:return n.abrupt("return",t);case 11:case"end":return n.stop()}},n)}))()}}]),e}(),g=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Living Room"}},{key:"getDescription",value:function(e){return"You walk into the living room and stumble over a [chest]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("chest"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nOh sorry we gotta clean this place up. I wonder if we still have that [gauntlet] or [glove]... Oh sick, we\ndo, you're gonna wanna put this [gauntlet] on.\n"),n.next=12;break;case 8:if("gauntlet"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nAwesome, looks good."),r.IsGauntletAquired=!0,new d));case 10:if("glove"!==a){n.next=12;break}return n.abrupt("return",(r.print("\nUhhhh nice choice?."),r.IsGauntletAquired=!1,new d));case 12:return n.abrupt("return",t);case 13:case"end":return n.stop()}},n)}))()}}]),e}(),m=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"BedRoom"}},{key:"getDescription",value:function(e){return"You sit up from the cozy bed and look around confused. Finn and jake walk in the room. Say [sup]. "}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("sup"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nSup man. Yo you gotta help us rescue Flame Princess from the Lich! Let's head to the\n[living room].\n"),n.next=10;break;case 8:if("living room"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nFollow us."),new g));case 10:return n.abrupt("return",t);case 11:case"end":return n.stop()}},n)}))()}}]),e}(),v=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).IsGauntletAquired=!1,e.hasGunther=!1,e.IsArmSwordActivated=!1,e.WasApplePieConsumed=!1,e.IsPrincessRescued=!1,e}return i(u,[{key:"getName",value:function(){return"AdventureTime"}},{key:"getAuthor",value:function(){return"KingKoa"}},{key:"getDescription",value:function(){return"Can you help save the life of the princess?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.IsGauntletAquired=!1,e.hasGunther=!1,e.IsArmSwordActivated=!1,e.WasApplePieConsumed=!1,e.IsPrincessRescued=!1,t.next=7,e.printTextFile("AT/jake.txt");case 7:return e.sleep(.1),t.next=10,e.printTextFile("AT/finn.txt");case 10:return e.sleep(.1),e.print("\n                           A text adventure by KingKoa\n"),e.sleep(.5),e.print("\nAfter a crazy night, you wake up in the Adventure Time universe in the famous Finn and Jake\ntreehouse.\n\n"),e.sleep(.2),e.print("you look around and see the treasure Finn and Jake have obtained over their years of fighting\nevil.\n\n"),e.sleep(.2),e.print("The doors opens and Finn and Jake explain they found you in the wrong universe.\n\n"),e.sleep(.2),e.print("Press Enter to Continue... | (\u2022 \u25e1\u2022)| (\u274d\u1d25\u274d\u028b)\n"),t.next=22,e.getInput();case 22:return t.abrupt("return",new m);case 23:case"end":return t.stop()}},t)}))()}}]),u}(a),y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Dead End"}},{key:"getDescription",value:function(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("boulder"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You try to lift the boulder but you're too weak!\n"),n.next=15;break;case 8:if(!("boulder"===a&&r.strength>=10)){n.next=12;break}r.print("You lift the boulder with ease!\n"),r.hasKey?r.print("Now you're just showing off.\n"):(r.print("Beneath the boulder, you find a key.\n"),r.print("You take the key and place it in your pocket!\n"),r.hasKey=!0),n.next=15;break;case 12:if("back"!==a){n.next=14;break}return n.abrupt("return",(r.print("You return to the Mouth of the Cave\n"),new I));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),k=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Ye Olde Gym"}},{key:"getDescription",value:function(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("weights"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You pick up the weights and do a rep!\n"),r.strength=r.strength+6,r.sleep(1),r.print("Your strength is now ".concat(r.strength,"\n")),n.next=15;break;case 8:if(!("weights"===a&&r.strength>=10)){n.next=12;break}r.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n"),n.next=15;break;case 12:if("elevator"!==a){n.next=14;break}return n.abrupt("return",(r.print("You enter the elevator and begin to ascend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The door opens and you step out into the cave.\n"),new x));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),w=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Dragon's Lair"}},{key:"getDescription",value:function(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("You head back the way you came.\n"),new b):("wake"===a?(r.print("You wake the dragon...\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()):"slay"===a&&r.hasSword?(r.print("You draw your sword to slay the dragon.\n"),r.sleep(1),r.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),r.gameWon()):"slay"!==a||r.hasSword?r.print("Invalid command!\n"):(r.print("You attempt to pummel the dragon with your fists!\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),b=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Large Natural Cave"}},{key:"getDescription",value:function(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("snoring"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("You slowly approach the snoring...\n"),new w));case 6:if("chest"!==a||!r.hasKey){n.next=10;break}!1===r.hasSword?(r.print("The chest is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the chest.\n"),r.sleep(1),r.print("Inside, you find a beautiful sword!\n"),r.hasSword=!0):r.print("You search the chest again, but it is empty.\n"),n.next=17;break;case 10:if("chest"===a&&!r.hasKey){n.next=16;break}if("tunnel"!==a){n.next=13;break}return n.abrupt("return",(r.print("You head back toward the mouth of the cave.\n"),new x));case 13:r.print("Invalid command!\n"),n.next=17;break;case 16:r.print("The chest is locked!\n");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),x=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Long Winding Tunnel"}},{key:"getDescription",value:function(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","button"===a?(r.print("You press the button and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("DING! The wall next to the button opens revealing an elevator!\n"),r.print("Entering the elevator, you begin to descend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The elevator door opens and you exit.\n"),new k):"tunnel"===a?(r.print("You continue down the tunnel.\n"),new b):"mouth"===a?(r.print("You return to the mouth of the cave.\n"),new I):(e.print("Invalid command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),I=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Mouth of the Cave"}},{key:"getDescription",value:function(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new x):"left"===a?(r.print("You take the path to the left.\n"),new y):"entrance"===a?(r.print("On second thought, you return to the entrance.\n"),new R):(r.print("Invalid Command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),R=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Cave Entrance"}},{key:"getDescription",value:function(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","enter"===a?(r.print("You enter the cave.\n"),new I):("run"===a?(r.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),r.gameOver()):r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),T=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasKey=!1,e.hasSword=!1,e.strength=0,e}return i(u,[{key:"getName",value:function(){return"The Dragon's Lair"}},{key:"getAuthor",value:function(){return"Joseph Collard"}},{key:"getDescription",value:function(){return"Description"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.strength=0,e.hasKey=!1,e.hasSword=!1,t.next=5,e.printTextFile("dragonsLair/title.txt");case 5:return e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),t.abrupt("return",new R);case 8:case"end":return t.stop()}},t)}))()}}]),u}(a),Y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Broken Escalator"}},{key:"getDescription",value:function(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("\nSeeing no way forward, you return to the subway platform"),new A):("goat"===a?(r.print("\nThere is an angry looking goat blocking the escalator"),r.print("\nThe goat looks very [hungry]. BAAAA!"),r.isGoatOnFire&&r.print("\nThe goat is on [fire]")):"fire"===a&&r.isGoatOnFire?r.hasSpryte?(r.print("\nYou take the Spryte from your pocket and pour it over the goat. The flames go out."),r.isGoatOnFire=!1):r.print("\nYep! That's a fire!"):"fire"!==a||r.isGoatOnFire?"hungry"===a&&r.isGoatOnFire?r.print("\nThe goat is on fire. Perhaps you should find a way to put it out."):"hungry"!==a||r.isGoatOnFire?r.print("\nInvalid Command!"):(r.print("\n the Goat looks quite hungry. You hand it the empty Spryte can. The goat crunches it \nin a matter of seconds. It BAAAS happily before hopping away. You continue up the broken \nescalator and return home. Did that really happen?"),r.gameWon()):r.print("\nNo fire here!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),A=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Subway Platform"}},{key:"getDescription",value:function(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("escalator"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nIt's broken. You'll have to [walk] up it.\n"),n.next=11;break;case 8:if("walk"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nYou start to walk up the escalator.\n"),new Y));case 10:"machine"===a?r.print("Oh wow! It's one of those cool new spryte machines. It has a [coin] slot. "):"coin"===a&&!1===r.hasSpryte?(r.print("You drop 4 coins into the vending machine. You hear a loud whirring sound followed by a loud\n *KA-CHUNK*. You reach down and pickup a Spryte. "),r.hasSpryte=!0):r.print("coin"===a&&r.hasSpryte?"You already have a Spryte":"\nInvalid command");case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),C=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).isGoatOnFire=!0,e.hasSpryte=!1,e}return i(u,[{key:"getName",value:function(){return"Flaming Goat"}},{key:"getAuthor",value:function(){return"Goat Man Jones"}},{key:"getDescription",value:function(){return"Can you pass the Goat's challenge?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isGoatOnFire=!0,e.hasSpryte=!1,t.next=4,e.printTextFile("FlamingGoat/title.txt");case 4:return e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),t.next=15,e.getInput();case 15:return t.abrupt("return",new A);case 16:case"end":return t.stop()}},t)}))()}}]),u}(a),L=new(function(){function e(){o(this,e),this.SINGLE_ADVENTURE_MODE=!0}return i(e,[{key:"getAdventures",value:function(){var e=[];return e.push(new T),e.push(new C),e}},{key:"getAdventure",value:function(){return new v}}]),e}()),S=function e(t){o(this,e),this.TYPE="PrintMessage",this.message=t},O=function e(){o(this,e),this.TYPE="PickAdventureMessage"},D=new(function(){function e(){o(this,e),this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}return i(e,[{key:"threadSleep",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=t.printQueue.length){n.next=2;break}return n.abrupt("return",new Promise(function(t){return setTimeout(t,1e3*e)}));case 2:return r=t.printQueue[t.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e,n.abrupt("return",new Promise(function(e){return setTimeout(e,r)}));case 4:case"end":return n.stop()}},n)}))()}},{key:"sleep",value:function(e){var t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.inputQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:return n=e.inputQueue.shift(),t.abrupt("return",Promise.resolve(n));case 7:case"end":return t.stop()}},t)}))()}},{key:"getStartTime",value:function(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}},{key:"print",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,n=1e3*t,r=this.getStartTime(),a=0;a<e.length;a++)r+=n,this.printQueue.push({message:e[a],renderAfter:r})}},{key:"printLines",value:function(e,t){var n=this,r=1e3*t,a=this.getStartTime();e.forEach(function(e){a+=r,n.printQueue.push({message:e+"\n",renderAfter:a})})}},{key:"printFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(r){if(n.fileCache.has(e)){var a=n.fileCache.get(e);return n.printLines(a,t),void r()}var o=new XMLHttpRequest,u="assets/"+e;o.addEventListener("load",function(a){var i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=['Could not load file: "'.concat(e,'". Error Code: ').concat(o.status," - ").concat(o.statusText)],console.error("Could not load: ".concat(u))),n.fileCache.set(e,i),n.printLines(i,t),r()}),o.open("GET",u),o.send()}));case 1:case"end":return r.stop()}},r)}))()}},{key:"startPrintThread",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.printQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:for(n=(new Date).getTime();e.printQueue.length>0&&e.printQueue[0].renderAfter<=n;)r=e.printQueue.shift(),postMessage(new S(r.message));case 7:t.next=0;break;case 9:case"end":return t.stop()}},t)}))()}},{key:"pushInput",value:function(e){this.inputQueue.push(e.message)}}]),e}());addEventListener("message",function(e){var t=e.data;if("RunAdventureMessage"===t.TYPE){var n=L.SINGLE_ADVENTURE_MODE?L.getAdventure():L.getAdventures()[t.index];n.setEngine(D),console.log("Starting PrintThread."),D.startPrintThread(),console.log("Starting adventure."),n.run(),L.SINGLE_ADVENTURE_MODE||(n.onFinish=function(){return postMessage(new O)})}else"InputMessage"==t.TYPE?D.pushInput(t):(console.error("An illegal message was received by the engine: "),console.error(t))})}()}();