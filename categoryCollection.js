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

// schema for database
var Schema = mongoose.Schema;

var categorySchema = Schema({
	id: Number,
    category_id: Number,
    category_name: String,
    category_description: String,
    category_highlights: {
        first: String,
        second: String,
        third: String,
        fourth: String
    },
    category_url: String
});

var Categories = mongoose.model('Categories', categorySchema);

var allCategories = [
    
    {
        id: "1",
        category_id: "35",
        category_name: "Granite",
        category_description: "Tradional granite countertops have a high-end aesthetic appeal that will add value to your home while also providing an extremely durable surface. Granite is a natural stone, which makes each piece one of a kind.",
        category_highlights: {
            first: "Hardest of all natural stone countertop materials",
            second: "Highly resistant to staining, scratching and heat",
            third: "Largest selection of colors",
            fourth: "ideal for kitchen countertops"
        },
        category_url: "/granite"
    },

    {
        id: "2",
        category_id: "36",
        category_name: "Marble",
        category_description: "With its timeless look, this natural stone will bring an element of class to any space in the home. Most marble is white with grey veins, but there are other, more exotic, colorations to this beautiful natural stone. In addition to its lavish appearance, it can also increase the value of a home.",
        category_highlights: {
            first: "Classic and elegant stone with a timeless style",
            second: "Great for bathroom, fireplaces, and furniture tops",
            third: "Aesthetically pleasing, whether polished or honed"
        },
        category_url: "/marble"
    },

    {
        id: "3",
        category_id: "43",
        category_name: "Quartzite",
        category_description: "This material is naturally strong and heat-resistant. Quartzite has a beautiful and decorative sparkling pattern and an appearance that is comparable to marble. This material is relatively new for countertop use, but due to its durability and alluring features, it is quickly becoming very popular.",
        category_highlights: {
            first: "Resembles marble",
            second: "Uniqe and versatile look",
            third: "Hard, heat-resistant, and has low porosity"
        },
        category_url: "/quartzite"
    },

    {
        id: "4",
        category_id: "38",
        category_name: "Quartz",
        category_description: "Engineered stone, also known as quartz, is practically maintenance-free. This kind of stone does not require any sealing, and it is resistant to stains, acid, scratches, and heat. Available in many colors and patterns, quartz has become a very popular countertop option in the 21st century.",
        category_highlights: {
            first: "non-porous",
            second: "Resistant to stains, acid, scratches, and heat",
            third: "Contemporary look"
        },
        category_url: "/quartz"
    },

    {
        id: "5",
        category_id: "39",
        category_name: "Onyx",
        category_description: "There is no denying the sheer beauty of onyx. It comes in a variety of colors along with contrasting colors from the veining. These color schemes make each piece a unique piece of art. Some colors of onyx are translucent and can be backlit. This stone is commonly used in bars to create a dynamic interior design element.",
        category_highlights: {
            first: "Stunning colors and patterns",
            second: "Translucent types can be backlit",
            third: "Contemporary"
        },
        category_url: "/onyx"
    },

    {
        id: "6",
        category_id: "40",
        category_name: "Travertine",
        category_description: "This material is one of the most aesthetically pleasing stones due to the fact that it brings a warm, inviting look to any application. This material lends itself to a classic old-world look with a modern feel. Some of the top designers in the world commonly use this material because it is great at reflecting light and making rooms appear brighter.",
        category_highlights: {
            first: "Luxurious look - Eco-friendly",
            second: "used for facades, stairs and decorative pieces"
        },
        category_url: "/travertine"
    },

    {
        id: "7",
        category_id: "41",
        category_name: "Gemstone",
        category_description: "In addition to being unique and colorful, gemstone countertops are also heat-resistant and stain- resistant. Most homeowners will use these exotic stones as an eye-catching showpiece. Vanities, shelves, and even framed art are some of the most common uses for these spectacular stones.",
        category_highlights: {
            first: "Made from semi-precious stones",
            second: "Extremely Unique",
            third: "Some types are semi-translucent properties"
        },
        category_url: "/gemstone"
    },

    {
        id: "8",
        category_id: "42",
        category_name: "Limestone",
        category_description: "Most commonly used in bathrooms, limestone has a sandy look that often captures fossilized plant and animal life, giving it a certain primitive appeal. Limestone is most often white or cream-colored, and it is commonly used to create a beach theme within the home.",
        category_highlights: {
            first: "Natural, ancient appearance",
            second: "Good for low traffic areas",
            third: "Can contain fossils"
        },
        category_url: "/limestone"
    },

    {
        id: "9",
        category_id: "47",
        category_name: "Soapstone",
        category_description: "Highly stain-resistant and bacteria-resistant, soapstone commonly comes in a range of grey colors from light to dark. It also stands up to acidic materials, such as lemon juice. This stone is also heat-resistant.",
        category_highlights: {
            first: "Heat resistant",
            second: "Vintage look",
            third: "Changes with time (ages)"
        },
        category_url: "/soapstone"
    },

    {
        id: "10",
        category_id: "49",
        category_name: "Slate",
        category_description: "Slate is a natural, fine-grained rock that naturally has an uneven surface which many people find aesthetically appealing. Slate has a full matte finish and comes in a variety of colors, mostly medium to dark tones.",
        category_highlights: {
            first: "Organic appearance",
            second: "Available for most projects",
            third: "Chemically inert"
        },
        category_url: "/slate"
    },

    {
        id: "11",
        category_id: "45",
        category_name: "Glass",
        category_description: "Has a sleek, streamlined appearance, which can be cut into any shape. The popularity of glass countertops is on the rise due to its modern look and wide variety of colors. It is also non-porous and easy to clean.",
        category_highlights: {
            first: "Non-porous",
            second: "Endless color options",
            third: "Stain-resistant"
        },
        category_url: "/glass"
    },

];

Categories.collection.insert(allCategories, insertAll);

function insertAll(err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.log('All categories were stored in DB');
    }
}
