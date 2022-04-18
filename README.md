# Project Atelier - Starkfront

## Overview
Starkfront is an e-commerce project built from scratch that was developed as a group as part of Hack Reactor's front-end capstone project. The main goal of the project was to create a single page application tailored to business client specifications needs that dynamically rendered product information obtained from a third party API. The project consists of four main sections: product detail overview, related items and comparison, questions and answers, and ratings and reviews.

## Technology
To strengthen and emphasize on front-end concepts, we focused on using functional React components utilizing hooks. We avoided using frameworks like Bootstrap and Material UI and instead used CSS Styled Components to design our application. The application was then deployed on AWS EC2 following satisfaction of business requirements.

## Team
### Nathaniel Belen 
**Product Detail Overview**

### Julian Tam
**Related Items and Comparison**

### Kimberly Siu
**Questions and Answers**

### Patrick Lee 
**Ratings and Reviews**


## To run the app:
- `git clone https://github.com/Stark-Direwolves/Starkfront.git` to clone repository
- create a .env file in the root directory using the .env.example file
  - replace `GIT_AUTH_KEY` with token that contains sufficient privileges
- `npm install` to install packages
- `npm run react:prod` to compile bundle.js
- `npm run server` to start Node server
- navigate to `http://localhost:PORT` (PORT within .env file)

## Stack
### Front End
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)\
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Server
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)\
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Bundling
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

### Deployment
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Testing
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)\
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
