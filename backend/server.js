import express from "express"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT || 5000

const app = express()

// endpoints
app.get("/", (req, res) => res.send("Welcome to Auth API"))

// app listening
app.listen(port, () => console.log(`server started on port ${port}`))
