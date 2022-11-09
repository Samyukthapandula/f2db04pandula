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
exports.dog_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Dog.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Dog create on POST. 
exports.dog_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Dog(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
     
    document.Dog_age = req.body.Dog_age; 
    document.Dog_breed = req.body.Dog_breed; 
    document.Dog_speciality = req.body.Dog_speciality; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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