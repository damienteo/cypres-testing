Feature: End to End Ecommerce Validation

Application Regression

Scenario: Ecommerce products delivery
Given I open Ecommerce Page
When I add items to Cart
And Validate the total prices
Then select the country submit and verify with thanks

Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
Then validate the forms behaviour
And select the Shop Page
