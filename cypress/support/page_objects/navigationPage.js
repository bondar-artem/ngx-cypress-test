

function selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if(attr.includes('left')){//эта функция для того чтобы курсор 
                //возвращался главное меню после каждого открытия
                cy.wrap(menu).click()
            }
        })////впереди создали новую функцию и поместили возврат в меню сюда
    })
}
export class NavigationPage{
formLayoutsPage(){
    //cy.contains('Forms').click()
    selectGroupMenuItem('Forms')//наш возврат начальное меню поместили
    // наверху функцию и здесь прописываем только функцию наполняя её нужной groupName
    cy.contains('Form Layouts').click()
  }
  
 
formDatepickerPage(){
        //cy.contains('Forms').click()
    selectGroupMenuItem('Forms')
    cy.contains('Datepicker').click()
    }

tooltipPage(){
    selectGroupMenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
}   

smartTablePage(){
    selectGroupMenuItem('Tables & Data')
    cy.contains('Smart Table').click()
}

toastrPage(){
    selectGroupMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
}

}

export const onNavigationPage = new NavigationPage()
               