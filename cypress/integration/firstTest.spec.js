/// <reference types="Cypress" />
describe('Our First Test Suite', () => {

    describe('First Suite Section', () => {
        beforeEach('before each block',() =>{
            cy.visit('/')
        })
        it('Our first Test', () => {

        })
        it('Our Second Test', () => {
            
        })
        it('Our Third Test', () => {
            
        })
    })
    it('Our first Test', () => {

    })
    it('Our Second Test', () => {
        
    })
    it('Our Third Test', () => {
        
    })
})
describe('Our Second Test Suite', () => {

    it('Our first Test', () => {

    })
    it('Our Second Test', () => {
        
    })
    it('Our Third Test', () => {
        
    })
})