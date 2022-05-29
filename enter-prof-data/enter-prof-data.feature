@author:shayla
@owner:riley (I'm assuming scrum master name goes here)
Feature: Edit Professor Data
    @minutae
    @motivating


    	@motivating
    	Scenario Outline: View enter professor data form
    	Given a user is on the welcome page
    	When a user clicked on the button enter professor data
    	Then the user should be able to view the enter professor data form
	
    	@motivating
    	Scenario Outline: Professor enters availibility
	Given a user is on the enter professor data form
	When a user sees the list of classes
	Then the user should be able to select if they are qualified or unqualified to teach a course

   	@motivating
   	Scenario Outline: Professor can view the page to select willingness to teach
	Given a user is on the enter professor data form
	And the user has entered which classes they are qualified or unqualified to teach
	When a user hits the next button
	Then the user should be able to view the page that lists courses they are willing or not willing to teach

    	@motivating
    	Scenario Outline: Professor views a summary of their entries
	Given a user has gone through the whole form
	When a user hits next on the last page of the form
	Then the user should be able to view a summary of their entries
	
	@motivating
    	Scenario Outline: Professor submits form
	Given a professor has entered in all their information into the form
	and the professor can see the summary page
	When the professor clicks submit
	Then the form will be submitted
	
