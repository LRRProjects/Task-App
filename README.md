# Task-App
Created a server for a task tracking application that uses REST API. The application allows for the creation, reading, updating and
deleting of user and task. The user password data is encrypted using the bcrypt module before being inserted
into the MongoDB database, and the user is verified using JSON web tokens. The server allows for the upload of images.

The mongoose API was used to take advantage of the schema options and methods it provides, this was done to better deal with the MongoDB database. The JSON web token module was used to generate a unique token for the user using the user's ID and a secret phrase, this module also 
provides useful methods to deal with the JSON token e.g. the verify function which helps us 
verify the token when the user logs in. The bcrypt module was used to hash the user's password 
before it's send into the database. The validator module was used to validate the user's information before being entered into the database, e.g. the user's email. The express. Router() function was used to route the different end points. Images of the REST API operationes being performed:

Creating a new user:
![image](https://user-images.githubusercontent.com/102123401/164329922-a3b74862-b014-4aef-a961-6706576c8d0f.png)
![image](https://user-images.githubusercontent.com/102123401/164330117-701f64ea-49f3-4cc0-ba63-9dafa90bab25.png)

Reading the users profile:
![image](https://user-images.githubusercontent.com/102123401/164330569-6463416b-24c3-454b-90da-3dc103f46b76.png)

Updating the users profile:
![image](https://user-images.githubusercontent.com/102123401/164330998-80a77927-1ab5-461c-bbe6-65c79ed78263.png)
![image](https://user-images.githubusercontent.com/102123401/164331188-94ef73c8-8147-4169-9558-62c8b89a8608.png)

Deleting the user:
![image](https://user-images.githubusercontent.com/102123401/164332913-44c09d5d-4b04-43af-8d47-313696670fbd.png)
![image](https://user-images.githubusercontent.com/102123401/164332941-6b1659e1-dab7-4e92-be2d-f1e52e03bc60.png)

Creating a new task:
![image](https://user-images.githubusercontent.com/102123401/164332029-af1a3bb3-cbe1-4cbd-a546-8724f7c72bf1.png)
![image](https://user-images.githubusercontent.com/102123401/164332186-f5d3de4c-08fd-49a5-a26f-7165140cb441.png)

Reading the users task:
![image](https://user-images.githubusercontent.com/102123401/164332371-22441b8d-9326-4e6e-affb-76a595d9a0c7.png)

Updating the task:
![image](https://user-images.githubusercontent.com/102123401/164332623-f58af427-475f-43bc-9c14-3eda3f378141.png)
![image](https://user-images.githubusercontent.com/102123401/164332665-6ee061b0-afb0-4182-88f3-25cce39abf27.png)

Deleting tasks:
![image](https://user-images.githubusercontent.com/102123401/164332798-cc37ac4b-03a4-4748-9e89-ffc5eaec3bf0.png)
![image](https://user-images.githubusercontent.com/102123401/164332846-41dec831-0244-41d2-bde3-59f5271712f0.png)





