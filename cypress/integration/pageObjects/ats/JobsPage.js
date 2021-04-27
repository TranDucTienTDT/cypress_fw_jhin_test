class JobsPage
{
    //elements
    postAJobBtn()
    {
        return cy.get('a[href="/post-job"]')
    }

    searchJobTxt()
    {
        return cy.get('input[type="text"]')
    }

    availableJobMatchSlot()
    {
        return cy.get('div.slot-text-container>span')
    }

    loader()
    {
        return cy.get('div[id="loader"]')
    }

    jobTypeDropdownList()
    {
        return cy.get('div.dropdown-wrapper')
    }

    jobTypeBtn()
    {
        return cy.get('div.wrapper.false>div>span')
    }

    jobUnderlineIndicator()
    {
        return cy.get('div[id="rfilter-bar"]>div>nav>div.indicator')
    }

    //div[id="rfilter-bar"]>div>nav>ul
    statusNavigatingBar()
    {
        return cy.get('ul.nav')
    }


    

    //functions
    searchJobTitle(jobTitle)
    {
        this.searchJobTxt().type(jobTitle).type('{enter}')
    }

    getStatusNavigatingItems(status)
    {
        return cy.get('ul.nav>li.col>span').contains(status)
    }
}

export default JobsPage;