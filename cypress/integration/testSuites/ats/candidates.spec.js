import LoginPage from '../../pageObjects/ats/LoginPage'
import Header from '../../pageObjects/ats/Header'
import JobsPage from '../../pageObjects/ats/JobsPage'
import PostJobPage from '../../pageObjects/ats/PostJobPage'

describe('Verify Post A Job page', ()=>{
    
    const loginPage = new LoginPage()
    const header = new Header()
    const jobsPage = new JobsPage()
    const postJobPage = new PostJobPage()
    

    beforeEach('Login with valid Recruiter acccount', ()=>{
        loginPage.login().userAvatar().should('be.visible')
    })

    afterEach('Logout after finishing the test', () => {
        header.logout().emailTxt().should('be.visible')
    })

    it('Check all element are displayed properly as default', () => {
   
    })
})