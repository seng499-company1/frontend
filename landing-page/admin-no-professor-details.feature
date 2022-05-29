@author:Riley
@owner:Riley

Feature: no new Professor details

  Background:
    Given Admin account is logged in
    And No New professor data entered since last log in time

  Scenario: Admin is shown No alert element
    When Admin landing page is loaded
    Then No alert element is loaded onto landing page

  Scenario: Admin is shown empty list
    When Admin landing page is loaded
    Then List of new professor data is loaded onto landing page
    And The number of list elements equals 0
