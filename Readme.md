# Week 5
## The quiz app

## Description
In this lab, we will use what we learned and create a backend for a quiz app. We have a frontend for the quiz app, which will load all the quiz information and allow a user to select the answers and send them to receive a score. It doesn't work yet because there are some of the things you have to do.

## Setup

### Pre-requisites
You will need the following installed on your computer:
- [`node.js`](https://nodejs.org/en/download/)
- [`homebrew`](https://brew.sh/) for macOS installation of mongodb
- [`mongodb`](https://docs.mongodb.com/manual/administration/install-community/)
- [`postman`](https://www.postman.com/product/api-client/) OR [`thunderclient for vscode`](https://www.thunderclient.io/) to test the APIs.

## Install dependencies
```
cd week6
npm install
npm run client-install
```

*note*: The script `client-install` is defined in the `package.json` of the week6 folder. It goes to the `client` folder and does an `npm install`

## Change the seed (sample data) for our database.
- Follow the steps to get a local mongodb running. 
- For macOS users, run the following commands to install and run mongodb

```
cd scripts/mongodb
sh installMongo.sh
sh startMongo.sh
```

- The default URL for mongodb connections should be 
```
mongodb://localhost:27017/quizApp
```

- Put this URL on `config/keys.js`
- Open `models/seeds/questions-data.js`
- Edit `data[0].documents` to questions of your choice.
- The format for the data should be as follows
```
{
  question: String
  options: Array of strings
  answer: String
}
```

## Running the application
- run `npm run dev`
- This will run the server and the client (frontend in react) concurrently
- `[0]` logs will be for the server
- `[1]` logs will be for the client

## Tasks
- Change `models/Questions.js` to match the format specified above.</br>
  _**Note**: Documentation for [mongoose](https://mongoosejs.com/docs/)._
- In the file `routes/api/questions.js`, read the comments and expand the file to include all the routes we need to create the quiz app. 
- Test the APIs with Postman.
- Go to `localhost:3000` to see if you can complete the quiz and get the score. 
- Try changing the seed to see if you can create more questions with multiple options.
- To run the seed, run `npm run seed`. To do this, we have to make sure that the model is complete and validated.

## Good Luck!

