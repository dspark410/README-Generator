const inquirer = require("inquirer");
const fs = require("fs");

const questionsPrompt = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter your badge code. Use this format: [![Build Status](https://travis-ci.com/username/projectname.svg?branch=master)](https://travis-ci.com/username/projectname)",
        name: "badge"
    },
    {
        type: "input",
        message: "Enter the description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter a list of the table of contents separated by commas",
        name: "tableofcontents"
    },
    {
        type: "input",
        message: "How does a user install this application?",
        name: "installation"
    },
    {
        type: "input",
        message: "How does a user run this application?",
        name: "usage"
    },
    {
        type: "input",
        message: "What license would you like to use? Type 'none' if you do not wish to use a license",
        name: "license"
    },
    {
        type: "input",
        message: "Would you like users to be able to contribute to this project?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Would you like to write tests for your application?",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter the url of your GitHub profile picture. Use this format: ![alttext](url)",
        name: "profile"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email"
    },
]


inquirer.prompt(questionsPrompt)

    .then(function (response) {
        fs.appendFileSync("README.md", `# ${response.title} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `${response.badge} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Description \n${response.description} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Table of Contents \n- ${response.tableofcontents.split(", ").join("\n" + "- " )} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Installation \n${response.installation} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Usage \n${response.usage} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## License(s) \n${response.license} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Contributing \n${response.contribute} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })
        
        fs.appendFileSync("README.md", `## Tests \n${response.tests} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `## Questions \n${response.profile} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })
        fs.appendFileSync("README.md", `GitHub: ${response.username} \n\n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFileSync("README.md", `Email: ${response.email}`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })
    })
    