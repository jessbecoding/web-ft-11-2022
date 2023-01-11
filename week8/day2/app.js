const { response } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const { request } = require("http");
const PORT = 3002;
const savedUsers = [];

// this allows your request to have a body
app.use(express.json());

// app.get("/ethan", (request, response) => {
//     response.send("Ethan is here");
// });

//create_user
app.post("/createUser/", (req, res) => {
  const user = request.body;
  if (!request.body) {
    res.status(400).send("Please enter a user to add");
  } else {
    savedUsers.push(user);
    response.send(
      `${user.name} was added sucessfully under ID ${user.userId}.`
    );
  }
});

app.get("/user/:userId", (request, response) => {
  const users = [
    { name: "Joe", id: 1 },
    { name: "Ethan", id: 2 },
    { name: "Mauro", id: 3 },
    { name: "Vinny", id: 4 },
  ];

  const userFound = users.find(
    (user) => user.id === Number(request.params.userId)
  );
  savedUsers.push(request.body);

  response.send(
    `I am looking at user ${userFound.name} with id ${userFound.id}`
  );
});

app.get("/howdy", (request, response) => {
  fs.readFile("home.html", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    return response.end();
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
