
## WELCOME TO THE BOOKSTORE APPLICATION

Website: https://library-book-api.herokuapp.com/

* * *

### CONTENT

* * *

- [Project Outline](https://github.com/liam345/BookstoreApplication#Project_Outline)
    - [Tech Stack](https://github.com/liam345/BookstoreApplication#Tech_Stack)
    - [Objective](https://github.com/liam345/BookstoreApplication#Objective)
- [Resources](https://github.com/liam345/BookstoreApplication#Resources)
- [Workflow](https://github.com/liam345/BookstoreApplication#Workflow)
- [ERD](https://github.com/liam345/BookstoreApplication#ERD)
- [Challenges](https://github.com/liam345/BookstoreApplication#Challenges)
- [Future Improvements](https://github.com/liam345/BookstoreApplication#Improvements)

***
### [](https://github.com/liam345/BookstoreApplication#Project-Outline)PROJECT OUTLINE
___
#### [](https://github.com/liam345/BookstoreApplication#Tech_Stack)TECH STACK

#### 

```
Front-end
- React
- Javascript
- Redux
- Styled Components
- Ant Design Library

Back-end
- Express
- PostgresQL
- Node.js
- Sequelize

API 
- Stripe API (payment)
- SendGrid ( for mailing)

Npm Packages used
- React Router
- Redux-form
- Passport.js (for authentication)
- EsLint and Prettier
- Bcrypt-nodejs (salting and hashing password)

```


#### []((https://github.com/liam345/BookstoreApplication#Objective)) OBJECTIVE

#### 
Design, build, and deploy a web application in order to improve my skills in the above technologies. It is my first project using Express, Postgres, Node , Sequelize and Redux. This project is my initial step that will enable me to be a rounded Javascript developer.

***
### [](https://github.com/liam345/BookstoreApplication#Resources)RESOURCES
- [Getting Started with Node, Express and Postgres Using Sequelize ― Scotch](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)
- [Refactoring App with Redux](https://tighten.co/blog/react-101-using-redux)
- [React Router V4- CSS Tricks](https://css-tricks.com/react-router-4/)
- [Using Passport with Sequelize](https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537)
- [Authentication in React Applications, Part 1: Creating Components](https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components)
- [Authentication in React Applications, Part 2: JSON Web Token (JWT)](https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt)
- [Video Explaining protected/ private route syntax - YouTube](https://www.youtube.com/watch?v=ojYbcon588A)
- [javascript - Where to write to localStorage in a Redux app? - Stack Overflow](https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app)
- [Stripe Elements: Build beautiful, smart checkout flows](https://stripe.github.io/elements-examples/)
- [Sequelize create model with beforeCreate hook - Stack Overflow](https://stackoverflow.com/questions/31427566/sequelize-create-model-with-beforecreate-hook)
- [Using Stripe Elements in React](https://stripe.com/docs/recipes/elements-react)
- [PassPort Github question solved (The comments explain Passport done function very well)](https://github.com/jaredhanson/passport-local/issues/4)

___
***
### [](https://github.com/liam345/BookstoreApplication#Workflow)WORKFLOW
___
I created 2 git repos. One for [Backend](https://github.com/Liam345/LibraryApp) , and the other for [Frontend](https://github.com/Liam345/LibraryAppFrontend) 
The commits done to each of these repos concisely describe the change/ feature set added.
After couple of weeks into the project, I came across this article [Deploy React and Express App to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/). This article explained that I should have client and server code in the same repo to deploy to Heroku . Hence, I created a third repo for Heroku. To prevent this 3 repo hodgepodge, I would be using one repo for client and server side code in my future applications.
My bug fixing methodology was to write each of the issues I faced on 3 X 4 card . I prioritized the issue fixes that I put on the top of the card pile. This methodology helped me to keep track of all the issues I faced.  

___
***
### [](https://github.com/liam345/BookstoreApplication#ERD)ERD
___

[![img](https://github.com/liam345/BookstoreApplication/raw/master/readme_assets/ERD.png?sanitize=true)](https://github.com/liam345/BookstoreApplication/master/readme_assets/ERD.png)

___
***
### [](https://github.com/liam345/BookstoreApplication#Improvements)Future Improvents
___
The application can be improved by 
- Storing books from the api call into browser's localStorage or using a library like redux-persist for caching api requests.
- Currently, I have not implemented TDD tests for my frontend components. I would like to improve this by adding unit tests for dumb react components, as well as tests for redux containers, and react-router components.
- The design of the application can be improved. Design libraries like Bootstrap and ant-design are really good for prototyping. However, In the project I noticed that these design libraries limit me to a certain style. They might not be suitable for building custom or even extensible components.
- Set up CI/CD pipeline, and run unit tests before every merge request. Refernce the following article
[Building a CI/CD pipeline with CircleCI and Heroku](https://medium.com/99xtechnology/building-a-ci-cd-pipeline-with-circleci-and-heroku-57bae2d0bac0).
