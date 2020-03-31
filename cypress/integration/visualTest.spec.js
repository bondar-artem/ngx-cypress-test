
describe('visual test', () => {


    it('should test snapshot', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            cy.wrap(firstForm).toMatchImageSnapshot()
            cy.document().toMatchImageSnapshot()
        })

    })

    it.only('should test with Percy', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            cy.wait(1000)
            cy.percySnapshot('FormLayouts')
        })

    })

})