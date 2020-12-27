import express from "express"
import routes from "./routes"

const app = express()
const PORT = 3002
app.use(routes)

app.listen(PORT, () => {
    console.log("server has started")
})