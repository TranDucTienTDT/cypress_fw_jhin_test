class CreateProject
{
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
        return cy.get('h6.MuiTypography-root.jss1073.MuiTypography-subtitle2 > div')
    }

    tagsInput()
    {
        return cy.get('input[name="tags"]')
    }

    cancelBtn()
    {
        return cy.get('div.jss1434>button').first()
    }

    saveBtn()
    {
        return cy.get('div.jss1434>button').last()
    }
}

export default CreateProject;