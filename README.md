# Wusical questions API :musical_note:

## Description
Women in music questions API or Wusical questions API is for quiz/trivia apps. It has questions, multiple choice answers and respective hints (PT-BR/EN) about female artists in music, from Aretha Franklin to Dua Lipa (*I got you, moonlight* :wink:).
#### Deployed in Heroku: [Wusical API](https://wusical-questions-api.herokuapp.com/questions)

## Tools

<div style="display: inline_block">
  <img height="30" width="90" alt="Nodejs" src="https://img.shields.io/badge/-Node.js-000000?style=flat-square&logo=Node.js" />
  <img height="30" width="90" alt="Express" src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express" />
  <img height="30" width="90" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-000000?style=flat-square&logo=mongodb" />
  <img height="30" width="90" alt="npm" src="https://img.shields.io/badge/npm-000000?style=flat-square&logo=npm" />
  <img height="30" width="90" alt="Heroku" src="https://img.shields.io/badge/-Heroku-000000?style=flat-square&logo=heroku&logoColor=410093" />
</div>

## Routes

URL | HTTP VERB | RESULT | ADMIN ONLY?
--- | --- | --- | ---
/questions | GET | return all questions | No
/questions/amount?total={quantity} | GET | return random questions according to quantity (2, 5, 10...) | No
/questions/:id | GET | return a specific question | No
/questions | POST | create a new question | Yes
/quesitons/:id | PATCH | update a specific question | Yes
/questions/:id | DELETE | delete a specific question | Yes

## Try it yourself
**To run locally follow these steps:**

1. Clone the repository with ``git clone https://github.com/isabellymonteiro/wusical-questions-api.git``
2. Navigate to the project root directory with ``cd wusical-questions-api``
3. Install dependencies with ``npm install``
4. Now you need to create and configure the database you are going to use. I used MongoDB and you can do the same (it's free) following these steps:
    * Install MongoDB, tutorial: [How To Install MongoDB In 2 Minutes](https://www.youtube.com/watch?v=wcx3f0eUiAw&list=PLZlA0Gpn_vH9KXLvfhRS1J10UJZ0bZTj9)
    * Sign up, create cluster, add database user and IP address (you can allow access from anywhere). No need to load sample data. To do that, tutorial (1:34 to 4:25): [Intro to MongoDB Atlas](https://www.youtube.com/watch?v=xrc7dIO_tXk&list=PL4RCxklHWZ9v2lcat4oEVGQhZg6r4IQGV)
    * Go to 'Deployment / Databases' and click on 'Browse Collections'
![image](https://user-images.githubusercontent.com/82273361/158882986-787b5b1a-63f7-40d9-807f-b3aea57e7a19.png)
    * After that, click on 'Create Database' and type the name of the database and collection (you choose, ex.: Wusical (database) and questions (collection))
5. Let's load some data. Install MongoDB Compass and connect to your cluster (1:38 to 2:38 of the tutorial: [Compass](https://www.youtube.com/watch?v=YBOiX8DwinE&list=PL4RCxklHWZ9v2lcat4oEVGQhZg6r4IQGV), remember to replace with your username and password. After connecting, click on your database, then click on your collection and then on 'Import Data'. Select the file ``questionsData.json`` that is in this repository
6. You are almost there! Now go back to 'Deployment / Database' (on MongoDB web) and click 'Connect'. Click on 'Connect your application' and copy your connection string
7. Create a ``.env`` file in the project root directory and add the database user and password you have just created (replace < username > and < password >). You should also replace 'myFirstDatabase...' (and all that is in front of it) with the name of the database and collection you have chosen. For example, if the database name is 'Wusical' and the colletion name is 'questions': ``DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.sevwv.mongodb.net/wusical-questions``. Also, specify your port, ex.: PORT=5000. The ``.env`` file should look like this (replace < username > and < password >):
![image](https://user-images.githubusercontent.com/82273361/158887354-ac4d9b5f-c2b1-41a5-9dcf-4d693f7d439e.png)
8. Finally, in your project go to src/server.js and uncomment (remove the '//') the line ``// require('dotenv').config()``
9. Now, just run the app with ``npm run dev``. It will connect to the database and then you can go to `http://localhost:5000/questions` (route GET all questions) in your browser. You can try all the routes with HTTP verb GET in the browser url. To try the other routes, you can use *Postman* or other API Client, or even a VS Code extension called [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Contribute
1. Fork this project
    * You can do it by clicking on the *Fork* button at the top of this page. This will create a copy of this repository in your Github account
    * Now clone the forked repository (in your Github account) to your machine.
2. Create a new branch to add your changes: ``git checkout -b your-branch-name``
3. Commit your changes: add them with ``git add .`` and commit them with ``git commit -m "specify the feature you added``
4. Push your changes with ``git push origin <add-your-branch-name>``
5. Submit your changes for review: go to your repository on Github and you will see 'Compare and pull request'. Click on that and at the bottom of the page click on 'Create pull request'.
