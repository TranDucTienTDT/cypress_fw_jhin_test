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

    chooseIndustryDropdown()
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

    noteTxt()
    {
        return cy.get('div.job-requirement>div>div>div.ql-editor')
    }

    othersBenefitChk()
    {
        return cy.get('span.text').contains('Others').prev()
    }

    enterJobKeywords()
    {
        return cy.get('div.job-keywords>div>input')
    }

    enterWorkingHour()
    {
        return cy.get('div.job-working-hour>div>input')
    }
    
    salarySlider()
    {
        return cy.get('span.slider')
    }

    minSalaryTxt()
    {
        return cy.get('input[name="minSalary"]')
    }

    maxSalaryTxt()
    {
        return cy.get('input[name="maxSalary"]')
    }

    usdRadioBtn()
    {
        return cy.get('label[for="salary-usd"] span')
    }

    vndRadioBtn()
    {
        return cy.get('label[for="salary-vnd"] span')
    }

    chooseFileBtn()
    {
        return cy.get('div[class="choose-file"] div button[type="button"]')
    } 

    //functions
    getCheckBox(checkBoxName)
    {
        return cy.get('span.text').contains(checkBoxName).next()
    }

    

}

export default PostJobPage;