/// <reference types="cypress" />

const exp = require("constants")

describe('First test suite', () => {
    
    it('first test', () => {

    cy.visit('/')///нужно открыть сайт, baseUrl is assigned before in cypress.config.js
    cy.contains('Forms').click()// найти кнопку Forms (by text)нажать на неё и 
        cy.contains('Form Layouts').click()//очутиться на curtain странице

        //by tag name
        cy.get('input')

        //by id
        cy.get('#inputEmail1')

        //by class value
        cy.get('.input-full-width')

        //by attribute name
        cy.get('[fullwidth]')

        //by attribute and value
        cy.get('[placeholder="Email"]')

        //by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attributes
        cy.get('[fullwidth][placeholder="Email"]')

        //by tag, attr, id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    })
    

    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

                //Theory - 3 main methods to interact with web el-ts on the page:
                //get() - find el by locator globaly
                //find() - find child el-t by locator
                //contains() - find html text, and by text and locator

        cy.contains('Sign in')//I Sign in BTN
        cy.contains('[status="warning"]', 'Sign in')//2-i Sign in btn, метод containe ищет только первый элемент, чтобы достать второй добавляем ещё один locator(we have two Sign in BTN)
        cy.contains('nb-card', 'Horizontal form').find('button')//ищем в форме кнопку BTN, Horizon form идёт ot родительского - находим entire окно по тексту и tag, там ребёнка BTN
        //cy.contains('nb-card', 'Horizontal form').find('[placeholder="Password"]')//find in the entire window any element
        //cy.contains('nb-card', 'Horizontal form').contains('Sign in')//look for child too with previous method containse (so as second one)
        //cy.contains('nb-card', 'Horizontal form').get('button')//does not work, get will find all Sign in innoring first method(selectors)
        
        //cypress chain and DOM
        //найдём сейчас checkbox опираясь на Input email (uniq el in window) 
        cy.get('#inputEmail3')//Input email uniq
            .parents('form')//затем поднимемся к родителям 
            .find('button').should('contain', 'Sign in')//найдём кнопку Sign in, сделаем к ней assertion
            .parents('form')//Затем опять идём к родителям 
            .find('nb-checkbox').click()

    })
    it('second test my', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Basic form').find('nb-checkbox').click()
    })

    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //CAN NOT MAKE VAR LIKE THIS(может найти только первую строку потом засыпется лучше не применять)

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

        // 1 CYPRESS ALIAS

        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')
    
        // 2 Cypress then() method (элемент превращается в JQuery, поэтому его нужно опять обернуть в Cypress (cy.wrap) чтобы работали методы find etc.обёртка работает в пределах одного теста только)
        
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })

            //   EXTRACTING:  (INVOKE() method, SHOUD(), TEXT()):

        it('Extracting a text', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            //1
            cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')//method should is pretty smart to find it here

            //2 extracting text by THEN(), TEXT()
            
            cy.get('[for="exampleInputEmail1"]').then(label => {//обзываем наш объект label и потом вытягиваем из него текст
                const labelText = label.text()//by method (JQuery) text() -  добываем текст и помещаем его в const
                expect(labelText).to.equal('Email address')//Chai using to Query - assertion
            
                cy.wrap(labelText).should('contain', 'Email address')//wrap our object 
            })
                
            //3 invoke('TEXT')   
            cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
                expect(text).to.equal('Email address')//JQuery
                })

            cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')
            
            cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')//cypress method - in this method we can use Alias labelText (email addres)anywhere in the test
            

            //4 invoke() ATTRIBUTE (if we need a value of attribue if it changing like checkbox(checked and unchecked), so validate the state of el-t)
            
            cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
                expect(classValue).to.equal('label')//so our attr class has value label
            })
            
            cy.get('[for="inputEmail1"]').invoke('attr', 'class').then(classValue => {
                expect(classValue).to.equal('label col-sm-3 col-form-label')
            })
            
            //5 invoke() PROPERTY - это значение которое мы вводим в поле

            cy.get('#exampleInputEmail1').type('test@mail.ru')//текст впечатываем
            cy.get('#exampleInputEmail1').invoke('prop', 'value')//извлекаем этот текст так как это property and it's value
                .should('contain', 'test@mail.ru')
                .then(property => {//делаем assertion to check property
                    expect(property).to.equal('test@mail.ru')
                })
            })

            //CHECKBOXis(check, unchecked), RADIOBUTTONS (radio)

            it.only('Radio buttons', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            cy.contains('nb-card', 'Using the Grid')//get our entire window by tag and text (tag found 20 objects, but text defined our)
                .find('[type="radio"]').then(radioButtons => {//находим все radiobuttons (siblings) в этом поле, и делаем assertion для проверки
                cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')//оборачиваем в cypress, eq(0) - индекс элемента, кликаем на неё (check), , - и проверяем статус 
                
            cy.wrap(radioButtons).eq(1).check({force: true})//теперь нажимаем вторую checkbox и дальше проверяем что первая стала unchecked
            cy.wrap(radioButtons).eq(0).should('not.be.checked')//should be automatikly deselected since eq(1) is checked        
            cy.wrap(radioButtons).eq(2).should('be.disabled')//проверим третью checkbox - она должна быть disabled так как к ней никто не прикасался        
            
        })
    }) 

    //     it('Radio buttons', () => {
    //         cy.visit('/')
    //         cy.contains('Forms').click()
    //         cy.contains('Form Layouts').click()




    // })   
})       