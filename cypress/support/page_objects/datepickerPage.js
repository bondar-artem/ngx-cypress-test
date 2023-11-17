

function selectDayFromCurrent(day){//assigned parameters instead og digits
            
    let date = new Date()//according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate

//date.setDate(...):метод устанавливает новое значение дня месяца для объекта Date. Он принимает число от 1 до 31.
//date.getDate() - метод возвращает текущий день месяца для указанной даты. Например, если сегодня 15 января 2023 года, то date.getDate() вернет 15.)
    date.setDate(date.getDate() + day)//current data + 10 days -  we set up. 
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

     return dateToCheck
    }


export class DatePickerPage{

    selectCommonDatepickerDateFromToday(dayFromToday){
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()  
           
            const dateToCheck = selectDayFromCurrent(dayFromToday)//function will be executed again. задали количество дней от текущей даты которая будет выбрана
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToCheck)
            cy.wrap(input).should('have.value', dateToCheck)    

         })     
    }
    selectDatepickerWithRangeFromToday(firstDay, secondDay){
        cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
            cy.wrap(input).click()  
           
            let dateToCheckFirst = selectDayFromCurrent(firstDay)//function will be executed again. задали количество дней от текущей даты которая будет выбрана
            let dateToCheckSecond = selectDayFromCurrent(secondDay)
            const finalDate =  `${dateToCheckFirst} - ${dateToCheckSecond}`

            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            cy.wrap(input).should('have.value', finalDate)    

         })     

    }
    selectDatepickerWithDisabledMonMaxValue(dayFromToday){
       cy.contains('nb-card', 'Datepicker With Disabled Min Max Values').find('input').then(input => {
        cy.wrap(input).click()

        const dateAssert = selectDayFromCurrent(dayFromToday)
        cy.wait(500)
        cy.wrap(input).invoke('prop', 'value').then(value => {
            cy.wrap(value).should('contain', dateAssert)
        })
       })
    }
        

}

export const onDatePickerPage = new DatePickerPage()

//in test we get: const and function, so it will be onDatePickerPage.selectCommonDatepickerDateFromToday()