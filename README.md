# web-dev-starter

This is the starter project for Full Stack Web Development using no frameworks and
minimal dependencies. It acts as an intro for future web development projects that
are written in plain HTML, CSS, and JavaScript.

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

Once the extension is installed, you can start the Live Server by going to the command bar at the top
of the VSCode IDE and type the command ">Live Preview: Start Server". This will open a second window
that shows your changes to your code in real-time. To see how your project looks on a full browser
window, you can copy the address in the search bar of the test window when the server starts.

It is recommended to switch between the test window and your actual browser to determine how the 
final project will look, as the test window's appearance is more minimized and restricted when 
displaying the webpage.

## Testing

To run the tests for the project in VSCode, run the following command 

```bash
npm test
```

To run the tests for the project in VSCode, you should first have the VSCode Live Server extension
installed. Once you do, start the Live Preview server by using the command ">Live Preview: Start Server" 
in the command bar at top of the VSCode IDE. Once the Live Preview server is started, run the command

```bash
npm run test
```

in the terminal. This will run all the tests in the test.js file and provide the results of each test in
the terminal. Tests included test successfully creating an alert dialog, fetching and retrieving a joke, 
and several math operations including addition/subtraction, multiplication, and division.

## References

<hr> styling found on w3schools.com at https://www.w3schools.com/tags/tag_hr.asp

Background image tutorial found on w3schools.com at https://www.w3schools.com/html/html_images_background.asp

HTML comment notation found through Google's AI Overview

Presenting an alert found on w3schools.com at https://www.w3schools.com/js/js_popup.asp

fetchRandomJoke test was written by ChatGPT