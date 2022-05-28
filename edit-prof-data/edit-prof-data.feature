@author:shayla
@owner:riley (I'm assuming scrum master name goes here)
Feature: Edit Professor Data
    @minutae
    @motivating
    
    	@motivating
	Scenario Outline: View list of professors
	Given an admin user is logged in
	When an admin clicks on the edit professor tab
	Then the admin should be able to see a list of all professors
	
   	@motivating
    	Scenario Outline: Add a professor to the list
	Given an admin user is logged in
	When an admin clicks on the edit professor tab
	And the admin clicks on the add button
	Then the admin should be able to enter the name of an instructor they would like to add
	
	@motivating
    	Scenario Outline: Add a professor to the list
	Given an admin user is logged in
	When an admin clicks on the edit professor tab
	And the admin clicks on the add button
	Then the admin should be able to enter the name of an instructor they would like to add
    
    
