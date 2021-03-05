const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require ('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cookieSession({
        keys: ['lkasld235j']
    })
);
app.use(authRouter);
app.use(productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log("listening");
});

