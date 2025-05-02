const express = require ('express');
const router = express.Router();



router.get('/', (req, res) => {

    res.send('Route Login Working');

});

module.exports =router