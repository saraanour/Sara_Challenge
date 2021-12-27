/// <reference types="cypress" />
it('should test App page', () => {
    cy.visit('https://play.google.com/store/apps')
    cy.get('.qKjvAb > .mzRh0d > .zyvEve > .pvVVcb').click()
    cy.title().should('include', ' Apps');

    cy.url()
    .should("be.equals",'https://play.google.com/store/apps')
  });

  it('should test Education Page', () => {
    cy.visit('https://play.google.com/store/apps')
    cy.get('.kgGUm').click()
    cy.get(':nth-child(1) > .TEOqAc > :nth-child(11) > .r2Osbf').click()

    cy.url()
    .should("be.equals",'https://play.google.com/store/apps/category/EDUCATION')

cy.title() .should("include", 'Education');
   
  });
