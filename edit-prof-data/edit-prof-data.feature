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
	
	@motivating
	Scenario Outline: View an individual professors data
	Given an admin user is logged in
	and an admin has clicked on te edit professor tab
	When an admin clicks on a professor name
	Then the admin should be able to view an individual professors data
	
	Scenario Outline: Update the courses a professor is willing to teach
	Given an admin user is logged in
	and an admin has clicked on te edit professor tab
	and the admin can see the data entered by the professor
	When an admin clicks on the add or x button
	Then the course information should be updated
	
	Scenario Outline: Update the day and time that a professor is able to teach
	Given an admin user is logged in
	and an admin has clicked on te edit professor tab
	and the admin can see the data entered by the professor
	When an admin clicks on the professors schedule
	Then the admin should be able to change the schedule data as they would like
	



    
    
