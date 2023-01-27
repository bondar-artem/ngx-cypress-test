
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
      // get('.day-cell').not('.bounding-month') - выбираем все что совпадают с get, но без того, что в not
      cy.get('.day-cell').not('.bounding-month').contains(futureDay).eq(0).click()
    }
  })
  return dateAssert
}

export class DatepickerPage{

  selectCommonDatePickerDateFromToday(dayFromToday){
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()
      let dateAssert = selectDayFromCurrent(dayFromToday)
      cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
      cy.wrap(input).should('have.value', dateAssert)
    })
  }

  selectCommonDatePickerWithRangeFromToday(firstDay, secondDay){
    cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
      cy.wrap(input).click()
      let dateAssertFirst = selectDayFromCurrent(firstDay)
      let dateAssertSecond = selectDayFromCurrent(secondDay)
      const finalDate = dateAssertFirst + ' - ' + dateAssertSecond
      cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
      cy.wrap(input).should('have.value', finalDate)
    })
  }

}

export const onDatePickerPage = new DatepickerPage()
