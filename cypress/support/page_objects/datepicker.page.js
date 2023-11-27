export class DatepickerPage{

  selectCommonDatepickerDateFromToday(dayFromToday){
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input=>{
      cy.wrap(input).click()
      const dateToAssert = selectDayFromToday(dayFromToday)
      cy.wrap(input).should('have.value', dateToAssert)
    })
  }

  selectDatepickerWithRangeFromToday(startDay, endDay){
    cy.contains('nb-card', 'Datepicker With Range').find('input').then(input=>{
      cy.wrap(input).click()
      const dateAssertStart = selectDayFromToday(startDay)
      const dateAssertEnd = selectDayFromToday(endDay)

      cy.wrap(input).should('have.value', dateAssertStart+' - '+dateAssertEnd)
    })
  }
}

export const onDatePickerPage = new DatepickerPage()

function selectDayFromToday(days){
  let date = new Date()
  date.setDate(date.getDate() + days)
  let futureDate = date.getDate()
  let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
  let futureYear = date.getFullYear()
  let assertDate = `${futureMonth} ${futureDate}, ${futureYear}`

  cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
    if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)){
      cy.get('[data-name="chevron-right"]').click()
      selectDayFromToday(days)
    }else{
      cy.get('.day-cell').not('.bounding-month').contains(futureDate).click() //select day from active month only
    }
  })
  return assertDate
}
