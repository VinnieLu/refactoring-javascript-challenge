# Refactoring JavaScript
## Summary
At Dev Bootcamp we're encouraged to write quality code.  Code that is highly readable.  Code that is easy to maintain and change.  We practice this while learning Ruby.  But, as we move through the program and begin to juggle Ruby, HTTP, CSS, JavaScript, etc., we can lose focus on writing good code.

This challenge provides an opportunity to focus on organizing code.  We'll apply our skills for writing good code to some working JavaScript code.


## Releases
### Pre-release: Review the Code
We'll be working with code that allows users to seek answers from a less-than-helpful 9-ball.  The functionality is provided by JavaScript code written in the file `js/application.js`.  Review the code to understand what it does.  Then, open `index.html` in the browser to see it working.  Yeah, it's a knockoff [Magic 8-ball][].


### Release 0: Refactor to Named Functions
The provided code works, but there's opportunity to improve its quality.  Focus on extracting functionality into named functions.  For example, we can name callback functions—what happens when the user clicks the button to ask a question?  We can create functions for repeated behaviors like grabbing a random item from an array.  We can name the conditions in our if...else statements.  What else?  Apply design principles to make the code readable and maintainable.


### Release 1: Refactor to Objects *(stretch)*
*This is an optional stretch release.*

Looking at our code from an object-oriented perspective, are there opportunities to organize the code into objects?  Review the code and determine the responsibilities.  Refactor the code to create objects to fulfill those responsibilities.  For example, maybe there's an object responsible for generating a response to a question.  What state and behaviors could be encapsulated into such an object?


## Conclusion
> Sometimes the value of having the feature right now is so great that it outweighs any future increase in costs [resulting from a bad design]. If lack of a feature will force you out of business today it doesn't matter how much it will cost to deal with the code tomorrow.  You must do the best you can in the time you have.  Making this kind of design compromise is like borrowing time from the future and is known as taking on *technical debt*.  This is a loan that will eventually need to be repaid, quite likely with interest.  (Metz, 2013 p.11)

At Dev Bootcamp we generally build an application today and move on to another tomorrow.  We rarely return to our old projects.  Therefore, we don't encounter the technical debt that accrues if we ignore the quality of our code to focus on just building out functionality.  However, we still need to practice writing good code—even as we struggle to complete core challenges and write code that just works.

---

- Metz, S. (2013). Practical object-oriented design in Ruby: an Agile primer. Upper Saddle River, NJ: Addison-Wesley.

[magic 8-ball]: https://www.amazon.com/gp/product/B00001ZWV7/
# refactoring-javascript-challenge
