/// <reference types="cypress" />
import 'cypress-xpath';


describe('1to50 website', () => {
  beforeEach(() => {
   
    cy.visit('https://zzzscore.com/1to50/en/')
  })

  it('Automation', () => {
    for (let i = 1; i <= 50; i++) {
        
        cy.xpath(`//*[@id="grid"]/div[normalize-space(text())="${i}"]`).click();}

    
  })

})
