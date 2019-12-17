const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render("student/home", {
        viewTitle: "Go to the App ->"
    });
});
module.exports = router;