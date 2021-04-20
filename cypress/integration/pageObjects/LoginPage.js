class LoginPage
{
    emailInput()
    {
        return cy.get('input[name="email"]')
    }

    passwordInput()
    {
        return cy.get('input[name="password"]')
    }

    loginBtn()
    {
        return cy.get('button[type="submit"]')
    }

    clearEmailBtn()
    {
        return cy.get('button[type="button"]').first()
    }
    
    hidePassBtn()
    {
        return cy.get('button[type="button"]').last()
    }

    forgotPasswordLnk()
    {
        return cy.get('a[href="/forgot-password"]')
    }

    homeImg()
    {
        return cy.get('img[alt="Talent partner"]')
    }

    emailErrorMsg()
    {
        return cy.get('h6.MuiTypography-root.jss77.MuiTypography-subtitle2').first().children()
    }

    passwordErrorMsg()
    {
        return cy.get('h6.MuiTypography-root.jss77.MuiTypography-subtitle2').last().children()
    }

}

export default LoginPage;