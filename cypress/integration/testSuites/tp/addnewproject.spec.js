
import LoginPage from '../../pageObjects/tp/LoginPage'
import Header from '../../pageObjects/tp/Header'
import SearchProjectsPage from '../../pageObjects/tp/SearchProjectsPage'
import CreateProjectPopup from '../../pageObjects/tp/CreateProjectPopup'

describe('Feature Search Projects', () => {

    const loginPage = new LoginPage()
    const header = new Header()
    const searchProjectsPage = new SearchProjectsPage()
    const createProjectPopup = new CreateProjectPopup()
    const user = require('../../fixtures/user.json')

    beforeEach(() => {
        loginPage.login(user.email, user.password)
    })

    it('Adding a new search project then checking it is existed', () => {
        header.myCVsTag().click()
        searchProjectsPage.addNewProjectBtn().click()
        createProjectPopup.createNewProject('tester',['test','tester','testing'],'save')
        createProjectPopup.projectNameErrMsg().should('have.text', 'This project name has already been existed')
    })

    it('Adding a new search project then but cancel', () => {
        header.myCVsTag().click()
        searchProjectsPage.addNewProjectBtn().click()
        createProjectPopup.createNewProject('tester',['test','tester','testing'],'cancel')
        searchProjectsPage.addNewProjectBtn().should('be.visible')
    })


    it('Adding a new search project then check on', () => {
        header.myCVsTag().click()
        searchProjectsPage.addNewProjectBtn().click()
        createProjectPopup.createNewProject('tester',['test','tester','testing'],'cancel')
        searchProjectsPage.addNewProjectBtn().should('be.visible')
    })
})