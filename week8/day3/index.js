const express = require("express");
const app = express();
const PORT = 3003;
const data = require("./data");

// MIDDLEWARE
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
//MIDDLEWARE

app.get("/", (req, res) => {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  res.render("pages/index", {
    mascots: mascots,
  });
});
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/about_me", (req, res) => {
  const me = {
    name: "Jessika",
    city: "Coolidge",
    occupation: "Student",
    favoriteColor: "Dark Emerald Green",
    colorPhoto:
      "https://media.istockphoto.com/id/1143679628/photo/emerald-green-satin-background.jpg?s=612x612&w=0&k=20&c=ioIprJuoSM80jyf9rOeN-SujwPDnr9wL4b_4-_YuQb8=",
    profilePic:
      "https://scontent.fphx1-2.fna.fbcdn.net/v/t39.30808-6/324928831_920509365986571_7627946556184388604_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yofLASIHyWIAX91SdvP&_nc_ht=scontent.fphx1-2.fna&oh=00_AfBi0kj9euAtOGDn22Jzz71JdNDHbn5xIZ34RWgqWwmDjw&oe=63C32629",
  };
  res.render("pages/about_me", { me: me });
});

app.get("/dash", (req, res) => {
  const accountBalance = {
    amount: "$123,233,322,000.09",
  };
  const pending = {
    amount: "$46,788.21",
  };
  const processedData = {
    amount: "$657,441.22",
  };
  res.render("pages/dash", {
    data: data,
    accountBalance: accountBalance,
    pending: pending,
    processedData: processedData,
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
