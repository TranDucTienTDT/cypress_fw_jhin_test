describe('Visit sandbox talent partner website', ()=>{

    before(() =>{
        cy.fixture("example").then((data)=>{
            this.data = data
        })
    })
    it('Go to login page', () => {
        cy.visit("") //baseUrl + page
        cy.get(this.data.name)
    })
})