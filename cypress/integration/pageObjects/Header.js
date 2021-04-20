class Header
{
    homeJHLnk()
    {
        return cy.get('a[href="https://jobhopin.com"]')
    }

    homeLnk()
    {
        return cy.get('div.jss41')
    }

    changeLanguageBtn()
    {
        return cy.get('div.jss29')
    }

    myCVsTag()
    {
        return cy.get('a[href="/my-cvs/search-project"]')
    }
}

export default Header;