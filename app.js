const ghost = require('ghost');

ghost().then((ghostServer) => {
    return ghostServer.start();
});
