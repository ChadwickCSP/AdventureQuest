!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var u=a(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}!function(){"use strict";function t(e,t,n,r,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var n=this,r=arguments;return new Promise(function(a,o){var u=e.apply(n,r);function i(e){t(u,a,o,i,s,"next",e)}function s(e){t(u,a,o,i,s,"throw",e)}i(void 0)})}}var a=function(){function e(){o(this,e),this._gameWon=!1,this._gameLost=!1}return i(e,[{key:"print",value:function(e,t){this.engine.print(e,t)}},{key:"printTextFile",value:function(e,t){var n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Printing: "+e),r.next=3,n.engine.printFile(e,t);case 3:case"end":return r.stop()}},r)}))()}},{key:"sleep",value:function(e){this.engine.sleep(e)}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.engine.getInput();case 2:return n=t.sent,t.abrupt("return",(e.print("\n> ".concat(n,"\n")),n));case 4:case"end":return t.stop()}},t)}))()}},{key:"DisplayRoomName",value:function(){for(var e=this.room.getName(this),t=" |",n="=-",r=0;r<e.length;r++)n+=r%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");var a="| "+e+t;this.print("\n"+n+"\n"),this.print(a+"\n"),this.print(n+"\n\n")}},{key:"setEngine",value:function(e){this.engine=e}},{key:"gameOver",value:function(){this._gameLost=!0}},{key:"gameWon",value:function(){this._gameWon=!0}},{key:"onFinish",value:function(){this.run()}},{key:"run",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e._gameWon=!1,e._gameLost=!1,t.next=4,e.onStart();case 4:e.room=t.sent;case 5:if(e._gameWon||e._gameLost){t.next=15;break}return e.DisplayRoomName(),t.next=9,e.sleep(.5);case 9:return e.print(e.room.getDescription(e)+"\n"),t.next=12,e.room.handleInput(e);case 12:e.room=t.sent;case 13:t.next=5;break;case 15:if(!e._gameWon){t.next=22;break}return e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=20,e.getInput();case 20:t.next=28;break;case 22:if(t.t0=e._gameLost,!t.t0){t.next=28;break}return e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=28,e.getInput();case 28:e.onFinish();case 29:case"end":return t.stop()}},t)}))()}}]),e}(),u=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Room of Treasure"}},{key:"getDescription",value:function(e){return"You stand before the Room of Treasure. Gold and jewels collect in tall piles in every direction. \nfeel as if you are dreaming. You blink a few times and realize you have really made it! You can \nreturn back to the [hall] but you must want to collect the [gold]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","hall"===a?(r.print("You return back to the hall.\n"),new h):("gold"!==a||r.hasSack?"gold"===a&&r.hasSack?(r.print("You fill the sack you found in the storeroom with pounds of treasure. \nCongratulations, you are the first to find the treasure within in the Castle Of Hypnosis!"),r.gameWon()):r.print("Invalid command!"):r.print("There is far too much treasure for you to hold in your hands! You did not come this far \nfor just a handful of gold.\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),s=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Gate"}},{key:"getDescription",value:function(e){return"You are stopped by at a tall, black gate. You can easily turn back and return to the [hall], but \nyou notice a [wheel] beside the gate."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("wheel"===(a=n.sent.toLowerCase().trim())&&r.gate<4)){n.next=8;break}r.print("You spin the wheel.\n"),r.gate=r.gate+1,r.sleep(1),r.print("The gate rises slightly.\n"),n.next=17;break;case 8:if(!("wheel"===a&&r.gate>=4)){n.next=12;break}r.print("The gate is already lifted enough for you to squeeze [under]!\n"),n.next=17;break;case 12:if("under"!==a){n.next=14;break}return n.abrupt("return",new u);case 14:if("hall"!==a){n.next=16;break}return n.abrupt("return",(r.print("You return to the hall.\n"),new h));case 16:r.print("Invalid command!\n");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),c=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Storeroom"}},{key:"getDescription",value:function(e){return"You walk into the castle storeroom. There is little in the room, but you see a large woven \n[sack] laying on the floor."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(n.t0=n.sent.toLowerCase().trim(),"sack"!==n.t0){n.next=8;break}n.t1=(r.print("You take the sack thinking you may need it to collect the hidden treasure."),r.hasSack=!0,new h),n.next=9;break;case 8:n.t1=(r.print("Invalid command!"),t);case 9:return n.abrupt("return",n.t1);case 10:case"end":return n.stop()}},n)}))()}}]),e}(),h=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Grand Hall"}},{key:"getDescription",value:function(e){return"The path leads to the Grand Hall that is decorated quite elegantly. The hall branches in two \npaths. One leads to the [left] and the other leads to the [right]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","left"===a?(r.print("You take the path to the left.\n"),new s):"right"===a?(r.print("You take the path to the right.\n"),new c):(r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),p=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Bed Chamber"}},{key:"getDescription",value:function(e){return"You enter the monster's bed chamber. Do you dare continue though the room where you will [see] \nthe monster or would you rather go [back] to the staircase?\n"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("back"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("You go back to the staicase.\n"),new d));case 6:if("see"===a&&!r.hasGlasses){n.next=12;break}if("see"!==a||!r.hasGlasses){n.next=9;break}return n.abrupt("return",(r.print("As you walk through the bedroom you hear the heavy breathing of the monster that gets \nlouder with every step forward. Soon he stands before you and you look up into his eyes. The \nglasses shield you from his powers of hypnosis and you make it to the path at the other end of \nhis room.\n"),new h));case 9:r.print("Invalid command!"),n.next=13;break;case 12:r.print("As you walk through the bedroom you hear the heavy breathing of the monster that gets \nlouder with every step forward. Soon he stands before you and you look up into his eyes. \nWithout glasses to shield your eyes, you are hypnotised and find yourself back at home with no \nrecolection of your adventure.\n"),r.gameOver();case 13:return n.abrupt("return",t);case 14:case"end":return n.stop()}},n)}))()}}]),e}(),l=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Kitchen"}},{key:"getDescription",value:function(e){return"You are in the kitchen. In the middle of the room is a rusted [cabinet]. There is also a door \nthat leades [back] to the staircase and a [path] that leads to the monter's room."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("back"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("You walk through the door back to the staircase\n"),new d));case 6:if("cabinet"!==a||!r.hasKey){n.next=10;break}!1===r.hasGlasses?(r.print("The cabinet is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the cabinet.\n"),r.sleep(1),r.print("Inside, you find a single pair of glasses.\n"),r.sleep(1),r.print("You put the glasses on.\n"),r.sleep(1),r.hasGlasses=!0):r.print("You search the cabinet again, but it is empty.\n"),n.next=17;break;case 10:if("cabinet"===a&&!r.hasKey){n.next=16;break}if("path"!==a){n.next=13;break}return n.abrupt("return",(r.print("You crawl through the path.\n"),new p));case 13:r.print("Invalid command!\n"),n.next=17;break;case 16:r.print("The cabinet is locked!\n");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),f=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Power Center"}},{key:"getDescription",value:function(e){return"You are in a small room with cables and switches along the walls and a sign that reads, 'Power \nHouse'. You notice a big red [switch] with the symbol of a light bulb directly above it. The \n[rope] stil hangs from the ceiling right above you."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("switch"===(a=n.sent.toLowerCase().trim())&&r.brightness<6)){n.next=8;break}r.print("You flip the switch!\n"),r.brightness=r.brightness+3,r.sleep(1),r.print("The brightness of the house is now ".concat(r.brightness,".\n")),n.next=15;break;case 8:if(!("switch"===a&&r.brightness>=6)){n.next=12;break}r.print("The castle is already pretty lit, maybe you should go back to the office to search for the key!\n"),n.next=15;break;case 12:if("rope"!==a){n.next=14;break}return n.abrupt("return",(r.print("You pull the rope and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The hidden door is visisble again. The door opens and you step back onto the staircase.\n"),new d));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),d=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Narrow Spiral Staircase"}},{key:"getDescription",value:function(e){return"You walk down a narrow spiral staircase. It is pretty dark but you notice a [rope] hanging from \nthe ceiling. In one direction, the staircase leads to back to the [windowless] room. In the \nother, the [staircase] continues."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","rope"===a?(r.print("You pull the rope and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("A hidden door in the tunnel opens!\n"),r.print("You walk through the door.\n"),new f):"windowless"===a?(r.print("You return to the Windowless Room.\n"),new m):"staircase"===a?(r.print("You continue down the staircase.\n"),new l):(r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),g=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Office"}},{key:"getDescription",value:function(e){return e.brightness>=6&&!e.hasKey?"AHA! The lights are on. You are in an office and can see a [key] on the table.":e.brightness>=6&&e.hasKey?"You already have the key. You can return [back] to the windowless room.":"It is too dark to see anything in this room. You can return [back] to the windowless room."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("key"===(a=n.sent.toLowerCase().trim())&&r.brightness>=6)){n.next=8;break}r.print("You take the key from the table and slip it in your pocket.\n"),r.hasKey=!0,n.next=11;break;case 8:if("back"!==a){n.next=10;break}return n.abrupt("return",new m);case 10:r.print("Invalid command!");case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),m=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Windowless Room"}},{key:"getDescription",value:function(e){return"You enter the Windowless Room. From here you can see only two lighted paths- \none to the [left] and one to the [right]. It's not too late to [exit] the room.\n"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new g):"left"===a?(r.print("You take the path to the left.\n"),new d):"exit"===a?(r.print("You exit the castle. You'll have to search for the gold another day.\n"),new y):(r.print("Invalid Command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Castle Door"}},{key:"getDescription",value:function(e){return"You stand at the entrance of the Castle Of Hypnosis home to only one powerful monster, the\nStormcloud Predator Freak. Rumor has it, those who enter in search of the chest of treasure are \ntrapped as they look into the monster's eyes and never find their way out of the Castle. \nYou look at the stone door and consider whether you should [push] it open or [return] home."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","push"===a?(r.print("With great force you push the door open and walk into the windowless room.\n"),new m):("return"===a?(r.print("Looks like you'd like to play it safe for now. You return home and quickly go to bed. Maybe\nnext time.\n"),r.gameOver()):r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),v=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasKey=!1,e.hasGlasses=!1,e.hasSack=!1,e.brightness=0,e.gate=0,e}return i(u,[{key:"getName",value:function(){return"Castle of Hypnosis"}},{key:"getAuthor",value:function(){return"K"}},{key:"getDescription",value:function(){return"Can you find the treasure hidden deep within the monster's castle?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.hasKey=!1,e.hasGlasses=!1,e.hasSack=!1,e.brightness=0,e.gate=0,t.next=7,e.printTextFile("CastleOfHypnosis/castle.txt");case 7:return e.print("\n                                    A text adventure by K\n"),e.sleep(.5),e.print("Press Enter to Continue..."),t.next=12,e.getInput();case 12:return t.abrupt("return",new y);case 13:case"end":return t.stop()}},t)}))()}}]),u}(a),k=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Dead End"}},{key:"getDescription",value:function(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("boulder"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You try to lift the boulder but you're too weak!\n"),n.next=15;break;case 8:if(!("boulder"===a&&r.strength>=10)){n.next=12;break}r.print("You lift the boulder with ease!\n"),r.hasKey?r.print("Now you're just showing off.\n"):(r.print("Beneath the boulder, you find a key.\n"),r.print("You take the key and place it in your pocket!\n"),r.hasKey=!0),n.next=15;break;case 12:if("back"!==a){n.next=14;break}return n.abrupt("return",(r.print("You return to the Mouth of the Cave\n"),new Y));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),w=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Ye Olde Gym"}},{key:"getDescription",value:function(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("weights"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You pick up the weights and do a rep!\n"),r.strength=r.strength+6,r.sleep(1),r.print("Your strength is now ".concat(r.strength,"\n")),n.next=15;break;case 8:if(!("weights"===a&&r.strength>=10)){n.next=12;break}r.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n"),n.next=15;break;case 12:if("elevator"!==a){n.next=14;break}return n.abrupt("return",(r.print("You enter the elevator and begin to ascend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The door opens and you step out into the cave.\n"),new I));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),b=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Dragon's Lair"}},{key:"getDescription",value:function(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("You head back the way you came.\n"),new x):("wake"===a?(r.print("You wake the dragon...\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()):"slay"===a&&r.hasSword?(r.print("You draw your sword to slay the dragon.\n"),r.sleep(1),r.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),r.gameWon()):"slay"!==a||r.hasSword?r.print("Invalid command!\n"):(r.print("You attempt to pummel the dragon with your fists!\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),x=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Large Natural Cave"}},{key:"getDescription",value:function(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("snoring"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("You slowly approach the snoring...\n"),new b));case 6:if("chest"!==a||!r.hasKey){n.next=10;break}!1===r.hasSword?(r.print("The chest is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the chest.\n"),r.sleep(1),r.print("Inside, you find a beautiful sword!\n"),r.hasSword=!0):r.print("You search the chest again, but it is empty.\n"),n.next=17;break;case 10:if("chest"===a&&!r.hasKey){n.next=16;break}if("tunnel"!==a){n.next=13;break}return n.abrupt("return",(r.print("You head back toward the mouth of the cave.\n"),new I));case 13:r.print("Invalid command!\n"),n.next=17;break;case 16:r.print("The chest is locked!\n");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),I=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"A Long Winding Tunnel"}},{key:"getDescription",value:function(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","button"===a?(r.print("You press the button and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("DING! The wall next to the button opens revealing an elevator!\n"),r.print("Entering the elevator, you begin to descend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The elevator door opens and you exit.\n"),new w):"tunnel"===a?(r.print("You continue down the tunnel.\n"),new x):"mouth"===a?(r.print("You return to the mouth of the cave.\n"),new Y):(e.print("Invalid command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),Y=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"The Mouth of the Cave"}},{key:"getDescription",value:function(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new I):"left"===a?(r.print("You take the path to the left.\n"),new k):"entrance"===a?(r.print("On second thought, you return to the entrance.\n"),new R):(r.print("Invalid Command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),R=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Cave Entrance"}},{key:"getDescription",value:function(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","enter"===a?(r.print("You enter the cave.\n"),new Y):("run"===a?(r.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),r.gameOver()):r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),T=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).hasKey=!1,e.hasSword=!1,e.strength=0,e}return i(u,[{key:"getName",value:function(){return"The Dragon's Lair"}},{key:"getAuthor",value:function(){return"Joseph Collard"}},{key:"getDescription",value:function(){return"Description"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.strength=0,e.hasKey=!1,e.hasSword=!1,t.next=5,e.printTextFile("dragonsLair/title.txt");case 5:return e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),t.abrupt("return",new R);case 8:case"end":return t.stop()}},t)}))()}}]),u}(a),C=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Broken Escalator"}},{key:"getDescription",value:function(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("\nSeeing no way forward, you return to the subway platform.\n"),new S):("goat"===a?(r.print("\nThere is an angry looking goat blocking the escalator.\n"),r.print("\nThe goat looks very [hungry]. BAAAA!\n"),!0===r.isGoatOnFire&&r.print("\nThe goat is on [fire].\n")):"fire"===a&&!0===r.isGoatOnFire?!1===r.hasSpryte?r.print("\nYep! That's a fire!\n"):(r.print("\nYou take the Spryte from your pocket and pour it over the goat. The flame goes out.\n"),r.isGoatOnFire=!1):"fire"===a&&!1===r.isGoatOnFire?r.print("\nNo fire here!\n"):"hungry"===a&&!0===r.isGoatOnFire?r.print("\nThe goat is on fire. Perhaps you should find a way to put it out.\n"):"hungry"===a&&!1===r.isGoatOnFire?(r.print("\nThe goat look quite hungry. \nYou hand it the empty Spryte can. The goat crunches through it in a matter of seconds. It 'BAAAAS' happily before hopping away. \nYou continue up the broken escalator and return home. Did that really happen?\n"),r.gameWon()):r.print("\nInvalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),S=function(){function e(){o(this,e)}return i(e,[{key:"getName",value:function(e){return"Subway Platform"}},{key:"getDescription",value:function(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("escalator"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nIt's broken. You'll have to [walk] up it.\n"),n.next=11;break;case 8:if("walk"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nYou start to walk up the escalator.\n"),new C));case 10:"machine"===a?r.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot.\n"):"coin"===a&&!1===r.hasSpryte?(r.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring sound followed by a loud \n*KA-CHUNK*. You reach down and pickup a Spryte.\n"),r.hasSpryte=!0):r.print("coin"===a&&r.hasSpryte?"\nYou already have a Spryte.\n":"\nInvalid command!");case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),D=function(t){e(u,t);var a=n(u);function u(){var e;return o(this,u),(e=a.apply(this,arguments)).isGoatOnFire=!0,e.hasSpryte=!1,e}return i(u,[{key:"getName",value:function(){return"Flaming Goat"}},{key:"getAuthor",value:function(){return"Goat Man Jones"}},{key:"getDescription",value:function(){return"Can you pass the Goat's challenge?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isGoatOnFire=!0,e.hasSpryte=!1,t.next=4,e.printTextFile("FlamingGoat/title.txt");case 4:return e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),t.next=15,e.getInput();case 15:return t.abrupt("return",new S);case 16:case"end":return t.stop()}},t)}))()}}]),u}(a),A=new(function(){function e(){o(this,e),this.SINGLE_ADVENTURE_MODE=!0}return i(e,[{key:"getAdventures",value:function(){var e=[];return e.push(new T),e.push(new D),e}},{key:"getAdventure",value:function(){return new v}}]),e}()),L=function e(t){o(this,e),this.TYPE="PrintMessage",this.message=t},O=function e(){o(this,e),this.TYPE="PickAdventureMessage"},N=new(function(){function e(){o(this,e),this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}return i(e,[{key:"threadSleep",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=t.printQueue.length){n.next=2;break}return n.abrupt("return",new Promise(function(t){return setTimeout(t,1e3*e)}));case 2:return r=t.printQueue[t.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e,n.abrupt("return",new Promise(function(e){return setTimeout(e,r)}));case 4:case"end":return n.stop()}},n)}))()}},{key:"sleep",value:function(e){var t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.inputQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:return n=e.inputQueue.shift(),t.abrupt("return",Promise.resolve(n));case 7:case"end":return t.stop()}},t)}))()}},{key:"getStartTime",value:function(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}},{key:"print",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,n=1e3*t,r=this.getStartTime(),a=0;a<e.length;a++)r+=n,this.printQueue.push({message:e[a],renderAfter:r})}},{key:"printLines",value:function(e,t){var n=this,r=1e3*t,a=this.getStartTime();e.forEach(function(e){a+=r,n.printQueue.push({message:e+"\n",renderAfter:a})})}},{key:"printFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(r){if(n.fileCache.has(e)){var a=n.fileCache.get(e);return n.printLines(a,t),void r()}var o=new XMLHttpRequest,u="assets/"+e;o.addEventListener("load",function(a){var i=[];o.status>=200&&o.status<300?i=o.responseText.split("\n"):(i=['Could not load file: "'.concat(e,'". Error Code: ').concat(o.status," - ").concat(o.statusText)],console.error("Could not load: ".concat(u))),n.fileCache.set(e,i),n.printLines(i,t),r()}),o.open("GET",u),o.send()}));case 1:case"end":return r.stop()}},r)}))()}},{key:"startPrintThread",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.printQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:for(n=(new Date).getTime();e.printQueue.length>0&&e.printQueue[0].renderAfter<=n;)r=e.printQueue.shift(),postMessage(new L(r.message));case 7:t.next=0;break;case 9:case"end":return t.stop()}},t)}))()}},{key:"pushInput",value:function(e){this.inputQueue.push(e.message)}}]),e}());addEventListener("message",function(e){var t=e.data;if("RunAdventureMessage"===t.TYPE){var n=A.SINGLE_ADVENTURE_MODE?A.getAdventure():A.getAdventures()[t.index];n.setEngine(N),console.log("Starting PrintThread."),N.startPrintThread(),console.log("Starting adventure."),n.run(),A.SINGLE_ADVENTURE_MODE||(n.onFinish=function(){return postMessage(new O)})}else"InputMessage"==t.TYPE?N.pushInput(t):(console.error("An illegal message was received by the engine: "),console.error(t))})}()}();