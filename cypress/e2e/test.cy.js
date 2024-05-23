/// <reference types="cypress" />
import 'cypress-xpath';


describe('1to50 website', () => {
  beforeEach(() => {
   
    cy.visit('https://zzzscore.com/1to50/en/')
  })

  it('Automation', () => {
    for (let i = 1; i <= 50; i++) {
        // Gunakan XPath untuk menemukan elemen <div> yang mengandung teks tepat angka i dan mengkliknya
        cy.xpath(`//*[@id="grid"]/div[normalize-space(text())="${i}"]`).click();}

    //cy.get('[data-testid="product-pill-Car Rental"]').should("be.visible")
    //cy.get('[data-testid="product-pill-Car Rental"]').click({force: true})
    
  })

})
