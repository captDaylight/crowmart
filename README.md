# Take Home Test
#### Paul Christophe

## Setup

1. run `npm i`
2. run `npm run dev`
3. navigate your browser to [http://localhost:1234/](http://localhost:1234/)

_________
### Instructions
For this assignment we’d like for you to extend the functionality of our super basic ecommerce site scaffold found here: https://github.com/october8ai/crowmart

There are two pieces of functionality that we’d like for you to add:
- Implement the Add to Cart feature
- Integrate with our Sandbox API

### Implement the Add to Cart feature
There’s currently a button for adding an item to the cart, but it doesn’t do anything.  There is also a cart page, but it’s currently hard coded.  For this part of the assignment please extend the functionality of the site so that the add to cart button will add the item to local state, and modify the cart page so that it shows the current number of items in the cart, and the total price of items in the cart.  You do not need to worry about “remove from cart” or “clear cart” functionality.

### Integrate with our sandbox API
For this part of the code assignment, we want you to integrate with our API. You can find the API documentation here: [Sandbox API Specs](https://t.lever-analytics.com/email-link?dest=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1Ii7GJ8Ct4dOohq0MpbIMmqGCU0OqaokI%2Fview%3Fusp%3Dsharing&eid=a584a9c4-957e-4fe8-9966-ea6a02d82288&idx=1&token=iO-w0zdOutED7QYVO4ShJDmLZg0). Use blackcrow as the site name parameter.

Continuing to extend the basic CrowMart site, please integrate the website using browser side javascript with the Black Crow API.

The Javascript should send a “view” request on every page load and/or every page change. Fill in the view request parameters as much as you can with elements present on the page and/or get creative and define your own appropriate parameters.

### Submission
Your solution should use either Vanilla JS or Typescript. It should work properly in at least Google Chrome. We should be able to make it work locally with the instructions you provide. Make sure to add some structure to your code to showcase your abstraction skills!

Please package the demo site, instructions and code and send it back to us through email (you can share through a Google Drive link)
