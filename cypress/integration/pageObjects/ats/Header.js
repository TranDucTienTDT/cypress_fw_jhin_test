import LoginPage from '../../pageObjects/ats/LoginPage'

class Header
{
    //elements
    logo()
    {
        return cy.get('div.logo').first()
    }
    jobsTab()
    {
        return cy.get('img[alt="JOBS"]')
    }
    candidatesTab()
    {
        return cy.get('img[alt="CANDIDATES"]')
    }
    chatTab()
    {
        return cy.get('img[alt="CHAT"]')
    }
    creditNum()
    {
        return cy.get('span.credit-number')
    }
    userAvatar()
    {
        return cy.get('div[id="user-avatar"]')
    }
    manageAccountSetting()
    {
        return cy.get('li.border-bottom')
    }

    changeLanguageBtn()
    {
        return cy.get('button[id="lang-selector"]')
    }

    activeText()
    {
        return cy.get('div.active-text>div.underline').prev()
    }

    userDropdownMenuRecruiter()
    {
        return cy.get('div[id="user-dropdown-menu-recruiter"]>ul>li[role="menuitem"]')
    }

    
    //functions
    logout()
    {
        this.userAvatar().click()
        this.userDropdownMenuRecruiter().click()
        return new LoginPage()
    }

    changeLanguage(language)
    {
        const statusLang = this.changeLanguageBtn().within(() => {
            cy.get('span').its('text')
        })
        if(language == 'VI' && statusLang != 'VI')
        {
            this.changeLanguageBtn().click()
        }
        else if(language == 'EN')
        {
            this.changeLanguageBtn().click()
        }
        else
        {
            //print something here
        }    

    }

}

export default Header;