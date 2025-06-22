* Write examples illustrating the use of each of the following:
    - Static properties
        - 
          
    - Private properties
        - 
    - Setters and getters
        - 
    - Method chaining
        - 

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
