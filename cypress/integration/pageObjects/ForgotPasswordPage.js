class ForgotPasswordPage
{
    formTitle()
    {
        return cy.get('h2.MuiTypography-root.jss107.MuiTypography-h2')
    }

    formDescription()
    {
        return cy.get('p.MuiTypography-root.jss108.MuiTypography-body1')
    }

    emailInput()
    {
        return cy.get('input[name="email"]')
    }

    emailErrorMsg()
    {
        return cy.get('h6.MuiTypography-root.jss129.MuiTypography-subtitle2 > div')
    }

    clearEmailBtn()
    {
        return cy.get('button[type="button"]').first()
    }

    backBtn()
    {
        return cy.get('button[type="button"]').last()
    }

    sendBtn()
    {
        return cy.get('button[type="submit"]')
    }

    resendLnk()
    {
        return cy.get('span.jss113')
    }

}

export default ForgotPasswordPage;