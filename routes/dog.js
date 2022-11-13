var express = require('express');
const dog_controlers= require('../controllers/dog'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results Dog' });
});

/* GET dogs */ 
router.get('/', dog_controlers.dog_view_all_Page ); 

/* GET detail dog page */ 
router.get('/detail', dog_controlers.dog_view_one_Page);


/* GET create dog page */ 
router.get('/create', dog_controlers.dog_create_Page); 

/* GET create update page */ 
router.get('/update', dog_controlers.dog_update_Page);

/* GET delete costume page */ 
router.get('/delete', dog_controlers.dog_delete_Page); 

module.exports = router;
