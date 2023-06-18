const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const credentials = require("./src/middlewares/credentials");
const corsOptions = require("./src/config/corsOptions");
const app = express();
app.use(cookieParser());

// Handle options credentials check - before CORS
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const movieRouter = require("./src/routes/movie");
const kategoriRouter = require("./src/routes/kategori");
const authRouter = require("./src/routes/auth");
const heroesRouter = require("./src/routes/heroes")
const teamsRouter = require("./src/routes/teams")

app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/kategori", kategoriRouter);
app.use("/api/v1/heroes", heroesRouter);
app.use("/api/v1/team", teamsRouter);
app.use("/api/v1/auth", authRouter);

const initApp = async () => {
    console.log("Connecting to mongo");
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/proyek_iso`);
        console.log("Berhasil connect");

        app.listen(port, () =>
            console.log(`Example app listening on port ${port}!`)
        );
    } catch (error) {
        console.error(error);
    }
};

initApp();
