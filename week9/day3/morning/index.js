const express =  require('express')
const app = express()
const petRoutes = require("./routes/petRoutes")
const authRoutes = require("./routes/authRoutes")
const PORT = 3008

app.use(express.json());

app.use("/petClinic", petRoutes)
app.use("/auth", authRoutes)


app.listen(PORT, console.log(`listening on port ${PORT}`))