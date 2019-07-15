var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');

var ReviewSchema = new mongoose.Schema({
    author: {type: String, required: [true, "Name field is required"], minlength: 3},
    stars: {type: Number, required: true},
    review: {type: String, required: [true, "Review field is required"], minlength: 3}
}, {timestamps: true })

var RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"], minlength: 3},
    cuisine: {type: String, required: [true, "Cuisine field is required"], minlength: 3},
    reviews: [ReviewSchema]
}, {timestamps: true })


mongoose.model('Restaurant',RestaurantSchema);