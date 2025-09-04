/**
 * Description: test.js includes all the tests to test the functionality in main.js.
 * 
 * Author: Professor Shane Panter, Westley Foster
 */

//added created multiply, and divide functions from main.js
import {helloWorld, add, multiply, divide, fetchRandomJoke, fetch5RandomJokes} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    /* Original QUnit test for helloWorld before changing helloWorld() to an alert dialog instead of a console.log */
    // QUnit.test('helloWorld should print Hello World to the console', function(assert) {
    //     //Arrange
    //     const consoleSpy = sinon.spy(console, 'log');
    //     //Act
    //     helloWorld();
    //     //Assert
    //     assert.ok(consoleSpy.calledWith('Hello World'), 'console.log should be called with Hello World');
    //     consoleSpy.restore();
    // });

    //Modified original helloWorld test to test for alert dialog instead of the console.log
    QUnit.test('helloWorld should print and display an alert dialog', function(assert) {
        /* These if-statements were written by ChatGPT to fix the "alert is not defined" error while trying to test */
        //Mocks window.alert if it doesn't exist, preventing a crash when helloWorld() is called
        if (!global.window) {
            global.window = {};
        }
        if (!global.window.alert) {
            global.window.alert = function () {};
        }

        //Arrange
        const alertSpy = sinon.spy(window, 'alert');
        //Act
        helloWorld();
        //Assert
        assert.ok(alertSpy.calledWith('Hello World, you clicked the alert button'), 'alert dialogue should be made when called with helloWorld');
        alertSpy.restore();
    });

    QUnit.test('add should return the sum of two numbers', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

    //My own custom tests added to the test class
    QUnit.test('multiply function should return the product of two numbers', function(assert) {
        const num1 = 4;
        const num2 = 10;
        const expected = 40;

        const result = multiply(num1, num2);
        assert.equal(result, expected, 'multiply(4, 10) should return 40'); //compares the expected result with the actual result
    });

    QUnit.test('divide function should return the quotient of two numbers', function(assert) {
        const num1 = 50;
        const num2 = 10;
        const expected = 5;

        const result = divide(num1, num2);
        assert.equal(result, expected, 'divide(50, 10) should return 5');
    });

    //NOTE: Test was written by ChatGPT. I don't have much experience with Javascript and wanted to
    //      know how a test that tests the fetchRandomJoke() function would work.
    QUnit.test('fetchRandomJoke should return a formatted joke', async function(assert) {
        // Arrange: create fake API response
        const fakeJoke = { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" };

        /**
        *  switched "sinon.stub(window, 'fetch') to "sinon.stub(.stub(global, 'fetch').
        *  window.fetch tests a browser, whereas global.fetch tests my local Node environment
        */ 
        const fetchStub = sinon.stub(global, 'fetch').resolves({
            ok: true,
            json: async () => fakeJoke
        });

        // Act: call the function
        const result = await fetchRandomJoke();

        // Assert: check if the result is formatted correctly
        assert.strictEqual(result, "Why did the chicken cross the road? - To get to the other side!");

        // Cleanup
        fetchStub.restore();
    });

    /* This test was heavily based off of classmates Evan LeLong's and Lucas Berry's test */
    QUnit.test('fetch5RandomJokes should return 5 formatted jokes', async function(assert) {
        //Arrange
        const testJokes = 
        [
            { setup: "firstSetup", punchline: "firstPunchline" },
            { setup: "secondSetup", punchline: "secondPunchline" },
            { setup: "thirdSetup", punchline: "thirdPunchline" },
            { setup: "fourthSetup", punchline: "fourthPunchline" },
            { setup: "fifthSetup", punchline: "fifthPunchline" },
            { setup: "sixthSetup", punchline: "sixthPunchline" },
            { setup: "seventhSetup", punchline: "seventhPunchline" },
            { setup: "eigthSetup", punchline: "eighthPunchline" },
            { setup: "ninthSetup", punchline: "ninthPunchline" },
            { setup: "tenthSetup", punchline: "tenthPunchline" }
        ];

        const testResults =
        [
            "firstSetup - firstPunchline",
            "secondSetup - secondPunchline",
            "thirdSetup - thirdPunchline",
            "fourthSetup - fourthPunchline",
            "fifthSetup - fifthPunchline"
        ];

        const fetchStub = sinon.stub(global, 'fetch').resolves({
            ok: true,
            json: async () => testJokes
        });

        //Act
        const result = await fetch5RandomJokes();

        //Assert
        assert.deepEqual(result, testResults);

        //Cleanup
        fetchStub.restore();
    });
});
