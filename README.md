# Task-App
Created a server for a task tracking application that uses REST API. The application allows for the creation, reading, updating and
deleting of user and task. The user password data is encrypted using the bcrypt module before being inserted
into the MongoDB database, and the user is verified using JSON web tokens. The server allows for the upload of images.

The mongoose API was used to take advantage of the schema options and methods it provides, this was done to better deal with the MongoDB database. The JSON web token module was used to generate a unique token for the user using the user's ID and a secret phrase, this module also 
provides useful methods to deal with the JSON token e.g. the verify function which helps us 
verify the token when the user logs in. The bcrypt module was used to hash the user's password 
before it's send into the database. The validator module was used to validate the user's information before being entered into the database, e.g. the user's email. The express. Router() function was used to route the different end points.
