var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({
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
    }
});


var Material = mongoose.model('Material', materialSchema);

module.exports = Material;

