import {BasePage} from "../BasePage";


export class LoginPage extends BasePage {
  _emailInputSelector = "form input#input-email"
  _passwordInputSelector = "form input#input-password"
  _rememberMeSelector = "form .custom-checkbox"
  _loginBtnSelector = 'form button[status="primary"]'

  constructor() {
    super("auth/login");
  }

  fill(email, password, rememberMe){
    cy.get(this._emailInputSelector).type(email)
    cy.get(this._passwordInputSelector).type(password)

    if(rememberMe){
      cy.get(this._rememberMeSelector).click()
    }
  }

  clickLoginButton(){
    cy.get(this._loginBtnSelector).click()
  }

  login(email, password, rememberMe){
    this.fill(email, password, rememberMe)
    this.clickLoginButton()
  }
}   