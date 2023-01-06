# Pawsibility Front End Project
Pawsibility is a pet finder app that allows you to search adoptable pets and shelters by zipcode. I was inspired to do this because I was in the middle of my own pet search. 

To make the app, I used HTML, JavaScript, CSS, and Tailwind CSS. I also utilized Postman and of course, the Petfinder API. I learned a lot, including how to use the question mark turnery operator in JavaScript as the Petfinder API was inconsistent in where it stored data like photos. I learned to use the elements section of the developer tools in Chrome to test CSS formatting.


I decided on the Petfinder API because it seemed to most robust of the options I had. There was a ton of information to use and manipulate on the page. Tailwind was something I really wanted to try because I struggle with CSS. I wanted to make sure the project was a well rounded representation of what I’ve learned since November, so I used a little custom CSS to showcase that as well.

# Challenges
The first big challenge was simply accessing the API. I was more familiar with using an API key to access the database, but Petfinder’s API utilizes an API key and an access token. Once I was able to get a tab in Postman set up where all I needed to do was send and it would populate the bearer token, it was much smoother sailing. Then, I was having issues getting images on the screen. The API was returning null on most of all the photos. That seemed the be a problem with the API as simply waiting saw the return of the image links. Still, there was a lot of inconsistency surrounding where the photo URLS were stored in the API. There was a ‘photo’ section as well as a ‘primary_photo_cropped’ section to pull from. This is where the turnery operator came in handy. I was able to set an alternate 404 image so there would at least be something there rather than a broken image icon. If I had more time, I’d play with that turnery more and see if I could add a second option to pull from before the error image displays. 

# How to Install and Run
1.	Navigate to https://www.petfinder.com/developers/ and click the “Get An API Key” button
2.	Create an account
3.	Once account is created, you can click “For Developers”
4.	Fill out the details of your project and what context you’ll be using the API for (personal, business, school, etc.) and click “Request a Key”
5.	The API key will display on the next page along with a “secret.” This is used to request private information, which I won’t go into as this project is focused on the frontend. You will need this secret to set up Postman for the bearer token. 
6.	If you haven’t already, install Postman (https://www.postman.com/downloads/)
7.	Create a new request to match this screen shot (type in your own client ID (API Key) and secret:

!(.\PostmanScreenShot.png)

8.	Click send and you should see an access token appear in the terminal (Note: This token expires every hour)
