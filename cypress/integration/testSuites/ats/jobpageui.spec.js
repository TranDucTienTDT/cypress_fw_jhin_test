import LoginPage from '../../pageObjects/ats/LoginPage'
import Header from '../../pageObjects/ats/Header'
import JobsPage from '../../pageObjects/ats/JobsPage'

describe('Verify that Jobs page is displayed properly after logging in with valid Recruiter account', ()=>{
    
    const loginPage = new LoginPage()
    const header = new Header()
    const jobsPage = new JobsPage()
    

    beforeEach('Login with valid Recruiter acccount', ()=>{
        loginPage.login().userAvatar().should('be.visible')
    })

    afterEach('Logout after finishing the test', () => {
        header.logout().emailTxt().should('be.visible')
    })

    it('Check all element are displayed properly as default', () => {
        jobsPage.postAJobBtn().should('be.visible')
        jobsPage.searchJobTxt().should('be.visible')
        jobsPage.availableJobMatchSlot().should('be.visible').should('have.text','7/14')
        
        var statusItems = ['Live', 'Paused', 'Closed', 'Draft', 'All']
        statusItems.forEach(element => {
            jobsPage.getStatusNavigatingItems(element).should('be.visible')
        });

        jobsPage.jobTypeBtn().should('have.text', 'Job Type ').click()
        jobsPage.jobTypeDropdownList().should('be.visible')

    })
})