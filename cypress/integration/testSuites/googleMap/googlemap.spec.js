describe('Google Maps Testing', () => {
    it('Visit Google Maps', () => {
        cy.visit('https://www.google.com/maps').wait(10000)
        cy.get('#searchboxinput').type('Ho Chi Minh').type('{enter}').wait(10000)
        cy.get('canvas.widget-scene-canvas')
        //cy.get('canvas.widget-scene-canvas').rightclick('right')

        //cy.contains('Directions from here').click()
    })
})