const express = require('express');
const router = express.Router();

router.get('/get', async (req, res) =>{
    console.log("ROUTE GETTING HIT");
    res.send('Found me');
});

module.exports = router;