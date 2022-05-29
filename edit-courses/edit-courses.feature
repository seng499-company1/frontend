@author:noah
@owner:noah (depend on how we want to do this, generally the feature owner is listed here)

Feature: Edit Courses

    Table used for managing courses and course data

    Background:
        Given the user is an admin
        And they are signed in
        And they have navigated to the "Edit Courses" tab

    @minutae
    Scenario: The table displays an empty state when there are no courses in the system

    @motivating
    Scenario: The course table displays a list of courses in the system
        Given course(s) exist in the system
        Then for each course there is a row in the table
        And each row enumerates the course ID, course name, faculty the course is a port of, and the terms the course is available

    @motivating
    Scenario: Users can view more info about a course in the table by clicking on it
        Given course(s) exist in the system
        And the course(s) are listed in the table
        When the user clicks on a table row
        Then the table row expands to show more info about that course including which programs require that course and any prerequisites for the course

    @motivating
    Scenario: Courses can be added to the system via the course table
        When the user clicks the "+ Add Course" button above the table
        Then the table is returned to the first page
        And a new, empty, row is added to the top of the table
        And the new row is in the expanded state

    @motivating
    Scenario: Users can delete a course from the system
        Given there is a row in the table expanded
        When the user clicks the "Delete" button in the bottom right of the row
        And they click continue in the subsequent modal that appears
        Then the course represented by that row is deleted in the system

    @minutae
    Scenario: Users can abandon deleting a course from the system

    @motivating
    Scenario: Existing courses can have their data updated
        Given a course exists in the system
        And the course's table row is expanded
        And the user has updated some/all of the course's information via in input found in the table row
        When the user clicks the "Save" button in the bottom right of the table row
        Then their changes to the course information are commited to the system
        And the read-only data at the top of the row is updated where appropriate

    @minutae
    Scenario: Users can abandon updating existing course data

    @motivating
    Scenario: Filters can be used to limit the courses displayed in the table
        Given there are course(s) in the system
        And the course(s) are listed in the table
        When the user selects a filter from a dropdown above the table
        Then the table content is updated to only show courses matching that filter
        And the user can select another filter
        And multiple filters can be active at once

    @minutae
    Scenario: An empty state is displayed if the current filters return an empty set

    @motivating
    Scenario: Users can search the course table
        Given there are course(s) in the system
        And the course(s) are listed in the table
        When the user enters a query into the search bar above the table
        Then the table content is updated to only show courses with data matching the user query

    @minutae
    Scenario: The course table becomes paginated if there are more than ten courses in the system

    @minutae
    Scenario: Users can view the number of courses and the current range of courses displayed in the table footer