const fs = require("fs");
const { cwd } = require("process");

exports.StartFile = function (request, response) {
    //user = "";
    response.render("file.hbs");
};

exports.login = function (request, response) {
    response.render("file2.hbs");
    
};

exports.registretion = function (request, response) {
    response.render("file3.hbs");
};

exports.getuser = function (request, response) {
    const Nikcname = request.body.login;
    const Password = request.body.password;
    let file = fs.readFileSync('profile.json', 'utf8');
    const profiles = parse(file);
    user = Nikcname;
    if (isEmpty(Nikcname) || isEmpty(Password)) response.redirect("/login");
    else if (Nikcname in profiles) { if (profiles[Nikcname] == Password) { response.redirect("/main/"); }
    else response.redirect("/login"); } else response.redirect("/login");
}

exports.adduser = function (request, response) {
    const Nikcname = request.body.login;
    const Password1 = request.body.password1;
    const Password2 = request.body.password2;
    let file = fs.readFileSync('profile.json', 'utf8');
    const profiles = parse(file);
    let file2 = fs.readFileSync('favorites.json', 'utf8');
    const images = parse(file2);
    if (Password1 !== Password2) console.log(1);
    else if (isEmpty(Password1)) console.log(2);
    else if (Nikcname in profiles) console.log(3);
    else {
        profiles[Nikcname] = Password1;
        images[Nikcname] = [];
        fs.writeFileSync('profile.json', JSON.stringify(profiles));
        fs.writeFileSync('favorites.json', JSON.stringify(images));
        response.redirect("/login");
    }
    
}

function isEmpty(str){
    return (str == null) || (str.length == 0);
}

function parse(obj) {
    let DATA = JSON.parse(obj);
    return DATA;
}
 
let user = "";

//////////////////////////////////////////////////////////////////////


exports.mainGallery = async function (request, response) {
    if (user != "") 
    {
        let file = fs.readFileSync('favorites.json', 'utf8');
        const pictures = parse(file);
        response.render("main.hbs", im = pictures[user]);
    }
    else response.sendStatus(418);
};

exports.favorites = function (request, response) {
    if (user != "") 
    {
        let file = fs.readFileSync('favorites.json', 'utf8');
        const pictures = parse(file);
        response.render("favorites.hbs", mas_images = pictures[user]);
    }
    else response.sendStatus(418);
};

exports.add = function (request, response) {
    if (user != "") response.render("add.hbs");
    else response.sendStatus(418);
};

exports.AddToFavorites = function (request, response) {
    let file = fs.readFileSync('favorites.json', 'utf8');
    const pictures = parse(file);
    const im = request.body.image;
    console.log(im);
    if (pictures[user].indexOf(im) == -1)
    {
        pictures[user].push(im);
        fs.writeFileSync('favorites.json', JSON.stringify(pictures));
        console.log(1)
    }
    else
    {
        pictures[user].splice(pictures[user].indexOf(im), 1);
        fs.writeFileSync('favorites.json', JSON.stringify(pictures));
        console.log(2)
    }
    //response.redirect("/main");
}

exports.addpicture = function (request, response) {
    console.log(3);
    const Name = request.body.image;
    const Description = request.body.description;
    let file = fs.readFileSync('send.json', 'utf8');
    const images = parse(file);
    if (isEmpty(Name) || isEmpty(Description)) console.log(2);
    else {
        images[Name] = Description;
        fs.writeFileSync('send.json', JSON.stringify(images));
        response.redirect("/main");
    }
}