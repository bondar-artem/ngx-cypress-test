// Here, is the basic structure for tests file in cypress

// It was taken in the support folder from the command.js file
/// <reference types="cypress" /> 

//This is th function syntax to start the cypress
describe('First test suite', () => {

    // "It" describe the boddy of the cypress test
    it('first test', () => {
        // Here, comes the code of the test
    })

    it('Second test', () => {
        // Here, comes the code of the test
    })

    it('Third test', () => {
        // Here, comes the code of the test
    })
})

describe('Second test suite', () => {

    // "It" describe the boddy of the cypress test
    it('first test', () => {
        // Here, comes the code of the test
    })

    it('Second test', () => {
        // Here, comes the code of the test
    })

    it('Third test', () => {
        // Here, comes the code of the test
    })
})

// You can have as many "it" you need. Also you can have as many "describe" is need. 
// You can use the "describe" inside of the previous "describe". 
// Inside of this new 'describe' you can put as many "it" you neeed.
describe('Third test suite', () => {

    describe('suit section'() => {

        beforEach('login', () => {
        //This will make this code to repet before every tests
        // However, only within this bloc
        // "It" describe the boddy of the cypress test
        })
        it('first test', () => {
            // Here, comes the code of the test
        })
        it('Second test', () => {
            // Here, comes the code of the test
        })
    })

    // "It" describe the boddy of the cypress test
    it('first test', () => {
        // Here, comes the code of the test
    })

    it('Second test', () => {
        // Here, comes the code of the test
    })

    it('Third test', () => {
        // Here, comes the code of the test
    })
})




