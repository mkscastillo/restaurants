var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

module.exports = {
    show_all:function(req,res){
        Restaurant.find({}, function(err,restaurants){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({restaurants:restaurants});
            }
        })
    },
    show_one:function(req,res){
        Restaurant.findOne({_id:req.params.id}, null, {$sort:{reviews: {stars: -1}}}, function(err, restaurant){
            // Restaurant.findOne({_id:req.params.id}).sort({"reviews.stars": -1}, function(err, restaurant){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({restaurant:restaurant});
            }
        })
    },
    create:function(req,res){
        Restaurant.find({name:req.body.name}, function(err, restaurant){
            if(restaurant.length > 0){
                console.log("restaurant",restaurant.length);
                res.json({error: {message: "Restaurant Name exists"}});
            } else {
                console.log("inside controller",req.body);
                var restaurant = new Restaurant({name:req.body.name, cuisine:req.body.cuisine});
                restaurant.save(function(err){
                    if(err){
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message: "Success"});
                    }
                })
            }
        })
    },
    update:function(req,res){
        Restaurant.updateOne({_id:req.body._id},{$set:{name:req.body.name, cuisine:req.body.cuisine}}, function(err,restaurant){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully updated"});
            }
        })
    },
    delete:function(req,res){
        Restaurant.deleteOne({_id:req.params.id}, function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully deleted"});
            }
        })
    },
    create_review: function(req,res){
        Restaurant.updateOne({_id:req.body.id},{$push:{reviews:{author:req.body.review.author, stars:req.body.review.stars, review:req.body.review.review}}},function(err,restaurant){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully updated"});
            }
        })
    }
}
