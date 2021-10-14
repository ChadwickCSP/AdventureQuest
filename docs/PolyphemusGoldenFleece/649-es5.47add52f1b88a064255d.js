!function(){function e(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,t)}function t(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=a(e);if(n){var u=a(this).constructor;t=Reflect.construct(o,arguments,u)}else t=o.apply(this,arguments);return r(this,t)}}function r(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),e}!function(){"use strict";function n(e,n,t,r,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var u=e.apply(t,r);function i(e){n(u,a,o,i,s,"next",e)}function s(e){n(u,a,o,i,s,"throw",e)}i(void 0)})}}var a=function(){function e(){o(this,e),this._gameWon=!1,this._gameLost=!1}return i(e,[{key:"print",value:function(e,n){this.engine.print(e,n)}},{key:"printTextFile",value:function(e,n){var t=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Printing: "+e),r.next=3,t.engine.printFile(e,n);case 3:case"end":return r.stop()}},r)}))()}},{key:"sleep",value:function(e){this.engine.sleep(e)}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.engine.getInput();case 2:return t=n.sent,n.abrupt("return",(e.print("\n> ".concat(t,"\n")),t));case 4:case"end":return n.stop()}},n)}))()}},{key:"DisplayRoomName",value:function(){for(var e=this.room.getName(this),n=" |",t="=-",r=0;r<e.length;r++)t+=r%2==0?"=":"-";e.length%2==1?t+="-=":(t+="=-=",n="  |");var a="| "+e+n;this.print("\n"+t+"\n"),this.print(a+"\n"),this.print(t+"\n\n")}},{key:"setEngine",value:function(e){this.engine=e}},{key:"gameOver",value:function(){this._gameLost=!0}},{key:"gameWon",value:function(){this._gameWon=!0}},{key:"onFinish",value:function(){this.run()}},{key:"run",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e._gameWon=!1,e._gameLost=!1,n.next=4,e.onStart();case 4:e.room=n.sent;case 5:if(e._gameWon||e._gameLost){n.next=15;break}return e.DisplayRoomName(),n.next=9,e.sleep(.5);case 9:return e.print(e.room.getDescription(e)+"\n"),n.next=12,e.room.handleInput(e);case 12:e.room=n.sent;case 13:n.next=5;break;case 15:if(!e._gameWon){n.next=22;break}return e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),n.next=20,e.getInput();case 20:n.next=28;break;case 22:if(n.t0=e._gameLost,!n.t0){n.next=28;break}return e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),n.next=28,e.getInput();case 28:e.onFinish();case 29:case"end":return n.stop()}},n)}))()}}]),e}(),u=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Dead End"}},{key:"getDescription",value:function(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(!("boulder"===(a=t.sent.toLowerCase().trim())&&r.strength<10)){t.next=8;break}r.print("You try to lift the boulder but you're too weak!\n"),t.next=15;break;case 8:if(!("boulder"===a&&r.strength>=10)){t.next=12;break}r.print("You lift the boulder with ease!\n"),r.hasKey?r.print("Now you're just showing off.\n"):(r.print("Beneath the boulder, you find a key.\n"),r.print("You take the key and place it in your pocket!\n"),r.hasKey=!0),t.next=15;break;case 12:if("back"!==a){t.next=14;break}return t.abrupt("return",(r.print("You return to the Mouth of the Cave\n"),new p));case 14:r.print("Invalid command!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),s=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Ye Olde Gym"}},{key:"getDescription",value:function(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if(!("weights"===(a=t.sent.toLowerCase().trim())&&r.strength<10)){t.next=8;break}r.print("You pick up the weights and do a rep!\n"),r.strength=r.strength+6,r.sleep(1),r.print("Your strength is now ".concat(r.strength,"\n")),t.next=15;break;case 8:if(!("weights"===a&&r.strength>=10)){t.next=12;break}r.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n"),t.next=15;break;case 12:if("elevator"!==a){t.next=14;break}return t.abrupt("return",(r.print("You enter the elevator and begin to ascend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The door opens and you step out into the cave.\n"),new l));case 14:r.print("Invalid command!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),c=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Dragon's Lair"}},{key:"getDescription",value:function(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","back"===a?(r.print("You head back the way you came.\n"),new h):("wake"===a?(r.print("You wake the dragon...\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()):"slay"===a&&r.hasSword?(r.print("You draw your sword to slay the dragon.\n"),r.sleep(1),r.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),r.gameWon()):"slay"!==a||r.hasSword?r.print("Invalid command!\n"):(r.print("You attempt to pummel the dragon with your fists!\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),h=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Large Natural Cave"}},{key:"getDescription",value:function(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("snoring"!==(a=t.sent.toLowerCase().trim())){t.next=6;break}return t.abrupt("return",(r.print("You slowly approach the snoring...\n"),new c));case 6:if("chest"!==a||!r.hasKey){t.next=10;break}!1===r.hasSword?(r.print("The chest is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the chest.\n"),r.sleep(1),r.print("Inside, you find a beautiful sword!\n"),r.hasSword=!0):r.print("You search the chest again, but it is empty.\n"),t.next=17;break;case 10:if("chest"===a&&!r.hasKey){t.next=16;break}if("tunnel"!==a){t.next=13;break}return t.abrupt("return",(r.print("You head back toward the mouth of the cave.\n"),new l));case 13:r.print("Invalid command!\n"),t.next=17;break;case 16:r.print("The chest is locked!\n");case 17:return t.abrupt("return",n);case 18:case"end":return t.stop()}},t)}))()}}]),e}(),l=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Long Winding Tunnel"}},{key:"getDescription",value:function(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","button"===a?(r.print("You press the button and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("DING! The wall next to the button opens revealing an elevator!\n"),r.print("Entering the elevator, you begin to descend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The elevator door opens and you exit.\n"),new s):"tunnel"===a?(r.print("You continue down the tunnel.\n"),new h):"mouth"===a?(r.print("You return to the mouth of the cave.\n"),new p):(e.print("Invalid command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),p=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Mouth of the Cave"}},{key:"getDescription",value:function(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new l):"left"===a?(r.print("You take the path to the left.\n"),new u):"entrance"===a?(r.print("On second thought, you return to the entrance.\n"),new f):(r.print("Invalid Command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),f=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Cave Entrance"}},{key:"getDescription",value:function(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","enter"===a?(r.print("You enter the cave.\n"),new p):("run"===a?(r.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),r.gameOver()):r.print("Invalid command!"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),d=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasKey=!1,e.hasSword=!1,e.strength=0,e}return i(u,[{key:"getName",value:function(){return"The Dragon's Lair"}},{key:"getAuthor",value:function(){return"Joseph Collard"}},{key:"getDescription",value:function(){return"Description"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.strength=0,e.hasKey=!1,e.hasSword=!1,n.next=5,e.printTextFile("dragonsLair/title.txt");case 5:return e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),n.abrupt("return",new f);case 8:case"end":return n.stop()}},n)}))()}}]),u}(a),g=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Broken Escalator"}},{key:"getDescription",value:function(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","back"===a?(r.print("\nSeeing no way forward, you return to the subway platform.\n"),new y):("goat"===a?(r.print("\nThere is an angry looking goat blocking the escalator.\n"),r.print("\nThe goat looks very [hungry]. BAAAAAAA!!\n"),r.isGoatOnFire&&r.print("\nThe goat is on [fire].")):"fire"===a&&r.isGoatOnFire?r.hasSpryte?(r.print("\nYou take the Spryte from your pocket and pur it over the goat.\nThe flames go out.\n"),r.isGoatOnFire=!1):r.hasSpryte||r.print("\nYep! That's a fire!\n"):"fire"!==a||r.isGoatOnFire?"hungry"===a&&r.isGoatOnFire?r.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"!==a||r.isGoatOnFire?r.print("\nInvalid comment!\n"):(r.print("\nThe goat looks quite hungry. You hand it the empty Spryte can. The goat crunches through it in a\nmatter of seconds. It 'BaAaAs' happily before hopping away. You continue up the broken escalator\n and return home. Did that really happen?\n"),r.gameWon()):r.print("\nNo fire here!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Subway Platform"}},{key:"getDescription",value:function(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("escalator"!==(a=t.sent.toLowerCase().trim())){t.next=8;break}r.print("\nIt's broken. You'll have to [walk] up it.\n"),t.next=11;break;case 8:if("walk"!==a){t.next=10;break}return t.abrupt("return",(r.print("\nYou start to walk up the elevator.\n"),new g));case 10:"machine"===a?r.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot."):"coin"===a&&!1===r.hasSpryte?(r.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring sound followed by \na loud *KA-CHUNK*. You reach down and pick up a Spryte.\n"),r.hasSpryte=!0):r.print("coin"===a&&r.hasSpryte?"\nYou already have a Spryte!\n":"Invalid Command!\n");case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}},t)}))()}}]),e}(),m=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).isGoatOnFire=!0,e.hasSpryte=!1,e}return i(u,[{key:"getName",value:function(){return"Flaming Goat"}},{key:"getAuthor",value:function(){return"Goat Man Jones"}},{key:"getDescription",value:function(){return"Can you pass the Goat's challenge?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.isGoatOnFire=!0,e.hasSpryte=!1,n.next=4,e.printTextFile("FlamingGoat/title.txt");case 4:return e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),n.next=15,e.getInput();case 15:return n.abrupt("return",new y);case 16:case"end":return n.stop()}},n)}))()}}]),u}(a),v=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Goodbye Sicily"}},{key:"getDescription",value:function(e){return"The afternoon sun hits your face as you crawl your way out of Polyphemus' Cave.\nYou are so ready to [board] your boat and get off of this cursed island.\nThe tiny hole behind you leads [back] into the cave.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("board"!==(a=t.sent.toLowerCase().trim())){t.next=8;break}r.print("\nYou board the boat, exhausted from your long day.\nSicily soon becomes a small dot on the horizon.\n"),r.hasGoldenFleece?r.gameWon():(r.print("\nWhy are you leaving?\nThe whole point of coming to Sicily was to retrieve the Golden Fleece!\n"),r.gameOver()),t.next=10;break;case 8:if("back"!==a){t.next=10;break}return t.abrupt("return",new R);case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}))()}}]),e}(),b=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Alchemy Room"}},{key:"getDescription",value:function(e){return"Holding your nose, you look around the seldom used alchemy room.\nShelves full of colorful vials line the walls.\nA row of ominous green [vials] catches your eyes.\nIn the center of the room stands a gray alchemy [table].\nThe door behind you leads [back] to the Hallway.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("vials"===(a=t.sent.toLowerCase().trim())&&!r.hasPoison){t.next=18;break}if("vials"!==a||!r.hasPoison){t.next=9;break}r.print("\nYou took one already! Don't be greedy >:(\n"),t.next=16;break;case 9:if("table"!==a){t.next=13;break}r.hasSpear&&r.hasPoison&&!r.hasPoisonSpear?(r.print("\nYou place the spear and posion vial onto the table. The table glows, blinding you for a moment.\nWhen you recover your sight, a Posion Spear lies in front of you!\n"),r.hasPoisonSpear=!0):r.print("\nYou don't have enough materials to craft.\n"),t.next=16;break;case 13:if("back"!==a){t.next=15;break}return t.abrupt("return",new Y);case 15:r.print("\nInvalid Comment!\n");case 16:t.next=19;break;case 18:r.print("\nYou pick up one vials to examine it closely.\nThe liquid inside glows ominously.\nYou drop the vial into your sachel.\nPerhaps it can combined with something else to create an effective weapon?\n"),r.hasPoison=!0;case 19:return t.abrupt("return",n);case 20:case"end":return t.stop()}},t)}))()}}]),e}(),k=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Dusty Library"}},{key:"getDescription",value:function(e){return"Behind the door lies a dusty, neglected library.\nIt's obvious Polyphemus rarely uses it.\nRows and rows of bookshelves fill the large space and\nin the left corner is a cushy reading corner near a stack of [books].\nA [chess] board lies on the ground.\nThe door behind you leads [back] to the Hallway.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("books"!==(a=t.sent.toLowerCase().trim())){t.next=16;break}if(!(r.iq<20)){t.next=13;break}return t.next=8,r.printTextFile("pgfa/book.txt");case 8:r.print("\nYou select a book from the shelf, blow the dust off, and read it.\n"),r.iq=r.iq+5,r.print("Your iq is now ".concat(r.iq,"\n")),t.next=14;break;case 13:r.print("\nThat's enough brain work for today.\n");case 14:t.next=30;break;case 16:if("chess"!==a){t.next=28;break}if(!(r.iq<20)){t.next=25;break}return t.next=20,r.printTextFile("pgfa/chess.txt");case 20:r.print("\nYou play an exciting game of chess against yourself.\n"),r.iq=r.iq+10,r.print("Your iq is now ".concat(r.iq,"\n")),t.next=26;break;case 25:r.print("\nThat's enough brain work for today.\n");case 26:t.next=30;break;case 28:if("back"!==a){t.next=30;break}return t.abrupt("return",new Y);case 30:return t.abrupt("return",n);case 31:case"end":return t.stop()}},t)}))()}}]),e}(),w=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Human Graves"}},{key:"getDescription",value:function(e){return"You enter the hidden passage behind the bookshelf and\nfind yourself at the graveyard of Polyphemus' past victims.\nPolyphemus' respect for the dead surprises you.\nA beam of light that crept in through a crevice highlights\nthe graves of [james smith] and [sherry park].\nThe passage behind you leads [back] to Polyphemus' bedroom\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("james smith"!==(a=t.sent.toLowerCase().trim())){t.next=12;break}return t.next=7,r.printTextFile("pgfa/grave.txt");case 7:r.print("\nThe grave reads,\n'Here lies archer James Smith. He tried to slay Polyphemus with a bow and arrow\nbut the arrows simply bounced off. He was crushed shortly after'.\n"),r.sleep(2),r.hasBow||(r.print("\nYou pick up his bow and arrows.\n"),r.hasBow=!0),t.next=23;break;case 12:if("sherry park"!==a){t.next=20;break}return t.next=15,r.printTextFile("pgfa/grave.txt");case 15:r.print("\nThe grave reads,\n'Here lies Sherry Park. An excellent hunter, Sherry underestimated \nthe thickness of Polyphemus' skin and her spear did no harm to Polyphemus.\nShe was snapped in half'.\n"),r.sleep(2),r.hasSpear||(r.print("\nYou pick up the spear resting against her grave.\n"),r.hasSpear=!0),t.next=23;break;case 20:if("back"!==a){t.next=22;break}return t.abrupt("return",new I);case 22:r.print("\nInvalid  Comment!\n");case 23:return t.abrupt("return",n);case 24:case"end":return t.stop()}},t)}))()}}]),e}(),x=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Subterranean Garden"}},{key:"getDescription",value:function(e){return"As you descend down the staircase, you notice a sudden drop in temperature.\nIcy plants illuminate the ground below you.\nIn the middle of the vast cavern stands a massive oak tree,\nits branches reaching as far you can see.\nEnveloped in a gentle, silvery light, the Golden Fleece lies on top of the tree,\nready to [judge] you.\nThe path behind you leads [back] to Polyphemus' bedroom\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("judge"!==(a=t.sent.toLowerCase().trim())){t.next=10;break}if(r.print("\nWait a sec. The Golden Fleece is trying to determine if you're worthy enough!\n"),!(r.iq>=20&&r.strength>=20&&r.hasEyeball)){t.next=7;break}return t.abrupt("return",(r.print("\nGreat news! The Golden Fleece has deemed you worthy enough to relocate it.\nYou take the Golden Fleece off the tree and tie it around your neck.\n"),r.hasGoldenFleece=!0,r.print("\nAs you begin to exit, the entire garden begins to shake and\nthe rocks start falling from the ceiling. You barely make it out.\n"),new I));case 7:r.print(r.hasEyeball?(r.iq<20||r.strength<20)&&r.hasEyeball?"\nSorry! The Golden Fleece doesn't think you are good enough to touch it.\nTry increasing your personal stats.\n":"\nSorry! The Golden Fleece doesn't think you are good enough to touch it. Explore a bit more.\n":"\nSorry! The Golden Fleece doesn't think you are good enough to touch it.\nMaybe slaying its current owner will help...\n"),t.next=13;break;case 10:if("back"!==a){t.next=12;break}return t.abrupt("return",new I);case 12:r.print("\nInvalid Comment!\n");case 13:return t.abrupt("return",n);case 14:case"end":return t.stop()}},t)}))()}}]),e}(),I=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Master Bedroom"}},{key:"getDescription",value:function(e){return"The shiny door leads to Polyphemus' bedroom.\nIt's a rather plain room.\nThe only thing that really stands out\nis a [lever] beneath the lamp and a small [button] on the mirror.\nThe door behind you leads [back] to the Hallway.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("lever"!==(a=t.sent.toLowerCase().trim())){t.next=10;break}if(r.hasGoldenFleece){t.next=7;break}return t.abrupt("return",(r.print("You pull the lever and the wall moves aside, revealing another room.\n"),new x));case 7:r.print("\nAn entrance reveals itself, but the ceiling above has completely caved in,\nfilling the room with debris.\nIt seems there is no way to enter.\n"),t.next=15;break;case 10:if("button"!==a){t.next=12;break}return t.abrupt("return",(r.print("\nYou push the button and the bookshelf slides into the floor, revealing another room.\n"),new w));case 12:if("back"!==a){t.next=14;break}return t.abrupt("return",new Y);case 14:r.print("\nInvalid Comment!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),T=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Sheep House"}},{key:"getDescription",value:function(e){return"The last door reveals a super luxurious sheep house.\nEach sheep had its own queen sized bed, food tray with a balanced meal of fruits and meat,\nand in the middle of the room stands a skillfully crafted marble sheep\nthat spits water into a shallow pool.\nThe sheep seem [excited].\nThe door behind you leads [back] to the Hallway.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("excited"!==(a=t.sent.toLowerCase().trim())){t.next=16;break}if(!(r.strength<20)){t.next=13;break}return t.next=8,r.printTextFile("pgfa/sheep.txt");case 8:r.print("\nYou approach the sheep slowly and one pounces on you.\nThe two of you wrestle for awhile.\n"),r.strength=r.strength+10,r.print("Your strength is now ".concat(r.strength,"\n")),t.next=14;break;case 13:r.print("\nThe sheep are bored of your repetitive wrestling.\n");case 14:t.next=19;break;case 16:if("back"!==a){t.next=18;break}return t.abrupt("return",new Y);case 18:r.print("\nInvalid Comment!\n");case 19:return t.abrupt("return",n);case 20:case"end":return t.stop()}},t)}))()}}]),e}(),Y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Hallway"}},{key:"getDescription",value:function(e){return"You enter a long hallway with four doors.\nFrom a glance, the [first] door smells bad,\nthe [second] door looks old,\nthe [third] door looks shiny,\nand last but not least, you can hearing a distant 'baaing' behind the [fourth] door.\nYou can also [return] to the main entrance of the cave.\n"}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:return a=t.sent.toLowerCase().trim(),t.abrupt("return","first"===a?new b:"second"===a?new k:"third"===a?new I:"fourth"===a?new T:"return"===a?new R:(r.print("\nInvalid Command!\n"),n));case 5:case"end":return t.stop()}},t)}))()}}]),e}(),P=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Attack on Polyphemus"}},{key:"getDescription",value:function(e){return"You tiptoe into the room where Polyphemus lies drunk and asleep.\nHe seems defenseless; you got this!\nYou consider your current options: take on Polyphemus with a [spear] or [bow];\nor [return] to the Hallway to explore more."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("spear"!==(a=t.sent.toLowerCase().trim())){t.next=10;break}if(!(r.hasPoisonSpear&&r.strength>=20)){t.next=7;break}return t.abrupt("return",(r.print("\nYou tiptoe next to the snoring Polyphemus and plunge the posion spear into his eyeball.\nPolyphemus bellows and struggles but you keep him on ground.\nHe eventually stops moving and his body dissolves into golden dust and\nthe only thing that remains is his eyeball, impaled by your spear.\nYou pick up the eyeball and sigh in relief.\n"),r.hasEyeball=!0,new v));case 7:r.hasPoisonSpear&&r.strength<20?(r.print("\nYou tiptoe next to the snoring Polyphemus and plunge the posion spear into his eyeball.\nPolyphemus bellows and struggles, toppling you. A now enraged Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),r.gameOver()):r.hasSpear&&!r.hasPoisonSpear?(r.print("\nYou tiptoe next to the snoring Polyphemus and plunge the spear into his eyeball,\nbut the spear does not penetrate his skin.\nA now enraged Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),r.gameOver()):!r.hasSpear&&!r.hasPoisonSpear&&r.print("\nSilly goose! You don't have a spear.\n"),t.next=17;break;case 10:if("bow"!==a){t.next=14;break}r.hasBow?(r.print("\nYou pull out and arrow from the quiver and shoot it right into Polyphemus' eye.\nThe arrow bounces off harmlessly and wakes Polyphemus up.\nAnnoyed, Polyphemus gets up and punches you into the wall and you lose consciousness.\n"),r.gameOver()):r.hasBow||r.print("\nSilly goose! You don't have a bow."),t.next=17;break;case 14:if("return"!==a){t.next=16;break}return t.abrupt("return",new Y);case 16:r.print("\nInvalid Command!\n");case 17:return t.abrupt("return",n);case 18:case"end":return t.stop()}},t)}))()}}]),e}(),R=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"To Do or Not To Do"}},{key:"getDescription",value:function(e){return"It seems you have three options: [explore] the cave, go back [home], or [confront] Polyphemus."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("home"!==(a=t.sent.toLowerCase().trim())){t.next=6;break}return t.abrupt("return",new v);case 6:if("explore"!==a){t.next=8;break}return t.abrupt("return",new Y);case 8:if("confront"!==a){t.next=14;break}if(r.hasEyeball){t.next=11;break}return t.abrupt("return",new P);case 11:r.print("\nSorry you actually have two options.\nPolyphemus is already dead!\n"),t.next=15;break;case 14:r.print("\nInvalid Command!\n");case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}},t)}))()}}]),e}(),S=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Welcome to Sicily"}},{key:"getDescription",value:function(e){return"You open your eyes to find yourself in a dimly lit but spacious cave.\nConfused, you sit up and find yourself face to face with Polyphemus himself.\nPolyphemus grins widely as he watches you scramble in terror.\nYou frantically search your sachel for anything that might save you.\nInside, you find a [slingshot] and the jug of [wine] you had with your dinner."}},{key:"handleInput",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.getInput();case 3:if("slingshot"!==(a=t.sent.toLowerCase().trim())){t.next=11;break}return t.next=7,r.printTextFile("pgfa/polyphemus.txt");case 7:r.print("\nYou grab your slingshot a send a rock flying at Polyphemus.\nThe puny pebble itches Polyphemus. He steps on you.\n"),r.gameOver(),t.next=14;break;case 11:if("wine"!==a){t.next=13;break}return t.abrupt("return",(r.print("\nYou tap Polyphemus on the shoulder and offer him a final toast.\nHe agrees and you both take a swig.\nThankfully he's a light drinker and falls asleep immediately.\n"),new R));case 13:r.print("\nInvalid Comment!\n");case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}},t)}))()}}]),e}(),C=function(n){e(u,n);var a=t(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasSpear=!0,e.hasBow=!1,e.iq=0,e.strength=0,e.hasPoison=!1,e.hasGoldenFleece=!1,e.hasPoisonSpear=!1,e.hasEyeball=!1,e}return i(u,[{key:"getName",value:function(){return"Polyphemus' Golden Fleece"}},{key:"getAuthor",value:function(){return"Janet"}},{key:"getDescription",value:function(){return"Can you escape with the Golden Fleece?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.hasBow=!1,e.hasSpear=!1,e.hasPoisonSpear=!1,e.hasPoison=!1,e.strength=0,e.iq=0,e.hasEyeball=!1,e.hasGoldenFleece=!1,n.next=10,e.printTextFile("pgfa/title.txt");case 10:return e.print("\n                                  A text adventure by Janet\n\n\n\n"),e.sleep(.5),e.print("\n     On a quest to retrieve the Golden Fleece, you and your crew sailed through\n\n"),e.sleep(.5),e.print(" the Sea of Monsters, facing tradgedies that wiped out everyone but you.\n\n"),e.sleep(.5),e.print(" Finally you have arrived safely on the island of Sicily.\n\n"),e.sleep(.5),e.print(" You explore the island all day, trailing sheep remains to find the infamous cave of Polyphemus.\n\n"),e.sleep(.5),e.print(" Exhausted, you set up camp and crash for the night.\n\n"),e.sleep(.5),e.print(" Press Enter to Continue..."),n.next=25,e.getInput();case 25:return n.abrupt("return",new S);case 26:case"end":return n.stop()}},n)}))()}}]),u}(a),A=new(function(){function e(){o(this,e),this.SINGLE_ADVENTURE_MODE=!0}return i(e,[{key:"getAdventures",value:function(){var e=[];return e.push(new d),e.push(new m),e}},{key:"getAdventure",value:function(){return new C}}]),e}()),D=function e(n){o(this,e),this.TYPE="PrintMessage",this.message=n},E=function e(){o(this,e),this.TYPE="PickAdventureMessage"},F=new(function(){function e(){o(this,e),this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}return i(e,[{key:"threadSleep",value:function(e){var n=this;return r(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=n.printQueue.length){t.next=2;break}return t.abrupt("return",new Promise(function(n){return setTimeout(n,1e3*e)}));case 2:return r=n.printQueue[n.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e,t.abrupt("return",new Promise(function(e){return setTimeout(e,r)}));case 4:case"end":return t.stop()}},t)}))()}},{key:"sleep",value:function(e){var n=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:n})}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=e.inputQueue.length){n.next=5;break}return n.next=3,e.threadSleep(.1);case 3:n.next=0;break;case 5:return t=e.inputQueue.shift(),n.abrupt("return",Promise.resolve(t));case 7:case"end":return n.stop()}},n)}))()}},{key:"getStartTime",value:function(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}},{key:"print",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,t=1e3*n,r=this.getStartTime(),a=0;a<e.length;a++)r+=t,this.printQueue.push({message:e[a],renderAfter:r})}},{key:"printLines",value:function(e,n){var t=this,r=1e3*n,a=this.getStartTime();e.forEach(function(e){a+=r,t.printQueue.push({message:e+"\n",renderAfter:a})})}},{key:"printFile",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(r){if(t.fileCache.has(e)){var a=t.fileCache.get(e);return t.printLines(a,n),void r()}var o=new XMLHttpRequest,u="assets/"+e;o.addEventListener("load",function(a){var i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=['Could not load file: "'.concat(e,'". Error Code: ').concat(o.status," - ").concat(o.statusText)],console.error("Could not load: ".concat(u))),t.fileCache.set(e,i),t.printLines(i,n),r()}),o.open("GET",u),o.send()}));case 1:case"end":return r.stop()}},r)}))()}},{key:"startPrintThread",value:function(){var e=this;return r(regeneratorRuntime.mark(function n(){var t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=e.printQueue.length){n.next=5;break}return n.next=3,e.threadSleep(.1);case 3:n.next=0;break;case 5:for(t=(new Date).getTime();e.printQueue.length>0&&e.printQueue[0].renderAfter<=t;)r=e.printQueue.shift(),postMessage(new D(r.message));case 7:n.next=0;break;case 9:case"end":return n.stop()}},n)}))()}},{key:"pushInput",value:function(e){this.inputQueue.push(e.message)}}]),e}());addEventListener("message",function(e){var n=e.data;if("RunAdventureMessage"===n.TYPE){var t=A.SINGLE_ADVENTURE_MODE?A.getAdventure():A.getAdventures()[n.index];t.setEngine(F),console.log("Starting PrintThread."),F.startPrintThread(),console.log("Starting adventure."),t.run(),A.SINGLE_ADVENTURE_MODE||(t.onFinish=function(){return postMessage(new E)})}else"InputMessage"==n.TYPE?F.pushInput(n):(console.error("An illegal message was received by the engine: "),console.error(n))})}()}();