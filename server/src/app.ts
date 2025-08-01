import router from "./routes/charactersRoutes";

const express = require("express")
const cors = require("cors") 

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', router)

export default app