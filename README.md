- Create a [MongoDB Cluster](https://cloud.mongodb.com/)
- Connect your application by creating a .env file and copy/pasting the URI into it to make the connection

After setting up your first Model/Route go to Atlas and 'Create Database' in this case:

- Database Name: mern_blog
- Collection Name: articles

In .env use the database name
mongodb.net/INSERT_DATABASE_NAME?retryWrites=true&w=majority

Then you can insert some documents to act as dummy content by following your schema as you insert dummy objects on Atlas.

Use something like postman or insomnia to test
