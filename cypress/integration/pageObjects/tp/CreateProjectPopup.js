class CreateProjectPopup
{
    //page elements
    title()
    {
        return cy.get('div[id="alert-dialog-title"]')
    }

    projectNameInput()
    {
        return cy.get('input[name="project"]')
    }

    projectNameErrMsg()
    {
        return cy.get('h6.MuiTypography-subtitle2>div')
    }

    tagsInput()
    {
        return cy.get('input[name="tags"]')
    }

    firstSuggestTag()
    {
        return cy.get('div.scrollbar-container>div>p>span').first()
    }

    cancelBtn()
    {
        return cy.get('button>span').contains('Cancel')
    }

    saveBtn()
    {
        return cy.get('button>span').contains('Save')
    }

    //create new function
    createNewProject(projectName, tags, option)
    {
        this.projectNameInput().type(projectName)
        this.title().rightclick()

        for(var tag in tags)
        {
            this.tagsInput().type(tags[tag]).type('{enter}')
        }

        if(option == 'save')
            this.saveBtn().click()
        else
            this.cancelBtn().click()

    }
}

export default CreateProjectPopup;