const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter GitHub username:"
    },
    {
        type: "input",
        name: "gmail",
        message: "Enter GithubEmail:"
    },
    {
        type: "input",
        name: "project",
        message: "Enter project name:"
    },
    {
        type: "input",
        name: "version",
        message: "Enter version number:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter description:"
    },
    {
        type: "input",
        name: "install",
        message: "Enter command to install dependencies:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter comments on usage:"
    },
    {
        type: "list",
        name: "license",
        message: "Select the license on your poject:",
        choices: ["MIT", "Apache", "GPL", "None"]
    },
    
    {
        type: "input",
        name: "contributing",
        message: "Enter comments on contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter command to run tests:"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        
        api
            .getUser(inquirerResponses.github)
            .then(({ data }) => {
                writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data}));
            })
    })
}

init();