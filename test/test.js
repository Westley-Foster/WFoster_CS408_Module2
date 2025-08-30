//added created multiply, divide functions from main.js
import {helloWorld, add, multiply, divide} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

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

    //NOTE TO SELF: I want to test that no two consecutive jokes are the same

});
