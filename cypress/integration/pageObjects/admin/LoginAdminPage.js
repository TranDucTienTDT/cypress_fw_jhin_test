class LoginAdminPage
{
    login()
    {
        cy.visit('https://admin-staging.jobhopin.com/jobhop/jobinterview/')
        cy.get('input[id="id_username"]').type('tien.tran')
        cy.get('input[id="id_password"]').type('test@123')
        cy.get('input[type="submit"]').click()
    }
}

export default LoginAdminPage;