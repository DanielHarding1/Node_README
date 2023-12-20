const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the Title of the Project?",
  "Provide a description of the Project",
  "Provide a Table of Contents for the Project",
  "Give details on how to install the Project for use",
  "What is the use-case for the application?",
  "What License is the Project using?",
  "How are the Authors of the Project?",
  "What Tests have been carried out on the Project?",
  "What is your GitHub Profile Link?",
  "What is your email address?",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Response Appended!");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the Title of the Project?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the Project",
      },
      {
        type: "input",
        name: "contents",
        message: "Provide a Table of Contents for the Project",
      },
      {
        type: "input",
        name: "installation",
        message: "Give details on how to install the Project for use",
      },
      {
        type: "input",
        name: "use",
        message: "What is the use-case for the application?",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a License for the Project:",
        choices: ["MIT", "Apache 2.0", "GPLv3", "BSD", "None"],
      },
      {
        type: "input",
        name: "author",
        message: "How are the Authors of the Project?",
      },
      {
        type: "input",
        name: "tests",
        message: "What Tests have been carried out on the Project?",
      },
      {
        type: "input",
        name: "git",
        message: "What is your GitHub UserName?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((data) => {
      const data_append = generateMarkdown(data);
      writeToFile("README.md", data_append);
    })
    .catch((error) => {
      console.error("Error during prompt:", error);
    });
}

promptUser();
