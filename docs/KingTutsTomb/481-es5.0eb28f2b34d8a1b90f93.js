!function(){function e(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,t)}function t(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=a(e);if(n){var u=a(this).constructor;t=Reflect.construct(o,arguments,u)}else t=o.apply(this,arguments);return r(this,t)}}function r(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),e}!function(){"use strict";function n(e,n,t,r,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var u=e.apply(t,r);function i(e){n(u,a,o,i,s,"next",e)}function s(e){n(u,a,o,i,s,"throw",e)}i(void 0)})}}var a=function(){function e(){o(this,e),this._gameWon=!1,this._gameLost=!1}return i(e,[{key:"print",value:function(e,n){this.engine.print(e,n)}},{key:"printTextFile",value:function(e,n){var t=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Printing: "+e),r.next=3,t.engine.printFile(e,n);case 3:case"end":return r.stop()}},r)}))()}},{key:"sleep",value:function(e){this.engine.sleep(e)}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.engine.getInput();case 2:return t=n.sent,n.abrupt("return",(e.print("\n> ".concat(t,"\n")),t));case 4:case"end":return n.stop()}},n)}))()}},{key:"DisplayRoomName",value:function(){for(var e=this.room.getName(this),n=" |",t="=-",r=0;r<e.length;r++)t+=r%2==0?"=":"-";e.length%2==1?t+="-=":(t+="=-=",n="  |");var a="| "+e+n;this.print("\n"+t+"\n"),this.print(a+"\n"),this.print(t+"\n\n")}},{key:"setEngine",value:function(e){this.engine=e}},{key:"gameOver",value:function(){this._gameLost=!0}},{key:"gameWon",value:function(){this._gameWon=!0}},{key:"onFinish",value:function(){this.run()}},{key:"run",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e._gameWon=!1,e._gameLost=!1,n.next=4,e.onStart();case 4:e.room=n.sent;case 5:if(e._gameWon||e._gameLost){n.next=15;break}return e.DisplayRoomName(),n.next=9,e.sleep(.5);case 9:return e.print(e.room.getDescription(e)+"\n"),n.next=12,e.room.handleInput(e);case 12:e.room=n.sent;case 13:n.next=5;break;case 15:if(!e._gameWon){n.next=22;break}return e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),n.next=20,e.getInput();case 20:n.next=28;break;case 22:if(n.t0=e._gameLost,!n.t0){n.next=28;break}return e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),n.next=28,e.getInput();case 28:e.onFinish();case 29:case"end":return n.stop()}},n)}))()}}]),e}(),u=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Dead End"}},{key:"getDescription",value:function(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(!("boulder"===(a=t.sent.toLowerCase().trim())&&r.strength<10)){t.next=8;break}r.print("You try to lift the boulder but you're too weak!\n"),t.next=15;break;case 8:if(!("boulder"===a&&r.strength>=10)){t.next=12;break}r.print("You lift the boulder with ease!\n"),r.hasKey?r.print("Now you're just showing off.\n"):(r.print("Beneath the boulder, you find a key.\n"),r.print("You take the key and place it in your pocket!\n"),r.hasKey=!0),t.next=15;break;case 12:if("back"!==a){t.next=14;break}return t.abrupt("return",(r.print("You return to the Mouth of the Cave\n"),new l));case 14:r.print("Invalid command!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),s=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Ye Olde Gym"}},{key:"getDescription",value:function(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(!("weights"===(a=t.sent.toLowerCase().trim())&&r.strength<10)){t.next=8;break}r.print("You pick up the weights and do a rep!\n"),r.strength=r.strength+6,r.sleep(1),r.print("Your strength is now ".concat(r.strength,"\n")),t.next=15;break;case 8:if(!("weights"===a&&r.strength>=10)){t.next=12;break}r.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n"),t.next=15;break;case 12:if("elevator"!==a){t.next=14;break}return t.abrupt("return",(r.print("You enter the elevator and begin to ascend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The door opens and you step out into the cave.\n"),new h));case 14:r.print("Invalid command!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),c=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Dragon's Lair"}},{key:"getDescription",value:function(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","back"===a?(r.print("You head back the way you came.\n"),new p):("wake"===a?(r.print("You wake the dragon...\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()):"slay"===a&&r.hasSword?(r.print("You draw your sword to slay the dragon.\n"),r.sleep(1),r.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),r.gameWon()):"slay"!==a||r.hasSword?r.print("Invalid command!\n"):(r.print("You attempt to pummel the dragon with your fists!\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),p=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Large Natural Cave"}},{key:"getDescription",value:function(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("snoring"!==(a=t.sent.toLowerCase().trim())){t.next=6;break}return t.abrupt("return",(r.print("You slowly approach the snoring...\n"),new c));case 6:if("chest"!==a||!r.hasKey){t.next=10;break}!1===r.hasSword?(r.print("The chest is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the chest.\n"),r.sleep(1),r.print("Inside, you find a beautiful sword!\n"),r.hasSword=!0):r.print("You search the chest again, but it is empty.\n"),t.next=17;break;case 10:if("chest"===a&&!r.hasKey){t.next=16;break}if("tunnel"!==a){t.next=13;break}return t.abrupt("return",(r.print("You head back toward the mouth of the cave.\n"),new h));case 13:r.print("Invalid command!\n"),t.next=17;break;case 16:r.print("The chest is locked!\n");case 17:return t.abrupt("return",n);case 18:case"end":return t.stop()}},t)}))()}}]),e}(),h=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Long Winding Tunnel"}},{key:"getDescription",value:function(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","button"===a?(r.print("You press the button and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("DING! The wall next to the button opens revealing an elevator!\n"),r.print("Entering the elevator, you begin to descend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The elevator door opens and you exit.\n"),new s):"tunnel"===a?(r.print("You continue down the tunnel.\n"),new p):"mouth"===a?(r.print("You return to the mouth of the cave.\n"),new l):(e.print("Invalid command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),l=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Mouth of the Cave"}},{key:"getDescription",value:function(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new h):"left"===a?(r.print("You take the path to the left.\n"),new u):"entrance"===a?(r.print("On second thought, you return to the entrance.\n"),new f):(r.print("Invalid Command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),f=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Cave Entrance"}},{key:"getDescription",value:function(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","enter"===a?(r.print("You enter the cave.\n"),new l):("run"===a?(r.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),r.gameOver()):r.print("Invalid command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),g=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasKey=!1,e.hasSword=!1,e.strength=0,e}return i(u,[{key:"getName",value:function(){return"The Dragon's Lair"}},{key:"getAuthor",value:function(){return"Joseph Collard"}},{key:"getDescription",value:function(){return"Description"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.strength=0,e.hasKey=!1,e.hasSword=!1,n.next=5,e.printTextFile("dragonsLair/title.txt");case 5:return e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),n.abrupt("return",new f);case 8:case"end":return n.stop()}},n)}))()}}]),u}(a),d=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Broken Escalator"}},{key:"getDescription",value:function(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","back"===a?(r.print("\nSeeing no way forward, you return to the subway platform.\n"),new m):("goat"===a?(r.print("\nThere is an angry looking goat blocking the escalator.\n"),r.print("\nThe goat looks very [hungry]. BAAAA!\n"),r.isGoatOnFire&&r.print("\nThe goat is on [fire].\n")):"fire"===a&&r.isGoatOnFire?r.hasSpryte?(r.print("\nYou take the Spryte from your pocket and pour it over the goat. The flames go out.\n"),r.isGoatOnFire=!1):r.print("\nYep! That's a fire!\n"):"fire"!==a||r.isGoatOnFire?"hungry"===a&&r.isGoatOnFire?r.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"!==a||r.isGoatOnFire?r.print("\nInvalid command!"):(r.print("\nThe  goat looks. You hand it the the empty Spryte can. \n"),r.print("\nThe goat crunches through it in a matter of seconds.\n"),r.print("\nIt 'BAAAS' happily before hopping away. You continue up the broken escalator and return home.\n"),r.print("\nDid that really happen?\n"),r.gameWon()):r.print("\nNo fire here!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),m=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Subway Platform"}},{key:"getDescription",value:function(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}},{key:"handleInput",value:function(n){var t=this;return r(regeneratorRuntime.mark(function r(){var a,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=n,r.next=3,a.getInput();case 3:if("escalator"!==(o=r.sent.toLowerCase().trim())){r.next=8;break}a.print("\nIt's broken. You'll have to [walk] up it.\n"),r.next=13;break;case 8:if("walk"!==o){r.next=10;break}return r.abrupt("return",(a.print("\nYou start to walk up the escalator.\n"),new d));case 10:if("machine"!==o){r.next=12;break}return r.abrupt("return",(a.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot.\n"),new e));case 12:"coin"===o&&!1===a.hasSpryte?(a.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring sound followed by a loud.\n"),a.print("\n*KA-CHUNK*\n"),a.print("\nYou reach down and pickup a Spryte.\n"),a.hasSpryte=!0):a.print("coin"===o&&a.hasSpryte?"\nYou already have a Spryte\n":"\nInvalid command!");case 13:return r.abrupt("return",t);case 14:case"end":return r.stop()}},r)}))()}}]),e}(),k=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).isGoatOnFire=!0,e.hasSpryte=!1,e}return i(u,[{key:"getName",value:function(){return"Flaming Goat"}},{key:"getAuthor",value:function(){return"Goat Man Jones"}},{key:"getDescription",value:function(){return"Can you pass the Goat's challenge?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.isGoatOnFire=!0,e.hasSpryte=!1,n.next=4,e.printTextFile("FlamingGoat/title.txt");case 4:return e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),n.next=15,e.getInput();case 15:return n.abrupt("return",new m);case 16:case"end":return n.stop()}},n)}))()}}]),u}(a),v=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Dead End..."}},{key:"getDescription",value:function(e){return"You are in a room with [Chest] in the middle. You can go [BACK]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("chest"!==(a=t.sent.toLowerCase().trim())||0!=r.hasKey){t.next=8;break}r.print("\nYou open the chest and see a key.\n"),r.print("\nYou pick it up after considering all the curses it probably has.\n"),r.hasKey=!0,t.next=15;break;case 8:if("chest"!==a||1!=r.hasKey){t.next=12;break}r.print("\nNo reffils\n"),t.next=15;break;case 12:if("back"!==a){t.next=14;break}return t.abrupt("return",(r.print("\nYou go back to the tunnel"),new y));case 14:r.print("\nInvalid command!");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Left Tunnel..."}},{key:"getDescription",value:function(e){return"You see a [DOOR] in wall infront of you. You can also go [BACK]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","door"===a?(r.print("\nYou walk to the door and are able to open the door. You walk in\n"),new v):"back"===a?(r.print("\nYou go back to the Entrance\n"),new L):(r.print("\nInvalid command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),w=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"LA Fitness..."}},{key:"getDescription",value:function(e){return"You realize that this is a LA Fitness. \nYou see a [TRACK] and a [JUMP] room. You can also go [BACK]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("track"!==(a=t.sent.toLowerCase().trim())||0!=r.hasSpeed){t.next=8;break}r.print("\nYou run the track for 5 minutes\n"),r.hasSpeed=!0,t.next=23;break;case 8:if("track"!==a||1!=r.hasSpeed){t.next=12;break}r.print("\nTryhard\n"),t.next=23;break;case 12:if("jump"!==a||0!=r.hasJump){t.next=16;break}r.print("\nYou long jump for 10 minutes\n"),r.hasJump=!0,t.next=23;break;case 16:if("jump"!==a||1!=r.hasJump){t.next=20;break}r.print("\nTryhard\n"),t.next=23;break;case 20:if("back"!==a){t.next=22;break}return t.abrupt("return",(r.print("\nYou go back to the Ominous Room\n"),new C));case 22:r.print("\nInvalid Command!\n");case 23:return t.abrupt("return",n);case 24:case"end":return t.stop()}},t)}))()}}]),e}(),b=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Death Lol..."}},{key:"getDescription",value:function(e){return"You enter the room and instantly you get shot by an arrow. You can [SAY] your last words."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(t.t0=t.sent.toLowerCase().trim(),"say"!==t.t0){t.next=11;break}return r.print("\nAH S...."),t.next=8,r.printTextFile("KingTutsTomb/dead.txt");case 8:r.gameOver(),t.next=12;break;case 11:r.print("\nInvalid Command!");case 12:return t.abrupt("return",n);case 13:case"end":return t.stop()}},t)}))()}}]),e}(),x=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Left Tunnel..."}},{key:"getDescription",value:function(e){return"You enter a room and see a [DOOR] at the end. You can go [BACK]"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","door"===a?(r.print("\nYou open the door and go in"),new b):"Back"===a?(r.print("\nYou go back to the small room."),new I):(r.print("\nInvalid Command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),Y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"End..."}},{key:"getDescription",value:function(e){return"You have made it to the end! You see King Tuts [SARCOPHAGUS]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(t.t0=t.sent.toLowerCase().trim(),"sarcophagus"!==t.t0){t.next=8;break}r.print("\nYou look inside the sarcophagus and... ."),r.sleep(2),r.printTextFile("KingTutsTomb/end.txt"),r.sleep(2),r.gameWon(),t.next=9;break;case 8:r.print("\nInvalid Command!");case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}},t)}))()}}]),e}(),T=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Right Tunnel 2..."}},{key:"getDescription",value:function(e){return"There is a [DOOR] infront of you. Its locked. You can go [BACK]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","door"===a&&1==r.hasKey?(r.print("\nYou unlock the door and go in."),new Y):(r.print("door"===a&&0==r.hasKey?"\nNo key, no entry":"back"===a?"\nYou go back.":"\nInvalid Command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),I=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Small Room..."}},{key:"getDescription",value:function(e){return"After calming down, you see a [BUTTON] on the wall. You also see a door to the [LEFT] or [RIGHT]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("button"!==(a=t.sent.toLowerCase().trim())||0!=r.isBridgeDown){t.next=8;break}r.print("\nYou go up the wall and hit the button"),r.sleep(1),r.print("\nA bridge lowers from the roof. You can now go [BACK]."),r.isBridgeDown=!0,t.next=19;break;case 8:if("button"!==a||1!=r.isBridgeDown){t.next=12;break}r.print("\nYou already hit it bozo."),t.next=19;break;case 12:if("left"!==a){t.next=14;break}return t.abrupt("return",(r.print("\nYou walk to the left door and walk in."),new x));case 14:if("right"!==a){t.next=16;break}return t.abrupt("return",(r.print("\nYou walk to the right door and walk in."),new T));case 16:if("back"!==a){t.next=18;break}return t.abrupt("return",(r.print("\nYou go back to the Jump Room"),new R));case 18:r.print("\nInvalid Command!");case 19:return t.abrupt("return",n);case 20:case"end":return t.stop()}},t)}))()}}]),e}(),R=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Jump Room..."}},{key:"getDescription",value:function(e){return!0===e.isTigerDead?"You walk back into the room over the bridge.\nBrings back memories. You can go [BACK] to the small room or [FORWARD] to the long tunnel.":"You make to the next room but the tiger keeps chasing you. \nYou see a hole in front. You have to [JUMP]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("jump"!==(a=t.sent.toLowerCase().trim())||1!=r.hasJump||0!=r.isTigerDead){t.next=11;break}return r.print("\nYou jump across the hole and make it to the other side."),r.print("\nThe tiger trys to jump but fails. He dies."),t.next=9,r.printTextFile("KingTutsTomb/tiger.txt");case 9:return r.isTigerDead=!0,t.abrupt("return",new I);case 11:if("jump"!==a||0!=r.hasJump||0!=r.isTigerDead){t.next=19;break}return r.print("\nYou jump accross the hole but dont make it. You fall to your death."),t.next=15,r.printTextFile("KingTutsTomb/dead.txt");case 15:r.sleep(1),r.gameOver(),t.next=24;break;case 19:if("forward"!=a||1!=r.isTigerDead){t.next=21;break}return t.abrupt("return",(r.print("\nYou go back to the long Tunnel"),new D));case 21:if("back"!=a||1!=r.isTigerDead){t.next=23;break}return t.abrupt("return",(r.print("\nYou go back to the small room"),new I));case 23:r.print("\nInvalid command!");case 24:return t.abrupt("return",n);case 25:case"end":return t.stop()}},t)}))()}}]),e}(),D=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Long Tunnel..."}},{key:"getDescription",value:function(e){return!0===e.isTigerDead?"You walk into the room and get even more memories. \nYou can go [BACK] to the Jump Room or [FORWARD] to the ominous Room":"You walk into the room. \nYou instantly see a undead tiger at the end you have to be to get to the next room. \nYou can [RUN]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("run"!==(a=t.sent.toLowerCase().trim())||1!=r.hasSpeed){t.next=6;break}return t.abrupt("return",(r.print("\nYou start running, and the tiger starts chasing you.\n"),r.sleep(1),r.print("\nYou make it into the next room.\n"),new R));case 6:if("run"!==a||0!=r.hasSpeed){t.next=17;break}return r.print("\nYou start running, and the tiger starts chasing you.\n"),r.sleep(1),r.print("\nThe tiger catches you and you get eaten.\n"),r.sleep(1),t.next=13,r.printTextFile("KingTutsTomb/dead.txt");case 13:r.sleep(2),r.gameOver(),t.next=22;break;case 17:if("back"!==a||1!=r.isTigerDead){t.next=19;break}return t.abrupt("return",(r.print("\nYou go back to the jump room"),new R));case 19:if("forward"!==a||1!=r.isTigerDead){t.next=21;break}return t.abrupt("return",(r.print("\nYou go foward ti the ominous room."),new C));case 21:r.print("\nInvalid command!");case 22:return t.abrupt("return",n);case 23:case"end":return t.stop()}},t)}))()}}]),e}(),C=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Ominous Room..."}},{key:"getDescription",value:function(e){return"You walk into a very creppy room. You see another tunnel in [FRONT] of you but also see a \ndoorway that looks very simmilar to a [LAFITNESS]. You can also go [BACK]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","front"===a?(r.print("\nYou walk to the end of the room where you enter a tunnel..."),new D):"lafitness"===a?(r.print("\nYou walk to the entrance of the LA Fitness look alike."),new w):"back"===a?(r.print("\nYou walk back\n"),new A):(r.print("\nInvalid Command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),A=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Right Tunnel..."}},{key:"getDescription",value:function(e){return"You enter the long tunnel and see a room at the far end. \nYou can [WALK] there. \nYou also see a [NOTE] on the ground. \nYou can go [BACK] to."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("walk"!==(a=t.sent.toLowerCase().trim())){t.next=8;break}t.t0=(r.print("\nYou walk to the door and walk into the room. \n"),new C),t.next=20;break;case 8:if("back"!==a){t.next=12;break}t.t1=(r.print("\nYou go back to the Entrance\n"),new L),t.next=19;break;case 12:if("note"!==a){t.next=17;break}return t.next=15,r.printTextFile("KingTutsTomb/La.txt");case 15:t.next=18;break;case 17:r.print("\nInvalid command!");case 18:t.t1=n;case 19:t.t0=t.t1;case 20:return t.abrupt("return",t.t0);case 21:case"end":return t.stop()}},t)}))()}}]),e}(),L=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Entrance..."}},{key:"getDescription",value:function(e){return"You are standing at the entrance of the Tomb. You see a door to the [LEFT] and \na door to the [RIGHT]. You can also go [BACK]"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","left"===a?(r.print("\nYou walk through the doorway to the left.\n"),new y):"right"===a?(r.print("\nYou walk through the doorway to the right.\n"),new A):(r.print("back"===a?"\nYou scardey cat. You cant leave.":"\nInvalid command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),S=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).isTigerDead=!0,e.hasKey=!1,e.hasSpeed=!1,e.hasJump=!1,e.isBridgeDown=!1,e}return i(u,[{key:"getName",value:function(){return"King Tuts Tomb"}},{key:"getAuthor",value:function(){return"5ive"}},{key:"getDescription",value:function(){return"Can you make it to the Tomb?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.isTigerDead=!1,e.hasKey=!1,e.hasSpeed=!1,e.hasJump=!1,e.isBridgeDown=!1,e.print("\n                                    A text adventure by 5ive\n"),e.sleep(.5),n.next=9,e.printTextFile("KingTutsTomb/Pharo.txt");case 9:return e.sleep(1),e.print("\nYou walk through the Valley of the Kings\n\n"),e.sleep(.5),e.print("You reach what you were looking for....\n\n"),e.sleep(1),e.print("The entrance to....\n\n"),e.sleep(.5),n.next=18,e.printTextFile("KingTutsTomb/entrance.txt");case 18:return e.sleep(1),e.print("Press Enter to Continue..."),n.next=22,e.getInput();case 22:return n.abrupt("return",new L);case 23:case"end":return n.stop()}},n)}))()}}]),u}(a),O=new(function(){function e(){o(this,e),this.SINGLE_ADVENTURE_MODE=!0}return i(e,[{key:"getAdventures",value:function(){var e=[];return e.push(new g),e.push(new k),e}},{key:"getAdventure",value:function(){return new S}}]),e}()),N=function e(n){o(this,e),this.TYPE="PrintMessage",this.message=n},E=function e(){o(this,e),this.TYPE="PickAdventureMessage"},K=new(function(){function e(){o(this,e),this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}return i(e,[{key:"threadSleep",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=n.printQueue.length){t.next=2;break}return t.abrupt("return",new Promise(function(n){return setTimeout(n,1e3*e)}));case 2:return r=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e,t.abrupt("return",new Promise(function(e){return setTimeout(e,r)}));case 4:case"end":return t.stop()}},t)}))()}},{key:"sleep",value:function(e){var n=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:n})}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=e.inputQueue.length){n.next=5;break}return n.next=3,e.threadSleep(.1);case 3:n.next=0;break;case 5:return t=e.inputQueue.shift(),n.abrupt("return",Promise.resolve(t));case 7:case"end":return n.stop()}},n)}))()}},{key:"getStartTime",value:function(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}},{key:"print",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,t=1e3*n,r=this.getStartTime(),a=0;a<e.length;a++)r+=t,this.printQueue.push({message:e[a],renderAfter:r})}},{key:"printLines",value:function(e,n){var t=this,r=1e3*n,a=this.getStartTime();e.forEach(function(e){a+=r,t.printQueue.push({message:e+"\n",renderAfter:a})})}},{key:"printFile",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(r){if(t.fileCache.has(e)){var a=t.fileCache.get(e);return t.printLines(a,n),void r()}var o=new XMLHttpRequest,u="assets/"+e;o.addEventListener("load",function(a){var i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=['Could not load file: "'.concat(e,'". Error Code: ').concat(o.status," - ").concat(o.statusText)],console.error("Could not load: ".concat(u))),t.fileCache.set(e,i),t.printLines(i,n),r()}),o.open("GET",u),o.send()}));case 1:case"end":return r.stop()}},r)}))()}},{key:"startPrintThread",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=e.printQueue.length){n.next=5;break}return n.next=3,e.threadSleep(.1);case 3:n.next=0;break;case 5:for(t=(new Date).getTime();e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;)r=e.printQueue.shift(),postMessage(new N(r.message));case 7:n.next=0;break;case 9:case"end":return n.stop()}},n)}))()}},{key:"pushInput",value:function(e){this.inputQueue.push(e.message)}}]),e}());addEventListener("message",function(e){var n=e.data;if("RunAdventureMessage"===n.TYPE){var t=O.SINGLE_ADVENTURE_MODE?O.getAdventure():O.getAdventures()[n.index];t.setEngine(K),console.log("Starting PrintThread."),K.startPrintThread(),console.log("Starting adventure."),t.run(),O.SINGLE_ADVENTURE_MODE||(t.onFinish=function(){return postMessage(new E)})}else"InputMessage"==n.TYPE?K.pushInput(n):(console.error("An illegal message was received by the engine: "),console.error(n))})}()}();