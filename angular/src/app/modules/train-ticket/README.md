# Train ticket

## Create the ticket 
Create the train ticket below as a reusable angular component.

![Train ticket](_resources/ticket.png)

The aim of this task is not complete visual accuracy, but splitting the component into meaningful subcomponents.


## Create form for the ticket
Create a form so that the user can add travel details and print a ticket.
The form should contain the following inputs:
- Price - positive number with maximum of `2 digits`
- From (Origin) - select with options:
  - London
  - Birmingham
  - Manchester
  - Leeds
  - Sheffield
  - Liverpool
  - Nottingham
- To (Destination) - select with the same options as `Origin`
- Date - date picker where the minimum date should be today's date
- Time - time picker where the minimum time should be 2 hours after the current time
- Passengers - positive number between 1 and 52, where 52 is all seats within the coach
- Seats - there will be `n` inputs for seats, where `n = number of passengers`

When the form is submitted, the ticket should be displayed with details filled in the form.
Additional information that needs to show on the ticket:
- Ticket number: Auto generated unique number of 5 digits
- Date of issue: The date the form was submitted in `en-GB` formatting conventions
- Time of issue: The time the form was submitted in `en-GB` formatting conventions
