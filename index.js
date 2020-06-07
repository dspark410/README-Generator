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
        message: "Installation Guide",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage Guide",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter License",
        name: "license"
    },
    {
        type: "input",
        message: "Enter contributing authors",
        name: "authors"
    },
    {
        type: "input",
        message: "Enter tests",
        name: "tests"
    },
]

inquirer.prompt(questionsPrompt)

    .then(function (response) {
        fs.appendFile("README.md", `# ${response.title} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.description} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.tableofcontents} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.installation} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.usage} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.license} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })
        
        fs.appendFile("README.md", `# ${response.authors} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })

        fs.appendFile("README.md", `# ${response.tests} \n`, function(err) {
            if (err) {
                return console.log(err)
            }
            console.log("Success!")
        })
    })
    