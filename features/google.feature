Feature: Search Google
    In order to find what i need
    As a tester
    I want to be able to search for questions on Google
    Scenario: Search for a term
        Given I'm on ask.com homepage
        When I input a term and I click Go
        Then I should see search results
