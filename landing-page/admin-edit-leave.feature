@author:Riley
@owner:Riley

Feature: Approve/deny Leave

  Background:
    Given Admin account is logged in
    And New professor data entered since last log in time

  Scenario: Admin is shown alert of new professor data
    When Admin landing page is loaded
    Then Alert element is loaded onto landing page
    And The number in Alert equals the number of new professor data is since last log in time

  Scenario: Admin is shown list of new professor data
    When Admin landing page is loaded
    Then List of new professor data is loaded onto landing page
    And The number of list elements equals the number of new professor data is since last log in time

  Scenario: Admin Opens professor data details
    When Expand element is clicked
    Then Every details entered by professor is shown

  Scenario: Admin User Approves details
    When Approve button is clicked
    Then Professor data element is removed from the List
    And Confirmation message is shown to user


  Scenario: Admin User Denies details
    When Deny button is clicked
    Then Professor data element is removed from the List
    And Confirmation message is shown to user
