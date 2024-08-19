# Scrawl, A free and simple-to-use note-taking app!

## Running it locally:
1. Download `Node.Js` from nodejs.org and database: `MongoDB` from mongodb.com. You will also need a Google console account to create the API Auth Keys: https://console.cloud.google.com/
Follow documentation: https://www.passportjs.org/packages/passport-google-oauth20/

2. Clone the repository to your local machine. `git@github.com:VanessaBolos/Scrawl.git`

3. Change directory or "cd" to the project file in your terminal.

4. Initialize a node.js project by running `npm init -y`
The `-y` flag tells npm to use default values for the project’s package.json file without asking any questions. Great for quick setup.

5. Install the required dependencies by running `npm install` in your terminal. Dependencies shown below.

6. Create a `.env` file to store your credentials. Example below:
```
MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
GOOGLE_CLIENT_ID= YOUR_GOOGLE_ID_HERE
GOOGLE_CLIENT_SECRET= YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback
```
7. Add a `.gitignore` file in project directory add `node_modules/` and a `.env`

8. Enable to run the project automatically by adding a start script in your package.json file. For example:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
```
9. Run the project by executing `npm start` in your terminal.

## Dependencies:
```
npm install connect-mongo dotenv ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20 nodemon passport-local connect-flash

```
10. Visit in your browser at: http://localhost:5000

11. Create a login or register with any email to use!

# Enjoy!

## Author's notes:

Wins:
- Implemented a simple note-taking app with user authentication using Passport.js and Google OAuth.
- Utilized MongoDB as the database to store user data and notes.
- Implemented a simple layout using EJS templates.
- Used Express.js as the web framework to handle requests and responses.
- Code is separated and routed properly for better readability purposes.
- Implemented error handling in various cases.
- Implemented version control (GitHub).
- Successfully created routes for CRUD operations and implemented RESTful API endpoints for managing notes.

Difficulties:
- Setting up Passport.js and Google OAuth was a challenge, had to resort to watching youtube videos after trying to read the documentation.
- MongoDB was a bit tricky to set up, had to make sure to I was connected to the right connection.
- EJS templates were a confusing to set up, I got lost from all the folders I've created.
- I had to make sure to install all the dependencies and make sure they were all connected properly.
- I had to make sure to set up the environment variables properly.
- A lot of trial and error trying to make Google auth and passport-local auth work in the same page (login/signup).
- Took a long time to decide how it should look like. Did not end up focusing on CSS.
- Had to go back on previous lessons and watch tutorials how to achieve several parts of the project.
- ChatGPT is once again my debugger.
