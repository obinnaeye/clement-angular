'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {

    var clickHandler = new ClickHandler(db);

    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    app.route('/api/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);
};



/**app.get('/', function (req, res) {
  //sendFile only works in express 4.8.0+
    //res.sendFile(path.join(__dirname, 'index.html'));
    //res.sendFile(__dirname + "/index.html");
    //res.sendFile('index.html' , { root : __dirname});
    res.sendFile(process.cwd() + '/index.html');
});**/