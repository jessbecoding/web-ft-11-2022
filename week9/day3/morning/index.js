const express =  require('express')
const app = express()
const {Owners,Pets} = require("./models")
const {Op} = require('sequelize')
const PORT = 3008

app.use(express.json());

app.get("/get_pets", async (req, res) => {
    const pets = await Pets.findAll();
    res.send(pets)
})

app.get("/get_owners", async (req, res) => {
    const owners = await Owners.findAll();
    res.send(owners)
})

app.get("/find_Jessika", async (req, res) => {
    const Jessika = await Owners.findAll({
        where: {
            firstName: "Jessika"
        }
    });
    res.send(Jessika)
})

app.get("/find_Leia", async (req, res) => {
    const Leia = await Pets.findAll({
        where: {
            name: "Leia"
        }
    });
    res.send(Leia)
})

app.get("/get_petsID", async (req, res) => {
    const pets = await Pets.findAll({
        where: {
            id: {
                [Op.gte]: 2,
                [Op.lte]: 4,
            }
        }
    });
    res.send(pets)
})

app.post("/create_pet", async (req, res) => {
    const { name, type, age } = req.body;
    const newPet = await Pets.create({
        name,
        type,
        age,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    res.send(newPet)
})
app.listen(PORT, console.log(`listening on port ${PORT}`))