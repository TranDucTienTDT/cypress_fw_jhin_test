import LoginPage from '../pageObjects/tp/LoginPage'
import SearchCVPage from '../pageObjects/tp/SearchCVPage'

describe('Checking search filter',()=>{

    const loginPage = new LoginPage()
    const searchCVPage = new SearchCVPage()

    beforeEach(() => {
        cy.visit('')
        loginPage.emailInput().type("tien.tran@jobhopin.com")
        loginPage.passwordInput().type("tien123456")
        loginPage.loginBtn().click()
        
    })

    it('Checking the tail of filter', ()=>{
        cy.wait(10000)
        //searchCVPage.searchCVTextBox().click().type('Test')
        searchCVPage.filterBtn().click()
        searchCVPage.criteriaSelectBox().click()
        searchCVPage.levelFilter().click()
        searchCVPage.industryFilter().click()
        searchCVPage.locationFilter().click()
        searchCVPage.experienceFilter().click()
        searchCVPage.hopInFilter().click()
        searchCVPage.averageSalaryFilter().click()
    })
})