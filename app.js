const express = require("express");

const bodyParser = require("body-parser");

const graphqlHTTP = require("express-graphql").graphqlHTTP;

const mongoose = require("mongoose");

const db = require("./db");
const res = require("express/lib/response");

const app = express();

const graphiqlSchema  = require("./graphql/schema/index");
const graphiqlResolvers = require ("./graphql/resolver/index");


app.use(bodyParser.json());



app.use(
  "/graphql",
  graphqlHTTP({
    schema:graphiqlSchema,
    rootValue: graphiqlResolvers,

    graphiql: true,
  })
);

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get("/", (req, res) => {
  res.send("SERVER WORKING");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
