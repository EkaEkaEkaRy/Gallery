const user_ = require("./home.js");
const fs = require("fs");

exports.mainGallery = async function (request, response) {
    response.render("main.hbs");
};

exports.favorites = function (request, response) {
    let file = fs.readFileSync('favorites.json', 'utf8');
    const pictures = parse(file);
    response.render("favorites.hbs", image = pictures[user_]);
};

exports.add = function (request, response) {
    response.render("add.hbs");
};


/*

<div class="im" id={{"image" + this}} onclick="Play(id)">
    <img src={{"../" + this + ".png"}}>
    <audio controls src={{"../" + this + ".mp3"}} id={{"ms" + this}}></audio>
    <img class="star" src="../star.png" id="st2">
</div>

*/