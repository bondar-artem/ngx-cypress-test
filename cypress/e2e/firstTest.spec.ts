/// <reference types="cypress" />

import {first} from "rxjs/operators";
import placeholder = require("cypress/types/lodash/fp/placeholder");

describe ('Our first suite', () => {

  it('first test', () => {

    cy.visit('/'); // visit the baseUrl from config file
    cy.contains('Forms').click(); // searching elements with the name Forms
    cy.contains('Form Layouts').click();

// by Tag Name
    cy.get('input');

// by ID
    cy.get('#inputEmail');

// by Class name - finding by single class
    cy.get('.input-full-width');

// by Attribute name
    cy.get('[placeholder]');

// by Attribute name and value
    cy.get('[placeholder="Email"]');

// by Class value
    cy.get('[class = "input-full-width size-medium shape-rectangle"]');  // finding by all the included classes only

// by Tag Name and Attribute with value
    cy.get('input[placeholder="Email"]');

// by two different Attributes1
    cy.get('[placeholder="Email"][type="email"]');

// by Tag Name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');
  });

  it('second test', () => {

    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('[data-cy="signInButton"]');

    cy.contains('Sign in');

    cy.contains('[status="warning"]', 'Sign in');

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click();

    cy.contains('nb-card', 'Horizontal form').find('[type="email"]');

  });

  it('then and wrap methods', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email');
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password');

    // cypress style
    cy.contains('nb-card', 'Using the Grid').then( firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
      expect(emailLabelFirst).to.equal('Email');
      expect(passwordLabelFirst).to.equal('Password');

      cy.contains('nb-card', 'Basic form').then( SecondForm => {
        const passwordSecondText = SecondForm.find('[for="exampleInputPassword1"]').text();
        expect(passwordLabelFirst).to.equal(passwordSecondText);

        cy.wrap(SecondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');
      });
    });

  });

  it('invoke command', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    // 1.1 NOT invoke command
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');

    // 1.1 not invoke command (here we calling additional method .text() on the previous subject)
    cy.get('[for="exampleInputEmail1"]').then(label => {
      expect(label.text()).to.equal('Email address');
    });

    // 2.1 invoke command - here we save 'text' as a parameter text of our function and then we made an assertion that text is equal to email address
    cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
      expect(text).to.equal('Email address');
    });

    // 2.2.+2.3 invoke command
    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      // .should('contain', 'checked');
      .then(classValue => {
        expect(classValue).to.contain('checked');
      });

  });
  it('assert property', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Datepicker').click();

  // 2.4 invoke command
  // we can't .click on jquery element, that's why we need to .wrap that element first and after .click
    cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
      cy.wrap(input).click();
      cy.get('nb-calendar-day-picker').contains('17').click();
      cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan 17, 2023');
    });
  });


  // {force: true} - disable a default check of an element to be visible (we have input - visually-hidden)
  it('', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
      // clicked on the first radioButton
      cy.wrap(radioButtons)
        .first()
        .check({force: true})
        .should('be.checked');

      // clicked on the second radioButton
      cy.wrap(radioButtons)
        .eq(1)
        .check({force: true})
        .should('be.checked');

      // verified that the first radioButton isn't checked
      cy.wrap(radioButtons)
        .eq(0) // .eq(0) === .first()
        .should('not.be.checked');

      // verified that third radioButton is disabled
      cy.wrap(radioButtons)
        .eq(2)
        .should('be.disabled');

    });
  });

  it('', () => {
    cy.visit('/');
    cy.contains('Modal & Overlays').click();
    cy.contains('Toastr').click();

    // в этом случае найден и активирует все чекбоксы на странице (у нас их 3)
    // .check - it doesn't uncheck if it checked before
    // cy.get('[type="checkbox"]').check(({force: true}));
    cy.get('[type="checkbox"]').eq(0).click({force: true});
  });

  it('', () => {
    cy.visit('/');

    // 1.
    cy.get('nav nb-select').click()
    cy.get('.options-list').contains('Dark').click()
    cy.get('nav nb-select').should('contain', 'Dark')
    // checking color of the background
    cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

    // 2.
    cy.get('nav nb-select').then(dropdown => {
      cy.wrap(dropdown).click()
      // loop for the elements with the .each method + with index
      cy.get('.options-list nb-option').each((listItem, index) => {
        // .trim() - method to remove spaces in the text
        const itemText = listItem.text().trim()

        const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
        }

        cy.wrap(listItem).click()
        cy.wrap(dropdown).should('contain', itemText)
        cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
        // how to use index to creeate a conditions
        if (index < 3){
          cy.wrap(dropdown).click()
        }

        // cy.select - для случаев, когда обернуто в select
      })
    })
  });

  it('Web tables', () => {
    cy.visit('/');
    cy.contains('Tables & Data').click();
    cy.contains('Smart Table').click();

    // 1
    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      // .clear() - очищает поле
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
    })

    // 2
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tableRow => {
      cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
      cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bondar')
      cy.wrap(tableRow).find('.nb-checkmark').click()
    })
    cy.get('tbody tr').first().find('td').then(tableColumns => {
      cy.wrap(tableColumns).eq(2).should('contain', 'Artem')
      cy.wrap(tableColumns).eq(3).should('contain', 'Bondar')
    })

    // 3
    const age = [20, 30, 40, 200]

    cy.wrap(age).each(age => {
      cy.get('thead [placeholder="Age"]').clear().type(age)
      cy.wait(500)
      // tbody tr - так находятся tr в tbody
      cy.get('tbody tr').each(tableRow => {
        if(age == 200) {
          cy.wrap(tableRow).should('contain', 'No data found')
        } else {
        cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }
      })
    })

  })

  it('Web Datepickers', () => {
    function selectDayFromCurrent(day){
      let date = new Date()     // getting object with the current system date and time in the format of the date, month, date of the week, time
      date.setDate(date.getDate() + day)     // getDate() - method will return current date of the month     // date.setDate - set date back into the date format
      let futureDay = date.getDate()
      console.log(futureDay)
      let futureMonth = date.toLocaleString('default', {month: 'short'})    // let futureMonth = date.getMonth() - return the number of the month    // month: 'short' - return the name of the month in the short format (Dec, Jan, Feb)
      let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()

      cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
        if(!dateAttribute.includes(futureMonth)){
          cy.get('[data-name="chevron-right"]').click()
          selectDayFromCurrent(day)  // using recursion
        } else {
          cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).eq(0).click()
        }
      })
      return dateAssert
    }

    cy.visit('/');
    cy.contains('Forms').click()
    cy.contains('Datepicker').click()

    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()
      let dateAssert = selectDayFromCurrent(70)
      cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
    })
  })

  it('Tooltip', () => {
    cy.visit('/');
    cy.contains('Modal & Overlays').click();
    cy.contains('Tooltip').click();

    cy.contains('nb-card', 'Colored Tooltips')
      .contains('Default').click()
    cy.get('nb-tooltip').should('contain', 'This is a tooltip')
  })

  it('dialog box', () => {
    cy.visit('/');
    cy.contains('Tables & Data').click();
    cy.contains('Smart Table').click();

    // 1. this code didn't executed if we don't have confirm message
    // cy.get('tbody tr').first().find('.nb-trash').click()
    // cy.on('window:confirm', (confirm) => {
    //   expect(confirm).to.equal('Are you sure you want to delete?')
    // })

    // 2.
    // const stub = cy.stub()
    // cy.on('window:confirm', stub)
    // cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
    //   expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    // })

    // 3. we don't want to auto confirm message and want to click cancel
    cy.get('tbody tr').first().find('.nb-trash').click()
    cy.on('window:confirm', () => false)
  })


  // it's only an examples, there are a lot of methods for an assertions
  it('Assertions', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();

    cy.get('[for="exampleInputEmail1"]')
      .should('contain', 'Email address')
      .should('have.class', 'label')
      .and('have.text', 'Email address')

    cy.get('[for="exampleInputEmail1"]').then(label => {
      expect(label.text()).to.equal('Email address')
      expect(label).to.have.class('label')
      expect(label).to.have.text('Email address')
    });

  })

});
