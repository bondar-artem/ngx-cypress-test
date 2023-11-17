/// <reference types="cypress" />

const { equal } = require("assert")
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

    it('Radio buttons', () => {
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

     it('Radio buttons', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
            cy.get('[type="checkbox"]').uncheck({force: true})//click on all checkboxes, and makes them checked, and with uncheck - unchecked
     
            cy.get('[type="checkbox"]').eq(0).click({force: true})//click changes initial status

            cy.get('[type="checkbox"]').eq(1).check({force: true})
    })   

    it('Date picker testing', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()

            let date = new Date()//according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
            date.setDate(date.getDate() + 1)//data + 10 days -  we set up
            let futureDate = date.getDate()//assigned initial date to new var futureDate
            let dateToCheck = `Oct ${futureDate}, 2023`//follow the format of result

            
            cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
                cy.wrap(input).click()  
            //     cy.get('.day-cell').not('.bounding-month').contains('21').click()////to HURDCODING OPTION:обозначаем даты с которыми мы будем работать исключая с классом неактивного месяца
            //     //assertion to check chosen date, to get value of property
            //     cy.wrap(input).invoke('prop', 'value').should('contain', 'Oct 21, 2023')//to HURDCODING OPTION
            //     cy.wrap(input).should('have.value', 'Oct 21, 2023')//HURDCODING OPTION
                
                //with let, dinamicly choosing:
                cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
                cy.wrap(input).invoke('prop', 'value').should('contain', dateToCheck)
                cy.wrap(input).should('have.value', dateToCheck)

              
                
                })
            })
    it('26 Date picker testing 2, more usfull', () => {
        function selectDayFromCurrent(day){//assigned parameters insead og digits
            
            let date = new Date()//according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
        date.setDate(date.getDate() + day)//data + 10 days -  we set up
        let futureDay = date.getDate()//assigned initial date to new var futureDate
        let futureMonth = date.toLocaleDateString('en-US', {month: "short"})//переменная с методом toLocaleDateStringдаёт нам нужный месяц
        let futureYear = date.getFullYear()//переменная с методом getFullYear даёт нам нужный year
        
        let dateToCheck = `${futureMonth} ${futureDay}, ${futureYear}`//follow the format of result
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttr => {//выбираем свойства этого атрибута нашу полную дату
              
                if(!dateAttr.includes(futureMonth) || !dateAttr.includes(futureYear)){//condition
                  cy.get('[data-name="chevron-right"]').click()//То есть если заданный месяц и заданный год не присутствует в дате мы кликаем на стрелку
                  selectDayFromCurrent(day)//после click функция должна повториться чтобы выбрать опять нужную дату
                  } else {
                       cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()//а если все условия Нашлись то мы просто проверяем дату как в начале
                  }
  
             })   

             return dateToCheck//function return
        }   
        //like console.log, где мы видим результат работы заданных параметров функции:    
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()  
           
            const dateToCheck = selectDayFromCurrent(10)//function will be executed again. задали количество дней от текущей даты которая будет выбрана
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToCheck)
            cy.wrap(input).should('have.value', dateToCheck)    

         })        
     })
       
    it('27 Lists and dropdown', () => {
        cy.visit('/')
        //I option simple 
        //cy.get('nav').find('nb-select').click()
        // cy.get('nav nb-select').click()//same locator as above
        // cy.get('.options-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')

        //how to each option of the dropdown is selectable (loop each using)
        cy.get('nav nb-select').then( dropDown => {//lovator: tag + child tag
            cy.wrap(dropDown).click()//assigned to the object out locator. click
            
            cy.get('.options-list nb-option ').each( (listItem, index) => {//list of dropdown items and assigned index of elements as el
                const itemText = listItem.text().trim()//text() - we pul out the text, trim() since there is spaces
                cy.wrap(listItem).click()//click on each listItem
                cy.wrap(dropDown).should('contain', itemText)//check our pulled out text in dropdown
                if( index < 3 ){
                    cy.wrap(dropDown).click()
                }
                //в этом loop each каждая сессия должна заканчиваться возвратом в начальное окно not more than 4 times

           })
        })
    })

    it('28 Web tables part I', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(100)
            cy.wrap(tableRow).find('.nb-checkmark').click()
       
            cy.wrap(tableRow).should('contain', '100')
            cy.wrap(tableRow).find('td').eq(6).should('contain', '100')//columns with index 6
        })  

            //29 Get row by index
            cy.get('thead tr').find('.nb-plus').click()
            cy.get('thead').first().find('tr').eq(2).then(tableRow => {//rows
                cy.wrap(tableRow).find('[placeholder="First Name"]').type('Mary')
                cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Ru')
                cy.wrap(tableRow).find('.nb-checkmark').click()

            })
            cy.get('tbody tr').first().find('td').then(tableColumn => {//columns
                cy.wrap(tableColumn).eq(2).should('contain', 'Mary')
                cy.wrap(tableColumn).eq(3).should('contain', 'Ru')
            })

        })
       
        
    it('29 GET EACH ROW VALIDATION - web tables', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

       const age = [20, 30, 40, 200]

      cy.wrap(age).each(age => {
        cy.get('thead [placeholder="Age"]').clear().type(age)
        cy.wait(500)

        cy.get('tbody tr').each(tableRow => {
            if(age == 200){
                cy.wrap(tableRow).should('contain', 'No data found')
            }else{
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
            }
        })
      })
    }) 

    it('30 Tool tips (hover-over)', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

       cy.contains('nb-card', 'Colored Tooltips')
       cy.contains('Default').click()

       cy.get('nb-tooltip').should('contain', 'This is a tooltip')
            
     })

     it('30 dialog window', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //this way works with single appeared window in a browser, not HTML page, not in the DOM
        cy.get('tbody tr').first().find('.nb-trash').click()//aftet that in Cypress appears: Are you sure you want to delete?
        cy.on('window:confirm', (confirm) => {//код использует команду cy.on() для прослушивания
            // события window:confirm, которое вызывается, когда встроенное диалоговое окно 
            //подтверждения появляется в браузере.
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        //better way Код, использует библиотеку Sinon для создания stub (заглушки) и проверки,
        // была ли функция window.confirm вызвана с определенным аргументом.
        // В этом случае, это используется для проверки текста в диалоговом окне подтверждения.
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })    
   
        //with selecting Cencel
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)
    })

     
})
 


        
    
         


        
     

        
            
     

        
        

       
       
   
    
    
    
     