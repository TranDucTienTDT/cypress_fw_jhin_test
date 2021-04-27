import LoginPage from '../../pageObjects/ats/LoginPage'

describe('test', () => {
    const loginPage = new LoginPage()
    it('some test', () => {
        loginPage.login()
    })
})