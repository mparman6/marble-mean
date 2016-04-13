var randomImagesArray = ['http://marble.com/uploads/materials/499/300X300/thumbnail/Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg', 'http://marble.com/uploads/materials/695/300X300/thumbnail/Lapidus-Gold_amTEVdar5mZ31nH7I30g.jpg', 'http://marble.com/uploads/materials/694/300X300/thumbnail/Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg', 'http://marble.com/uploads/materials/99/300X300/thumbnail/Blues-in-the-Night_w3T90RMqSanDwUeovpI0.jpg', 'http://marble.com/uploads/materials/105/300X300/thumbnail/Namibian-Gold_9OLiN8jsft3crPDhWhdN.jpg', 'http://marble.com/uploads/materials/123/300X300/thumbnail/Spanish-Gold_XxqIvn54SLdHDmeEmSKy.jpg', 'http://marble.com/uploads/materials/101/300X300/thumbnail/Calacatta-Borghini_J8E9yvIvVbA6bS14u3Ct.jpg'];


function getRandomImage(imgAr, path) {
	path = path || 'images/';
	var num = Math.floor(Math.random() * imgAr.length);
	var img = imgAr[num];
	var imgStr = '<img src="' + path + img + '" alt = "">';
	document.write(imgStr); document.close();
}