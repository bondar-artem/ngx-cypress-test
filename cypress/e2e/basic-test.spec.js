/// <reference types="cypress" />

// describe('Опис тесту', () =>{
//   // before(()=>{
//   //   cy.log('Before')
//   // })
//   // beforeEach(() => {
//   //   cy.log('Before each describe')
//   // })
//   // after(() => {
//   //   cy.log('After')
//   // })
//   // afterEach(() => {
//   //   cy.log('After each')
//   // })

//   it('Test 1', ()=> {
//     cy.log('Test 1')
//   })
//   it('Test 2', ()=> {
//     cy.log('Test 2 ')
//   })
//   it.skip('Test 3', ()=> {
//     cy.log('Test 2 ')
//   })
//   // context('New context', ()=> {
//   //   before(()=>{
//   //     cy.log('Before')
//   //   })
//   //   beforeEach(() => {
//   //     cy.log('Before each context')
//   //   })
//   //   after(() => {
//   //     cy.log('After')
//   //   })
//   //   afterEach(() => {
//   //     cy.log('After each')
//   //   })
  
//   //   it('Test 1', ()=> {
//   //     cy.log('Test 1')
//   //   })
//   //   it('Test 2', ()=> {
//   //     cy.log('Test 2 ')
//   //   })
//   // })
// })


describe('Sign in', () => {

  beforeEach(() => {
    cy.visit('/')
  })


  it('should sign in with valid credentials', () => {
    cy.log('test 1')
  })

  it('should return error with invalid credentials', () => {
    cy.log('test 2')
  })

  context('negative test', () => {
    before(()=>{
      cy.log('before all tests')
    })

    it.skip('test 3', () => {
      cy.log('inside test 3')
    })
  })

  afterEach(() => {
    cy.log('after each test')
  })

  after( () => {
    cy.log('after all')
  })
})