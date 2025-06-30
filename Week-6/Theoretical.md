71. According to your understanding; explain what's the difference between `fs.readFile` and `fs.readFileSync` methods.
      - readFile is asynchronous, which doesn't block the event loop.
      - readFileSync is synchronous, meaning it blocks the execution of your program until the entire file has been read and its content is available. 
     
3. Explain with examples the difference between installing a package as a normal dependency vs. as a development dependency with `npm`.
   - Normal dependencies are the packages that are required for your application to run properly, and devDependencies are the packages that are required for development and testing purposes only.
     
4. What is the purpose of the `node_modules` folder, and why should it typically be excluded from version control systems like Git?
   - node_modules is a folder which stores external dependencies of the project.
   - The node_modules folder is typically excluded from version control systems (e.g., Git) to keep the repository size manageable, as dependencies can be easily installed based on the package.json file. 
     
5. Break through this `package.json` file and explain its contents.
    ```json
    {
        "name": "url-shortener-app",
        "version": "0.0.0",
        "private": true,
        "scripts": {
            "start": "node ./bin/www",
            "start:dev": "nodemon ./bin/www"
        },
        "dependencies": {
            "cookie-parser": "~1.4.4",
            "debug": "~2.6.9",
            "dotenv": "^16.4.4",
            "ejs": "^3.1.9",
            "express": "^4.18.2",
            "http-errors": "~1.6.3",
            "mongodb": "^6.3.0",
            "mongoose": "^8.1.3",
            "morgan": "~1.9.1",
            "shortid": "^2.2.16",
            "valid-url": "^1.0.9"
        },
        "devDependencies": {
            "nodemon": "^3.0.1"
        }
    }
    ```
   - "url-shortener-app": name of the module that the package.json
   - "0.0.0": current version of the module
   - "scripts": the key for each entry is a script name, and the corresponding value is a user-defined command to be executed.
   - "dependencies": includes the name and version of other packages required to run this package.
   - "devDependencies": dependencies the module needs to run in development.
