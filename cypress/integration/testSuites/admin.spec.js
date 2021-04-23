import LoginAdminPage from '../pageObjects/admin/LoginAdminPage'
import JobInterviewPage from '../pageObjects/admin/JobInterviewPage'

describe('admin', ()=>{

    const loginAdminPage = new LoginAdminPage()
    const jobInterviewPage = new JobInterviewPage()

    it('visit', () =>{
        //login to admin
        loginAdminPage.login()
        jobInterviewPage.searchJob('Digital Project Manager')
                        .inputValue(1200000,0,0,0,0,0,true)
                        .save('Save')
    })
})