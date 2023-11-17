//first заводим наш PageObject здесь со всеми путями из параметрами которые нужно задать
//making export class and const к которой присваивается Этот новый класс, 
//затем вводим этот путь в тест сначала const. потом created function with path and certain parameters
//у нас уже второй шаг открытия окна, так как для открытия Forms с мы уже сделали navigationPage
//и использовали это в тесте как первый шаг onNavigationPage.formLayoutsPage()
export class FormLayotsPage{
  
    submitInlineFormWithNameAndEmail(name, email){//path для теста делаем второй шаг пути 
        //так как Forms мы уже вошли У нас есть POM onNavigationPage.formLayoutsPage()
        cy.contains('nb-card', 'Inline form').find('form').then(formInline => {
            cy.wrap(formInline).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(formInline).find('[placeholder="Email"]').type(email)
            cy.wrap(formInline).find('[type="checkbox"]').check({force: true})
            cy.wrap(formInline).submit()//submit cupress method for objects with 'form'
        })
        
    }
    submitBasicFormWithEmailAndPassword(email, password){
        cy.contains('nb-card', 'Basic form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()

            
        })
    }
        
 
}

export const onFormLayoutsPage = new FormLayotsPage()
//to test put: onFormLayoutsPage.submitInlineFormWithNameAndEmail(name, email)