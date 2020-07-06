require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
/*----------*/
const uiRoutes = require('./routes/routes-ui');
// const apiRoutes = require('./routes/routes-api');


(async () => {
    if (process.env.NODE_ENV !== 'production') {
        await require('./build');
    }
    
    uiRoutes(app);
    // apiRoutes(app);


    app.locals.PORT = PORT
    app.listen(PORT, () => {
        console.log(`App is running at http://localhost:${PORT}`);
    })
})();
