# Forum
_An assignment to conclude our Javascript instruction._

The assignment is to create a very basic forum, using HTML, CSS, and Javascript, with a Google Spreadsheet as a database. Users will fill out a simple form to submit their posts to the forum, which will load all of the posts stored in the 'database'.

This single page website will be created completely from scratch. You will create the HTML, CSS, and Javascript needed. Below is the API information you need to post and get from then spreadsheet.

### GET
- URL: https://spreadsheets.google.com/feeds/list/1NlIJLGd32t38kt6mJgc64SFpDM_ltq7nfzaRjV1wpLI/default/public/values?alt=json-in-script
- dataType: 'jsonp'

### POST
- URL: https://docs.google.com/forms/d/1W1jO8DwInFuzlabeYqEp6hUUUqDbR8gESs1Pk6qozOc/formResponse
- dataType: 'xml'
- additional data you need to send: {"entry_1358166143": title, "entry_1289920291": bodytext}

### Inspiration
- The web page's design must be inspired by the below illustration (get creative).
<img src="star_wars_force.jpg" width= "90%" style="max-width: 500px" />
- Credit for the site's design inspiration must be given somewhere on the site, with a link to Starwars.com.
