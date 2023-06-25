# Personal Portfolio Website
The [website](https://pratham-jaiswal.onrender.com/) showcases my skills, projects, and provides information about me. It is designed to highlight my experience and expertise in development and programming.

<br/><br/>

## Features
- A single page, smooth, and elegant website
- Responsive for all devices
- Fetches data from database
- Lists all my skills
- Lists all my projects
- Hover over the project card to see the features of each project
- For touch devices click on the flip button to see the features of each project
- Click on the project card to visit the github repository of the project
- Lists all my socials

<br/><br/>

## Getting Started
To run this on your local system, firstly clone this repository to your local machine:
```bash
git clone https://github.com/pratham-jaiswal/sharepad.git
```

<br/><br/>

## Library Prerequisites
1. Node.js
2. Express
3. EJS
4. Dotenv
5. Mongoose
6. Nodemon (optional)
    You can install these dependencies using npm:
    ```bash
    npm init
    npm install express ejs bcrypt dotenv mongoose nodemon
    ```
<br/><br/>

## Connecting The Database
Firstly, connect your mongodb server. There are two ways to connect to a MongoDB server: locally and using an Atlas cluster.
1. Local MongoDB Server: In this approach, you install MongoDB directly on your local machine or a server within your own infrastructure. You start a MongoDB server instance on that machine, and your application can connect to the MongoDB server using the appropriate connection parameters (mongodb://localhost:`<port>`/`<database-name>`). Click [here](https://www.mongodb.com/docs/manual/) to read the MongoDB documentation. You can either use [MongoDb Shell (mongosh)](https://www.mongodb.com/docs/mongodb-shell/) or [MongoDB Compass](https://www.mongodb.com/docs/compass/current/) (Recommended) to connect server.

2. MongoDB Atlas: MongoDB Atlas is a fully managed cloud-based MongoDB service. It provides a convenient and scalable way to host your MongoDB databases in the cloud without the need for managing the underlying infrastructure. You connect to your Atlas cluster using the provided connection string, which includes details like the hostnames, credentials, and other necessary configuration information (mongodb+srv://`<username>`:"+`<password>`+"@`<cluster-address>`/`<database-name>`). Click [here](https://www.mongodb.com/docs/atlas/) to read the MongoDB Atlas documentation.

<br/><br/>

## Starting localhost

To run your Node.js application on localhost, follow these steps:
1. Open your terminal or command prompt and navigate to the directory where your app.js file is located.
2. Run the following command to start the application:
    ```bash
    node app.js
    ```
    This will start your Node.js application, and it will be accessible at http://localhost:3000 (3000 or whichever port is specified).

**OR** (Recommended)

1. Update the package.json file by setting the "main" property to "app.js":
    ```json
    {
      ...
      "main": "app.js",
      ...
    }
    ```

2. To avoid the need to manually stop and restart a Node.js application every time a change is made to the code, nodemon should be used. Open your terminal/command prompt in that directory and run the following command:
    ```bash
    nodemon
    ```
    Nodemon will monitor your files for changes, and it will automatically restart the application whenever a change is detected. This saves you time and effort, allowing you to focus on writing code and testing it without the need for manual application restarts.

<br/><br/>

## Screenshots
| ![Imgur](https://i.imgur.com/2ZphiRY.png) |
|:--:|
| <i>Home</i>|
<br/><br/>

| ![Imgur](https://i.imgur.com/4Tv5mxF.png) |
|:--:|
| <i>About</i>|
<br/><br/>

| ![Imgur](https://i.imgur.com/EuJRYJK.png) |
|:--:|
| <i>Projects</i>|
<br/><br/>

| ![Imgur](https://i.imgur.com/Fg0AWKg.png) |
|:--:|
| <i>Project - Flipped Card</i>|
<br/><br/>

| ![Imgur](https://i.imgur.com/jIJ5hmL.png) |
|:--:|
| <i>Contact</i>|
<br/><br/>