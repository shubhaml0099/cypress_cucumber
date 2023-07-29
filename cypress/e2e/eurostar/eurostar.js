import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { Locators } from "../../support/locators";

Given("User visit eurostar.com for bookings", () => {

    cy.visit("/");
    cy.get(Locators.acceptAllCookies).click();
    //   cy.get(Locators.from).click();
    //   cy.contains("London St Pancras Int'l").click();
    // cy.get(Locators.toDestination).click();
    // cy.contains("Paris Gare du Nord").click();


    // cy.get(Locators.selectCalendar).click();
    // cy.get(Locators.goingOutDate).click();
    // cy.get(Locators.comingBackDate).click();
    // cy.get('button').contains("OK").click();


    // cy.get(Locators.passengersTypes).click();
    // cy.get(Locators.passengerAdults).click();
    // cy.get('button').contains("OK").click();


    // cy.get(".SearchButton").click();


    // cy.get('[data-testid="journey-price-amount"]', { timeout: 20000 }).first().click();
    // cy.get('div[id*="STD"] button').click();


    // cy.get('[data-testid="journey-price-amount"]').eq(3).click();
    // cy.get('div[id*="STD"] button').last().click();


    // cy.get('[name="continueButton"]').click();
    // cy.get('[name="continueButton"]').contains('Continue without extras').click();


    // cy.get('[data-testid="continue-as-guest"]').click();
    // cy.screenshot();

});

When("User Select starting location", () => {
    cy.get(Locators.from).click();
    cy.contains("London St Pancras Int'l").click();
})
And("User Select destination location", () => {
    cy.get(Locators.toDestination).click();
    cy.contains("Paris Gare du Nord").click();
})

And("User Select travel dates", () => {
    cy.get(Locators.selectCalendar).click();
    cy.get(Locators.goingOutDate).click();
    cy.get(Locators.comingBackDate).click();
    cy.get('button').contains("OK").click();
})
And("User Select passenger type and number of passenges", () => {
    cy.get(Locators.passengersTypes).click();
    cy.get(Locators.passengerAdults).click();
    cy.get('button').contains("OK").click();

})
And("User Search for available trains", () => {
    cy.get(".SearchButton").click();
})
And("User Select starting location to destination location train with desired amount", () => {
    cy.get('[data-testid="journey-price-amount"]', { timeout: 20000 }).first().click();
     cy.get('div[id*="STD"] button').click();
})
And("User Select destination location to starting location train with desired amount", () => {
     cy.get('[data-testid="journey-price-amount"]').eq(3).click();
     cy.get('div[id*="STD"] button').last().click();
})
And("User books train ticket as a guest", () => {
     cy.get('[name="continueButton"]').click();
    cy.get('[name="continueButton"]').contains('Continue without extras').click();
    cy.get('[data-testid="continue-as-guest"]').click();
})
Then("User takes Screenshot of booking details", () => {
     cy.screenshot();
})
