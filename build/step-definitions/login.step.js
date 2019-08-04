"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const login_page_1 = __importDefault(require("page-objects/login.page"));
const loginPage = new login_page_1.default();
cucumber_1.Given("I\'m on ask.com homepage", () => {
    loginPage.open();
});
cucumber_1.When('I input a term and I click Go', () => {
    loginPage.search('cucumber js');
});
cucumber_1.Then('I should see search results', () => {
    chai_1.expect(loginPage.searchResults().length).to.be.greaterThan(1);
});
