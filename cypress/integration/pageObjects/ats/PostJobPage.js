class PostJobPage
{
    //elements
    companyShowingDropdownBtn()
    {
        return cy.get('div.dropdown-company-showing')
    }

    companyShowingDropdownLst()
    {
        return cy.get('div.dropdown-company-showing>ul.dropdown')
    }

    saveAsDraftBtn()
    {
        return cy.get('button.outline.primary-button.button > span').contains('Save As Draft')
    }

    saveNPublishBtn()
    {
        return cy.get('button.outline.primary-button.button > span').contains('Save & Publish')
    }

    enterJobTitleTxt()
    {
        return cy.get('input.prompt')
    }

    enterLocationTxt()
    {
        return cy.get('input.pac-target-input')
    }

    chooseLevelDropdown()
    {
        return cy.get('div.select-input>div>div').contains('- Choose level -')
    }

    chooseLevelDropdown()
    {
        return cy.get('div.select-input>div>div').contains('- Choose industry -')
    }

    chooseEmploymentTypeDropdown()
    {
        return cy.get('div.select-input>div>div').contains('- Choose employment type -')
    }

    enterHeadcountTxt()
    {
        return cy.get('input[placeholder="Enter number of headcount"]')
    }

    jobDescriptionTxt()
    {
        return cy.get('div.job-description>div>div>div.ql-editor')
    }

    jobRequirementsTxt()
    {
        return cy.get('div.job-requirement>div>div>div.ql-editor')
    }

    jobRequirementsTxt()
    {
        return cy.get('div.job-requirement>div>div>div.ql-editor')
    }

    //functions

}

export default PostJobPage;