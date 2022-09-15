const inquirer = require('inquirer');
const fs = require("fs");
// Require the classes
const Manager = require("./lib/Manager.js");
// Require the src files
const createHTML = require('./src/html-template');
const { writeFile, copyFile } = require('./src/create-page');

const employeesInput = [];
let complete = false;

const key = async () => {
    await createManager();

    // Loop key prompt until complete
    while(!complete){
        const {choice} = await keyPrompt();

        if(choice === 'Complete team profile'){
            complete = true;
        }
    }

    const html = createHTML(employeesInput);

    writeFile(html).then(msg => console.log(msg));
    copyFile().then(msg => console.log(msg));
}

const keyPrompt = async () => {
    return inquirer.prompt([
     {
         type: 'list',
         name: 'choice',
         message: 'What would you like to do?',
         choices: ['Complete team profile'],
     }
     ])
}

const createManager = async () => {
    const managerInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Team Manager's employee ID?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter a valid employee ID!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Team Manager's email address?",
            validate: input => {
                let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(res.test(input)){
                    return true;
                }else{
                    console.log("Please enter a valid email address!");
                    return false;
            }   }
        },
        {
            type: 'input',
            name: 'number',
            message: "What is the Team Manager's office number?",
            validate: input => {
                if(input){
                    return true;
                } else {
                    console.log("Please enter a valid office number!");
                    return false;
                }
            } 
        }
    ])

    const {name, id, email, officeNumber} = managerInfo;

    const manager = new Manager (name, id, email, officeNumber);

    employeesInput.push(manager);
}

key();