/// <reference types="cypress" />
it('should search for Selenium', () => { //negative scenario
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Selenium WebDriver').type('{enter}')
  cy.get('body').contains('Selenium - Web Browser Automation');
   cy.go('back')
   cy.end()
  });

  it('should search for Selenium', () => { //Positive Scenario
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Selenium WebDriver').type('{enter}')
  cy.get('body').contains('WebDriver | Selenium');
   cy.go('back')
  });
