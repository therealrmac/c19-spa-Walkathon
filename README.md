# Walkathon exercise using iife (and I also used some jquery as well)
--

*App works well no erros have been found

### Instructions
1. Enter in your name, ammount you want to donate and determine wether you want it as a single donation or per lap
2. The entered results will display in the table on the left.

--
#### Requirements
>Create a donation submission page for a Walk-A-Thon that allows donors to enter their name, email, dollar amount & whether their donation is lump sum or per lap.

>Your project should have one HTML file that has:
1. A form for user information submission
2. The ability to select whether the donation will be a single amount or per lap
3. A table to display each donor's submission information
4. A button labeled Donate to process the submission
5. A button labeled Cancel to clear the submission form
The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}
All donor information objects should be stored in a private array in an IIFE.
Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.
The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.
You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

#### Styling

For display on the page, use Bootstrap to style the form and table elements. Use Bootstrap's grid system and styling classes to get the following effects.

1. At desktop size display the table on the left and form on the right with some space around the sides
2. The page should have the same display on a tablet in landscape mode, but with no space at the sides
3. On mobile/vertical tablet the table should display above the form
4. The table entries should be alternately striped
