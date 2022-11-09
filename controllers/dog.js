var Dog = require('../models/dog'); 
 
// List of all Dogs 
exports.dog_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog list'); 
}; 
 
// for a specific Dog. 
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id); 
}; 
 
// Handle Dog create on POST. 
exports.dog_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog create POST'); 
}; 
 
// Handle Dog delete form on DELETE. 
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id); 
}; 
 
// Handle Dog update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id); 
};