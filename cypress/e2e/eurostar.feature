Feature: Eurostar train bookin functionality

  User should able to book train tickets

  Scenario: train booking
    Given User visit eurostar.com for bookings
    When User Select starting location
    And User Select destination location
    And User Select travel dates
    And User Select passenger type and number of passenges
    And User Search for available trains
    And User Select starting location to destination location train with desired amount
    And User Select destination location to starting location train with desired amount
    And User books train ticket as a guest
    Then User takes Screenshot of booking details
