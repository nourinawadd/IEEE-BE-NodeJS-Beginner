### Recap Section:
1. Explain the four types of function binding in JavaScript: implicit binding, explicit binding, new binding, and default binding. How do they differ from each other?
   - Default binding: if the function housing a this reference is a standalone function, then that function is bound to the global object. (doesn't apply to strict mode)
   - Implicit binding: 

3. What will be the output of this code and why?

```JS
let student = { 
   name: "Saleh",
   subjects = ["Math","Science","English"]
}
console.log(typeof typeof student)
```
   - The output is "string", since typeof student (an object) would result in "object", which is a string. Therfore, typeof "object" returns "string".

3. What the modules and what the differences between ***CommonJS*** modules and ***EJS*** modules?
   -  Modules organize code into self-contained chunks that make up a lerger, more complex app.
   -  By default, Node.js treats JavaScript code as CommonJS modules
   -  CommonJS modules are characterized by the require statement for module imports and module.exports for module exports.
   -  ES modules are characterized by import/ export keywords.


5. What is the purpose of ***"scripts"*** attribute in package.json?
   - The scripts property contains a set of entries; the key for each entry is a script name, and the corresponding value is a user-defined command to be executed.
   - Scripts are frequently used to test, build, and streamline the needed commands to work with a module. 
---

### Express Section:
1. Define the ***"Middleware"*** term and it's usage in Express.js

2. What are the common reasons that can cause an Express application to hang or become unresponsive? Please provide specific scenarios or examples.

3. what is the method used to parse the response body comes that from **HTML** form?

4. If we access **"/profile/1307?tab=friends&history=off"**
What will be outputted to the backend console?

```JS
app.get('/profile/:userId',(req,res)=>{
    console.log(res.params)
    console.log(req.query)
})
```

5. In a scenario, the user tries to enter the login page while he is already logged in.
You, as the developer, know that he did that by mistake. So you need to send him to the homepage instead. How can you implement that in Express.js?

```JS
a. req.navigate('/')
b. res.navigate('/')
c. res.redirect('/')
d. res.send('/')
```
---

### MongoDB Section (10 pts. 2 for each question):

1. What is the default data type of a MongoDB document id?

2. What is the Mongoose model, How to create one and, What are its uses?

3. What will be the output of this code?
```JS
- const x = User.findOne({username:"elgokar"})
- const y = User.find({})
- const z = await User.findById(66eb21a982f34874a0323f7a)

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
``` 
<br>

4. In the following code 3b3aziz trying to update a user age in the database but it doosn't work as expected, what the problem in his code and how to solve it?

```JS
const updateAge = () => {
    const user = User.findOne({username:"sherbiny"},callback)
    console.log(user.age) //output ===> 20
    user.age=25;
    user.save();
    console.log(user.age) //output ===> 20
}
```

5. How would you add ***validation*** to a Mongoose schema to ensure a string property is **at least 3 characters** long?
