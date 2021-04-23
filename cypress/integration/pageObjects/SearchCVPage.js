class SearchCVPage
{
    criteriaSelectBox()
    {
        return cy.get('div[id="mui-component-select-criteria"]')
    }

    searchCVTextBox()
    {
        return cy.get('input.MuiOutlinedInput-input').first()
    }

    searchCVBtn()
    {
        return cy.contains('Search CV')
    }

    filterBtn()
    {
        return cy.get('.icon-icon_filter')
    }

    levelFilter()
    {
        return cy.get('input[placeholder="- Choose Level -"]')
    }

    industryFilter()
    {
        return cy.get('input[placeholder="- Choose Industry -"]')
    }

    locationFilter()
    {
        return cy.get('input[placeholder="- Choose Location -"]')
    }

    hopInFilter()
    {
        return cy.contains('- Choose Hop-in -')
    }

    experienceFilter()
    {
        return cy.contains('- Choose Experience -')
    }

    averageSalaryFilter()
    {
        return cy.contains('- Choose Average Salary -')
    }

    clearAllFilterBtn()
    {
        return cy.contains('Clear all Filter')
    }

    applyFilterBtn()
    {
        return cy.contains('Apply Filter')
    }

    

}

export default SearchCVPage;