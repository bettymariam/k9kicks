# k9kicks
The premier site for puppy paw fashion!

<a href="https://shop-k9kicks.herokuapp.com">
    <img src="./src/images/home.png" target_blank />
</a>


# setup
To run k9kicks locally :

1. Fork and clone the repo.

2. Run NPM Install

3. Create a postgresql database called k9kicks
  ```
  createdb k9kicks
  ```
4. Run migration files
  ```
  npm run knex migrate:latest
  ```
5. Run seed files
  ```
  npm run knex seed:run
  ```
6. Start the servers

  * Express server can be started with :
  ```
  npm run start
  ```
  * React server can be started with :
  ```
  npm run react
  ```
7. In a browser navigate to:
  ```
  localhost:3000
  ```

Go fetch some great stuff!


# the team and the purpose
k9kicks was created by Betty Chempananical, Erica Rottman, and Amber Murray. The aim of this project was to answer the age-old question:  What happens when your pooch pal's paws are barking?  How do you keep your dog looking great and feeling amazing at the dog park?  K9Kicks is the answer! This super user friendly e-commerce site makes outfitting your furry friend in the latest fashion trends a walk in the dog park!


# tech stack
Database: Postgres, Knex  
Back-end Server: Express / Node.js  
Overall: ES6, JSX (yep - we did that!)  
Front-End: React, React-Bootstrap, HTML5, CSS3, and our good friend JavaScript  
Deployment to the Interwebs: Heroku
