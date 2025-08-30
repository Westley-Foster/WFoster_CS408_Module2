# web-dev-starter

This is a starter project for web development with no frameworks and minimal
dependencies. It is intended to be a starting point for web development projects
that are written in plain HTML, CSS, and JavaScript.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
npm install
```
This will install the necessary dependencies for the project.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

//NOTE TO SELF: write Development here
1. index.html builds a webpage that contains an About Me, a digitally-drawn avatar, and functionality that 
   allows a user to add two numbers together, fetch and display a random joke, or fetch and display five
   random jokes at a time. It contains a background image and uses CSS styling from the style.css file to
   style the contents of the webpage.

2. style.css contains the styling used in index.html to style and alter the webpage's contents.

3. main.js contains the functionality used in index.html to allow the user to interact with the webpage.
   It's used to add two given numbers and display an alert dialog and fetch and display random jokes 
   when the respective buttons are clicked.

4. test.js includes all the tests to test the functionality in main.js.


## Testing

To run the tests for the project in VSCode, run the following command 

```bash
npm test
```

//NOTE TO SELF: write Testing here

To run the tests for the project in VSCode, you should first have the VSCode Live Server extension
installed. Once you do, start the Live Preview server by using the command ">Live Preview: Start Server" 
in the command bar at top of the IDE. Once the Live Preview server is started, run the command

```bash
npm run test
```

in the terminal. This will run all the tests in the test.js file and provide the results of each test in
the terminal.

//NOTE TO SELF: need to update helloWorld test to test for an alert rather than the console.log
Tests included in project are: adding two numbers, multiplying two numbers, and fetching a random joke 
from the official joke API in main.js.
