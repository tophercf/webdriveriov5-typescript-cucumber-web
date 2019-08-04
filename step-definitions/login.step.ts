import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import Login from 'page-objects/login.page';

const loginPage = new Login();

Given("I\'m on ask.com homepage", () => {
    loginPage.open();
});

When('I input a term and I click Go', () => {
    loginPage.search('cucumber js');
});

Then('I should see search results', () => {
    expect(loginPage.searchResults().length).to.be.greaterThan(1);
});