/// <reference types="cypress" />

// describe() or context() those key words to define the test suite

describe()
context()

// Below is the structure of the test and can be use as many times you want
describe('Tests Structure A', () => {
    // "it" describe the body of the test itself and can be use as many times you want
    it('Tests Structure', () => {
        // here goes the code of the test

    })

    it('Tests Structure 1', () => {
        // here goes the code of the test

    })

    it('Tests Structure 2', () => {
        // here goes the code of the test

    })

    it('Tests Structure 3', () => {
        // here goes the code of the test

    })

})

describe('Tests Structure A', () => {
    // "it" describe the body of the test itself and can be use as many times you want

    describe('Tests Structure A', () => {
        // "it" describe the body of the test itself and can be use as many times you want
        it('Tests Structure', () => {
            // here goes the code of the test

        })
    })

    it('Tests Structure', () => {
        // here goes the code of the test

    })

    it('Tests Structure 1', () => {
        // here goes the code of the test

    })

    it('Tests Structure 2', () => {
        // here goes the code of the test

    })

    it('Tests Structure 3', () => {
        // here goes the code of the test

    })

})


