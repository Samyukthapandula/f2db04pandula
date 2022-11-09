var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dog_controller = require('../controllers/dog'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// DOG ROUTES /// 
 
// POST request for creating a Dog.  
router.post('/dogs', dog_controller.dog_create_post); 
 
// DELETE request to delete Dog. 
router.delete('/dogs/:id', dog_controller.dog_delete); 
 
// PUT request to update Dog. 
router.put('/dogs/:id', dog_controller.dog_update_put); 
 
// GET request for one Dog. 
router.get('/dogs/:id', dog_controller.dog_detail); 
 
// GET request for list of all Dog items. 
router.get('/dogs', dog_controller.dog_list); 
 
module.exports = router;