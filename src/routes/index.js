const express = require("express");
const indexRouter = express.Router();

indexRouter.get("", async (req, res) => {
  res.render("index");
});

module.exports = indexRouter;

const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
const port = process.env.PORT || 8080;

const mySQLString = 'mysql://b72fd13870e4b6:9478e217@us-cdbr-east-06.cleardb.net/heroku_d1dcbf616acab2e?reconnect=true';
const database = new Prohairesis(mySQLString); 

app
    .use(morgan('dev'))
    .use(express.static('public'))

    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())

    .post('/api/user', async (req, res) => {
        const body = req.body;

        await database.execute(`
            INSERT INTO user (
                first_name,
                last_name,
                email,
                date_added
                ) VALUES (
                    @firstName,
                    @lastName,
                    @email,
                    NOW()
                    )
                `,{
                    firstName: body.fname,
                    lastName: body.lname,
                    email: body.email
               });

        res.end('Added user');
    })

    

    .listen(port, () => console.log(`Server is listening on port ${port}`));
