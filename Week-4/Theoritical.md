* Write examples illustrating the use of each of the following:
    - Static properties
        - Example:
         ```js
          class Triple {
              static customName = "Tripler";
              static description = "I triple any number you provide";
              static calculate(n = 1) {
                return n * 3;
              }
            }
            
            class SquaredTriple extends Triple {
              static longDescription;
              static description = "I square the triple of any number you provide";
              static calculate(n) {
                return super.calculate(n) * super.calculate(n);
              }
            }
            
            console.log(Triple.description); // 'I triple any number you provide'
            console.log(Triple.calculate()); // 3
            console.log(Triple.calculate(6)); // 18
            
            const tp = new Triple();
            
            console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
            console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
            console.log(SquaredTriple.longDescription); // undefined
            console.log(SquaredTriple.customName); // 'Tripler'
            
            // This throws because calculate() is a static member, not an instance member.
            console.log(tp.calculate()); // 'tp.calculate is not a function'
          ```
          
    - Private properties
        - Example:
          ```js
          class ClassWithPrivateField {
              #privateField;
            
              constructor() {
                this.#privateField = 42;
              }
            }
            
            class Subclass extends ClassWithPrivateField {
              #subPrivateField;
            
              constructor() {
                super();
                this.#subPrivateField = 23;
              }
            }
            
            new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
          ```

    - Setters and getters
        - Example:
          ```js
          const person = {
                firstName: "Nourin",
                lastName: "Awad",
                get fullName() {
                    return this.firstName + " " + this.lastName;
                }
            };
            
            console.log(person.fullName); // Output: Nourin Awad
            
            const person2 = {
                firstName: "Ahmed",
                lastName: "Awad",
                language: "Arabic",
                set lang(lang) {
                    this.language = lang.toUpperCase();
                }
            };
            
            person2.lang = "english";
            console.log(person2.language); // Output: ENGLISH
          ```
          
    - Method chaining
        - Example:
          ```js
          let firstName = "  Nourin  ";
          console.log(firstName);
          let modifiedName = firstName.toUpperCase().trim();
          console.log(modifiedName)
          ```
        
* Explain the difference between `this` keyword's value in the following examples:

    - ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce: () => {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
        ```
      - Since this is an arrow function, the "this" keyword refers to the global object. So, in this context, it is undefined.
        </br>
    - ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce() {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
        ```
      - This is a regular function (a method in this context), so the "this" keyword refers to the player object. Therefore, the results are the values of firstName and lastName in the object.
        </br>
    - ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce
        }

        player.introduce();
        ```
      - The function "introduce" is defined seperately, but is intialized in the player object as a method. Therefore, the results are the values of firstName and lastName in the object.
       </br>
    - ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez"
        }

        introduce();
        introduce.call(player);
        ```
      - First call (introduce()) is calling a function outside of the object, so it is undefined.
      - Second call (introduce.call(player)) explicitly sets "this" to the player object using .call.
