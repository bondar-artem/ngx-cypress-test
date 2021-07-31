/// <reference types="cypress" />

const exp = require("constants")

describe ('our First Test Suite', () => {

    it ('firstTest', () => {

        cy.visit ('/')
        cy.contains ('Forms').click ()
        cy.contains ('Form Layouts').click ()

        // Search element by Tag Name
        cy.get ('input')

        //Search element by ID
        cy.get ('#inputEmail1')

        // Search element by Attribute
        cy.get ('[placeholder]')

        // Search element by attribute name and value 
        cy.get ('[placeholder="Email"]')

        // Search element by class name
        cy.get ('.input-full-width')

        // Search element by class value
        cy.get ('[class="input-full-width size-medium shape-rectangle"]')

        // Search element by local 
        cy.get ('[data-cy="imputEmail1"]')

        // Search element by tag name and attribute with value
        cy.get ('input[placeholder="Email"]')

        // Search element by two diffent attributes
        cy.get ('[placeholder="Email"][fullwidth]')

        //Search element by tag name and attribute with value, ID, class name
        cy.get ('input[placeholder="Email"]#inputEmail1.input-full-width')
    })

    it ('Second Test', () => {

        cy.visit ('/')
        cy.contains ('Forms').click ()
        cy.contains ('Form Layouts').click ()

        cy.get ('[class="appearance-filled size-medium status-primary shape-rectangle transitions"]')
        cy.get ('[class="appearance-filled size-medium status-warning shape-rectangle transitions"]')
        
        cy.get ('#inputEmail3').parents ('form').find('button').should ('contain', 'Sign in')
        .parents ('form').find ('nb-checkbox').click ()
        
        cy.contains ('nb-card','Horizontal form').find ('[type="email"]')
    })


    it ('then and wrap methods', () => {
        cy.visit ('/')
        cy.contains ('Forms').click ()
        cy.contains ('Form Layouts').click ()

        // normal way of finding elements and assert using should
        cy.contains ('nb-card', 'Using the Grid').find ('[for="inputEmail1"]').should ('contain', 'Email')
        cy.contains ('nb-card', 'Using the Grid').find ('[for="inputPassword2"]').should ('contain', 'Password')

        cy.contains ('nb-card', 'Basic form').find ('[for="exampleInputEmail1"]').should ('contain', 'Email address')
        cy.contains ('nb-card', 'Basic form').find ('[for="exampleInputPassword1"]').should ('contain', 'Password')

        //We are using here "then method" (For Using the Grid Form)
        cy.contains ('nb-card', 'Using the Grid').then (UsingtheGridForm => {

            const emailLabelFirst= UsingtheGridForm.find ('[for="inputEmail1"]').text ()
            const passwordLabelFirst= UsingtheGridForm.find ('[for="inputPassword2"]').text ()
            const Radios= UsingtheGridForm.find ('[class="col-sm-3 label"]').text ()

            expect (emailLabelFirst).to.equal('Email')
            expect (passwordLabelFirst).to.equal ('Password')
            expect (Radios).to.equal ('Radios')
        })

        //We are using here "wrap method" to find text Email and Password (For Using the Grid Form)
        cy.contains ('nb-card', 'Using the Grid').then (UsingtheGridForm => {
            cy.wrap (UsingtheGridForm).find ('[for="inputEmail1"]').should ('contain', 'Email')
            cy.wrap (UsingtheGridForm).find ('[for="inputPassword2"]').should ('contain', 'Password')
        })

        // We are using here "then method" to find text Email address and Password (Basic Form)
        cy.contains ('nb-card', 'Basic form').then (BasicForm => {

            const emailLabelSecond= BasicForm.find ('[for="exampleInputEmail1"]').text ()
            const passwordLabelSecond = BasicForm.find ('[for="exampleInputPassword1"]').text ()
            expect (emailLabelSecond).to.equal ('Email address')
            expect (passwordLabelSecond).to.equal ('Password')
        })

        // We are using here "wrap method" to find text Email address and Password (Basic Form)

        cy.contains ('nb-card', 'Basic form').then (BasicForm => {
            cy.wrap (BasicForm).find ('[for="exampleInputEmail1"]').should ('contain', 'Email address')
            cy.wrap (BasicForm).find ('[for="exampleInputPassword1"]').should ('contain', 'Password')

        })

        //(Basic Form) Checkbox
        //Method 1
        cy.contains ('nb-card', 'Basic form').then (Checkbox => {
            cy.wrap (Checkbox).find ('nb-checkbox').click()
            cy.wrap (Checkbox).find ('[class="custom-checkbox checked"]')
        })



        //Method 2

        //cy.contains ('nb-card', 'Basic form').find ('nb-checkbox').click ()
        //.find ('.custom-checkbox').invoke ('attr', 'class').should ('contain', 'checked')


        // We are using here "then method" to find text Email address and Password (Block Form)
        cy.contains ('nb-card', 'Block form').then (BlockForm => {
            const FirstName= BlockForm.find ('[for="inputFirstName"]').text ()
            const LastName= BlockForm.find ('[for="inputLastName"]').text ()
            const Email= BlockForm.find ('[for="inputEmail"]').text ()
            const Website= BlockForm.find ('[for="inputWebsite"]').text()

             expect (FirstName).to.equal ('First Name')
             expect (LastName).to.equal ('Last Name')
             expect (Email).to.equal('Email')
             expect (Website).to.equal ('Website')

         })

         // We are using here "wrap method" to find text Email address and Password (Block Form)

         cy.contains ('nb-card', 'Block form').then (BlockForm => {
             cy.wrap (BlockForm).find ('[for="inputFirstName"]').should ('contain', 'First Name')
             cy.wrap (BlockForm).find ('[for="inputLastName"]').should ('contain', 'Last Name')
             cy.wrap (BlockForm).find ('[for="inputEmail"]').should ('contain', 'Email')
             cy.wrap (BlockForm).find ('[for="inputWebsite"]').should ('contain', 'Website')
         })


         cy.contains ('nb-card', 'Horizontal form').then (HorizontalForm => {
             const Email = HorizontalForm.find ('[for="inputEmail3"]').text ()
             const Password = HorizontalForm.find ('[for="inputPassword3"]').text ()

             expect (Email).to.equal ('Email')
             expect (Password).to.equal ('Password')
         })
    })

     // Radio Buttons (Using the Grid Form)

    it ('Radio Buttons', () => {
            cy.visit ('/')
            cy.contains ('Forms').click ()
            cy.contains ('Form Layouts').click ()

            cy.contains ('nb-card', 'Using the Grid').find ('[type="radio"]').then (UsingtheGridForm => {

                cy.wrap (UsingtheGridForm).eq(0).check ({force:true}).should ('be.checked')
                cy.wrap (UsingtheGridForm).eq(1).check({force:true}).should('be.checked')
                cy.wrap (UsingtheGridForm).eq(0).should ('not.be.checked')
                cy.wrap (UsingtheGridForm).eq(2).should ('be.disabled')
            })
        })

    // Checkboxes (Basic Form)
    it ('Check Boxes', () => {
            cy.visit ('/')
            cy.contains ('Modal & Overlays').click ()
            cy.contains ('Toastr').click ()

            cy.get ('[type="checkbox"]').eq (0).check ({force:true})
            cy.get ('[type="checkbox"]').eq (1).check ({force:true})
            cy.get ('[type="checkbox"]').eq (2).check ({force:true})
            cy.get ('[type="checkbox"]').eq (0).uncheck ({force:true})
            cy.get ('[type="checkbox"]').eq (1).uncheck ({force:true})
            cy.get ('[type="checkbox"]').eq (2).uncheck ({force:true})
        })

    // Date Picker

    it ('Date Picker', () => {

            function selectDayFromCurrent (day){
                let date = new Date()        //Getting current date and time
            date.setDate(date.getDate() + day)
            let futureDay =date.getDate()
            let futureMonth = date.toLocaleString ('default', {month:'short'})
            let dateAssert = futureMonth+ ' '+futureDay+', ' +date.getFullYear()
                cy.get ('nb-calendar-navigation').invoke ('attr', 'ng-reflect-date').then (dateAttribute => {
                    if (!dateAttribute.includes (futureMonth)) {
                        cy.get ('[data-name="chevron-right"]').click ()
                        selectDayFromCurrent(day)
                     }else {
                        cy.get('nb-calendar-day-picker [class = "day-cell ng-star-inserted"]').contains (futureDay).click ()
                    }
                }) 
                return dateAssert
            }
            cy.visit ('/')
            cy.contains ('Forms').click ()
            cy.contains ('Datepicker').click ()

            cy.contains ('nb-card', 'Common Datepicker').find ('input').then (input => {
                cy.wrap (input).click ()
                let dateAssert = selectDayFromCurrent(300)
                cy.wrap (input).invoke ('prop', 'value').should ('contain', dateAssert)  
            })
        })

    //Lists and Dropdown

    it ('Lists and Dropdown', () => {

             cy.visit ('/')
             cy.get ('nav nb-select').then (dropdown => {

                 cy.wrap (dropdown).click()
                  cy.get ('[class="options-list"] nb-option').each ((listItems, index) => {
                        const itemText= listItems.text().trim()

                        cy.wrap (listItems).click ()
                        cy.wrap (dropdown).should ('contain', itemText)

                      const listofColors= {
                          "Light": "rgb(255, 255, 255)",
                          "Dark": "rgb(34, 43, 69)",
                          "Cosmic": "rgb(50, 50, 89)",
                          "Corporate": "rgb(255, 255, 255)"
                      }
                      cy.get ('nb-layout-header nav').should ('have.css', 'background-color', listofColors [itemText])

                      if (index<3)
                      cy.wrap (dropdown).click()

                  })
             })
        })

    //Web Tables
    it ('Web Tables', () => {

        //Case 1, Adding the new value and verifying it

                cy.visit ('/')
                cy.contains ('Tables & Data').click ()
                cy.contains ('Smart Table').click ()

                cy.get ('tbody').contains ('tr', 'Larry').then (TableRow => {

                    cy.wrap (TableRow).find ('[class="nb-edit"]').click ()
                    cy.wrap (TableRow).find ('[placeholder="Age"]').clear ().type ('25')
                    cy.wrap (TableRow).find ('[class="nb-checkmark"]').click ()
                    cy.wrap (TableRow).find ('td').eq(6).should ('contain', '25')
                })

         //Case 2, Adding a new row and adding values

                cy.get ('thead').find ('[class="nb-plus"]').click ()
                cy.get ('thead').find ('tr').eq (2).then (TableRow => {
                     cy.wrap (TableRow).find ('[placeholder="ID"]').type ('0')
                     cy.wrap (TableRow).find ('[placeholder="First Name"]').type ('Younas')
                     cy.wrap (TableRow).find ('[placeholder="Last Name"]').type ('Habib Khan')
                     cy.wrap (TableRow).find ('[placeholder="Username"]').type ('[@YHK]')
                     cy.wrap (TableRow).find ('[placeholder="E-mail"]').type ('abc@gmail.com')
                     cy.wrap (TableRow).find ('[placeholder="Age"]').type ('22')
                     cy.wrap (TableRow).find ('[class="nb-checkmark"]').click ()
                    
                }) // to verify value was asserted
                cy.get ('tbody tr').eq(0).find ('td').then (tableColums => {
                    cy.wrap (tableColums).eq (2).should('contain', 'Younas')
                })

            // Case 3 Search filter check
            // const ageToFilter = [20,30,40]

            // cy.wrap (ageToFilter).each (ageToFilter => {
            //     cy.get ('thead').find ('[placeholder="Age"]').clear ().type (ageToFilter)
            //     cy.wait (500)
            //     cy.get ('tbody tr').each (tableRows => {
            //         cy.wrap (tableRows).find ('td').eq (6).should ('contain', ageToFilter)
            //     })
            // })
            
            //Case 4 No data found message with search filter
            const ageToFilter = [20,30,40]

            cy.wrap (ageToFilter).each (ageToFilter => {
                cy.get ('thead').find ('[placeholder="Age"]').clear ().type (ageToFilter)
                cy.wait (500)
                cy.get ('tbody tr').each (tableRows => {
                    if (ageToFilter ==200) {
                        cy.wrap (tableRows).should ('contain', 'No data found')
                    } else {
                        cy.wrap (tableRows).find ('td').eq (6).should ('contain', ageToFilter)
                    }
                    
                })
            })
         })

     // Tooltips

    it ('Tool Tips', () => {
        cy.visit ('/')
        cy.contains ('Modal & Overlays').click ()
        cy.contains ('Tooltip').click ()

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Default').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip') 

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Primary').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip') 

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Success').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip') 

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Danger').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip') 

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Info').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip') 

        cy.contains ('nb-card', 'Colored Tooltips').contains ('Warning').click()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip')

        cy.contains ('nb-card', 'Tooltip With Icon').contains ('Show Tooltip').click ()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip')

        cy.contains ('nb-card', 'Tooltip Placements').contains ('Top').click ()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip')

        cy.contains ('nb-card', 'Tooltip Placements').contains ('Right').click ()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip')

        cy.contains ('nb-card', 'Tooltip Placements').contains ('Left').click ()
        cy.get ('nb-tooltip').should ('contain', 'This is a tooltip')

    })

    it ('Dialogue Box', () => {
        cy.visit ('/')
        cy.contains ('Tables & Data').click ()
        cy.contains ('Smart Table').click ()

        const stub = cy.stub ()
        cy.on ('window:confirm', stub )
        cy.get ('tbody tr').eq (0).find ('[class="nb-trash"]').click().then (() => {
            expect (stub.getCall(0)).to.be.calledWith ('Are you sure you want to delete?')
        })
    })
})

describe ('Second Test Suite', () => {
    it ('Author Page', () => {

        cy.visit ('/')
        cy.contains ('Auth').click ()
        cy.contains ('Login').click ()

        cy.contains ('nb-card', 'Login').then (LoginForm => {

            const Email = LoginForm.find ('[for="input-email"]').text ()
            const Password = LoginForm.find ('[for="input-password"]').text ()

            expect (Email).to.equal ('Email address:')
            expect (Password).to.equal ('Password:')
        })
    })
    
    it ('Register Page', () => {

        cy.visit ('/')
        cy.contains ('Auth').click ()
        cy.contains ('Register').click ()


        cy.contains ('nb-card', 'Register').then (RegisterForm => {
            const Fullname = RegisterForm.find ('[for="input-name"]').text ()
            const Emailaddress = RegisterForm.find ('[for="input-email"]').text ()
            const Password = RegisterForm.find ('[for="input-password"]').text ()
            const RepeatPassword = RegisterForm.find ('[for="input-re-password"]').text ()

            expect (Fullname).to.equal ('Full name:')
            expect (Emailaddress).to.equal ('Email address:')
            expect (Password).to.equal ('Password:')
            expect (RepeatPassword).to.equal ('Repeat password:')

        })
    })

    it ('Request Password', () => {

        cy.visit ('/')
        cy.contains ('Auth').click ()
        cy.contains ('Request Password').click ()

        cy.contains ('nb-card', 'Forgot Password').then (ForgotPasswordForm => {
            const EnterEmail = ForgotPasswordForm.find ('[for="input-email"]').text ()
            expect (EnterEmail).to.equal ('Enter your email address:')

        })
    })

    it ('Request Password', () => {

        cy.visit ('/')
        cy.contains ('Auth').click ()
        cy.contains ('Reset Password').click ()

        cy.contains ('nb-card', 'Change password').then (ChangePasswordForm => {

            const NewPassword = ChangePasswordForm.find ('[for="input-password"]').text ()
            const ConfirmPassword = ChangePasswordForm.find ('[for="input-re-password"]').text ()

            expect (NewPassword).to.equal ('New Password:')
            expect (ConfirmPassword).to.equal ('Confirm Password:')

        })
    })

})
