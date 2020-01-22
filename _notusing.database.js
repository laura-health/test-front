const moongose = require("mongoose");

const DATABASE_CONNECTION = "mongodb://mongo/laura";

// Here i'd like to save the password with any encryption
var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

User = exports.User = mongoose.Model('User', userSchema);

exports.initializeMongo = function() {
    mongoose.connect(DATABASE_CONNECTION);

    console.log("Trying to connect to " + DATABASE_CONNECTION);

    var db = mongoose.connection;

    db.on("error", console.error.bind(console, "connection error, we are not connected"));

    db.once("open", function() {
        console.log("We are connected");

        addUser();
    });
}

var addUser = function() {
    var usr = new User({
        name: "Jean",
        email: "jeanmichaelm@outlook.com",
        password: "admin"
    });

    usr.save(function(err, response) {
        if(err) return console.log(err);
        console.log("Jean Mayer added.");
    })
};