Following along with the [Learn the MERN Stack](https://www.youtube.com/playlist?list=PL6jnTQwFvrdak_WQ0XK9WKzgbemndQ0rT) playlist.

- Create a [MongoDB Cluster](https://cloud.mongodb.com/)
- Connect your application by creating a .env file and copy/pasting the URI into it to make the connection

To run dev server use the command: nodemon server.js

After setting up your first Model/Route go to Atlas and 'Create Database' in this case:

- Database Name: mern_blog
- Collection Name: articles

In .env use the database name
mongodb.net/INSERT_DATABASE_NAME?retryWrites=true&w=majority

Then you can insert some documents to act as dummy content by following your schema as you insert dummy objects on Atlas.

Use something like postman or insomnia to test

Go on to build out the CRUD routes:

- Create a post route to add a test node.
- REQUEST FIND ARTICLE BY ID
- REQUEST ARTICLE BY ID AND UPDATE
- REQUEST ARTICLE BY ID AND DELETE IT

## Develop the Client Side

Use create-react-app to create the client folder

Use two terminals:

- in root: node server.js
- in client: yarn start
