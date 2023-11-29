const express = require("express");
const app = express();
const homeRouter = require("./homeRouter.js");
const galleryRouter = require("./galleryRouter.js");

app.set("view engine", "hbs");
app.set("views", "pages");
app.use(express.static('./static'));
app.use(express.urlencoded({extended: false}));

const PORT = 3000;

app.use("/main", galleryRouter);
app.use("/", homeRouter);


async function main() {
    try {
        app.listen(PORT);
        console.log("Сервер подключен...");
    }
    catch(err) {
        return console.log(err);
    }
}

main();

process.on("SIGINT", async() => {
    console.log("Приложение завершило работу");
    process.exit();
})