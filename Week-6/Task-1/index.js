#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import fsPromise from "fs/promises";

const main = async ()=> {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:",
        }
    ]);

    try {
        const repos = await getRepo(answers.username);
        await fsPromise.writeFile(`${answers.username}.txt`, JSON.stringify(repos, null, 2));
        
    } catch (err) {
        console.error("An error occurred:", err.message);
    }
};

const getRepo = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if(!response.ok) {
        throw new Error(`Error fetching repositories for user ${username}`);
    }
    const data = await response.json();
    return data;
};

program.version("1.0.0")
  .description("A simple CLI tool")
  .action(main);

program.parse(process.argv);