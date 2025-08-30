//added created multiply, and divide functions from main.js
import {helloWorld, add, multiply, divide, fetchRandomJoke} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    //Modified original helloWorld test to test for button alert instead of the console.log
    QUnit.test('helloWorld should print Hello World to the console', function(assert) {
        //Arrange
        const consoleSpy = sinon.spy(console, 'log');
        //Act
        helloWorld();
        //Assert
        assert.ok(consoleSpy.calledWith('Hello World'), 'console.log should be called with Hello World');
        consoleSpy.restore();
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
});
