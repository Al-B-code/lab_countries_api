# JavaScript

## Fetch Exercise

We've explored the fundamentals of JavaScript and had a refresher of HTML and CSS. Now that we're familiar with the DOM, let's take this a step further and attempt to bring all our learning together.

Using an external API, let's begin constructing a front-end app which populates a page with dynamic information. You'll be using **`fetch()` requests**, we're talking **DOM manipulation** and we're talking **user input**.

## Set-Up

This afternoon lab may seem quite intimidating so we're going to first lay out a start point for you. Instead of providing one, we're going to talk through the steps to get you familiar with the code patterns:

- **Step 1: HTML**

  - Open up VSCode and create a new HTML file
  - Using Emmet abbreviation (`!` or `html:5`) or by typing it yourself, set up a basic HTML template
  - Add a heading (`h1`) to the `body` followed by a `section`
  - Give your `section` a distinct `id`

- **Step 2: JS**

  - Again within VSCode, create a new JS file
  - Move back to your HTML file and connect your JS file using the `script` tag and your filepath in the `src` attribute
  - Remember to include `defer` to your `script` tag so it runs after the HTML loads!
  - Back in your JS file, add in a simple `console.log("HI!")`

- **Step 3: In the browser**

  - Open up your HTML file in the browser by right-clicking your file and then selecting `Open With > Google Chrome`
  - Your webpage will be blank save the heading added earlier
  - Right click the page in the browser and select `Inspect`
  - At the top right, select the `Console`
  - Check that your `"HI!"` statement is printed there
  - If the message doesn't appear, check that your files are saved and that the filepath in the `script` tag is correct

- **Step 4: Familiarisation of the Countries API**

  - Have a look at API endpoint which returns all held information on all countries within their set: [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
  - This will be difficult to parse so let's install the Chrome JSON Viewer extension [https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?pli=1]()
  - Refresh the endpoint page to see the output in a clearer format
  - Familiarise yourself with the rough structure of the output
  - Now, let's visit another endpoint [https://restcountries.com/v3.1/name/peru](https://restcountries.com/v3.1/name/peru)
  - Familiarise yourself with this structure and consider how this relates to the previous endpoint's output

## MVP
1. **`fetch()` a single country**
- In your JS file, create a function called `getCountryByName()`
- Give this function one argument, `countryName`
- Within the function place a `fetch()` request which points towards the `https://restcountries.com/v3.1/name/{countryName}` endpoint (you will need to choose which country to display). Follow the pattern we demonstrated in the `Promises Intro & Fetch` lesson (which uses the Random Dog API).
- Call your function at the bottom of your JS file, passing in a valid country name as an argument
- Log the result in the console to check all is working as you would expect
2. **Take the output from your `getCountryByName()` function and make use of it on the webpage** by displaying your country's `name`, `capital`, `languages` and `population` (NB: many countries have more then one language and your code should account for *any* `countryName` being passed in.

## Extensions
5. Neaten up your JavaScript functionality, making abstract functions for any repeated functionality
6. **Create a `getAllCountries()` function** which displays the details of **every** country to the frontend
7. Make your page display an error message should it meet an error on querying the API. Test this out by trying to access an endpoint which doesn't exist for the API

> **TIPS**
> - Remember you can use dot notation (`object.property`) to access the value of a specified `property`
> - The MDN Documentation has all you may need on JavaScript functionality. If you're unsure on any part, start there
> - The RESTCountries API has multiple values under the `name` property. You will most likely want to use `name.common`
> - You can check whether a fetch request is successful or not by accessing the `ok` property of the response which is either `true` or `false`
> - When creating functionality tied to the appearance of an error, this should be housed within a `try catch` block
