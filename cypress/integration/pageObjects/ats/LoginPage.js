import Header from '../../pageObjects/ats/Header'

class LoginPage
{
    //element
    emailTxt()
    {
        return cy.get('input[type="email"]')
    }

    passwordTxt()
    {
        return cy.get('input[type="password"]')
    }

    loginBtn()
    {
        return cy.get('button.login')
    }

    //functions
    login()
    {
        cy.visit('https://sandbox-recruiter.jobhopin.com/')
        if(cy.get('div[id="loader"]') == true)
        {
            cy.wait(1000)
        }
        
        this.emailTxt().type('tien1@mailinator.com')
        this.passwordTxt().focus().type('123456').type('{enter}')
        
        if(cy.get('div[id="loader"]') == true)
        {
            cy.wait(1000)
        }
        return new Header()
    }
}

export default LoginPage;