
import LoginPage from '../pageObjects/LoginPage'
import Header from '../pageObjects/Header'
import SearchProjectsPage from '../pageObjects/SearchProjectsPage'
import CreateProject from '../pageObjects/CreateProject'


describe('Feature Search Projects', () => {

    const loginPage = new LoginPage()
    const header = new Header()
    const searchProjectsPage = new SearchProjectsPage()
    const createProject = new CreateProject()
    before(function() {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    beforeEach(() => {
        cy.visit('')
        loginPage.emailInput().type("tien.tran@jobhopin.com")
        loginPage.passwordInput().type("tien123456")
        loginPage.loginBtn().click()
        
    })

    it('Adding a new search project then check it available when searching it', () => {
        header.myCVsTag().should('be.visible').click()
        searchProjectsPage.addNewProjectBtn().should('be.visible').click()
        createProject.projectNameInput().should('be.visible').type('tester')
        createProject.title().click()
        createProject.saveBtn().click()

    })
})