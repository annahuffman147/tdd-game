# The God Tester and the Bastard Implementor

This is a simple pairing exercise based on test-driven development. The idea is simple. The God Tester's goal is to trick the bastard implementor into writing good code by writing good tests. The Bastard Implementor's goal is to make the tests pass without writing a function that actually solves the problem. Here are some ground rules:

* The tester can only write one test at a time
* Each test written must fail before the implementor's turn begins
* The implementor's turn continues until all tests pass
* If the implementor's code exceeds 30 lines, the code must be refactored

Check out the example test and implementation files in the example folder to see how something like this might proceed.

To set up the game:
```bash
$ npm install
$ npm install -g mocha
```

To run the example code:
```bash
$ npm run example
```

To run the exercise code:
```bash
$ npm run exercise
```
