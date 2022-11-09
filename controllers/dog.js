var Dog = require('../models/dog'); 
 
// List of all Dogs 
exports.dog_list = async function(req, res) { 
    try{ 
        theDogs = await Dog.find(); 
        res.send(theDogs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        theDogs = await Dog.find(); 
        res.render('dog', { title: 'Dog Search Results', results: theDogs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 