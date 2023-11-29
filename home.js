const fs = require("fs");

exports.StartFile = function (request, response) {
    response.render("file.hbs");
};

exports.login = function (request, response) {
    response.render("file2.hbs");
    
};

exports.registretion = function (request, response) {
    response.render("file3.hbs");
};

exports.getUser = async function (request, response) {
    const Nikcname = request.body.login;
    console.log(Nikcname);
    const Password = request.body.password;
    console.log(Password);
    let file = fs.readFileSync('profile.json', 'utf8');
    const profiles = parse(file);
    if (isEmpty(Nikcname) || isEmpty(Password)) alert("Поле пустое");
    else if (Nikcname in profiles) { if (profiles[Nikcname] == Password) return location.href='/main/';
    else alert("Неверный логин или пароль"); } else alert("Неверный логин или пароль");
}

function isEmpty(str){
    return (str == null) || (str.length == 0);
}

function parse(obj) {
    let DATA = JSON.parse(obj);
    return DATA;
}
 