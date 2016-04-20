var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Server is working!');
});

app.listen(PORT, function() {
	console.log('Listening on', PORT)
});


var mongoose = require('mongoose');
// mongoose.connect('mongodb://mattp:password@ds061355.mlab.com:61355/gmtestdb');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var materialSchema = Schema({
	id: {
		type: Number
	},
    material_category_id: {
		type: Number
	},
    material_name: String,
    material_original_name: String,
    material_other_names: String,
    material_description: String,
    material_online_id: String,
    material_country_of_origin: {
		type: String
	},
    main_color: {
		type: String
	},
    page_title: String,
    pattern: {
		type: String
	},
    last_update: {
    	type: Date,
    	default: Date.now
    },
    material_photo_name: String
});

var Materials = mongoose.model('Materials', materialSchema);