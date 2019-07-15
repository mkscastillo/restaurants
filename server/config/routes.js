var restaurant = require('../controllers/controller.js');

module.exports = function(app){
    app.get('/restaurants', function(req,res){
        restaurant.show_all(req,res);
    });
    app.get('/:id', function(req,res){
        restaurant.show_one(req,res);
    });
    app.post('/create', function(req,res){
        restaurant.create(req,res);
    });
    app.put('/edit/:id', function(req,res){
        restaurant.update(req,res);
    });
    app.delete('/delete/:id', function(req,res){
        restaurant.delete(req,res);
    });
    app.post('/create_review', function(req,res){
        restaurant.create_review(req,res);
    });
}