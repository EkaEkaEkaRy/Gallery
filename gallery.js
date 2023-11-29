exports.mainGallery = function (request, response) {
    response.render("main.hbs");
};

exports.favorites = function (request, response) {
    response.render("favorites.hbs");
};

exports.add = function (request, response) {
    response.render("add.hbs");
};