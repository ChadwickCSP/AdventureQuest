!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}!function(){"use strict";function t(e,t,n,r,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var n=this,r=arguments;return new Promise(function(a,o){var i=e.apply(n,r);function u(e){t(i,a,o,u,s,"next",e)}function s(e){t(i,a,o,u,s,"throw",e)}u(void 0)})}}var a=function(){function e(){o(this,e),this._gameWon=!1,this._gameLost=!1}return u(e,[{key:"print",value:function(e,t){this.engine.print(e,t)}},{key:"printTextFile",value:function(e,t){var n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("Printing: "+e),r.next=3,n.engine.printFile(e,t);case 3:case"end":return r.stop()}},r)}))()}},{key:"sleep",value:function(e){this.engine.sleep(e)}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.engine.getInput();case 2:return n=t.sent,t.abrupt("return",(e.print("\n> ".concat(n,"\n")),n));case 4:case"end":return t.stop()}},t)}))()}},{key:"DisplayRoomName",value:function(){for(var e=this.room.getName(this),t=" |",n="=-",r=0;r<e.length;r++)n+=r%2==0?"=":"-";e.length%2==1?n+="-=":(n+="=-=",t="  |");var a="| "+e+t;this.print("\n"+n+"\n"),this.print(a+"\n"),this.print(n+"\n\n")}},{key:"setEngine",value:function(e){this.engine=e}},{key:"gameOver",value:function(){this._gameLost=!0}},{key:"gameWon",value:function(){this._gameWon=!0}},{key:"onFinish",value:function(){this.run()}},{key:"run",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e._gameWon=!1,e._gameLost=!1,t.next=4,e.onStart();case 4:e.room=t.sent;case 5:if(e._gameWon||e._gameLost){t.next=15;break}return e.DisplayRoomName(),t.next=9,e.sleep(.5);case 9:return e.print(e.room.getDescription(e)+"\n"),t.next=12,e.room.handleInput(e);case 12:e.room=t.sent;case 13:t.next=5;break;case 15:if(!e._gameWon){t.next=22;break}return e.print("\nCongratulations, you won!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=20,e.getInput();case 20:t.next=28;break;case 22:if(t.t0=e._gameLost,!t.t0){t.next=28;break}return e.print("\nGame Over!\n\n"),e.print("\nPress Enter to Continue...\n"),t.next=28,e.getInput();case 28:e.onFinish();case 29:case"end":return t.stop()}},t)}))()}}]),e}(),i=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"A Dead End"}},{key:"getDescription",value:function(e){return"You are at a dead end. There is a large [boulder] here. A path leads [back] to\nthe mouth of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("boulder"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You try to lift the boulder but you're too weak!\n"),n.next=15;break;case 8:if(!("boulder"===a&&r.strength>=10)){n.next=12;break}r.print("You lift the boulder with ease!\n"),r.hasKey?r.print("Now you're just showing off.\n"):(r.print("Beneath the boulder, you find a key.\n"),r.print("You take the key and place it in your pocket!\n"),r.hasKey=!0),n.next=15;break;case 12:if("back"!==a){n.next=14;break}return n.abrupt("return",(r.print("You return to the Mouth of the Cave\n"),new f));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),s=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Ye Olde Gym"}},{key:"getDescription",value:function(e){return"You are in a gym filled with exercise equipment. A sign on the wall reads, 'Ye\nOlde Gym'. It appears all of the equipment is in use except for some [weights].\nOn the far wall is an [elevator]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(!("weights"===(a=n.sent.toLowerCase().trim())&&r.strength<10)){n.next=8;break}r.print("You pick up the weights and do a rep!\n"),r.strength=r.strength+6,r.sleep(1),r.print("Your strength is now ".concat(r.strength,"\n")),n.next=15;break;case 8:if(!("weights"===a&&r.strength>=10)){n.next=12;break}r.print("You're feeling pretty strong already, maybe you could go lift some boulders!\n"),n.next=15;break;case 12:if("elevator"!==a){n.next=14;break}return n.abrupt("return",(r.print("You enter the elevator and begin to ascend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The door opens and you step out into the cave.\n"),new p));case 14:r.print("Invalid command!\n");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),c=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"The Dragon's Lair"}},{key:"getDescription",value:function(e){return"You are standing inside of a dragon's lair! The air is hot and dank. A tunnel\nleads [back] the way you came. In the center of the room is a massive pile of\ngold atop which a massive red dragon slumbers. Probably best not to [wake] the\ndragon. If you could [slay] it, you would be a hero!"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("You head back the way you came.\n"),new h):("wake"===a?(r.print("You wake the dragon...\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()):"slay"===a&&r.hasSword?(r.print("You draw your sword to slay the dragon.\n"),r.sleep(1),r.print("With your sword in hand, you sneak up to the dragon and drive it into the\nbeast's heart. The evil dragon winces as it realizes its reign of terror is\nover. Congratulations, you are a hero!"),r.gameWon()):"slay"!==a||r.hasSword?r.print("Invalid command!\n"):(r.print("You attempt to pummel the dragon with your fists!\n"),r.sleep(1),r.print("The dragon wakes and snarls, 'Who disturbs my slumber!?' It glares at you with\ndisdain and smiles crookedly before devouring you. The dragon lets out a\nsatisfying belch before closing its eyes and drifting back to sleep."),r.gameOver()),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),h=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"A Large Natural Cave"}},{key:"getDescription",value:function(e){return"You are in a large natural room within a cave. It is unnaturally warm here and\nyou can hear what sounds like a giant creature [snoring] around a corner. In the\ncenter of the room is a [chest]. A [tunnel] leads back toward the mouth of the\ncave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("snoring"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("You slowly approach the snoring...\n"),new c));case 6:if("chest"!==a||!r.hasKey){n.next=10;break}!1===r.hasSword?(r.print("The chest is locked.\n"),r.sleep(1),r.print("You take the key from your pocket and unlock the chest.\n"),r.sleep(1),r.print("Inside, you find a beautiful sword!\n"),r.hasSword=!0):r.print("You search the chest again, but it is empty.\n"),n.next=17;break;case 10:if("chest"===a&&!r.hasKey){n.next=16;break}if("tunnel"!==a){n.next=13;break}return n.abrupt("return",(r.print("You head back toward the mouth of the cave.\n"),new p));case 13:r.print("Invalid command!\n"),n.next=17;break;case 16:r.print("The chest is locked!\n");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),p=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"A Long Winding Tunnel"}},{key:"getDescription",value:function(e){return"You are in a long winding tunnel. It is pitch black except for the beam emitting\nfrom your flashlight. You notice a [button] on the wall here. In one direction,\nthe tunnel leads to the [mouth] of the cave. In the other, the [tunnel]\ncontinues."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","button"===a?(r.print("You press the button and wait."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("DING! The wall next to the button opens revealing an elevator!\n"),r.print("Entering the elevator, you begin to descend."),r.sleep(1),r.print("."),r.sleep(1),r.print(".\n"),r.sleep(1),r.print("The elevator door opens and you exit.\n"),new s):"tunnel"===a?(r.print("You continue down the tunnel.\n"),new h):"mouth"===a?(r.print("You return to the mouth of the cave.\n"),new f):(e.print("Invalid command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),f=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"The Mouth of the Cave"}},{key:"getDescription",value:function(e){return"You are at the mouth of the cave. It is dark and damp. Luckily, you brought your\ntrusty flashlight with you! You can see two paths here. One leads to the [left]\nand the other leads to the [right]. You can also see the [entrance] of the cave."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","right"===a?(r.print("You take the path to the right.\n"),new p):"left"===a?(r.print("You take the path to the left.\n"),new i):"entrance"===a?(r.print("On second thought, you return to the entrance.\n"),new l):(r.print("Invalid Command!\n"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),l=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Cave Entrance"}},{key:"getDescription",value:function(e){return"You stand before a cave. It is well known that an evil dragon slumbers here.\nFrom time to time, the dragon wakes to terrorize the nearby villages and steal\ntheir gold. Dare you [enter] the cave in search of riches? Or would you rather\n[run] home to the comfort of your warm bed?"}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","enter"===a?(r.print("You enter the cave.\n"),new f):("run"===a?(r.print("Scared of the dragon, you run home to your bed where fall asleep.\n"),r.gameOver()):r.print("Invalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),d=function(t){e(i,t);var a=n(i);function i(){var e;return o(this,i),(e=a.apply(this,arguments)).hasKey=!1,e.hasSword=!1,e.strength=0,e}return u(i,[{key:"getName",value:function(){return"The Dragon's Lair"}},{key:"getAuthor",value:function(){return"Joseph Collard"}},{key:"getDescription",value:function(){return"Description"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.strength=0,e.hasKey=!1,e.hasSword=!1,t.next=5,e.printTextFile("dragonsLair/title.txt");case 5:return e.print("\n                           A text adventure by Joseph Collard\n"),e.sleep(.5),t.abrupt("return",new l);case 8:case"end":return t.stop()}},t)}))()}}]),i}(a),g=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Broken Escalator"}},{key:"getDescription",value:function(e){return"You are standing on a broken escalator. There is a [goat] here blocking your \nway forward. The steps of the escalator lead [back] to the subway platform."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","back"===a?(r.print("\nSeeing no way forward, you return to the subway platform.\n"),new m):("goat"===a?(r.print("\nThere is an angry looking goat blocking the escalator."),r.print("\nThe goat looks very [hungry]. BAAAA!"),r.isGoatOnFire&&r.print("\nThe goat is on [fire].")):"fire"===a&&r.isGoatOnFire?r.hasSpryte?(r.print("\nYou take the Spryte from your pocket and pour it over the goat. The flames go out."),r.isGoatOnFire=!1):r.print("\nYep! That's a fire!"):"fire"!==a||r.isGoatOnFire?"hungry"===a&&r.isGoatOnFire?r.print("\nThe goat is on fire. Perhaps you should find a way to put it out."):"hungry"!==a||r.isGoatOnFire?r.print("\nInvalid command!"):(r.print("\nThe goat looks quite hungry. You had it the empty Spryte can. The goat crunches through it in a \nmatter of seconds. It 'BAAAAS' happily before hopping away. You continue up the broken escalator before \nreturning home. Did that really happen?"),r.gameWon()):r.print("\nNo fire here!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),m=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Subway Platform"}},{key:"getDescription",value:function(e){return"You are standing on the subway platform. There is a broken [escalator] here\nand a vending [machine]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("escalator"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nIt's broken. You'll have to [walk] up it.\n"),n.next=11;break;case 8:if("walk"!==a){n.next=10;break}return n.abrupt("return",(r.print("\nYou start to walk up the escalator.\n"),new g));case 10:"machine"===a?r.print("\nOh wow! It's one of those cool new Spryte machines. It has a [coin] slot."):"coin"===a&&!1===r.hasSpryte?(r.print("\nYou drop 4 coins into the vending machine. You hear a loud whirring \nsound followed by a KA-CHUNK. You reach down and pick up a Spryte."),r.hasSpryte=!0):r.print("coin"===a&&r.hasSpryte?"\nYou already have a Spryte.":"\nInvalid command!");case 11:return n.abrupt("return",t);case 12:case"end":return n.stop()}},n)}))()}}]),e}(),y=function(t){e(i,t);var a=n(i);function i(){var e;return o(this,i),(e=a.apply(this,arguments)).isGoatOnFire=!0,e.hasSpryte=!1,e}return u(i,[{key:"getName",value:function(){return"Flaming Goat"}},{key:"getAuthor",value:function(){return"Goat Man Jones"}},{key:"getDescription",value:function(){return"Can you pass the Goat's challenge?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isGoatOnFire=!0,e.hasSpryte=!1,t.next=4,e.printTextFile("FlamingGoat/title.txt");case 4:return e.print("\n                           A text adventure by Goat Man Jones\n"),e.sleep(.5),e.print("\nAfter a long day, you are the lone passenger on a subway training heading toward home.\n\n"),e.sleep(.5),e.print("It slows as it approaches your stop.\n\n"),e.sleep(.5),e.print("The doors open and you step out onto an empty platform.\n\n"),e.sleep(.5),e.print("Press Enter to Continue..."),t.next=15,e.getInput();case 15:return t.abrupt("return",new m);case 16:case"end":return t.stop()}},t)}))()}}]),i}(a),k=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Dining Room"}},{key:"getDescription",value:function(e){return"You enter the DiningRoom yourself and [serve] the dishes to the critic."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(n.t0=n.sent.toLowerCase().trim(),"serve"!==n.t0){n.next=8;break}r.print("\nThe first dish is a Clam Chowder soup with marries together the best\n of the sea and land. The second dish is a plump grade A-5, true japanese Wagyu Beef,\n the best money could buy. The third dish is a palate clenser salad;\n a caesar salad with the freshest greens. The fourth and final dish is \na dessert lava cake with a spongy outside and a flowing ganash inside.\n YUM!!! The critic cannot get enough of your dishes and continues to eat \nwhile promising you a bright future. Great Job!!!!\n You have won the SousChefAdventure."),r.gameWon(),n.next=9;break;case 8:r.print("\nInvalid command!");case 9:return n.abrupt("return",t);case 10:case"end":return n.stop()}},n)}))()}}]),e}(),v=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Ingredient Room"}},{key:"getDescription",value:function(e){return"You are now in the ingredients room...you should probably [prep] your [ingredients] \nor go [back] to the Kitchen."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("prep"!==(a=n.sent.toLowerCase().trim())||!1!==r.hasIngredients){n.next=8;break}r.print("\nYou do not have the ingredients necesary to prep."),n.next=23;break;case 8:if("prep"!==a||!0!==r.hasIngredients){n.next=12;break}r.print("\nWith your ingredients you prep everything necesary for your dishes."),r.hasPrep=!0,n.next=23;break;case 12:if("ingredients"!==a||!1!==r.hasIngredients){n.next=16;break}r.print("\nYou get all of the ingredients you will need for your dishes. \nAll that's left is to prep them..."),r.hasIngredients=!0,n.next=23;break;case 16:if("ingredients"!==a||!0!==r.hasIngredients){n.next=20;break}r.print("\nYou already have all of the ingredients necesary for your dishes."),n.next=23;break;case 20:if("back"!==a){n.next=22;break}return n.abrupt("return",(r.print("\nYou go back to the Kitchen to make more dishes..."),new Y));case 22:r.print("\nInvalid command!");case 23:return n.abrupt("return",t);case 24:case"end":return n.stop()}},n)}))()}}]),e}(),b=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Dessert Spot"}},{key:"getDescription",value:function(e){return"Now at the DessertSpot, you can start your fourth and final dish by making the [batter], \n[bake]ing the batter, or going [back] to the kitchen."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("batter"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nYou mix and stir and finally create a batter perfect for your dessert."),r.hasBatter=!0,n.next=19;break;case 8:if("bake"!==a||!1!==r.hasBatter){n.next=12;break}r.print("\nYou cannot bake the dish without the batter."),n.next=19;break;case 12:if("bake"!==a||!0!==r.hasBatter){n.next=16;break}r.print("\nHaving created the batter for your dessert, you pour it into small bowls and finish \noff the recepite. After preparations have been completed you bake the batter and \ncomplete your Dessert. Congrats! You have completed all of the dishes.\n Now all that's left is to serve it."),r.hasDishes=!0,n.next=19;break;case 16:if("back"!==a){n.next=18;break}return n.abrupt("return",(r.print("\nYou decide to go back to the Kitchen..."),new Y));case 18:r.print("\nInvalid command!");case 19:return n.abrupt("return",t);case 20:case"end":return n.stop()}},n)}))()}}]),e}(),w=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Salad Spot"}},{key:"getDescription",value:function(e){return"Now at the SaladSpot, you can start your Third dish by putting [dressing] on the salad, \n[toss]ing the salad, going [back] to the kitchen, or going to the [dessert spot]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("dressing"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nYou take the freshly prepped greens and add a homemade dressing on top. \nBeautiful colors burst from the bowl, and a salad tapestry is created."),r.hasDressing=!0,n.next=25;break;case 8:if("toss"!==a||!1!==r.hasDressing){n.next=12;break}r.print("\nYou cannot toss the salad without the dressing."),n.next=25;break;case 12:if("toss"!==a||!0!==r.hasDressing){n.next=16;break}r.print("\nHaving put the dressing on the salad, you toss the dressing and salad together\n and finish your salad dish!!!!!"),r.hasToss=!0,n.next=25;break;case 16:if("back"!==a){n.next=18;break}return n.abrupt("return",(r.print("\nYou decide to go back to the Kitchen..."),new Y));case 18:if("dessert spot"!==a||!1!==r.hasToss){n.next=22;break}r.print("\nYou have not finished your third dish yet."),n.next=25;break;case 22:if("dessert spot"!==a||!0!==r.hasToss){n.next=24;break}return n.abrupt("return",(r.print("\nHaving been to the SaladSpot, you move on to the DessertSpot."),new b));case 24:r.print("\nInvalid command!");case 25:return n.abrupt("return",t);case 26:case"end":return n.stop()}},n)}))()}}]),e}(),x=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Meat Spot"}},{key:"getDescription",value:function(e){return"Now at the MeatSpot, you can start your Second dish by [sear]ing the meat, \n[grill]ing the meat, going [back] to the kitchen, or going to the [salad spot]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("sear"!==(a=n.sent.toLowerCase().trim())){n.next=8;break}r.print("\nYou start your meat dish by lightly searing your meats. MMMMM! \nA wonderful smell envelopes the room."),r.hasSear=!0,n.next=25;break;case 8:if("grill"!==a||!1!==r.hasSear){n.next=12;break}r.print("\nYou cannot grill the meats until they have been seared."),n.next=25;break;case 12:if("grill"!==a||!0!==r.hasSear){n.next=16;break}r.print("\nHaving seared the meats, you grill the meats and finish your meat dish!!!"),r.hasGrill=!0,n.next=25;break;case 16:if("back"!==a){n.next=18;break}return n.abrupt("return",(r.print("\nYou decide to go back to the Kitchen..."),new Y));case 18:if("salad spot"!==a||!1!==r.hasGrill){n.next=22;break}r.print("\nYou have not finished your second dish yet."),n.next=25;break;case 22:if("salad spot"!==a||!0!==r.hasGrill){n.next=24;break}return n.abrupt("return",(r.print("\nHaving been to the MeatSpot, you move on to the SaladSpot."),new w));case 24:r.print("\nInvalid command!");case 25:return n.abrupt("return",t);case 26:case"end":return n.stop()}},n)}))()}}]),e}(),I=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Soup Spot"}},{key:"getDescription",value:function(e){return"Now at the SoupSpot, you can start your first dish by [stir]ing, \n[cook]ing, going [back] to the kitchen, or going to the [meat spot]."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("stir"!==(a=n.sent.toLowerCase().trim())||!1!==r.hasPrep){n.next=8;break}r.print("\nYou have not done the necesary prep for this dish..."),n.next=29;break;case 8:if("stir"!==a||!0!==r.hasPrep){n.next=12;break}r.print("\nYou add in the prepped ingredients and begin the soup dish by stiring\n....now you need to cook the soup."),r.hasStir=!0,n.next=29;break;case 12:if("cook"!==a||!1!==r.hasStir){n.next=16;break}r.print("\nYou have not stirred the dish yet. You cannot cook the \ndish without stiring."),n.next=29;break;case 16:if("cook"!==a||!0!==r.hasStir){n.next=20;break}r.print("\nHaving stirred the soup and now cooked it, you have finished \none of your dishes."),r.hasCook=!0,n.next=29;break;case 20:if("back"!==a){n.next=22;break}return n.abrupt("return",(r.print("\nYou decide to go back to the Kitchen..."),new Y));case 22:if("meat spot"!==a||!1!==r.hasCook){n.next=26;break}r.print("\nYou have not finished your first dish yet."),n.next=29;break;case 26:if("meat spot"!==a||!0!==r.hasCook){n.next=28;break}return n.abrupt("return",(r.print("\nHaving been to the SoupSpot, you move on to the MeatSpot."),new x));case 28:r.print("\nInvalid command!");case 29:return n.abrupt("return",t);case 30:case"end":return n.stop()}},n)}))()}}]),e}(),Y=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Kitchen"}},{key:"getDescription",value:function(e){return"Now in the Kitchen, you can either go get the [Ingredients], \ngo to the [soup spot], or [Serve] your dishes."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("ingredients"!==(a=n.sent.toLowerCase().trim())){n.next=6;break}return n.abrupt("return",(r.print("\nYou go to the ice room where all of the ingredients are stored."),new v));case 6:if("serve"!==a||!1!==r.hasDishes){n.next=10;break}r.print("\nYou haven't prepared all of the dishes yet...\n"),n.next=15;break;case 10:if("serve"!==a||!0!==r.hasDishes){n.next=12;break}return n.abrupt("return",(r.print("\nHaving prepared all of the dishes, you walk into the DiningRoom to serve them.\n"),new k));case 12:if("soup spot"!==a){n.next=14;break}return n.abrupt("return",(r.print("\nReady to create your dishes you walk to the SoupSpot to create a dish."),new I));case 14:r.print("\nInvalid command!");case 15:return n.abrupt("return",t);case 16:case"end":return n.stop()}},n)}))()}}]),e}(),R=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Kitchen Enterance"}},{key:"getDescription",value:function(e){return"Now in the KitchenEnterance, you start to get nervous and question whether \nyou should go back to the [changing room], or to clench your fists and \n[enter] the kitchen."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:return a=n.sent.toLowerCase().trim(),n.abrupt("return","enter"===a?(r.print("\nYou stand in front of the door leading to the Kitchen, take a few deep breaths and enter..."),new Y):"changing room"===a?(r.print("\nYou decide to leave the KitchenEnterance and go back to the ChangingRoom."),new S):(r.print("\nInvalid command!"),t));case 5:case"end":return n.stop()}},n)}))()}}]),e}(),S=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Changing Room"}},{key:"getDescription",value:function(e){return"Now in the ChangingRoom, you look around for your locker, open it, \nand prepare to [change] or go back to the [changing room enterance]..."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if("change"!==(a=n.sent.toLowerCase().trim())||!1!==r.isWearingUniform){n.next=8;break}r.print("\nYou quickly change into your chef's uniform and walk towards the KitchenEnterance's door. \nWould you like to [enter]?\n"),r.isWearingUniform=!0,n.next=17;break;case 8:if("change"!==a||!0!==r.isWearingUniform){n.next=12;break}r.print("\nYou are already wearing your uniform...\n"),n.next=17;break;case 12:if("enter"!==a){n.next=14;break}return n.abrupt("return",(r.print("\nYou stand in front of the door leading to the KitchenEnterance, \ntake a few deep breaths and enter."),new R));case 14:if("changing room enterance"!==a){n.next=16;break}return n.abrupt("return",(r.print("\nYou decide to leave the ChangingRoom and go back to the ChangingRoomEnterance."),new T));case 16:r.print("\nInvalid command!");case 17:return n.abrupt("return",t);case 18:case"end":return n.stop()}},n)}))()}}]),e}(),T=function(){function e(){o(this,e)}return u(e,[{key:"getName",value:function(e){return"Changing Room Enterance"}},{key:"getDescription",value:function(e){return"You are standing in front of the ChangingRoom. You are only able to [enter] the \nchanging room as you are pressed for time."}},{key:"handleInput",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e,n.next=3,r.getInput();case 3:if(n.t0=n.sent.toLowerCase().trim(),"enter"!==n.t0){n.next=8;break}n.t1=(r.print("\nYou walk over to the ChangingRoom door and open it with confidence.\n"),new S),n.next=9;break;case 8:n.t1=(r.print("\nInvalid command!"),t);case 9:return n.abrupt("return",n.t1);case 10:case"end":return n.stop()}},n)}))()}}]),e}(),C=function(t){e(i,t);var a=n(i);function i(){var e;return o(this,i),(e=a.apply(this,arguments)).isWearingUniform=!1,e.hasDishes=!1,e.hasIngredients=!1,e.hasPrep=!1,e.hasStir=!1,e.hasCook=!1,e.hasSear=!1,e.hasGrill=!1,e.hasDressing=!1,e.hasToss=!1,e.hasBatter=!1,e}return u(i,[{key:"getName",value:function(){return"Sous Chef"}},{key:"getAuthor",value:function(){return"Anastasia"}},{key:"getDescription",value:function(){return"Can you make a dish that suits the critic's tastes?"}},{key:"onStart",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isWearingUniform=!1,e.hasDishes=!1,e.hasIngredients=!1,e.hasPrep=!1,e.hasStir=!1,e.hasCook=!1,e.hasSear=!1,e.hasGrill=!1,e.hasDressing=!1,e.hasToss=!1,e.hasBatter=!1,e.print("\n                           A text adventure by Anastasia\n"),e.sleep(.5),e.print("You are a sous chef working in a renound restraunt \nwho aspires for cooking greatness. \nOver the years of working at the restraunt you have gained the \ntrust and admiration of your coworkers through your hard work. \nFinally your time to shine has come as a famous food critic has \ncome to your restraunt and you, as the sous chef have been put \nin charge of creating the perfect dish to serve him. If you \nsucceed in impressing the critic you will be able to open \nyou own renound restraunts and become a super famous chef. \nDon't miss this chance!!!"),e.sleep(.5),e.print("\n\nPress Enter to Continue..."),t.next=18,e.getInput();case 18:return t.abrupt("return",new T);case 19:case"end":return t.stop()}},t)}))()}}]),i}(a),D=new(function(){function e(){o(this,e),this.SINGLE_ADVENTURE_MODE=!0}return u(e,[{key:"getAdventures",value:function(){var e=[];return e.push(new d),e.push(new y),e}},{key:"getAdventure",value:function(){return new C}}]),e}()),A=function e(t){o(this,e),this.TYPE="PrintMessage",this.message=t},N=function e(){o(this,e),this.TYPE="PickAdventureMessage"},E=new(function(){function e(){o(this,e),this.fileCache=new Map,this.inputQueue=[],this.printQueue=[]}return u(e,[{key:"threadSleep",value:function(e){var t=this;return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(0!=t.printQueue.length){n.next=2;break}return n.abrupt("return",new Promise(function(t){return setTimeout(t,1e3*e)}));case 2:return r=t.printQueue[t.printQueue.length-1].renderAfter-(new Date).getTime()+1e3*e,n.abrupt("return",new Promise(function(e){return setTimeout(e,r)}));case 4:case"end":return n.stop()}},n)}))()}},{key:"sleep",value:function(e){var t=this.getStartTime()+1e3*e;this.printQueue.push({message:"",renderAfter:t})}},{key:"getInput",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.inputQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:return n=e.inputQueue.shift(),t.abrupt("return",Promise.resolve(n));case 7:case"end":return t.stop()}},t)}))()}},{key:"getStartTime",value:function(){return 0==this.printQueue.length?(new Date).getTime():this.printQueue[this.printQueue.length-1].renderAfter}},{key:"print",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01,n=1e3*t,r=this.getStartTime(),a=0;a<e.length;a++)r+=n,this.printQueue.push({message:e[a],renderAfter:r})}},{key:"printLines",value:function(e,t){var n=this,r=1e3*t,a=this.getStartTime();e.forEach(function(e){a+=r,n.printQueue.push({message:e+"\n",renderAfter:a})})}},{key:"printFile",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n=this;return r(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise(function(r){if(n.fileCache.has(e)){var a=n.fileCache.get(e);return n.printLines(a,t),void r()}var o=new XMLHttpRequest,i="assets/"+e;o.addEventListener("load",function(a){var u=[];o.status>=200&&o.status<300?u=o.responseText.split("\n"):(u=['Could not load file: "'.concat(e,'". Error Code: ').concat(o.status," - ").concat(o.statusText)],console.error("Could not load: ".concat(i))),n.fileCache.set(e,u),n.printLines(u,t),r()}),o.open("GET",i),o.send()}));case 1:case"end":return r.stop()}},r)}))()}},{key:"startPrintThread",value:function(){var e=this;return r(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.printQueue.length){t.next=5;break}return t.next=3,e.threadSleep(.1);case 3:t.next=0;break;case 5:for(n=(new Date).getTime();e.printQueue.length>0&&e.printQueue[0].renderAfter<=n;)r=e.printQueue.shift(),postMessage(new A(r.message));case 7:t.next=0;break;case 9:case"end":return t.stop()}},t)}))()}},{key:"pushInput",value:function(e){this.inputQueue.push(e.message)}}]),e}());addEventListener("message",function(e){var t=e.data;if("RunAdventureMessage"===t.TYPE){var n=D.SINGLE_ADVENTURE_MODE?D.getAdventure():D.getAdventures()[t.index];n.setEngine(E),console.log("Starting PrintThread."),E.startPrintThread(),console.log("Starting adventure."),n.run(),D.SINGLE_ADVENTURE_MODE||(n.onFinish=function(){return postMessage(new N)})}else"InputMessage"==t.TYPE?E.pushInput(t):(console.error("An illegal message was received by the engine: "),console.error(t))})}()}();