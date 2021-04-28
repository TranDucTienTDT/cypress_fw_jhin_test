import LoginPage from '../../pageObjects/ats/LoginPage'
import Header from '../../pageObjects/ats/Header'
import JobsPage from '../../pageObjects/ats/JobsPage'
import PostJobPage from '../../pageObjects/ats/PostJobPage'


describe('Verify post a new job', ()=>{
    
    const loginPage = new LoginPage()
    const header = new Header()
    const jobsPage = new JobsPage()
    const postJobPage = new PostJobPage()
    

    before('Login with valid Recruiter acccount', ()=>{
        loginPage.login().userAvatar().should('be.visible')
    })

    after('Logout after finishing the test', () => {
        header.logout().emailTxt().should('be.visible')
    })

    it('Check all element are displayed properly as default', () => {
        jobsPage.postAJobBtn().click()
        postJobPage.companyShowingDropdownBtn().should('be.visible')
        postJobPage.saveAsDraftBtn().should('be.visible')
        postJobPage.saveNPublishBtn().should('be.visible')
        postJobPage.enterJobTitleTxt().should('be.visible')
        postJobPage.enterLocationTxt().should('be.visible')
        postJobPage.chooseLevelDropdown().should('be.visible')
        postJobPage.chooseIndustryDropdown().should('be.visible')
        postJobPage.chooseEmploymentTypeDropdown().should('be.visible')
        postJobPage.enterHeadcountTxt().should('be.visible')
        postJobPage.jobDescriptionTxt().should('be.visible')
        postJobPage.jobRequirementsTxt().should('be.visible')
        
        var benefits = ['Paid Leave', 'Laptop', 'Team Activities', 
                        'Insurance', 'Mobile', 'Free Snack',
                        'Bonus', 'Transportation', 'Voucher',
                        'Training', 'Remote Work', 'Travel Opportunities']
        benefits.forEach(benefit => {
            postJobPage.getCheckBox(benefit).should('be.visible')
        });
        
        postJobPage.othersBenefitChk().should('be.visible')
        postJobPage.noteTxt().should('be.visible')
        postJobPage.enterJobKeywords().should('be.visible')
        postJobPage.enterWorkingHour().should('be.visible')
        postJobPage.salarySlider().should('be.visible')
        postJobPage.minSalaryTxt().should('be.visible')
        postJobPage.maxSalaryTxt().should('be.visible')
        postJobPage.usdRadioBtn().should('be.visible')
        postJobPage.vndRadioBtn().should('be.visible')
        postJobPage.chooseFileBtn().should('be.visible')
    })
})