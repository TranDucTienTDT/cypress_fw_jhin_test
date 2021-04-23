class JobInterviewPage
{
    searchJob(jobName)
    {
        cy.get('input[id="searchbar"]').type(jobName).type('{enter}')
        cy.get('a').contains(jobName).click()
        return this
    }

    inputValue(salary,
        creditsPerInterview,
        creditsPending,
        totalInterviewBudget,
        totalCHargedCredits,
        creditsBalance,
        active)
    {
        cy.get('input[id="id_salary"]').clear().type(salary)
        cy.get('input[id="id_credits_per_interview"]').clear().type(creditsPerInterview)
        cy.get('input[id="id_credits_pending"]').clear().type(creditsPending)
        cy.get('input[id="id_total_interview_budget"]').clear().type(totalInterviewBudget)
        cy.get('input[id="id_total_charged_credits"]').clear().type(totalCHargedCredits)
        cy.get('input[id="id_credits_balance"]').clear().type(creditsBalance)
        if(active == true)
        {
            cy.get('input[id="id_active"]').check()
        }  
        return this  
    }

    save(option)
    {
        if(option == 'Save')
        {
            cy.get('input[name="_save"]').click()
        }
        else if(option == 'Save and add another')
        {
            cy.get('input[name="_addanother"]').click()
        }
        else if(option == 'Save and continue editing')
        {
            cy.get('input[name="_continue"]').click()
        }
    }
}

export default JobInterviewPage