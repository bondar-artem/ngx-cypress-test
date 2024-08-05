/// <reference types="cypress" />

//The key word "before each" is responsible to repeat for every test
describe('Before Each', () => {

    beforeEach('Login', () => {

    })

})

// _______________________________________________

// Below is the structure of the test and can be use as many times you want
describe('Tests Structure A', () => {

  beforeEach('Login', () => {
    // It is going to execute the "before Each", then the "Test Structure 0", then the "before Each", then the "Test Structure 1", the "before Each", then the "Test Structure 2"...
  })

  // "it" describe the body of the test itself and can be use as many times you want
  it('Tests Structure 0', () => {
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
