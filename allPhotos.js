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

var photoSchema = Schema({
	id: {
		type: Number
	},
    material_id: {
		type: Number
	},
    material_photo_nane: String,
    original_name: String,
    visible: Number,
    thumb: Number,
});

var Photos = mongoose.model('Photos', photoSchema);

var allPhotos = [
  {
    "id": "3852",
    "material_id": "675",
    "material_photo_name": "granite_Persa-Avorio_FuCRApeCovss4GYKJbsK.jpg",
    "original_name": "PERSA_AVORIO_350L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:27:00",
    "thumb": "0"
  },
  {
    "id": "3340",
    "material_id": "166",
    "material_photo_name": "Fantasy-Brown_KhAH3aFUFgbTOSxnjCnP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:54:19",
    "thumb": "1"
  },
  {
    "id": "3322",
    "material_id": "165",
    "material_photo_name": "Dynasty-Brown_iRa9NfkLZ6rBAwHwew6j.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:23:34",
    "thumb": "1"
  },
  {
    "id": "3235",
    "material_id": "163",
    "material_photo_name": "Colonial-Gold_5eaVkSlOseTnFahCxKxv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:00:02",
    "thumb": "1"
  },
  {
    "id": "3245",
    "material_id": "615",
    "material_photo_name": "Copacabana_WQoCGUo6Bb3e3C1X5DUM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:17:54",
    "thumb": "1"
  },
  {
    "id": "3247",
    "material_id": "1054",
    "material_photo_name": "Copacabana-Quartz_fsOmAjQOF0pfpofXMixf.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 11:19:55",
    "thumb": "1"
  },
  {
    "id": "3249",
    "material_id": "226",
    "material_photo_name": "Copenhagen_iardcawquRsF20l45b6s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:22:32",
    "thumb": "1"
  },
  {
    "id": "3251",
    "material_id": "516",
    "material_photo_name": "Copper-Canyon_wxy4DpwLVXpkuWlyutj9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:25:31",
    "thumb": "1"
  },
  {
    "id": "4582",
    "material_id": "1132",
    "material_photo_name": "granite_Copper-Silk_2OhnIlrcgLk566OQrAKc.jpg",
    "original_name": "COPPER_SILK_211L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:29:41",
    "thumb": "0"
  },
  {
    "id": "3211",
    "material_id": "162",
    "material_photo_name": "Classic-White_p6l5deWUa7mH3KvVEuqL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:29:07",
    "thumb": "1"
  },
  {
    "id": "3135",
    "material_id": "160",
    "material_photo_name": "Boreal_kDGhG24jDhKhu9nHQXNR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:14:08",
    "thumb": "1"
  },
  {
    "id": "3006",
    "material_id": "157",
    "material_photo_name": "Atlantis_JSYIqGYtVSYKG0zowchB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:09:37",
    "thumb": "1"
  },
  {
    "id": "2919",
    "material_id": "1126",
    "material_photo_name": "Absolute-Black_Q0tden8z3ONJIEkHy0Qw.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 06:18:45",
    "thumb": "1"
  },
  {
    "id": "2914",
    "material_id": "151",
    "material_photo_name": "Absolute-Black_XHOTLcRFOXBorTtEEKE7.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 05:51:45",
    "thumb": "1"
  },
  {
    "id": "3505",
    "material_id": "150",
    "material_photo_name": "Golden-Valley-MG_40i9yeBvLeoBtifh6mmm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 09:06:45",
    "thumb": "1"
  },
  {
    "id": "3497",
    "material_id": "141",
    "material_photo_name": "granite_Golden-Valley-KG_0wPs1TMJaLlqDSKZtBVd.jpg",
    "original_name": "GOLDEN_VALLEY_KG_1203L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:56:40",
    "thumb": "0"
  },
  {
    "id": "3292",
    "material_id": "136",
    "material_photo_name": "marble_Crema-Marfil_booa3Y55xSp5QV520oQv.jpg",
    "original_name": "CREMA_MARFIL_007L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:46:48",
    "thumb": "0"
  },
  {
    "id": "3311",
    "material_id": "135",
    "material_photo_name": "Delicatus-Cream_ODha8SAxY3i2IAs3J5Ak.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 01:11:05",
    "thumb": "1"
  },
  {
    "id": "3614",
    "material_id": "134",
    "material_photo_name": "granite_Juparana-Vyara_J914TH1IRELvEM5q7DgO.jpg",
    "original_name": "JUPARANA_VYARA_CLASSIC_325R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:20:26",
    "thumb": "0"
  },
  {
    "id": "3416",
    "material_id": "130",
    "material_photo_name": "granite_Giallo-Sole_BXkDPdPvg7FO5y6SiZmq.jpg",
    "original_name": "GIALLO_SOLE_1304L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:13:39",
    "thumb": "0"
  },
  {
    "id": "4216",
    "material_id": "128",
    "material_photo_name": "White-Kinawa_eBct81RNn97TjlNpJoJF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 08:07:18",
    "thumb": "1"
  },
  {
    "id": "2332",
    "material_id": "879",
    "material_photo_name": "quartz_8310-Sfumato-Caesarstone_C2ryGgbYQscEo2WnlPt5.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:33:47",
    "thumb": "0"
  },
  {
    "id": "4093",
    "material_id": "126",
    "material_photo_name": "Tan-Brown_F59aow37p5dXju2Qg2pt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:33:53",
    "thumb": "1"
  },
  {
    "id": "4076",
    "material_id": "125",
    "material_photo_name": "quartzite_Super-White_xLm9Fd83M1aJ5OJ3lMPd.jpg",
    "original_name": "SUPER_WHITE_023L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:47:05",
    "thumb": "0"
  },
  {
    "id": "4016",
    "material_id": "122",
    "material_photo_name": "travertine_Silver-Travertine_H57euhkzLT0F1gCzNhxJ.jpg",
    "original_name": "SILVER_TRAVERTINE_M106L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:56:15",
    "thumb": "0"
  },
  {
    "id": "4144",
    "material_id": "654",
    "material_photo_name": "granite_Ubatuba_MZDUgHe3IbfGGLLlZ6jX.jpg",
    "original_name": "UBATUBA_336L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:19:06",
    "thumb": "0"
  },
  {
    "id": "3267",
    "material_id": "662",
    "material_photo_name": "Cosmic-Black_AIrfSZiqkImxovipRofZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:53:06",
    "thumb": "1"
  },
  {
    "id": "3943",
    "material_id": "117",
    "material_photo_name": "Salone_9Z4HGwZtQQ8ndnv6Yykg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:06:46",
    "thumb": "1"
  },
  {
    "id": "3947",
    "material_id": "325",
    "material_photo_name": "San-Gabriel-Black_nIeYAqPeVEepoBcaYOv1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:14:59",
    "thumb": "1"
  },
  {
    "id": "3949",
    "material_id": "677",
    "material_photo_name": "San-Gabriel-Black_WGm7IwIhXdFNG4y7vRF0.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:16:48",
    "thumb": "1"
  },
  {
    "id": "3941",
    "material_id": "1107",
    "material_photo_name": "Ruby-Velvet_8c0VpNS468EiM2fu2VkM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:03:31",
    "thumb": "1"
  },
  {
    "id": "3917",
    "material_id": "116",
    "material_photo_name": "River-White_EoPNDYMLToamA8oErox5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:54:37",
    "thumb": "1"
  },
  {
    "id": "3916",
    "material_id": "116",
    "material_photo_name": "granite_River-White_vyZnaCBTEkquol8LQStY.jpg",
    "original_name": "RIVER_WHITE_118R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:54:22",
    "thumb": "0"
  },
  {
    "id": "4306",
    "material_id": "1163",
    "material_photo_name": "Pure-Quantra_0KtyeZinMrtU2sOjkE56.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 12:31:04",
    "thumb": "1"
  },
  {
    "id": "3743",
    "material_id": "106",
    "material_photo_name": "Netuno-Bordeaux_tvJxF4ImMWw2EVyxeX50.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:08:12",
    "thumb": "1"
  },
  {
    "id": "3281",
    "material_id": "729",
    "material_photo_name": "Costa-Esmeralda_oY1RwZMxvEuS13aOTuiU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:15:34",
    "thumb": "1"
  },
  {
    "id": "3279",
    "material_id": "103",
    "material_photo_name": "Costa-Esmeralda_IodOYC2dXEtpOV5BDiz4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:13:28",
    "thumb": "1"
  },
  {
    "id": "3275",
    "material_id": "725",
    "material_photo_name": "Costa-Dakota_bmCvKv4qhbwmlDzukcav.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:05:53",
    "thumb": "1"
  },
  {
    "id": "3263",
    "material_id": "354",
    "material_photo_name": "Coral-Gold_EMTyZ7mHdY6BO2gYCNT1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:45:13",
    "thumb": "1"
  },
  {
    "id": "3261",
    "material_id": "1132",
    "material_photo_name": "Copper-Silk_GuowciF2eCUchT2EF0uG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:42:12",
    "thumb": "1"
  },
  {
    "id": "3209",
    "material_id": "102",
    "material_photo_name": "Classic-White_J0fgulS6HNsMi1wwSY8x.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:25:34",
    "thumb": "1"
  },
  {
    "id": "3163",
    "material_id": "405",
    "material_photo_name": "Calacatta-Extra_5QUN7lyR6xgtxLdKks50.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:44:46",
    "thumb": "1"
  },
  {
    "id": "3195",
    "material_id": "998",
    "material_photo_name": "Cippolino-Ondulato_duSHedNgSTzjz5UVAfiG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:53:55",
    "thumb": "1"
  },
  {
    "id": "3161",
    "material_id": "101",
    "material_photo_name": "Calacatta-Borghini_J8E9yvIvVbA6bS14u3Ct.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:42:15",
    "thumb": "1"
  },
  {
    "id": "3160",
    "material_id": "101",
    "material_photo_name": "marble_Calacatta-Borghini_gCrd89fp0NFnMfmEmrCn.jpg",
    "original_name": "CALACATTA_BORGHINI_005R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:42:00",
    "thumb": "0"
  },
  {
    "id": "3151",
    "material_id": "100",
    "material_photo_name": "Butterfly-Green_XKGkAzTLLedu7K1aWDFO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:34:54",
    "thumb": "1"
  },
  {
    "id": "4252",
    "material_id": "83",
    "material_photo_name": "Black-Thunder_LZQSN7UtAGcVwQhLI8u4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:54:00",
    "thumb": "1"
  },
  {
    "id": "3838",
    "material_id": "638",
    "material_photo_name": "granite_Peregrine-C_5VocWIwbLKjYW2iZuv7B.jpg",
    "original_name": "PEREGRINE_C_313L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:05:05",
    "thumb": "0"
  },
  {
    "id": "3882",
    "material_id": "636",
    "material_photo_name": "granite_Purangaw-Ipe_dYdkD1qh2T9OGXjSIsGu.jpg",
    "original_name": "PURANGAW_IPE_424L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:12:13",
    "thumb": "0"
  },
  {
    "id": "4162",
    "material_id": "633",
    "material_photo_name": "granite_Verde-Belaggio_wZOJ7r3CbMiyu6jR9c4B.jpg",
    "original_name": "VERDE_BELAGGIO_306L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:49:08",
    "thumb": "0"
  },
  {
    "id": "4511",
    "material_id": "634",
    "material_photo_name": "granite_Copper-Canyon_IEzVAV5ItkZAIuIMRAhy.jpg",
    "original_name": "COPPER_CANYON_316L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:59:23",
    "thumb": "0"
  },
  {
    "id": "3706",
    "material_id": "635",
    "material_photo_name": "granite_Matrix_v52QczfbSybWf4zSCa7V.jpg",
    "original_name": "MATRIX_308R_BR_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:17:11",
    "thumb": "0"
  },
  {
    "id": "2489",
    "material_id": "879",
    "material_photo_name": "l03JU24ej3JNakG3CmFt.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:49:49",
    "thumb": "1"
  },
  {
    "id": "2984",
    "material_id": "68",
    "material_photo_name": "granite_Aspen-White_BxifiE09G17Y1jZPlk11.jpg",
    "original_name": "ASPEN_WHITE_206R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:26:51",
    "thumb": "0"
  },
  {
    "id": "3958",
    "material_id": "673",
    "material_photo_name": "granite_Santa-Cecilia_zfHGENf12crIVjmPfwA9.jpg",
    "original_name": "SANTA_CECILIA_620L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:32:18",
    "thumb": "0"
  },
  {
    "id": "3082",
    "material_id": "168",
    "material_photo_name": "Black-Galaxy_ApInBBcR9FrMgcJ483VD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:05:23",
    "thumb": "1"
  },
  {
    "id": "3409",
    "material_id": "169",
    "material_photo_name": "Giallo-Ornamental_StcNrS40zq34guN2RYpY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:04:02",
    "thumb": "1"
  },
  {
    "id": "3411",
    "material_id": "970",
    "material_photo_name": "Giallo-Ornamental_UmzL5BgE7Keyf7lMqLmg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:06:08",
    "thumb": "1"
  },
  {
    "id": "3413",
    "material_id": "749",
    "material_photo_name": "Giallo-Reale_18zAnYoPQcl9q88SG0yw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:08:27",
    "thumb": "1"
  },
  {
    "id": "3423",
    "material_id": "170",
    "material_photo_name": "Giallo-Vicenza_ui6ZqWP7ErnLWDudY7Rt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:24:31",
    "thumb": "1"
  },
  {
    "id": "3465",
    "material_id": "171",
    "material_photo_name": "granite_Golden-Fantasy_BvOrdSWmxOQB1pmfXFCs.jpg",
    "original_name": "GOLDEN_FANTASY_SUPER_1102L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:09:01",
    "thumb": "0"
  },
  {
    "id": "502",
    "material_id": "176",
    "material_photo_name": "glass_Glassos_nCRLpNLfFURHFl7I6Ela.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-04-10 06:52:40",
    "thumb": "0"
  },
  {
    "id": "3934",
    "material_id": "1151",
    "material_photo_name": "granite_Rosette_wgMLMoJqzPoUmxL9pl1O.jpg",
    "original_name": "ROSETTE_029R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 09:48:13",
    "thumb": "0"
  },
  {
    "id": "3933",
    "material_id": "507",
    "material_photo_name": "Rosewood_GkpIPeFbKUXYvbe27qnN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:22:54",
    "thumb": "1"
  },
  {
    "id": "3927",
    "material_id": "379",
    "material_photo_name": "Romano-Delicatus_vyv1W7rXKawoCAu250WT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:08:57",
    "thumb": "1"
  },
  {
    "id": "3925",
    "material_id": "268",
    "material_photo_name": "Rojo-Alicante_0Ct81MuXjW9GGDmCgbM9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:06:36",
    "thumb": "1"
  },
  {
    "id": "3923",
    "material_id": "177",
    "material_photo_name": "River-White_udHMngYuUEuEDcY1ArIt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:04:30",
    "thumb": "1"
  },
  {
    "id": "4153",
    "material_id": "180",
    "material_photo_name": "Venetian-Gold_cOV1YkzvblgZ3ggq6uSl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:30:33",
    "thumb": "1"
  },
  {
    "id": "4152",
    "material_id": "180",
    "material_photo_name": "granite_Venetian-Gold_CHO4dXcdu111tBztXj5c.jpg",
    "original_name": "VENETIAN_GOLD_735R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:30:21",
    "thumb": "0"
  },
  {
    "id": "3991",
    "material_id": "190",
    "material_photo_name": "Shalimar-Gold_aUxrVXjg0l3YfkPACfSh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:19:32",
    "thumb": "1"
  },
  {
    "id": "4310",
    "material_id": "193",
    "material_photo_name": "Glassos_ZcUt5hlufNa9cDzFBrQg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-30 08:29:51",
    "thumb": "1"
  },
  {
    "id": "3775",
    "material_id": "698",
    "material_photo_name": "New-Lapidus_9hvPVYDwL2ltfNlLWN4r.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:31:54",
    "thumb": "1"
  },
  {
    "id": "3773",
    "material_id": "671",
    "material_photo_name": "New-Kashmir-White_BhL36KGb1GL5Cc4iSIG1.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-16 03:26:13",
    "thumb": "1"
  },
  {
    "id": "3763",
    "material_id": "195",
    "material_photo_name": "New-Colonial-Gold_wqjTTkJovs0rIcuP4cUE.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:12:23",
    "thumb": "1"
  },
  {
    "id": "4099",
    "material_id": "200",
    "material_photo_name": "Tan-Brown-Classic_0z3CgfvSQyGq7cG0B2aM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:41:23",
    "thumb": "1"
  },
  {
    "id": "3316",
    "material_id": "629",
    "material_photo_name": "Desert-Gold_R13jJFHJXKuDbOS3PVi4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:16:14",
    "thumb": "1"
  },
  {
    "id": "3318",
    "material_id": "987",
    "material_photo_name": "Dunes-Orient_Njg10dABWD12sH9QxMCp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:17:50",
    "thumb": "1"
  },
  {
    "id": "3314",
    "material_id": "569",
    "material_photo_name": "Delicatus-White_kPDFGzhfBL9MvP6rX4LZ.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 02:13:47",
    "thumb": "1"
  },
  {
    "id": "3295",
    "material_id": "201",
    "material_photo_name": "Crema-Marfil_S4pP0GDcgGZ2yENafXlw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:49:07",
    "thumb": "1"
  },
  {
    "id": "2975",
    "material_id": "202",
    "material_photo_name": "marble_Arabescato_LXQOLiQNyhMxXkoyy0xi.jpg",
    "original_name": "ARABESCATO_021L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:40:15",
    "thumb": "0"
  },
  {
    "id": "2995",
    "material_id": "203",
    "material_photo_name": "Astoria_i9b1fP0l0u871TOm0cpb.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 09:54:20",
    "thumb": "1"
  },
  {
    "id": "2997",
    "material_id": "963",
    "material_photo_name": "Astoria_8BivddvQLgi6P2IxDdhz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 09:57:15",
    "thumb": "1"
  },
  {
    "id": "4294",
    "material_id": "689",
    "material_photo_name": "granite_White-Torroncino_LhtgnWbGc6VhRyAp5gmW.jpg",
    "original_name": "WHITE_TORRONCINO_631R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 11:34:05",
    "thumb": "0"
  },
  {
    "id": "3240",
    "material_id": "1131",
    "material_photo_name": "granite_Colonial-Gold_UuoY9ehQNdT8FgjaVplg.jpg",
    "original_name": "COLONIAL_GOLD_035L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:11:14",
    "thumb": "0"
  },
  {
    "id": "3239",
    "material_id": "205",
    "material_photo_name": "Colonial-Gold_TuY4JPsznJoNPknPdgt4.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 11:06:07",
    "thumb": "1"
  },
  {
    "id": "3948",
    "material_id": "677",
    "material_photo_name": "granite_San-Gabriel-Black_L2XEjNfAiZOUHfLjTkyN.jpg",
    "original_name": "SAN_GABRIEL_BLACK_825R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:16:26",
    "thumb": "0"
  },
  {
    "id": "3536",
    "material_id": "676",
    "material_photo_name": "granite_Ice-White_xbFxQPizSVlfcQ0yu98e.jpg",
    "original_name": "ICE_WHITE_341L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:09:45",
    "thumb": "0"
  },
  {
    "id": "3486",
    "material_id": "212",
    "material_photo_name": "Golden-Thunder_C3azspptewIxIstrgDzB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:37:41",
    "thumb": "1"
  },
  {
    "id": "4305",
    "material_id": "1163",
    "material_photo_name": "quartz_Pure-Quantra_eVYzwQzcn2yK8YA2PsLR.jpg",
    "original_name": "PURE_2226_NO_FRAME_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 12:29:56",
    "thumb": "0"
  },
  {
    "id": "3545",
    "material_id": "224",
    "material_photo_name": "Imperial-Coffee_QgTEd0K46qYyTL3K5WfQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:26:09",
    "thumb": "1"
  },
  {
    "id": "4584",
    "material_id": "1139",
    "material_photo_name": "granite_Imperial-Coffee_BPGl1LE4mgwNYrbpZlWD.jpg",
    "original_name": "IMPERIAL_COFFEE_925R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:31:57",
    "thumb": "0"
  },
  {
    "id": "3241",
    "material_id": "1131",
    "material_photo_name": "Colonial-Gold_OqdnMgQSlcWKOiXqbeLz.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 11:13:01",
    "thumb": "1"
  },
  {
    "id": "3237",
    "material_id": "225",
    "material_photo_name": "Colonial-Gold_3ICwyoD3EIxrCWA2bfSj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:02:48",
    "thumb": "1"
  },
  {
    "id": "3248",
    "material_id": "226",
    "material_photo_name": "granite_Copenhagen_eJb6bXtHdR60SgQYOcnx.jpg",
    "original_name": "COPENHAGEN_024R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:22:19",
    "thumb": "0"
  },
  {
    "id": "4097",
    "material_id": "228",
    "material_photo_name": "Tan-Brown-Classic_jRcGToiXd7BB1JjOLgO5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:39:33",
    "thumb": "1"
  },
  {
    "id": "3702",
    "material_id": "238",
    "material_photo_name": "granite_Marvellous-Brown_ZdHptF0LUTfXWa65H0fU.jpg",
    "original_name": "MARVELLOUS_BROWN_127L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 12:13:22",
    "thumb": "0"
  },
  {
    "id": "3023",
    "material_id": "240",
    "material_photo_name": "granite_Azul-Platino_hmisMmsqN1nytozLwGh2.jpg",
    "original_name": "AZUL_PLATINO_132R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:01:27",
    "thumb": "0"
  },
  {
    "id": "3257",
    "material_id": "669",
    "material_photo_name": "Copper-Canyon-S_r0U2vNkFG0AM52JF0fjl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:35:11",
    "thumb": "1"
  },
  {
    "id": "3214",
    "material_id": "1130",
    "material_photo_name": "quartzite_Classic-White_HOrT8kiHwQHIhCxhLcez.jpg",
    "original_name": "CLASSIC_WHITE_MB_177R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:43:17",
    "thumb": "0"
  },
  {
    "id": "3213",
    "material_id": "242",
    "material_photo_name": "Classic-White_1sAyzhK8XIH8q560E6u5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:34:25",
    "thumb": "1"
  },
  {
    "id": "3212",
    "material_id": "242",
    "material_photo_name": "quartzite_Classic-White_U8DCQnIHk2VBanKWUbG0.jpg",
    "original_name": "CLASSIC_WHITE_170R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:33:42",
    "thumb": "0"
  },
  {
    "id": "4469",
    "material_id": "243",
    "material_photo_name": "granite_Astoria-Satin_DNcLffQbHMvTa14Snbsz.jpg",
    "original_name": "ASTORIA_SATIN_526L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:59:46",
    "thumb": "0"
  },
  {
    "id": "3771",
    "material_id": "109",
    "material_photo_name": "New-Kashmir-White_2tCdUDiYbfmAh0iSzucN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:24:04",
    "thumb": "1"
  },
  {
    "id": "3767",
    "material_id": "399",
    "material_photo_name": "New-Gold-Antique_k8O7W74aL85TgXMve51u.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:18:09",
    "thumb": "1"
  },
  {
    "id": "3765",
    "material_id": "246",
    "material_photo_name": "New-Colonial-Gold_8uiGEExz87gY2apKixpd.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:14:18",
    "thumb": "1"
  },
  {
    "id": "4517",
    "material_id": "651",
    "material_photo_name": "granite_Venecia-Gold_F1N5IQmT9CnX2SBpX2Tq.jpg",
    "original_name": "VENECIA_GOLD_330R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:08:06",
    "thumb": "0"
  },
  {
    "id": "3610",
    "material_id": "650",
    "material_photo_name": "granite_Juparana-Persa_6JWqZFVRLDMrTGG4A40O.jpg",
    "original_name": "JUPARANA_PERSA_423L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:15:38",
    "thumb": "0"
  },
  {
    "id": "2342",
    "material_id": "884",
    "material_photo_name": "quartz_8330-Albero-Caesarstone_P9IlCVklkcNsKR7jzngy.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:39:27",
    "thumb": "0"
  },
  {
    "id": "3068",
    "material_id": "262",
    "material_photo_name": "Bianco-Romano_HDZ8ZCcnBrGSPBdA1efr.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:48:51",
    "thumb": "1"
  },
  {
    "id": "3857",
    "material_id": "263",
    "material_photo_name": "Picasso_R1RFQSrFGzzBhX6557Ya.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:34:00",
    "thumb": "1"
  },
  {
    "id": "3063",
    "material_id": "1008",
    "material_photo_name": "Bianco-Neve_y4bSVgNoUjZN8RyZi2Zu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:41:55",
    "thumb": "1"
  },
  {
    "id": "3061",
    "material_id": "1012",
    "material_photo_name": "Bianco-Nero_ufAzeWJXuIoQTJD75D0r.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:39:39",
    "thumb": "1"
  },
  {
    "id": "3342",
    "material_id": "270",
    "material_photo_name": "Fantasy-Brown_i7CWj1SoXZCnkVFxLe0v.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:56:20",
    "thumb": "1"
  },
  {
    "id": "3344",
    "material_id": "976",
    "material_photo_name": "Fantasy-Brown_ohNWZ5rSwlx6I3EPvvt3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:58:19",
    "thumb": "1"
  },
  {
    "id": "3438",
    "material_id": "272",
    "material_photo_name": "Gold-Brasil_mNCXAylr9EUOidbrezEi.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:04:30",
    "thumb": "1"
  },
  {
    "id": "3048",
    "material_id": "274",
    "material_photo_name": "granite_Bianco-Antico_3T8C8TFjnQHZ9kgX3PVq.jpg",
    "original_name": "BIANCO_ANTICO_153R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:49:38",
    "thumb": "0"
  },
  {
    "id": "3646",
    "material_id": "917",
    "material_photo_name": "granite_Labradorite-Green_432o0hWwwwLgdsDH1aHI.jpg",
    "original_name": "LABRADORITE_GREEN_163L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:05:03",
    "thumb": "0"
  },
  {
    "id": "3255",
    "material_id": "730",
    "material_photo_name": "Copper-Canyon_74LebLod2HwOQzPLKMi3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:32:58",
    "thumb": "1"
  },
  {
    "id": "3253",
    "material_id": "634",
    "material_photo_name": "Copper-Canyon_44yKPbfvzzxrxHOTX3yc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:29:57",
    "thumb": "1"
  },
  {
    "id": "3233",
    "material_id": "757",
    "material_photo_name": "Colonial-Cream_a8ocr3l9Ep9LOCk4WN1u.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:55:46",
    "thumb": "1"
  },
  {
    "id": "3231",
    "material_id": "714",
    "material_photo_name": "Colonial-Cream_w9SyvgQgMnXJ8KWlUwE2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:53:20",
    "thumb": "1"
  },
  {
    "id": "3217",
    "material_id": "276",
    "material_photo_name": "Classic-White_RSLHMnzOekSxXwQsypG4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:32:54",
    "thumb": "1"
  },
  {
    "id": "4514",
    "material_id": "643",
    "material_photo_name": "soapstone_Green-Soapstone_5quzxLKg5xqXxZAoVgmu.jpg",
    "original_name": "GREEN_SOAPSTONE_424R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:03:09",
    "thumb": "0"
  },
  {
    "id": "3543",
    "material_id": "280",
    "material_photo_name": "Imperial-Coffee_fl320TastZBMfekkzdK5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:24:37",
    "thumb": "1"
  },
  {
    "id": "685",
    "material_id": "281",
    "material_photo_name": "granite_Peregrine-C_fMRPq803pufCQTYDC49o.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-04-13 08:52:05",
    "thumb": "0"
  },
  {
    "id": "4159",
    "material_id": "1096",
    "material_photo_name": "Verde-Bamboo_8z3AN4Dy3PxJDOkVafeM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:44:07",
    "thumb": "1"
  },
  {
    "id": "4155",
    "material_id": "283",
    "material_photo_name": "Veneziano-Gold_inEDxQNDUNqP0erZurV4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:39:34",
    "thumb": "1"
  },
  {
    "id": "3027",
    "material_id": "284",
    "material_photo_name": "Azul-Platino_ayQRUjzK5NrLrfnbmPet.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:06:22",
    "thumb": "1"
  },
  {
    "id": "3029",
    "material_id": "159",
    "material_photo_name": "Bacca-Bianca_vGwYumtvuGzwtdzv5reV.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:09:15",
    "thumb": "1"
  },
  {
    "id": "3945",
    "material_id": "287",
    "material_photo_name": "Salone_hOM7tNXSotArGEfjiXJK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:10:16",
    "thumb": "1"
  },
  {
    "id": "4062",
    "material_id": "694",
    "material_photo_name": "granite_Sucuri-White_tTBjFpd7ILAobJ0s7IwS.jpg",
    "original_name": "SUCURI_WHITE_631L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:21:14",
    "thumb": "0"
  },
  {
    "id": "3489",
    "material_id": "692",
    "material_photo_name": "granite_Golden-Valley-KG_tIpwzKybCw5aPgdveMI2.jpg",
    "original_name": "GOLDEN_VALLEY_KG_633R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:44:25",
    "thumb": "0"
  },
  {
    "id": "4523",
    "material_id": "690",
    "material_photo_name": "granite_Crema-Bordeaux_c4YAvpah5ESuvBvheOE1.jpg",
    "original_name": "CREMA_BORDEAUX_634R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:16:14",
    "thumb": "0"
  },
  {
    "id": "4314",
    "material_id": "291",
    "material_photo_name": "granite_Sunset-Ivory_Y1doONjxrZYqzQ5lM3ZO.jpg",
    "original_name": "SUNSET_IVORY_502R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-30 02:31:45",
    "thumb": "0"
  },
  {
    "id": "3421",
    "material_id": "293",
    "material_photo_name": "Giallo-Vicenza_jonJ3Uz26jOsdyKm7hPj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:21:39",
    "thumb": "1"
  },
  {
    "id": "3779",
    "material_id": "371",
    "material_photo_name": "New-Tan-Brown_hJUBacrBnyN1Qkq0ppv4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:38:06",
    "thumb": "1"
  },
  {
    "id": "3777",
    "material_id": "1027",
    "material_photo_name": "New-Sunset-Gold_hWCZHaB891yEIXJRr1MF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:34:17",
    "thumb": "1"
  },
  {
    "id": "3761",
    "material_id": "295",
    "material_photo_name": "New-Colonial-Gold_VlDw34qZkkges2MyDh29.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:09:34",
    "thumb": "1"
  },
  {
    "id": "3683",
    "material_id": "296",
    "material_photo_name": "Madura-Gold_3l4uVOLZa2846w2YRCbf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:03:04",
    "thumb": "1"
  },
  {
    "id": "4095",
    "material_id": "300",
    "material_photo_name": "Tan-Brown_DERKN0FWM1Aq85aRIvA6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:36:49",
    "thumb": "1"
  },
  {
    "id": "4476",
    "material_id": "303",
    "material_photo_name": "granite_Brown-Antique_dJDdaWLC06WGpNENaaSS.jpg",
    "original_name": "BROWN_ANTIQUE_730R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:07:29",
    "thumb": "0"
  },
  {
    "id": "2960",
    "material_id": "665",
    "material_photo_name": "granite_Alaska-White_JNOzl5uFGN1KijS9zx6R.jpg",
    "original_name": "ALASKA_WHITE_349L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:18:56",
    "thumb": "0"
  },
  {
    "id": "2987",
    "material_id": "316",
    "material_photo_name": "Aspen-White_NetOpnEYdcjskDzMVJkA.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 09:32:24",
    "thumb": "1"
  },
  {
    "id": "3755",
    "material_id": "318",
    "material_photo_name": "New-Caledonia_auSFVVFfQER8pMgiAHvd.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:58:49",
    "thumb": "1"
  },
  {
    "id": "2991",
    "material_id": "986",
    "material_photo_name": "Astoria_axHbwPKgT94DpQbfz7op.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 09:42:08",
    "thumb": "1"
  },
  {
    "id": "2989",
    "material_id": "321",
    "material_photo_name": "Aspen-White_0t4ToYOrlo8nn4BXP8sR.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 09:37:10",
    "thumb": "1"
  },
  {
    "id": "4478",
    "material_id": "324",
    "material_photo_name": "granite_Butterfly-Green_MqbkrSJV3zywSwch4pTh.jpg",
    "original_name": "BUTTERFLY_GREEN_141L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:09:53",
    "thumb": "0"
  },
  {
    "id": "4259",
    "material_id": "1159",
    "material_photo_name": "granite_Crema-Brazil_jCgGdjJKfwBsx7oxFpDe.jpg",
    "original_name": "CREMA_BRAZIL_VC_502L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:30:47",
    "thumb": "0"
  },
  {
    "id": "4256",
    "material_id": "1158",
    "material_photo_name": "Classic-White_zk2dS213AfZ9Zv6nyiQf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:03:42",
    "thumb": "1"
  },
  {
    "id": "4244",
    "material_id": "326",
    "material_photo_name": "Bianco-Antico_CoDwD4GL8fu9LZEC8vbW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:28:55",
    "thumb": "1"
  },
  {
    "id": "4157",
    "material_id": "327",
    "material_photo_name": "Veneziano-Gold_mWqV1LK3Hn7l3pWXFv9k.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:41:34",
    "thumb": "1"
  },
  {
    "id": "3772",
    "material_id": "671",
    "material_photo_name": "granite_New-Kashmir-White_4o52xM8axKK16YwzvNGN.jpg",
    "original_name": "NEW_KASHMIR_WHITE_505L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:25:44",
    "thumb": "0"
  },
  {
    "id": "3964",
    "material_id": "670",
    "material_photo_name": "granite_Santa-Cecilia-Brasil_fgFrHyzSe6ZdiCAtDvi8.jpg",
    "original_name": "SANTA_CECILIA_BRASIL_610R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:40:04",
    "thumb": "0"
  },
  {
    "id": "3159",
    "material_id": "1064",
    "material_photo_name": "Cabernet-Brown_COz8MX4UXMhkNOEkpkoe.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:39:17",
    "thumb": "1"
  },
  {
    "id": "3157",
    "material_id": "332",
    "material_photo_name": "Butterfly-Green_UFowsDJTcgUY4iWkrIbf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:42:58",
    "thumb": "1"
  },
  {
    "id": "3007",
    "material_id": "333",
    "material_photo_name": "granite_Atlantis_BNUFUVFLCZHmiSYD8moJ.jpg",
    "original_name": "ATLANTIS_916R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 10:18:28",
    "thumb": "0"
  },
  {
    "id": "4052",
    "material_id": "672",
    "material_photo_name": "granite_Splendor_6XiwsTZLcewNzTJP7LuV.jpg",
    "original_name": "SPLENDOR_615L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:05:07",
    "thumb": "0"
  },
  {
    "id": "3389",
    "material_id": "335",
    "material_photo_name": "Giallo-Napole_2cczHJ4F1DL1NElU6G21.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:07:40",
    "thumb": "1"
  },
  {
    "id": "4258",
    "material_id": "340",
    "material_photo_name": "Crema-Brazil_lZROb183pmaPnJ9ZPjUL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:27:41",
    "thumb": "1"
  },
  {
    "id": "3324",
    "material_id": "342",
    "material_photo_name": "Dynasty-Brown_3H3aeRbYKZgcvyuqguZl.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 02:25:13",
    "thumb": "1"
  },
  {
    "id": "3483",
    "material_id": "683",
    "material_photo_name": "granite_Golden-Silver_2vEuhfniVC8YbqHQ7A5H.jpg",
    "original_name": "GOLDEN_SILVER_804L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:34:39",
    "thumb": "0"
  },
  {
    "id": "3271",
    "material_id": "345",
    "material_photo_name": "Cosmic-Black_OOqYxHgccd1ubfs3pRry.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:59:06",
    "thumb": "1"
  },
  {
    "id": "3137",
    "material_id": "346",
    "material_photo_name": "Boreal_oslqJHSeZKNUDC5j7WbD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:16:19",
    "thumb": "1"
  },
  {
    "id": "3823",
    "material_id": "347",
    "material_photo_name": "Oscuro-Mist_v3q03MB7KinWHgbjmvnB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:35:26",
    "thumb": "1"
  },
  {
    "id": "2922",
    "material_id": "348",
    "material_photo_name": "Absolute-Black-Leather_EpbqSylZA78Lkyaz4Xy8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 06:31:04",
    "thumb": "1"
  },
  {
    "id": "2921",
    "material_id": "348",
    "material_photo_name": "granite_Absolute-Black-Leather_TdIji8m8kE4fkWlLclDU.jpg",
    "original_name": "ABSOLUTE_BLACK_LEATHER_031L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 06:30:52",
    "thumb": "0"
  },
  {
    "id": "3584",
    "material_id": "350",
    "material_photo_name": "Jet-Mist_XySAvtaeWWWCWwXz14et.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:39:32",
    "thumb": "1"
  },
  {
    "id": "3679",
    "material_id": "351",
    "material_photo_name": "Madura-Gold_ywXSkEkTAqgvECTRuVd4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:59:13",
    "thumb": "1"
  },
  {
    "id": "3931",
    "material_id": "355",
    "material_photo_name": "Rosette_BlB4f42d0y7KpH8ZPzGR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:16:49",
    "thumb": "1"
  },
  {
    "id": "3070",
    "material_id": "718",
    "material_photo_name": "Bianco-Romano_z0ur78hA8brnfcyyMebk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:51:57",
    "thumb": "1"
  },
  {
    "id": "3046",
    "material_id": "359",
    "material_photo_name": "granite_Bianco-Antico_jtBdzQSrpJf63RhwImDK.jpg",
    "original_name": "BIANCO_ANTICO_138L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:44:42",
    "thumb": "0"
  },
  {
    "id": "3065",
    "material_id": "416",
    "material_photo_name": "Bianco-Rhino_MmQa40a9N4u7AJfKsP30.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:44:03",
    "thumb": "1"
  },
  {
    "id": "3993",
    "material_id": "361",
    "material_photo_name": "Shalimar-Gold_Jth4NGTiryQlUankx0tP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:22:25",
    "thumb": "1"
  },
  {
    "id": "3594",
    "material_id": "363",
    "material_photo_name": "Juparana-Colombo_N9Hh2IVViIseI6G7mAiT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:55:55",
    "thumb": "1"
  },
  {
    "id": "3789",
    "material_id": "364",
    "material_photo_name": "Noble-White_hFcal0sRZZM5l3P6fM5O.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:50:14",
    "thumb": "1"
  },
  {
    "id": "4106",
    "material_id": "681",
    "material_photo_name": "granite_Tiberious_vVkU6jLUJYGVDbgWlkgl.jpg",
    "original_name": "TIBERIOUS_354L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:51:44",
    "thumb": "0"
  },
  {
    "id": "4522",
    "material_id": "680",
    "material_photo_name": "granite_Golden-Valley-KG_XfXbck5Jr42tfm8fTxKs.jpg",
    "original_name": "GOLDEN_VALLEY_KG_827L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:14:51",
    "thumb": "0"
  },
  {
    "id": "4147",
    "material_id": "374",
    "material_photo_name": "Ubatuba_OHUROSPHA1aurPUcuOMu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:23:14",
    "thumb": "1"
  },
  {
    "id": "3447",
    "material_id": "664",
    "material_photo_name": "granite_Golden-Beach-EX_ZYjXxkRBGsobzGTQBbcc.jpg",
    "original_name": "GOLDEN_BEACH_EX_349R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:16:03",
    "thumb": "0"
  },
  {
    "id": "3067",
    "material_id": "262",
    "material_photo_name": "granite_Bianco-Romano_rTpGsRiXREY1VYndNfcQ.jpg",
    "original_name": "BIANCO_ROMANO_301L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:48:08",
    "thumb": "0"
  },
  {
    "id": "3565",
    "material_id": "380",
    "material_photo_name": "Ivory-Gold_ufu5hDTCSc6nwVZZM4No.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:59:13",
    "thumb": "1"
  },
  {
    "id": "3501",
    "material_id": "381",
    "material_photo_name": "Golden-Valley_ws5VuPRDoLuiCwJUbX0r.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 09:01:58",
    "thumb": "1"
  },
  {
    "id": "3503",
    "material_id": "567",
    "material_photo_name": "Golden-Valley-MG_q4JQlQzJbx3mpN0OZoqC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 09:04:46",
    "thumb": "1"
  },
  {
    "id": "2330",
    "material_id": "878",
    "material_photo_name": "quartz_8551-Viola-Caesarstone_2vfiBfWEIo31ZyAOvwQj.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:32:53",
    "thumb": "0"
  },
  {
    "id": "2488",
    "material_id": "878",
    "material_photo_name": "BEJjiCLd0ngCIc79LQsF.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:48:59",
    "thumb": "1"
  },
  {
    "id": "4537",
    "material_id": "918",
    "material_photo_name": "granite_Oscuro-Mist_BAA8tLgq23xjiLNrGO62.jpg",
    "original_name": "OSCURO_MIST_164L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:32:53",
    "thumb": "0"
  },
  {
    "id": "4521",
    "material_id": "669",
    "material_photo_name": "granite_Copper-Canyon-S_u6eZsQU6eVHKiXVuqIjP.jpg",
    "original_name": "COPPER_CANYON_S_609R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:13:36",
    "thumb": "0"
  },
  {
    "id": "3928",
    "material_id": "390",
    "material_photo_name": "granite_Rosette_HQqjXWhKXqYulyyJolqd.jpg",
    "original_name": "ROSETTE_029L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:13:40",
    "thumb": "0"
  },
  {
    "id": "3222",
    "material_id": "392",
    "material_photo_name": "granite_Cappuccino_9vsi8Put22AnI3colPv9.jpg",
    "original_name": "CAPPUCCINO_417L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:41:29",
    "thumb": "0"
  },
  {
    "id": "3191",
    "material_id": "1057",
    "material_photo_name": "Cedar_3uj1DfFgyeOdBldpMzDT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:49:34",
    "thumb": "1"
  },
  {
    "id": "3407",
    "material_id": "630",
    "material_photo_name": "Giallo-Ornamental_XY9KRS1nwY1MzdaoXswm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:01:26",
    "thumb": "1"
  },
  {
    "id": "3405",
    "material_id": "393",
    "material_photo_name": "Giallo-Ornamental_BJhQJuRUcO7QIjxuIuTh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:59:23",
    "thumb": "1"
  },
  {
    "id": "3907",
    "material_id": "394",
    "material_photo_name": "River-Gold_ecGtikh38KvqNzQT1Mo9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:40:26",
    "thumb": "1"
  },
  {
    "id": "3308",
    "material_id": "397",
    "material_photo_name": "granite_Delicatus-Cream_dR9w4S0qwnENf8HneP54.jpg",
    "original_name": "DELICATUS_CREAM_137L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 01:08:41",
    "thumb": "0"
  },
  {
    "id": "3031",
    "material_id": "398",
    "material_photo_name": "Balthus_GVqwuG5LjEw884rih4kp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:16:26",
    "thumb": "1"
  },
  {
    "id": "3953",
    "material_id": "515",
    "material_photo_name": "Sandalus-Leather_XIc8R0pbSekaOhAc6z1h.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:20:57",
    "thumb": "1"
  },
  {
    "id": "3955",
    "material_id": "521",
    "material_photo_name": "Sanguine_E98dg8d0965p7roWd415.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:23:47",
    "thumb": "1"
  },
  {
    "id": "3957",
    "material_id": "229",
    "material_photo_name": "Sanguine-C_YbbKJKMyFXovc3V9kBz1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:26:08",
    "thumb": "1"
  },
  {
    "id": "3915",
    "material_id": "401",
    "material_photo_name": "River-White_VXt3AvFOJ2VKl1m438za.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:52:11",
    "thumb": "1"
  },
  {
    "id": "4510",
    "material_id": "632",
    "material_photo_name": "granite_Black-Diamond_zOMfaonS9tdeIrlZ3pMQ.jpg",
    "original_name": "BLACK_DIAMOND_426R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:57:51",
    "thumb": "0"
  },
  {
    "id": "3175",
    "material_id": "406",
    "material_photo_name": "Calacatta-Michelangelo_utwTSchYNTb3OdSlcZwJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:09:15",
    "thumb": "1"
  },
  {
    "id": "3229",
    "material_id": "470",
    "material_photo_name": "Colonial-Cream_5FwInoCeT1kNXKY3dInI.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 10:50:43",
    "thumb": "1"
  },
  {
    "id": "3227",
    "material_id": "934",
    "material_photo_name": "Colombo-Gold_d5qZxtWxfPtw4G6hnbM2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:47:19",
    "thumb": "1"
  },
  {
    "id": "3221",
    "material_id": "523",
    "material_photo_name": "Cloudy-Yellow_65IHLy3XPfNvTnem6UAh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:38:59",
    "thumb": "1"
  },
  {
    "id": "3219",
    "material_id": "407",
    "material_photo_name": "Classic-White_WBhvsaDIVWsv0lxZLn9i.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:36:26",
    "thumb": "1"
  },
  {
    "id": "2966",
    "material_id": "408",
    "material_photo_name": "granite_Amazon-Tiger_PcvN7r0CsZdgmSwDVgsa.jpg",
    "original_name": "AMAZON_TIGER_737L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:26:30",
    "thumb": "0"
  },
  {
    "id": "3179",
    "material_id": "279",
    "material_photo_name": "Calacatta-Oro_zILPAtYr2FTzEDXirxgR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:14:22",
    "thumb": "1"
  },
  {
    "id": "3177",
    "material_id": "409",
    "material_photo_name": "Calacatta-Michelangelo_raAo6WJxFnMG6AVp0yld.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:12:18",
    "thumb": "1"
  },
  {
    "id": "3173",
    "material_id": "410",
    "material_photo_name": "Calacatta-Michelangelo_4xL8MW8HmPSU5MjRuEuV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:06:28",
    "thumb": "1"
  },
  {
    "id": "4488",
    "material_id": "411",
    "material_photo_name": "marble_Blue-Damasco_xxmcacKb9Iq46L6TVyct.jpg",
    "original_name": "BLUE_DAMASCO_005L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:25:21",
    "thumb": "0"
  },
  {
    "id": "3165",
    "material_id": "415",
    "material_photo_name": "Calacatta-Gold_ZSzIgtXfk8aqyWFYhWOm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:49:25",
    "thumb": "1"
  },
  {
    "id": "3223",
    "material_id": "392",
    "material_photo_name": "Cappuccino_x1HznJGOU7NqADhHZa0y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:41:38",
    "thumb": "1"
  },
  {
    "id": "3189",
    "material_id": "930",
    "material_photo_name": "Carmel-Gold_hcVY85eFf5ks2pS5khmI.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:47:00",
    "thumb": "1"
  },
  {
    "id": "3307",
    "material_id": "145",
    "material_photo_name": "Dakota-Mahogany_07NtI9rK09tD9Pv5s7e7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 01:06:06",
    "thumb": "1"
  },
  {
    "id": "3297",
    "material_id": "417",
    "material_photo_name": "Crema-Marfil_bk9CcaVo7bt63VbwzTpc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:51:32",
    "thumb": "1"
  },
  {
    "id": "4228",
    "material_id": "418",
    "material_photo_name": "White-Thassos_ZByZ8GSM60jmXTBQPSo7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:51:46",
    "thumb": "1"
  },
  {
    "id": "4516",
    "material_id": "645",
    "material_photo_name": "granite_Giallo-Firenza_lEJIYL2iScoq5rsadC6K.jpg",
    "original_name": "GIALLO_FIRENZA_318L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:06:24",
    "thumb": "0"
  },
  {
    "id": "4286",
    "material_id": "424",
    "material_photo_name": "granite_Juparana-Gold_Mv1WdFEfUuZUZdBpceSY.jpg",
    "original_name": "JUPARANA_GOLD_522L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-26 01:31:08",
    "thumb": "0"
  },
  {
    "id": "3044",
    "material_id": "426",
    "material_photo_name": "marble_Bianco-Altissimo_UyANFGFII09FhKYPNjXU.jpg",
    "original_name": "BIANCO_ALTISSIMO_040L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:40:11",
    "thumb": "0"
  },
  {
    "id": "4489",
    "material_id": "430",
    "material_photo_name": "quartzite_Azul-Macaubas_yyDIJhrjP7G8a7sfvhQB.jpg",
    "original_name": "AZUL_MACAUBAS_010L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:26:52",
    "thumb": "0"
  },
  {
    "id": "3181",
    "material_id": "980",
    "material_photo_name": "Cappuccino_20bt830gw5iokCx2mgAk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:23:07",
    "thumb": "1"
  },
  {
    "id": "3167",
    "material_id": "431",
    "material_photo_name": "Calacatta-Gold_Lkg3QK33yVv5nn113EEk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:52:07",
    "thumb": "1"
  },
  {
    "id": "3171",
    "material_id": "1129",
    "material_photo_name": "Calacatta-Gold_RLLa5a9Y2NOi77mbaCRw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:03:13",
    "thumb": "1"
  },
  {
    "id": "3170",
    "material_id": "1129",
    "material_photo_name": "marble_Calacatta-Gold_rXOcLP863eUwTmpzfWhQ.jpg",
    "original_name": "CALACATTA_GOLD_002R_GLOSSY_MINIATURE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:01:32",
    "thumb": "0"
  },
  {
    "id": "3169",
    "material_id": "432",
    "material_photo_name": "Calacatta-Gold_OfUM6Rz6jJvJa00v9eAN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 05:55:53",
    "thumb": "1"
  },
  {
    "id": "4002",
    "material_id": "697",
    "material_photo_name": "granite_Siena-Beige_qdaHr5Q6zOiFwKOd8yKJ.jpg",
    "original_name": "SIENA_BEIGE_627L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:34:29",
    "thumb": "0"
  },
  {
    "id": "3810",
    "material_id": "687",
    "material_photo_name": "granite_Original-Peacock-Green_zMuvLGVIroVeU9VzNlhg.jpg",
    "original_name": "ORIGINAL_PEACOCK_GREEN_817L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:18:15",
    "thumb": "0"
  },
  {
    "id": "4229",
    "material_id": "685",
    "material_photo_name": "granite_White-Thunder_hn76AwasPvvYtZCQn6OB.jpg",
    "original_name": "WHITE_THUNDER_815L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:53:51",
    "thumb": "0"
  },
  {
    "id": "4295",
    "material_id": "689",
    "material_photo_name": "White-Torroncino_P0R2sD6cXsyK8X1Wl44J.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 11:34:49",
    "thumb": "1"
  },
  {
    "id": "4296",
    "material_id": "1162",
    "material_photo_name": "granite_White-Torroncino_2bSUzjhM74TbMWSXTNb8.jpg",
    "original_name": "WHITE_TORRONCINO_635L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 11:39:47",
    "thumb": "0"
  },
  {
    "id": "4238",
    "material_id": "435",
    "material_photo_name": "Absolute-Black-Leather_cmXlAWPXUeomIitjUnGB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 07:32:01",
    "thumb": "1"
  },
  {
    "id": "3123",
    "material_id": "312",
    "material_photo_name": "Blue-Night_LP4P3CFusLLJEoYxCr0h.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:57:53",
    "thumb": "1"
  },
  {
    "id": "4129",
    "material_id": "439",
    "material_photo_name": "Tropical-Blue_HmRhKnrqUAm7xDE7GL1O.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:22:30",
    "thumb": "1"
  },
  {
    "id": "4123",
    "material_id": "442",
    "material_photo_name": "Travertine-Silyon_8nAMOC4GK08A1MbeOTDO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:13:49",
    "thumb": "1"
  },
  {
    "id": "4125",
    "material_id": "443",
    "material_photo_name": "Travertine-Silyon_0aeIEgp1999kOmvAzfrh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:15:46",
    "thumb": "1"
  },
  {
    "id": "4124",
    "material_id": "443",
    "material_photo_name": "travertine_Travertine-Silyon_QxR8HVh1IgwYvqonsNmp.jpg",
    "original_name": "TRAVERTINE_SILYON_181L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:15:17",
    "thumb": "0"
  },
  {
    "id": "2490",
    "material_id": "880",
    "material_photo_name": "IDKidtPUsDcayZdUipLJ.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:50:11",
    "thumb": "1"
  },
  {
    "id": "3769",
    "material_id": "447",
    "material_photo_name": "New-Imperial_K2Mjz3T0PVi8Gwa9E8fx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:20:50",
    "thumb": "1"
  },
  {
    "id": "3759",
    "material_id": "449",
    "material_photo_name": "New-Colonial-Gold_LTVYc9MrW4Y30hMSahvl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:05:52",
    "thumb": "1"
  },
  {
    "id": "3787",
    "material_id": "450",
    "material_photo_name": "Noble-White_rx0jmU0aNCdGbmKeCve9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:48:55",
    "thumb": "1"
  },
  {
    "id": "3967",
    "material_id": "451",
    "material_photo_name": "Santa-Cecilia-Light_JFAeNNoMmkYkYcQ8Rxuc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:42:52",
    "thumb": "1"
  },
  {
    "id": "3510",
    "material_id": "750",
    "material_photo_name": "granite_Green-Galaxy_wjQ5OiNbMhEUHqNnyH0b.jpg",
    "original_name": "GREEN_GALAXY_183L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:34:28",
    "thumb": "0"
  },
  {
    "id": "4536",
    "material_id": "749",
    "material_photo_name": "limestone_Giallo-Reale_s2V3HdQeZiBnQVmX0K4z.jpg",
    "original_name": "GIALLO_REALE_168R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:31:31",
    "thumb": "0"
  },
  {
    "id": "3059",
    "material_id": "187",
    "material_photo_name": "BIANCO-LATINO_gcFFWklfkhruZXNq3Wbv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:36:36",
    "thumb": "1"
  },
  {
    "id": "3057",
    "material_id": "413",
    "material_photo_name": "Bianco-Goia_4GIuDbd0g0U7WPqpkWlg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:34:07",
    "thumb": "1"
  },
  {
    "id": "3055",
    "material_id": "257",
    "material_photo_name": "Bianco-Dimante_wbLFgTxP5bveLYg6woey.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:31:46",
    "thumb": "1"
  },
  {
    "id": "3053",
    "material_id": "428",
    "material_photo_name": "Bianco-D_gLBN5YB0M4WpI3ZDGOwI.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 01:27:31",
    "thumb": "1"
  },
  {
    "id": "3051",
    "material_id": "455",
    "material_photo_name": "Bianco-Antico_YhjBeovK2f62ROZ2YAL7.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:55:07",
    "thumb": "1"
  },
  {
    "id": "4242",
    "material_id": "456",
    "material_photo_name": "Bianco-Antico_cDJRO37qKo7Lq1ImYsku.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:26:22",
    "thumb": "1"
  },
  {
    "id": "4261",
    "material_id": "1159",
    "material_photo_name": "Crema-Brazil_Cm4qIiNy9J8lmGz76iKa.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:32:27",
    "thumb": "1"
  },
  {
    "id": "4263",
    "material_id": "414",
    "material_photo_name": "Cremo-Delicato_1VSCnrFco74zOm05akHa.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:40:33",
    "thumb": "1"
  },
  {
    "id": "4267",
    "material_id": "954",
    "material_photo_name": "Exotic-Gold_YyrKgmkuyzH3qVGSg0OZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:49:06",
    "thumb": "1"
  },
  {
    "id": "3969",
    "material_id": "457",
    "material_photo_name": "Santa-Cecilia-Light_JEvChySgV1D68oyErYFf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:44:37",
    "thumb": "1"
  },
  {
    "id": "3971",
    "material_id": "458",
    "material_photo_name": "Santa-Cecilia-Real_eSjEdpVoG3vKP4RgAnGo.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:48:41",
    "thumb": "1"
  },
  {
    "id": "3305",
    "material_id": "1034",
    "material_photo_name": "Crema-Viejo-Travertine_B7aTOUvN61ZhntKUL5WP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 01:02:28",
    "thumb": "1"
  },
  {
    "id": "3303",
    "material_id": "1046",
    "material_photo_name": "Crema-Valencia_G2qO9qxtbsYa5KXQRXGh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:59:59",
    "thumb": "1"
  },
  {
    "id": "3301",
    "material_id": "971",
    "material_photo_name": "Crema-Montana_TK8m3zdaS5jMwh5OAgBJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:57:53",
    "thumb": "1"
  },
  {
    "id": "3299",
    "material_id": "459",
    "material_photo_name": "Crema-Marfil_jl2gbt4TJR8rHT6GyktW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:54:52",
    "thumb": "1"
  },
  {
    "id": "3374",
    "material_id": "292",
    "material_photo_name": "granite_Giallo-Farfalla_2eUd121ko9fqJM0Fu9bg.jpg",
    "original_name": "GIALLO_FARFALLA_210R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:46:40",
    "thumb": "0"
  },
  {
    "id": "3372",
    "material_id": "461",
    "material_photo_name": "Giallo-Arctic-Gold_AD1glMGiOrT7K0wrvcDB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:43:43",
    "thumb": "1"
  },
  {
    "id": "3266",
    "material_id": "662",
    "material_photo_name": "granite_Cosmic-Black_RFtjSCyI18cI76XM7pJg.jpg",
    "original_name": "COSMIC_BLACK_338L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:52:53",
    "thumb": "0"
  },
  {
    "id": "4080",
    "material_id": "465",
    "material_photo_name": "quartzite_Super-White-Quartzite_GkrDYetFrGiVQcDJthSh.jpg",
    "original_name": "SUPER_WHITE_M86L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:16:55",
    "thumb": "0"
  },
  {
    "id": "4081",
    "material_id": "465",
    "material_photo_name": "Super-White-Quartzite_tu7bP0nFmJ2YTqsT8LRp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:17:09",
    "thumb": "1"
  },
  {
    "id": "4054",
    "material_id": "466",
    "material_photo_name": "marble_Statuario_EVdLltPbGs9yd7AcDvEi.jpg",
    "original_name": "STATUARIO_022L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:07:59",
    "thumb": "0"
  },
  {
    "id": "3378",
    "material_id": "696",
    "material_photo_name": "granite_Giallo-Fiesta_UW585CUIvPMNNLAef2RM.jpg",
    "original_name": "GIALLO_FIESTA_518L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:50:48",
    "thumb": "0"
  },
  {
    "id": "3664",
    "material_id": "695",
    "material_photo_name": "granite_Lapidus-Gold_LUpgpQU43EcOWqEZ2xKD.jpg",
    "original_name": "LAPIDUS_GOLD_524L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:38:37",
    "thumb": "0"
  },
  {
    "id": "4003",
    "material_id": "697",
    "material_photo_name": "Siena-Beige_6DBisyvuNesCb8iQrHx7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:36:08",
    "thumb": "1"
  },
  {
    "id": "3999",
    "material_id": "469",
    "material_photo_name": "Siena-Beige_K8mv7C36DqWaGr4gOhVu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:30:38",
    "thumb": "1"
  },
  {
    "id": "3989",
    "material_id": "472",
    "material_photo_name": "Shadow-Storm_SLCCSoZFFctjdY3J4Q90.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:16:10",
    "thumb": "1"
  },
  {
    "id": "4518",
    "material_id": "652",
    "material_photo_name": "granite_Florencia-Bordeaux_EUHxH64p2FqEYTlxqkCX.jpg",
    "original_name": "FLORENCIA_BORDEAUX_333L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:09:43",
    "thumb": "0"
  },
  {
    "id": "3596",
    "material_id": "476",
    "material_photo_name": "Juparana-Colombo_1tfHYWjFpj7c0yO4J0i6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:57:56",
    "thumb": "1"
  },
  {
    "id": "3911",
    "material_id": "478",
    "material_photo_name": "River-Valley_H1dC7VvQrqDQ6ZNoVd0c.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:44:48",
    "thumb": "1"
  },
  {
    "id": "3908",
    "material_id": "480",
    "material_photo_name": "granite_River-Valley_po6hh5mPB31r3vEFptnE.jpg",
    "original_name": "RIVER_VALLEY_114L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:42:41",
    "thumb": "0"
  },
  {
    "id": "3939",
    "material_id": "717",
    "material_photo_name": "Ruby-Blue_LehLWYBuJogy1XmTuhTE.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:01:48",
    "thumb": "1"
  },
  {
    "id": "3937",
    "material_id": "1152",
    "material_photo_name": "Rosewood_swk1wTSdYTJ3aEEf3gek.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 09:59:36",
    "thumb": "1"
  },
  {
    "id": "3936",
    "material_id": "1152",
    "material_photo_name": "granite_Rosewood_TXKuSMW2aPHkTLhXdVmF.jpg",
    "original_name": "ROSEWOOD_205L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 09:58:24",
    "thumb": "0"
  },
  {
    "id": "3919",
    "material_id": "481",
    "material_photo_name": "River-White_3ykI1P9iLZXK17f41SWp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:58:12",
    "thumb": "1"
  },
  {
    "id": "3921",
    "material_id": "734",
    "material_photo_name": "River-White_MxPVdLxQcKr25F459itA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:00:59",
    "thumb": "1"
  },
  {
    "id": "3935",
    "material_id": "1151",
    "material_photo_name": "Rosette_Xqjl1c9IgJCHpvTO0cSB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 09:50:03",
    "thumb": "1"
  },
  {
    "id": "3913",
    "material_id": "482",
    "material_photo_name": "River-White_SAfRgWMXrruFMQBXF8lM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:48:36",
    "thumb": "1"
  },
  {
    "id": "3725",
    "material_id": "486",
    "material_photo_name": "Mont-Bleu_2yEcCefOyiCmWf1wE7gg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:45:49",
    "thumb": "1"
  },
  {
    "id": "2497",
    "material_id": "877",
    "material_photo_name": "QMGXetgtZI1te79jlIno.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:53:40",
    "thumb": "1"
  },
  {
    "id": "2336",
    "material_id": "881",
    "material_photo_name": "quartz_8531-Profondo-Caesarstone_IPGv8yyjH28XW6bPcVVr.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:35:32",
    "thumb": "0"
  },
  {
    "id": "4092",
    "material_id": "126",
    "material_photo_name": "granite_Tan-Brown_q5wDpVABlbmKA2QvBO4E.jpg",
    "original_name": "TAN_BROWN_731L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:33:38",
    "thumb": "0"
  },
  {
    "id": "2932",
    "material_id": "492",
    "material_photo_name": "Absolute-Cream_y5JJ3l7zgsbfeyeJPTR3.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 06:46:06",
    "thumb": "1"
  },
  {
    "id": "2985",
    "material_id": "68",
    "material_photo_name": "Aspen-White_RIKXCOOHk7PvydMw4olZ.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 09:27:55",
    "thumb": "1"
  },
  {
    "id": "3577",
    "material_id": "391",
    "material_photo_name": "limestone_Jerusalem-White_q0woODGklnHo9aNOGyzl.jpg",
    "original_name": "JERUSALEM_WHITE_HONED_NO_FRAME_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 11:19:50",
    "thumb": "0"
  },
  {
    "id": "3774",
    "material_id": "698",
    "material_photo_name": "granite_New-Lapidus_J59fQORirUqbT8otDpuJ.jpg",
    "original_name": "NEW_LAPIDUS_632L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:30:57",
    "thumb": "0"
  },
  {
    "id": "2938",
    "material_id": "494",
    "material_photo_name": "African-Persa_AUV6tFhuY4tQcLcW3OIY.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 06:53:19",
    "thumb": "1"
  },
  {
    "id": "3111",
    "material_id": "85",
    "material_photo_name": "granite_Blue-Eyes_Lz6hDxdTbFKtHJ1lsibo.jpg",
    "original_name": "BLUE_EYES_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:32:05",
    "thumb": "0"
  },
  {
    "id": "3150",
    "material_id": "100",
    "material_photo_name": "granite_Butterfly-Green_UcrpjTy9YfbuhEy8k7IQ.jpg",
    "original_name": "BUTTERFLY_GREEN_345L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:34:41",
    "thumb": "0"
  },
  {
    "id": "4460",
    "material_id": "83",
    "material_photo_name": "granite_Black-Thunder_Apqjf8ESXRbjXfna7msv.jpg",
    "original_name": "BLACK_THUNDER_816L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:47:40",
    "thumb": "0"
  },
  {
    "id": "3448",
    "material_id": "664",
    "material_photo_name": "Golden-Beach-EX_yFYh3Sw51j9J6maFO5VH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:16:23",
    "thumb": "1"
  },
  {
    "id": "3444",
    "material_id": "496",
    "material_photo_name": "Golden-Beach-Ex_UZ0VvbnyIEU3APdfRy6l.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:12:28",
    "thumb": "1"
  },
  {
    "id": "4190",
    "material_id": "256",
    "material_photo_name": "granite_Vyara_5tFMF0DCC43ketAWwQlM.jpg",
    "original_name": "VYARA_148L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:28:07",
    "thumb": "0"
  },
  {
    "id": "2328",
    "material_id": "877",
    "material_photo_name": "quartz_8141-Puro-Caesarstone_rLDoxTmilLQ26qR0DuP4.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:31:56",
    "thumb": "0"
  },
  {
    "id": "3951",
    "material_id": "950",
    "material_photo_name": "San-Gabriel-Black_KhkGi0Rz2XGUHiFrdvB2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:18:49",
    "thumb": "1"
  },
  {
    "id": "3208",
    "material_id": "102",
    "material_photo_name": "quartzite_Classic-White_rIGYooOCMEJ0ouk2yyhL.jpg",
    "original_name": "CLASSIC_WHITE_MB_177L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:25:14",
    "thumb": "0"
  },
  {
    "id": "3278",
    "material_id": "103",
    "material_photo_name": "granite_Costa-Esmeralda_Z3Nm7rrWgmnw112u5F4O.jpg",
    "original_name": "COSTA_ESMERALDA_719R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:13:07",
    "thumb": "0"
  },
  {
    "id": "3732",
    "material_id": "105",
    "material_photo_name": "granite_Namibian-Gold_88tA2hX8Sxg2wK0y6AGN.jpg",
    "original_name": "NAMIBIAN_GOLD_339R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:56:21",
    "thumb": "0"
  },
  {
    "id": "3902",
    "material_id": "115",
    "material_photo_name": "granite_Red-Ravel_VK1LPf2NbGDPt38tIlXr.jpg",
    "original_name": "RED_RAVEL_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:35:38",
    "thumb": "0"
  },
  {
    "id": "3742",
    "material_id": "106",
    "material_photo_name": "granite_Netuno-Bordeaux_XjUpE22m754nL2JRRQjP.jpg",
    "original_name": "NETUNO_BORDEAUX_132L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:07:29",
    "thumb": "0"
  },
  {
    "id": "3750",
    "material_id": "107",
    "material_photo_name": "granite_New-Astoria_7fn353O7hSW4NYDiHFWu.jpg",
    "original_name": "NEW_ASTORIA_167L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:18:48",
    "thumb": "0"
  },
  {
    "id": "3824",
    "material_id": "114",
    "material_photo_name": "granite_Oxford-White_93t2nkMBf0hTzUq6cwgf.jpg",
    "original_name": "OXFORD_WHITE_134L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:37:03",
    "thumb": "0"
  },
  {
    "id": "3752",
    "material_id": "108",
    "material_photo_name": "granite_New-Caledonia_wmAqXqxgspv0QgQoWmBT.jpg",
    "original_name": "NEW_CALEDONIA_417L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:46:15",
    "thumb": "0"
  },
  {
    "id": "4461",
    "material_id": "109",
    "material_photo_name": "granite_New-Kashmir-White_dm9NCDSwAWADiwG6HRae.jpg",
    "original_name": "NEW_KASHMIR_WHITE_519L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:49:46",
    "thumb": "0"
  },
  {
    "id": "3780",
    "material_id": "110",
    "material_photo_name": "granite_New-Tunas_CoEdXyV9kyOVLXxK1UaH.jpg",
    "original_name": "NEW_TUNAS_926R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:39:41",
    "thumb": "0"
  },
  {
    "id": "4299",
    "material_id": "111",
    "material_photo_name": "New-Venetian-Gold_d0G0i1ZAVepQn6vjq4ot.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 12:13:48",
    "thumb": "1"
  },
  {
    "id": "4462",
    "material_id": "117",
    "material_photo_name": "granite_Salone_yxX6V3S2YXgz0jYVLYB5.jpg",
    "original_name": "SALONE_167L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:50:55",
    "thumb": "0"
  },
  {
    "id": "3962",
    "material_id": "118",
    "material_photo_name": "granite_Santa-Cecilia_IMB3cXN27vUtaFaW8kXX.jpg",
    "original_name": "SANTA_CECILIA_1017R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:37:24",
    "thumb": "0"
  },
  {
    "id": "4519",
    "material_id": "653",
    "material_photo_name": "granite_Tropical-Brown_gCQrKkY5PBW1cFwtjDVX.jpg",
    "original_name": "TROPICAL_BROWN_335L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:11:00",
    "thumb": "0"
  },
  {
    "id": "3978",
    "material_id": "121",
    "material_photo_name": "granite_Sea-Pearl_RNbf84OCZc1j5hX2Ewg3.jpg",
    "original_name": "SEA_PEARL_506R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:59:49",
    "thumb": "0"
  },
  {
    "id": "4046",
    "material_id": "123",
    "material_photo_name": "marble_Spanish-Gold_DxcDMR6qWUGvDQmpJDwj.jpg",
    "original_name": "SPANISH_GOLD_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:44:07",
    "thumb": "0"
  },
  {
    "id": "4303",
    "material_id": "217",
    "material_photo_name": "quartz_Pure-Quantra_OYdoBbGebVBS6kMi9rjd.jpg",
    "original_name": "PURE_NO_FRAME_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 12:25:14",
    "thumb": "0"
  },
  {
    "id": "4304",
    "material_id": "217",
    "material_photo_name": "Pure-Quantra_iX8l1HijqPuHvUcVd4nN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 12:25:34",
    "thumb": "1"
  },
  {
    "id": "4058",
    "material_id": "124",
    "material_photo_name": "granite_Stormy-Night_Moov6t8Bqfp7pF6hJug5.jpg",
    "original_name": "STORMY_NIGHT_344L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:13:53",
    "thumb": "0"
  },
  {
    "id": "4077",
    "material_id": "125",
    "material_photo_name": "Super-White_QzCOnPKvyHD5Eifa8XrQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:47:35",
    "thumb": "1"
  },
  {
    "id": "4215",
    "material_id": "128",
    "material_photo_name": "granite_White-Kinawa_PJPkSjm6ilY3l2cIpalE.jpg",
    "original_name": "WHITE_KINAWA_165L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 08:07:04",
    "thumb": "0"
  },
  {
    "id": "3414",
    "material_id": "129",
    "material_photo_name": "granite_Giallo-Renoir_qIVVMCBGcdlYF2Rsn929.jpg",
    "original_name": "GIALLO_RENOIR_EXTRA_334R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:11:27",
    "thumb": "0"
  },
  {
    "id": "3269",
    "material_id": "499",
    "material_photo_name": "Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:56:02",
    "thumb": "1"
  },
  {
    "id": "3273",
    "material_id": "423",
    "material_photo_name": "Costa-Dakota_ggOLy6gkzhRP4eC5OORl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:03:10",
    "thumb": "1"
  },
  {
    "id": "4463",
    "material_id": "131",
    "material_photo_name": "granite_Golden-Eagle_z4RcWLCeUCc08W5Cyu4C.jpg",
    "original_name": "GOLDEN_EAGLE_1018L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:52:10",
    "thumb": "0"
  },
  {
    "id": "3597",
    "material_id": "133",
    "material_photo_name": "granite_Juparana-Exotica-Super_0UmCrAKgRWmALhEYpkfV.jpg",
    "original_name": "JUPARANA_EXOTICA_SUPER_188L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:00:48",
    "thumb": "0"
  },
  {
    "id": "3310",
    "material_id": "135",
    "material_photo_name": "granite_Delicatus-Cream_s8Qgw14s7AZZEJrE6wbK.jpg",
    "original_name": "DELICATUS_CREAM_413R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 01:10:49",
    "thumb": "0"
  },
  {
    "id": "3293",
    "material_id": "136",
    "material_photo_name": "Crema-Marfil_f5wOzpyt2oXoQpIVaeRd.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:47:04",
    "thumb": "1"
  },
  {
    "id": "3265",
    "material_id": "500",
    "material_photo_name": "Cosmic-Black_4VwK4RbARExeGPrlkjo6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:50:28",
    "thumb": "1"
  },
  {
    "id": "3264",
    "material_id": "500",
    "material_photo_name": "granite_Cosmic-Black_E6QdsTgqw1KlNXLhud9K.jpg",
    "original_name": "COSMIC_BLACK_126L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:49:44",
    "thumb": "0"
  },
  {
    "id": "4006",
    "material_id": "140",
    "material_photo_name": "granite_Silver-Paradiso_qUaH10B8KwCOP4W8Hvrf.jpg",
    "original_name": "SILVER_PARADISO_206L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:41:01",
    "thumb": "0"
  },
  {
    "id": "3554",
    "material_id": "142",
    "material_photo_name": "granite_Itaunas-White_U0idyiJ7o4Z2gkLpuUyy.jpg",
    "original_name": "ITAUNAS_WHITE_506L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:39:25",
    "thumb": "0"
  },
  {
    "id": "3563",
    "material_id": "501",
    "material_photo_name": "Ivory-Gold_4q6UtYPomLitsHKmsiL9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:57:28",
    "thumb": "1"
  },
  {
    "id": "3306",
    "material_id": "145",
    "material_photo_name": "granite_Dakota-Mahogany_Nsy627QKmyhNLHgHPkVg.jpg",
    "original_name": "DAKOTA_MAHOGANY_407R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 01:05:35",
    "thumb": "0"
  },
  {
    "id": "4278",
    "material_id": "146",
    "material_photo_name": "granite_Maritaka-Granite_vVi7iE9yH0vFgrqb4fp6.jpg",
    "original_name": "MARITAKA_1213L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:49:57",
    "thumb": "0"
  },
  {
    "id": "3327",
    "material_id": "149",
    "material_photo_name": "quartzite_Elegant-Brown_4sn7REsa3h4W6EBjes1v.jpg",
    "original_name": "ELEGANT_BROWN_037R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:29:36",
    "thumb": "0"
  },
  {
    "id": "3504",
    "material_id": "150",
    "material_photo_name": "granite_Golden-Valley-MG_A1stZ9ytw2JQTbcgBkvg.jpg",
    "original_name": "GOLDEN_VALLEY_MG_520R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 09:06:18",
    "thumb": "0"
  },
  {
    "id": "2916",
    "material_id": "1126",
    "material_photo_name": "granite_Absolute-Black_rOHQniCdLBUSoZ5pA6O6.jpg",
    "original_name": "ABSOLUTE_BLACK_208L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 06:15:25",
    "thumb": "0"
  },
  {
    "id": "2963",
    "material_id": "153",
    "material_photo_name": "Altair_jqEmCp1QA2FU54paEGpg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:23:02",
    "thumb": "1"
  },
  {
    "id": "2973",
    "material_id": "154",
    "material_photo_name": "granite_Aquarius_VNzk5Durl0GptQOWJOyv.jpg",
    "original_name": "AQUARIUS_211R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:38:19",
    "thumb": "0"
  },
  {
    "id": "4465",
    "material_id": "156",
    "material_photo_name": "limestone_Ataija-Creme_hRWcbPfuEWVvYdDeSBDD.jpg",
    "original_name": "ATAIJA_CREME_M83L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:54:31",
    "thumb": "0"
  },
  {
    "id": "4466",
    "material_id": "157",
    "material_photo_name": "granite_Atlantis_7GjFE7xBolW26NAi3HDX.jpg",
    "original_name": "ATLANTIS_319R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:55:32",
    "thumb": "0"
  },
  {
    "id": "3028",
    "material_id": "159",
    "material_photo_name": "granite_Bacca-Bianca_8OjFBqtRwVztJa9neb0t.jpg",
    "original_name": "BACCA_BIANCA_203R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:08:13",
    "thumb": "0"
  },
  {
    "id": "3134",
    "material_id": "160",
    "material_photo_name": "granite_Boreal_CIMLsLOWVn6j48DTtMMx.jpg",
    "original_name": "BOREAL_317R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:13:40",
    "thumb": "0"
  },
  {
    "id": "3146",
    "material_id": "161",
    "material_photo_name": "granite_Brown-Fish_3nCQykwaBT3CKyEzqGUd.jpg",
    "original_name": "BROWN_FISH_404L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:27:28",
    "thumb": "0"
  },
  {
    "id": "3210",
    "material_id": "162",
    "material_photo_name": "quartzite_Classic-White_CPrvmn8jvKOise0Iqn39.jpg",
    "original_name": "CLASSIC_WHITE_170L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:28:39",
    "thumb": "0"
  },
  {
    "id": "3234",
    "material_id": "163",
    "material_photo_name": "granite_Colonial-Gold_ADnpZdsN9XK7VF9WGoaY.jpg",
    "original_name": "COLONIAL_GOLD_033L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:59:46",
    "thumb": "0"
  },
  {
    "id": "3321",
    "material_id": "165",
    "material_photo_name": "marble_Dynasty-Brown_behKa4H3MOtREJawtxFf.jpg",
    "original_name": "DYNASTY_BROWN_1219L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:23:18",
    "thumb": "0"
  },
  {
    "id": "3339",
    "material_id": "166",
    "material_photo_name": "quartzite_Fantasy-Brown_0sxBBJ6yuUO8wvWQkEo0.jpg",
    "original_name": "FANTASY_BROWN_131R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:54:05",
    "thumb": "0"
  },
  {
    "id": "3081",
    "material_id": "168",
    "material_photo_name": "granite_Black-Galaxy_Q9jJrRTnVo0OkfG3LJQN.jpg",
    "original_name": "BLACK_GALAXY_131R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:05:04",
    "thumb": "0"
  },
  {
    "id": "3408",
    "material_id": "169",
    "material_photo_name": "granite_Giallo-Ornamental_hFBupcZC5h1zcgrR7fcT.jpg",
    "original_name": "GIALLO_ORNAMENTAL_1017R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:03:50",
    "thumb": "0"
  },
  {
    "id": "3422",
    "material_id": "170",
    "material_photo_name": "granite_Giallo-Vicenza_fkb01YBAbDELmlC5hkz5.jpg",
    "original_name": "GIALLO_VICENZA_1209R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:24:07",
    "thumb": "0"
  },
  {
    "id": "3730",
    "material_id": "175",
    "material_photo_name": "marble_Mountain-White-Danby_JRE2srOAgdg4bd8uk5S3.jpg",
    "original_name": "MOUNTAIN_WHITE_DANBY_011R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:52:52",
    "thumb": "0"
  },
  {
    "id": "1198",
    "material_id": "176",
    "material_photo_name": "p8GFQFtX06EinEYXNH52.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-04-22 07:59:21",
    "thumb": "1"
  },
  {
    "id": "3922",
    "material_id": "177",
    "material_photo_name": "granite_River-White_jN6iNzTHOFS3b1joWUjk.jpg",
    "original_name": "RIVER_WHITE_115R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:04:07",
    "thumb": "0"
  },
  {
    "id": "4176",
    "material_id": "181",
    "material_photo_name": "granite_Via-Lactea_bkVtsGrgMpVMOJLJRh4X.jpg",
    "original_name": "VIA_LACTEA_157L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:10:33",
    "thumb": "0"
  },
  {
    "id": "4209",
    "material_id": "182",
    "material_photo_name": "marble_White-Carrara-Venatino_IXRCFuTW2pG5RjOvv5Y9.jpg",
    "original_name": "WHITE_CARRARA_VENATINO_178L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 06:03:37",
    "thumb": "0"
  },
  {
    "id": "3058",
    "material_id": "187",
    "material_photo_name": "granite_BIANCO-LATINO_wq9Ld52bpEgl22M5tUrD.jpg",
    "original_name": "BIANCO_LATINO_1019L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:36:26",
    "thumb": "0"
  },
  {
    "id": "4145",
    "material_id": "654",
    "material_photo_name": "Ubatuba_jPwhgaPcrMwgSYM1hkTA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:19:23",
    "thumb": "1"
  },
  {
    "id": "3990",
    "material_id": "190",
    "material_photo_name": "granite_Shalimar-Gold_KyZbnHdFa7ainGYWZO0V.jpg",
    "original_name": "SHALIMAR_GOLD_196L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:19:17",
    "thumb": "0"
  },
  {
    "id": "3138",
    "material_id": "191",
    "material_photo_name": "granite_Brass-Blue_yR2apgNvGy9tW7Jjg5PY.jpg",
    "original_name": "BRASS_BLUE_1211L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:18:14",
    "thumb": "0"
  },
  {
    "id": "4211",
    "material_id": "192",
    "material_photo_name": "marble_White-Danby_wNKzBx64MTTG6kjV9sL9.jpg",
    "original_name": "WHITE_DANBY_172R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 08:02:10",
    "thumb": "0"
  },
  {
    "id": "4309",
    "material_id": "193",
    "material_photo_name": "glass_Glassos_lteLCaC0BXxX23Np2XQZ.jpg",
    "original_name": "WHITE_GLASS_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-30 08:29:26",
    "thumb": "0"
  },
  {
    "id": "3762",
    "material_id": "195",
    "material_photo_name": "granite_New-Colonial-Gold_5kQhTvNsMBMOk8GzIjcr.jpg",
    "original_name": "NEW_COLONIAL_GOLD_204L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:12:11",
    "thumb": "0"
  },
  {
    "id": "4247",
    "material_id": "199",
    "material_photo_name": "granite_Bianco-Diamante_k9pchMAWV5Mg8KlLBEse.jpg",
    "original_name": "BIANCO_DIAMANTE_908L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:36:44",
    "thumb": "0"
  },
  {
    "id": "4098",
    "material_id": "200",
    "material_photo_name": "granite_Tan-Brown-Classic_Xiy3xEZlDMMKX6UKjOiu.jpg",
    "original_name": "TAN_BROWN_CLASSIC_030R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:40:55",
    "thumb": "0"
  },
  {
    "id": "3294",
    "material_id": "201",
    "material_photo_name": "marble_Crema-Marfil_GWJGhaFnX5EQg5Li6lb0.jpg",
    "original_name": "CREMA_MARFIL_007R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:48:51",
    "thumb": "0"
  },
  {
    "id": "2994",
    "material_id": "203",
    "material_photo_name": "granite_Astoria_IzkMgOK4RLlgMeyz8KAd.jpg",
    "original_name": "ASTORIA_513_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:49:07",
    "thumb": "0"
  },
  {
    "id": "4223",
    "material_id": "688",
    "material_photo_name": "granite_White-Spring_1JRAOeuEle0WdOd9xrOF.jpg",
    "original_name": "WHITE_SPRING_822L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:46:34",
    "thumb": "0"
  },
  {
    "id": "3238",
    "material_id": "205",
    "material_photo_name": "granite_Colonial-Gold_bTEabc4ZdKKnFKcJeFX7.jpg",
    "original_name": "COLONIAL_GOLD_190R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:05:08",
    "thumb": "0"
  },
  {
    "id": "3353",
    "material_id": "207",
    "material_photo_name": "granite_Florence-Gold_LmlHtLq8lYp5PabjvhEz.jpg",
    "original_name": "FLORENCE_GOLD_738L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:17:53",
    "thumb": "0"
  },
  {
    "id": "3384",
    "material_id": "208",
    "material_photo_name": "granite_Giallo-Icarai_7RtVgcUrpHhFfXRjQpc9.jpg",
    "original_name": "GIALLO_ICARAI_158L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:57:36",
    "thumb": "0"
  },
  {
    "id": "3550",
    "material_id": "210",
    "material_photo_name": "granite_Imperial-Gold_HFiOSo1seN6pqZQ34O1f.jpg",
    "original_name": "IMPERIAL_GOLD_509L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:35:24",
    "thumb": "0"
  },
  {
    "id": "3485",
    "material_id": "212",
    "material_photo_name": "granite_Golden-Thunder_9UprwIcewUAjvhDn9C1Q.jpg",
    "original_name": "GOLDEN_THUNDER_301R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:37:17",
    "thumb": "0"
  },
  {
    "id": "3874",
    "material_id": "215",
    "material_photo_name": "granite_Polar-Ice_I3vr5TrHCCuI2giHCx4x.jpg",
    "original_name": "POLAR_ICE_1206R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:00:20",
    "thumb": "0"
  },
  {
    "id": "3560",
    "material_id": "216",
    "material_photo_name": "granite_Ivory-Fantasy_6EUJaoTGn3qF5G42n9oq.jpg",
    "original_name": "IVORY_FANTASY_903L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:53:54",
    "thumb": "0"
  },
  {
    "id": "4010",
    "material_id": "218",
    "material_photo_name": "granite_Silver-Pearl_lg3TchW1ItMG8M6JVLct.jpg",
    "original_name": "SILVER_PEARL_348R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:48:23",
    "thumb": "0"
  },
  {
    "id": "4307",
    "material_id": "219",
    "material_photo_name": "marble_Snow-White_2YEK0X3GpmiU3wBm5JhU.jpg",
    "original_name": "SNOW_CLASSIC_WHITE_NO_FRAME_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 12:35:19",
    "thumb": "0"
  },
  {
    "id": "3982",
    "material_id": "221",
    "material_photo_name": "granite_Sedna_RncoH0bbh0anPDfkkAlH.jpg",
    "original_name": "SEDNA_500R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:03:58",
    "thumb": "0"
  },
  {
    "id": "4172",
    "material_id": "223",
    "material_photo_name": "granite_Verniz-Tropical_XqI5EsCtZwQhc9W8xBSV.jpg",
    "original_name": "VERNIZ_TROPICAL_221L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:03:50",
    "thumb": "0"
  },
  {
    "id": "4468",
    "material_id": "224",
    "material_photo_name": "granite_Imperial-Coffee_rplJl438L9X8KyQYkzLv.jpg",
    "original_name": "IMPERIAL_COFFEE_809L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:58:33",
    "thumb": "0"
  },
  {
    "id": "3236",
    "material_id": "225",
    "material_photo_name": "granite_Colonial-Gold_JVdo87euhZwn4VRyVihi.jpg",
    "original_name": "COLONIAL_GOLD_033R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:02:34",
    "thumb": "0"
  },
  {
    "id": "4096",
    "material_id": "228",
    "material_photo_name": "granite_Tan-Brown-Classic_xYxEL0BGTJ4a8SlUvPdq.jpg",
    "original_name": "TAN_BROWN_CLASSIC_030L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:39:00",
    "thumb": "0"
  },
  {
    "id": "3956",
    "material_id": "229",
    "material_photo_name": "granite_Sanguine-C_J84IlTv5FUq1dlpcs6Wo.jpg",
    "original_name": "SANGUINE_C_215R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:24:49",
    "thumb": "0"
  },
  {
    "id": "3804",
    "material_id": "230",
    "material_photo_name": "onyx_Onice-Tanzania-Dark_dcgy2wqECPMA9NwoNR7u.jpg",
    "original_name": "ONICE_TANZANIA_DARK_M101_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:09:07",
    "thumb": "0"
  },
  {
    "id": "3331",
    "material_id": "234",
    "material_photo_name": "quartzite_Emerald-Quartzite-Dark_LYv5AyuZ5VSywyhdEy4I.jpg",
    "original_name": "EMERALD_QUARTZITE_DARK_M95R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:37:10",
    "thumb": "0"
  },
  {
    "id": "3796",
    "material_id": "235",
    "material_photo_name": "onyx_Onice-Avorio_JINHAdhuEz9mK2ajp0NU.jpg",
    "original_name": "ONICE_AVORIO_M103_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:58:29",
    "thumb": "0"
  },
  {
    "id": "3703",
    "material_id": "238",
    "material_photo_name": "Marvellous-Brown_kg4WWxmvb8CEKclKCR93.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 12:13:59",
    "thumb": "1"
  },
  {
    "id": "3024",
    "material_id": "240",
    "material_photo_name": "Azul-Platino_mrUG3ahB0TzM5t9A2cKa.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:02:40",
    "thumb": "1"
  },
  {
    "id": "3455",
    "material_id": "241",
    "material_photo_name": "granite_Golden-Bordeaux_8LeRfMwyLXqAoXgLr71W.jpg",
    "original_name": "GOLDEN_BORDEAUX_303L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:56:38",
    "thumb": "0"
  },
  {
    "id": "3215",
    "material_id": "1130",
    "material_photo_name": "Classic-White_xb7TmxjH32eDVyvrtD0t.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 07:44:54",
    "thumb": "1"
  },
  {
    "id": "3764",
    "material_id": "246",
    "material_photo_name": "granite_New-Colonial-Gold_G8mt5pc4kmPiEub2UhqK.jpg",
    "original_name": "NEW_COLONIAL_GOLD_1202R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:13:56",
    "thumb": "0"
  },
  {
    "id": "3896",
    "material_id": "248",
    "material_photo_name": "granite_Red-Dragon_fbI4FBYhGqvaAjasaFFQ.jpg",
    "original_name": "RED_DRAGON_921L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:29:39",
    "thumb": "0"
  },
  {
    "id": "4192",
    "material_id": "663",
    "material_photo_name": "granite_Vyara-Gold_0imuWlFlx4UQlDbu2QLu.jpg",
    "original_name": "VYARA_GOLD_332R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:31:22",
    "thumb": "0"
  },
  {
    "id": "4110",
    "material_id": "250",
    "material_photo_name": "granite_Titanium-Black_2PZMyrVX9m59NFe7ZH75.jpg",
    "original_name": "TITANIUM_BLACK_618L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:58:59",
    "thumb": "0"
  },
  {
    "id": "2494",
    "material_id": "884",
    "material_photo_name": "xLSHLnnoAvCmZjeXWoZ5.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:51:48",
    "thumb": "1"
  },
  {
    "id": "3074",
    "material_id": "253",
    "material_photo_name": "granite_Black-Antique_Dl6IEGwlca8BnZVWVVsJ.jpg",
    "original_name": "BLACK_ANTIQUE_511L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:56:27",
    "thumb": "0"
  },
  {
    "id": "3601",
    "material_id": "254",
    "material_photo_name": "granite_Juparana-Imperial_rsa2wELGHmz9IBMSmIHe.jpg",
    "original_name": "JUPARANA_IMPERIAL_154L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:04:43",
    "thumb": "0"
  },
  {
    "id": "4102",
    "material_id": "255",
    "material_photo_name": "granite_Tan-Brown-Supreme_CO6UqStmgf2fxeXFzTfn.jpg",
    "original_name": "TAN_BROWN_SUPREME_416L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:46:25",
    "thumb": "0"
  },
  {
    "id": "3054",
    "material_id": "257",
    "material_photo_name": "granite_Bianco-Dimante_fz9hVzaD8vosPrmNcXyR.jpg",
    "original_name": "BIANCO_DIMANTE_911R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:31:24",
    "thumb": "0"
  },
  {
    "id": "4018",
    "material_id": "258",
    "material_photo_name": "granite_Silver-Waves_JacGK4b0nTtUIm63QpnE.jpg",
    "original_name": "SILVER_WAVES_165R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:58:18",
    "thumb": "0"
  },
  {
    "id": "3089",
    "material_id": "260",
    "material_photo_name": "granite_Black-Mist_TaEpWJVJ685d6Bx0QuO6.jpg",
    "original_name": "BLACK_MIST_337R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:19:15",
    "thumb": "0"
  },
  {
    "id": "3980",
    "material_id": "261",
    "material_photo_name": "granite_Sea-Wave_O2AcWgMcAlVLu8FEb9NB.jpg",
    "original_name": "SEA_WAVE_016R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:01:45",
    "thumb": "0"
  },
  {
    "id": "3856",
    "material_id": "263",
    "material_photo_name": "granite_Picasso_sc6ITb0rQ58tOxciEQAk.jpg",
    "original_name": "PICASSO_202L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:33:09",
    "thumb": "0"
  },
  {
    "id": "4470",
    "material_id": "264",
    "material_photo_name": "granite_Jaguar_jnryKNNtjBJwHB8G622G.jpg",
    "original_name": "JAGUAR_207L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:00:56",
    "thumb": "0"
  },
  {
    "id": "4471",
    "material_id": "268",
    "material_photo_name": "marble_Rojo-Alicante_Fjhs7Up73LkNunzho5eW.jpg",
    "original_name": "ROJO_ALICANTE_1209L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:02:03",
    "thumb": "0"
  },
  {
    "id": "3341",
    "material_id": "270",
    "material_photo_name": "quartzite_Fantasy-Brown_Jz2W4HzTGPHUraTmADX8.jpg",
    "original_name": "FANTASY_BROWN_340R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:55:57",
    "thumb": "0"
  },
  {
    "id": "4168",
    "material_id": "271",
    "material_photo_name": "granite_Verde-Gaia_x1aUCuV7v1MDziUj93WT.jpg",
    "original_name": "VERDE_GAIA_729L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:59:13",
    "thumb": "0"
  },
  {
    "id": "3439",
    "material_id": "272",
    "material_photo_name": "granite_Gold-Brasil_6A3eJvcpzyrdE4pfcric.jpg",
    "original_name": "GOLD_BRASIL_346R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:05:58",
    "thumb": "0"
  },
  {
    "id": "3049",
    "material_id": "274",
    "material_photo_name": "Bianco-Antico_lPr7XKp4cKT7Z9VGAvFQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:50:41",
    "thumb": "1"
  },
  {
    "id": "3148",
    "material_id": "275",
    "material_photo_name": "granite_Butterfly-Antique_yUiY1pGjhqAnOVzZy4jZ.jpg",
    "original_name": "BUTTERFLY_ANTIQUE_NO_FRAME_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:29:24",
    "thumb": "0"
  },
  {
    "id": "3216",
    "material_id": "276",
    "material_photo_name": "quartzite_Classic-White_VwBtN3MOJpFKk4mslKcO.jpg",
    "original_name": "CLASSIC_WHITE_711R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:32:32",
    "thumb": "0"
  },
  {
    "id": "3477",
    "material_id": "278",
    "material_photo_name": "granite_Golden-Leaf_oGfy3QnBRa6XuJddqseF.jpg",
    "original_name": "GOLDEN_LEAF_617R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:24:02",
    "thumb": "0"
  },
  {
    "id": "3178",
    "material_id": "279",
    "material_photo_name": "marble_Calacatta-Oro_d2xJ31bkfpD82sUtvRhw.jpg",
    "original_name": "CALACATTA_ORO_022R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:13:50",
    "thumb": "0"
  },
  {
    "id": "4472",
    "material_id": "280",
    "material_photo_name": "granite_Imperial-Coffee_YllSEAPIBXVmJi26VLWM.jpg",
    "original_name": "IMPERIAL_COFFEE_406R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:03:12",
    "thumb": "0"
  },
  {
    "id": "1288",
    "material_id": "281",
    "material_photo_name": "SKhLKzPaXiovSJjwF18C.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-04-23 01:18:33",
    "thumb": "1"
  },
  {
    "id": "4154",
    "material_id": "283",
    "material_photo_name": "granite_Veneziano-Gold_oa21RGh6aQtSGTlKyp1n.jpg",
    "original_name": "VENEZIANO_GOLD_120R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:39:18",
    "thumb": "0"
  },
  {
    "id": "3026",
    "material_id": "284",
    "material_photo_name": "granite_Azul-Platino_6gS5xjm7kYHAIPemzVh7.jpg",
    "original_name": "AZUL_PLATINO_133R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:05:29",
    "thumb": "0"
  },
  {
    "id": "4474",
    "material_id": "285",
    "material_photo_name": "marble_Jerusalem-Gold_4Y7NI9PwUNOOepEiWJxX.jpg",
    "original_name": "JERUSALEM_GOLD_1210L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:05:26",
    "thumb": "0"
  },
  {
    "id": "4475",
    "material_id": "286",
    "material_photo_name": "granite_Black-Sun_K11KibeubbC1qviXDWh4.jpg",
    "original_name": "BLACK_SUN_124L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:06:27",
    "thumb": "0"
  },
  {
    "id": "3944",
    "material_id": "287",
    "material_photo_name": "granite_Salone_91HSEhT4UtHy2DwMEzae.jpg",
    "original_name": "SALONE_167R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:08:05",
    "thumb": "0"
  },
  {
    "id": "4311",
    "material_id": "288",
    "material_photo_name": "granite_Juparana-Exotica_QqiJwr7wRuilMzx6irxI.jpg",
    "original_name": "JUPARANA_EXOTICA_612L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-30 02:26:03",
    "thumb": "0"
  },
  {
    "id": "4199",
    "material_id": "502",
    "material_photo_name": "White-Antique_piRJ88TQuTRi9w6NmHAD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:39:48",
    "thumb": "1"
  },
  {
    "id": "3349",
    "material_id": "668",
    "material_photo_name": "granite_Firenze-Yellow_pVWrwZxI2UghHwWh37it.jpg",
    "original_name": "FIRENZE_YELLOW_346R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:07:04",
    "thumb": "0"
  },
  {
    "id": "4520",
    "material_id": "667",
    "material_photo_name": "granite_Gold-Brasil_ONvVQRQq1nB4UkdLuE2e.jpg",
    "original_name": "GOLD_BRASIL_346L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:12:21",
    "thumb": "0"
  },
  {
    "id": "2993",
    "material_id": "506",
    "material_photo_name": "Astoria_PzLhtWyVSebxXTC5yBbC.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 09:46:51",
    "thumb": "1"
  },
  {
    "id": "3193",
    "material_id": "509",
    "material_photo_name": "Cheyenne_s7sNmam2Armw0LarEjEY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:51:27",
    "thumb": "1"
  },
  {
    "id": "3666",
    "material_id": "289",
    "material_photo_name": "granite_Lava-Jewel_L1ZIsOZMiJqh2W0jOsc2.jpg",
    "original_name": "LAVA_JEWEL_111L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:44:13",
    "thumb": "0"
  },
  {
    "id": "3490",
    "material_id": "692",
    "material_photo_name": "Golden-Valley-KG_85f37xoTQ9s9NZ4r0isp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:44:54",
    "thumb": "1"
  },
  {
    "id": "4313",
    "material_id": "291",
    "material_photo_name": "Sunset-Ivory_3qYKt1Y548NFYzEfKbxD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-30 02:30:56",
    "thumb": "1"
  },
  {
    "id": "3420",
    "material_id": "293",
    "material_photo_name": "granite_Giallo-Vicenza_GxC3vtTJHENoiOc6F8O0.jpg",
    "original_name": "GIALLO_VICENZA_919L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:21:13",
    "thumb": "0"
  },
  {
    "id": "3039",
    "material_id": "294",
    "material_photo_name": "marble_Bardiglio_4xE2ZnfeFbS8AphGOoCs.jpg",
    "original_name": "BARDIGLIO_021R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:30:16",
    "thumb": "0"
  },
  {
    "id": "3760",
    "material_id": "295",
    "material_photo_name": "granite_New-Colonial-Gold_7k5xrNkw4ZYX6tzqNH6Z.jpg",
    "original_name": "NEW_COLONIAL_GOLD_132R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:08:40",
    "thumb": "0"
  },
  {
    "id": "3682",
    "material_id": "296",
    "material_photo_name": "granite_Madura-Gold_KEyAoLe5FuBxGix7wZxL.jpg",
    "original_name": "MADURA_GOLD_1009L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:02:49",
    "thumb": "0"
  },
  {
    "id": "3892",
    "material_id": "297",
    "material_photo_name": "marble_Rainforest-Green_lqGcGdIpDYTt1usvmRCC.jpg",
    "original_name": "RAINFOREST_GREEN_001L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:24:37",
    "thumb": "0"
  },
  {
    "id": "4094",
    "material_id": "300",
    "material_photo_name": "granite_Tan-Brown_SgzyEuiT7mknUghX3HUg.jpg",
    "original_name": "TAN_BROWN_1014R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:35:26",
    "thumb": "0"
  },
  {
    "id": "4477",
    "material_id": "306",
    "material_photo_name": "granite_Tiberious_wLgOpeQh5p76ggMQqN7A.jpg",
    "original_name": "TIBERIOUS_320L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:08:30",
    "thumb": "0"
  },
  {
    "id": "3659",
    "material_id": "307",
    "material_photo_name": "granite_Lapidus-Classic_tUrKtKKB824YGZc7l7Lt.jpg",
    "original_name": "LAPIDUS_CLASSIC_515L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:32:36",
    "thumb": "0"
  },
  {
    "id": "3630",
    "material_id": "308",
    "material_photo_name": "granite_Kashmir-White_8aQqiQcETFBH1OMwc5IS.jpg",
    "original_name": "KASHMIR_WHITE_335L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:42:07",
    "thumb": "0"
  },
  {
    "id": "4315",
    "material_id": "310",
    "material_photo_name": "onyx_Marmo-Onyx-Mixed_0YMz6YGGfy0DoRkc5y0C.jpg",
    "original_name": "MARMO_ONYX_MIXED_175L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-30 02:34:05",
    "thumb": "0"
  },
  {
    "id": "3122",
    "material_id": "312",
    "material_photo_name": "granite_Blue-Night_8xR5kEW2wVGHkIJTv1z9.jpg",
    "original_name": "BLUE_NIGHT_321R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:57:38",
    "thumb": "0"
  },
  {
    "id": "4084",
    "material_id": "702",
    "material_photo_name": "granite_Tabacco-Brown_AqSN6SBwPIxyFfgEaYeV.jpg",
    "original_name": "TABACCO_BROWN_634L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:20:52",
    "thumb": "0"
  },
  {
    "id": "2959",
    "material_id": "665",
    "material_photo_name": "Alaska-White_UAGBWcxsMEARq7SAezvQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:18:31",
    "thumb": "1"
  },
  {
    "id": "4186",
    "material_id": "315",
    "material_photo_name": "granite_Viscont-White_yaeEHRuOPpqnCfOPpJ4y.jpg",
    "original_name": "VISCONT_WHITE_BRUSHED_814L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:23:18",
    "thumb": "0"
  },
  {
    "id": "2986",
    "material_id": "316",
    "material_photo_name": "granite_Aspen-White_ddloEpTLrXXYNCF1auKu.jpg",
    "original_name": "ASPEN_WHITE_426L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:32:03",
    "thumb": "0"
  },
  {
    "id": "4040",
    "material_id": "317",
    "material_photo_name": "granite_Solarius_pj8sGpBFmDq5QbQRWRM0.jpg",
    "original_name": "SOLARIUS_411R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:31:02",
    "thumb": "0"
  },
  {
    "id": "3754",
    "material_id": "318",
    "material_photo_name": "granite_New-Caledonia_56cRtUFEjeny2bmXNCdw.jpg",
    "original_name": "NEW_CALEDONIA_410R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:58:38",
    "thumb": "0"
  },
  {
    "id": "3527",
    "material_id": "319",
    "material_photo_name": "onyx_Honey-Onyx_977Rly6xPDTICvlrUu2h.jpg",
    "original_name": "HONEY_ONYX_M107L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:54:39",
    "thumb": "0"
  },
  {
    "id": "3078",
    "material_id": "320",
    "material_photo_name": "granite_Black-Fusion_00hIss4eVMFtssY1dfUy.jpg",
    "original_name": "BLACK_FUSION_401L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:00:13",
    "thumb": "0"
  },
  {
    "id": "2988",
    "material_id": "321",
    "material_photo_name": "granite_Aspen-White_8ST4AJmTmsASlfQgSFHA.jpg",
    "original_name": "ASPEN_WHITE_1102R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:36:40",
    "thumb": "0"
  },
  {
    "id": "4012",
    "material_id": "322",
    "material_photo_name": "granite_Silver-Pearl-Antiqued_aYEYDbwSmb4p1qVJtHvN.jpg",
    "original_name": "SILVER_PEARL_ANTIQUED_809R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:51:32",
    "thumb": "0"
  },
  {
    "id": "3155",
    "material_id": "324",
    "material_photo_name": "Butterfly-Green_3ocoG3sV2yzaoQpkC6BQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:39:27",
    "thumb": "1"
  },
  {
    "id": "3946",
    "material_id": "325",
    "material_photo_name": "granite_San-Gabriel-Black_fVXZcXeqJkq3KFHae452.jpg",
    "original_name": "SAN_GABRIEL_BLACK_517R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:14:35",
    "thumb": "0"
  },
  {
    "id": "4243",
    "material_id": "326",
    "material_photo_name": "granite_Bianco-Antico_DXnLtzwTciBc3zzAHD3f.jpg",
    "original_name": "BIANCO_ANTICO_028L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:28:31",
    "thumb": "0"
  },
  {
    "id": "4156",
    "material_id": "327",
    "material_photo_name": "granite_Veneziano-Gold_0THha0aNcKBPoJg2l4wK.jpg",
    "original_name": "VENEZIANO_GOLD_B01L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:41:15",
    "thumb": "0"
  },
  {
    "id": "4284",
    "material_id": "1161",
    "material_photo_name": "granite_Silver-Paradiso_vAwsCvAi5fSbhUXNdyrG.jpg",
    "original_name": "SILVER_PARADISO_206R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-25 05:46:54",
    "thumb": "0"
  },
  {
    "id": "4317",
    "material_id": "330",
    "material_photo_name": "soapstone_Barroca_pRP8YdXhcdnM8btC3LsN.jpg",
    "original_name": "SOAPSTONE_BARROCA_629L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-30 02:36:56",
    "thumb": "0"
  },
  {
    "id": "4479",
    "material_id": "331",
    "material_photo_name": "granite_Giallo-Antico_PtNNg4zLVZstQNZsoMG4.jpg",
    "original_name": "GIALLO_ANTICO_186L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:11:15",
    "thumb": "0"
  },
  {
    "id": "3156",
    "material_id": "332",
    "material_photo_name": "granite_Butterfly-Green_jdDbGKTbxhPCkrVpndSB.jpg",
    "original_name": "BUTTERFLY_GREEN_826L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:42:35",
    "thumb": "0"
  },
  {
    "id": "3008",
    "material_id": "333",
    "material_photo_name": "Atlantis_2cPeKkaF3oc9CxgJlrMQ.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 10:19:12",
    "thumb": "1"
  },
  {
    "id": "4231",
    "material_id": "334",
    "material_photo_name": "granite_Wild-Sea-Orient_dH3arnlWJBlY7jZz7iCZ.jpg",
    "original_name": "WILD_SEA_ORIENT_900L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 10:02:24",
    "thumb": "0"
  },
  {
    "id": "3388",
    "material_id": "335",
    "material_photo_name": "granite_Giallo-Napole_uREy42xUZXqUIc2iL296.jpg",
    "original_name": "GIALLO_NAPOLE_032L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:07:21",
    "thumb": "0"
  },
  {
    "id": "3996",
    "material_id": "661",
    "material_photo_name": "granite_Shivakashi-Pink_CnpkwvucP83K92I0xcDT.jpg",
    "original_name": "SHIVAKASHI_PINK_343L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:26:08",
    "thumb": "0"
  },
  {
    "id": "4480",
    "material_id": "338",
    "material_photo_name": "granite_Juparana-Persia_H0eNUxerIcuN4RhArj9P.jpg",
    "original_name": "JUPARANA_PERSIA_148R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:12:24",
    "thumb": "0"
  },
  {
    "id": "4257",
    "material_id": "340",
    "material_photo_name": "granite_Crema-Brazil_qALvnencDd9WV5He2BfH.jpg",
    "original_name": "CREMA_BRAZIL_VC_502R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:26:16",
    "thumb": "0"
  },
  {
    "id": "4170",
    "material_id": "343",
    "material_photo_name": "granite_Verde-Sequoia_rj2CjGx8Yg5RuwcDWztm.jpg",
    "original_name": "VERDE_SEQUOIA_712R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:02:01",
    "thumb": "0"
  },
  {
    "id": "4481",
    "material_id": "344",
    "material_photo_name": "granite_Red-Bahia_lRTzRzFlgiufGr9TMJ5I.jpg",
    "original_name": "RED_BAHIA_1017L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:13:34",
    "thumb": "0"
  },
  {
    "id": "3270",
    "material_id": "345",
    "material_photo_name": "granite_Cosmic-Black_H5Z7dv8KsdNHzIBgfuCH.jpg",
    "original_name": "COSMIC_BLACK_307L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:58:41",
    "thumb": "0"
  },
  {
    "id": "3136",
    "material_id": "346",
    "material_photo_name": "granite_Boreal_ouJnBDsFwYhIYVCu5qYM.jpg",
    "original_name": "BOREAL_637R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:16:06",
    "thumb": "0"
  },
  {
    "id": "3822",
    "material_id": "347",
    "material_photo_name": "granite_Oscuro-Mist_dXcmmEsXlFZACXxZvGUX.jpg",
    "original_name": "OSCURO_MIST_200L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:35:15",
    "thumb": "0"
  },
  {
    "id": "3583",
    "material_id": "350",
    "material_photo_name": "granite_Jet-Mist_x5ppLwrADJcimkcGwuOa.jpg",
    "original_name": "JET_MIST_034L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:39:22",
    "thumb": "0"
  },
  {
    "id": "3678",
    "material_id": "351",
    "material_photo_name": "granite_Madura-Gold_O6UrqVxNXSHGTfzx7Hhk.jpg",
    "original_name": "MADURA_GOLD_504L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:58:43",
    "thumb": "0"
  },
  {
    "id": "3640",
    "material_id": "352",
    "material_photo_name": "granite_Kosmus_dIXIcKxaWDe1pVV7a5vt.jpg",
    "original_name": "KOSMUS_351L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:58:43",
    "thumb": "0"
  },
  {
    "id": "4482",
    "material_id": "354",
    "material_photo_name": "granite_Coral-Gold_6QdaAvOaucztegdJuNSt.jpg",
    "original_name": "CORAL_GOLD_628R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:15:10",
    "thumb": "0"
  },
  {
    "id": "3930",
    "material_id": "355",
    "material_photo_name": "granite_Rosette_0M6J6DeLeOFfFDWDGWAw.jpg",
    "original_name": "ROSETTE_516R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:16:30",
    "thumb": "0"
  },
  {
    "id": "3624",
    "material_id": "356",
    "material_photo_name": "granite_Kashmir-Beige_os7FvgVlbl7LPxs4YHz4.jpg",
    "original_name": "KASHMIR_BEIGE_155R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:34:38",
    "thumb": "0"
  },
  {
    "id": "3047",
    "material_id": "359",
    "material_photo_name": "Bianco-Antico_VcICsfK3lnFO352TAt05.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:45:18",
    "thumb": "1"
  },
  {
    "id": "3992",
    "material_id": "361",
    "material_photo_name": "granite_Shalimar-Gold_XZLN4KCW7CUK11dbh77T.jpg",
    "original_name": "SHALIMAR_GOLD_212R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:22:10",
    "thumb": "0"
  },
  {
    "id": "3593",
    "material_id": "363",
    "material_photo_name": "granite_Juparana-Colombo_HVi8Cfu1ntNnyLCUG3fK.jpg",
    "original_name": "JUPARANA_COLOMBO_113L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:55:29",
    "thumb": "0"
  },
  {
    "id": "3788",
    "material_id": "364",
    "material_photo_name": "marble_Noble-White_XWZda8OgrauL8T3VipCO.jpg",
    "original_name": "NOBLE_WHITE_036R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:50:05",
    "thumb": "0"
  },
  {
    "id": "3756",
    "material_id": "365",
    "material_photo_name": "granite_New-Colonial-Dream_ccFzaBR9ewFZFarl59GR.jpg",
    "original_name": "NEW_COLONIAL_DREAM_011L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:00:53",
    "thumb": "0"
  },
  {
    "id": "3828",
    "material_id": "366",
    "material_photo_name": "granite_Paradiso-Bash_cQS9A0w6HFXW8FBIyRe4.jpg",
    "original_name": "PARADISO_BASH_310L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:41:38",
    "thumb": "0"
  },
  {
    "id": "3579",
    "material_id": "367",
    "material_photo_name": "limestone_Jerusalem-White_SQvKCA8wNIm0FOKpl16L.jpg",
    "original_name": "JERUSALEM_WHITE_LIMESTONE_017R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 11:23:03",
    "thumb": "0"
  },
  {
    "id": "3400",
    "material_id": "368",
    "material_photo_name": "granite_Giallo-Nathalia_0rfsoMEAd7Pui50nXFLO.jpg",
    "original_name": "GIALLO_NATHALIA_317L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:51:30",
    "thumb": "0"
  },
  {
    "id": "4483",
    "material_id": "369",
    "material_photo_name": "granite_Fire-Island_OKaE7VSRfKPl3zmAbgLV.jpg",
    "original_name": "FIRE_ISLAND_416L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:17:06",
    "thumb": "0"
  },
  {
    "id": "2957",
    "material_id": "370",
    "material_photo_name": "Alaska-White_KA0MK9mPC9sSyO7tTrKy.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:14:52",
    "thumb": "1"
  },
  {
    "id": "3778",
    "material_id": "371",
    "material_photo_name": "granite_New-Tan-Brown_mM6eSa14c69HtD1HNuOi.jpg",
    "original_name": "NEW_TAN_BROWN_191R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:37:37",
    "thumb": "0"
  },
  {
    "id": "3628",
    "material_id": "372",
    "material_photo_name": "granite_Kashmir-Gold_SxCieIYxlHc9hquerahY.jpg",
    "original_name": "KASHMIR_GOLD_918L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:39:17",
    "thumb": "0"
  },
  {
    "id": "4146",
    "material_id": "374",
    "material_photo_name": "granite_Ubatuba_X1NjgjBdM4Ydied5afWT.jpg",
    "original_name": "UBATUBA_034R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:22:44",
    "thumb": "0"
  },
  {
    "id": "4116",
    "material_id": "647",
    "material_photo_name": "granite_Toffee_jGNJdWl6T1oBuPQkt2X3.jpg",
    "original_name": "TOFFEE_419L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:05:19",
    "thumb": "0"
  },
  {
    "id": "3087",
    "material_id": "376",
    "material_photo_name": "marble_Black-Marquina_SmHm7X4WvIGfFMOAun8U.jpg",
    "original_name": "BLACK_MARQUINA_013L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:17:12",
    "thumb": "0"
  },
  {
    "id": "3041",
    "material_id": "377",
    "material_photo_name": "marble_Bateig-Azul_bDi6fVXL7owpJWpn58Bw.jpg",
    "original_name": "BATEIG_AZUL_818R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:34:19",
    "thumb": "0"
  },
  {
    "id": "3736",
    "material_id": "378",
    "material_photo_name": "granite_Napoleone-Gold_2jXjAGl7QfVywuGkMVRO.jpg",
    "original_name": "NAPOLEONE_GOLD_415R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:00:00",
    "thumb": "0"
  },
  {
    "id": "3926",
    "material_id": "379",
    "material_photo_name": "granite_Romano-Delicatus_EiK9hzqaXQVWtT8TiJpu.jpg",
    "original_name": "ROMANO_DELICATUS_737R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:07:59",
    "thumb": "0"
  },
  {
    "id": "3285",
    "material_id": "642",
    "material_photo_name": "Crema-Bordeaux_4RHvKHxHrKcD8ZpTdxR0.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:24:05",
    "thumb": "1"
  },
  {
    "id": "3283",
    "material_id": "421",
    "material_photo_name": "Costa-Esmeralda_HSzI750UUpQYKKI1ipTa.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:17:30",
    "thumb": "1"
  },
  {
    "id": "3277",
    "material_id": "1074",
    "material_photo_name": "Costa-Esmeralda_sgeUABXUbrvGlpBQAZGd.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:11:21",
    "thumb": "1"
  },
  {
    "id": "3207",
    "material_id": "511",
    "material_photo_name": "Classic-White_TQOCCzCgDb2jEcuQpK7V.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:20:56",
    "thumb": "1"
  },
  {
    "id": "3564",
    "material_id": "380",
    "material_photo_name": "granite_Ivory-Gold_1dVKh105bRzR2XdCOmKa.jpg",
    "original_name": "IVORY_GOLD_619L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:58:51",
    "thumb": "0"
  },
  {
    "id": "4484",
    "material_id": "381",
    "material_photo_name": "granite_Golden-Valley_xYT2fLuzDaB7B4cHvvcX.jpg",
    "original_name": "GOLDEN_VALLEY_KG_1204L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:18:52",
    "thumb": "0"
  },
  {
    "id": "4225",
    "material_id": "383",
    "material_photo_name": "granite_White-Spring_iMcW7D9yuSGtcbNCNYwi.jpg",
    "original_name": "WHITE_SPRING_822R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:48:11",
    "thumb": "0"
  },
  {
    "id": "3363",
    "material_id": "385",
    "material_photo_name": "granite_Fumo-Di-Londra_g1Jr2i471l5EQg6fTcuo.jpg",
    "original_name": "FUMO_DI_LONDRA_922L_R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:33:46",
    "thumb": "0"
  },
  {
    "id": "2980",
    "material_id": "386",
    "material_photo_name": "granite_Arcobaleno-Blue_P9BmaX6rdsOeod4TynEF.jpg",
    "original_name": "ARCOBALENO_BLUE_504R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:47:43",
    "thumb": "0"
  },
  {
    "id": "4280",
    "material_id": "389",
    "material_photo_name": "onyx_Marmo-Onyx-Blue_HtsELN4EHj0Gxmfx7bYq.jpg",
    "original_name": "MARMO_ONYX_BLUE_017L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:52:50",
    "thumb": "0"
  },
  {
    "id": "3929",
    "material_id": "390",
    "material_photo_name": "Rosette_4IrvAB760T22S5NSGr8s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 07:14:05",
    "thumb": "1"
  },
  {
    "id": "4485",
    "material_id": "393",
    "material_photo_name": "granite_Giallo-Ornamental_2g79wcPK3C3BD3OWgokz.jpg",
    "original_name": "GIALLO_ORNAMENTAL_129BR_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:20:15",
    "thumb": "0"
  },
  {
    "id": "3906",
    "material_id": "394",
    "material_photo_name": "granite_River-Gold_S7207Ew9qPBE4y9gPonm.jpg",
    "original_name": "RIVER_GOLD_1207R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:40:15",
    "thumb": "0"
  },
  {
    "id": "3850",
    "material_id": "395",
    "material_photo_name": "granite_Peregrine-Gold_LoaLlUx0tLVFDECBAhVY.jpg",
    "original_name": "PEREGRINE_GOLD_325R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:24:34",
    "thumb": "0"
  },
  {
    "id": "3309",
    "material_id": "397",
    "material_photo_name": "Delicatus-Cream_SoYgzjeXUTJH0lV7avb1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 01:08:59",
    "thumb": "1"
  },
  {
    "id": "3030",
    "material_id": "398",
    "material_photo_name": "granite_Balthus_F2uiLOInc3TuGtqsYPt5.jpg",
    "original_name": "BALTHUS_177R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:15:51",
    "thumb": "0"
  },
  {
    "id": "3766",
    "material_id": "399",
    "material_photo_name": "granite_New-Gold-Antique_VNwygZDYihkAj7RBf0PV.jpg",
    "original_name": "NEW_GOLD_ANTIQUE_709L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:17:18",
    "thumb": "0"
  },
  {
    "id": "4118",
    "material_id": "400",
    "material_photo_name": "granite_Torquoise_2plGjFCAajv6AspumgTo.jpg",
    "original_name": "TORQUOISE_1214R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:07:44",
    "thumb": "0"
  },
  {
    "id": "3914",
    "material_id": "401",
    "material_photo_name": "granite_River-White_902UaAe3NqW42osfIwJ2.jpg",
    "original_name": "RIVER_WHITE_118L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:50:58",
    "thumb": "0"
  },
  {
    "id": "3848",
    "material_id": "631",
    "material_photo_name": "granite_Peregrine-Gold_L9bmIGXTk83Ak1kTuJI8.jpg",
    "original_name": "PEREGRINE_GOLD_325L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:22:57",
    "thumb": "0"
  },
  {
    "id": "4166",
    "material_id": "403",
    "material_photo_name": "granite_Verde-Fantastico_fjgcoYruySdbLhdW7Ouf.jpg",
    "original_name": "VERDE_FANTASTICO_003BL_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:55:10",
    "thumb": "0"
  },
  {
    "id": "4486",
    "material_id": "404",
    "material_photo_name": "marble_Rainforest-Brown_luVLFIG0czZQujUQa5vZ.jpg",
    "original_name": "RAINFOREST_BROWN_002L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:21:46",
    "thumb": "0"
  },
  {
    "id": "3162",
    "material_id": "405",
    "material_photo_name": "marble_Calacatta-Extra_n0C7WPw2MdxWpfdArYiO.jpg",
    "original_name": "CALACATTA_EXTRA_003L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:44:34",
    "thumb": "0"
  },
  {
    "id": "3174",
    "material_id": "406",
    "material_photo_name": "marble_Calacatta-Michelangelo_tU7rSMWKieZXpM5Il67i.jpg",
    "original_name": "CALACATTA_MICHELANGELO_004L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:08:54",
    "thumb": "0"
  },
  {
    "id": "3218",
    "material_id": "407",
    "material_photo_name": "quartzite_Classic-White_zOgWVsWjExkAar5WgEou.jpg",
    "original_name": "CLASSIC_WHITE_736R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:36:06",
    "thumb": "0"
  },
  {
    "id": "2965",
    "material_id": "408",
    "material_photo_name": "Amazon-Tiger_fPsOXA3HZlQNtuyX4dnh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:25:29",
    "thumb": "1"
  },
  {
    "id": "3176",
    "material_id": "409",
    "material_photo_name": "marble_Calacatta-Michelangelo_PUBmoH5eEF4jHLW7eT62.jpg",
    "original_name": "CALACATTA_MICHELANGELO_004R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:11:33",
    "thumb": "0"
  },
  {
    "id": "4487",
    "material_id": "410",
    "material_photo_name": "marble_Calacatta-Michelangelo_joGriVx20srT2o0vFs8R.jpg",
    "original_name": "CALACATTA_MICHELANGELO_001R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:24:20",
    "thumb": "0"
  },
  {
    "id": "3056",
    "material_id": "413",
    "material_photo_name": "marble_Bianco-Goia_i4dcFmZijIcu8v0MPcIT.jpg",
    "original_name": "BIANCO_GOIA_006R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:33:48",
    "thumb": "0"
  },
  {
    "id": "4262",
    "material_id": "414",
    "material_photo_name": "marble_Cremo-Delicato_xPgjot7RiV7X6M4LauEh.jpg",
    "original_name": "CREMO_DELICATO_008R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:39:46",
    "thumb": "0"
  },
  {
    "id": "3164",
    "material_id": "415",
    "material_photo_name": "marble_Calacatta-Gold_10REiqK5eXp8S4Ukrl2E.jpg",
    "original_name": "CALACATTA_GOLD_006L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:49:01",
    "thumb": "0"
  },
  {
    "id": "3064",
    "material_id": "416",
    "material_photo_name": "marble_Bianco-Rhino_GlFNE42doHdNvPyTzsNC.jpg",
    "original_name": "BIANCO_RHINO_008L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:43:48",
    "thumb": "0"
  },
  {
    "id": "3296",
    "material_id": "417",
    "material_photo_name": "marble_Crema-Marfil_ze53hSwCPiq15xhz0t02.jpg",
    "original_name": "CREMA_MARFIL_024L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:51:13",
    "thumb": "0"
  },
  {
    "id": "4227",
    "material_id": "418",
    "material_photo_name": "marble_White-Thassos_tB750DWivaiNxLIoc0yJ.jpg",
    "original_name": "WHITE_THASSOS_009L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:50:30",
    "thumb": "0"
  },
  {
    "id": "4515",
    "material_id": "644",
    "material_photo_name": "granite_Giallo-Venezia_BWw40lSKDWgXDaaZZNpk.jpg",
    "original_name": "GIALLO_VENEZIA_427L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:04:33",
    "thumb": "0"
  },
  {
    "id": "3878",
    "material_id": "420",
    "material_photo_name": "marble_Portoro-Genuine-Extra_8IBp3e597EcKykJrCsHB.jpg",
    "original_name": "PORTORO_GENUINE_EXTRA_009L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:07:47",
    "thumb": "0"
  },
  {
    "id": "3282",
    "material_id": "421",
    "material_photo_name": "granite_Costa-Esmeralda_t5Xgrc5OR0mqJOX58Rd4.jpg",
    "original_name": "COSTA_ESMERALDA_ITALY_010R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:17:13",
    "thumb": "0"
  },
  {
    "id": "4024",
    "material_id": "422",
    "material_photo_name": "marble_Sivec_xyMLh3clxb1fuVC9knmz.jpg",
    "original_name": "SIVEC_010L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:05:58",
    "thumb": "0"
  },
  {
    "id": "3272",
    "material_id": "423",
    "material_photo_name": "granite_Costa-Dakota_QBW6JnlEKsizHD6H0Zov.jpg",
    "original_name": "COSTA_DAKOTA_516L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:02:55",
    "thumb": "0"
  },
  {
    "id": "3830",
    "material_id": "425",
    "material_photo_name": "granite_Paradiso-Classic_FtesyoXJMmBOlyHZt59q.jpg",
    "original_name": "PARADISO_CLASSIC_160R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:44:36",
    "thumb": "0"
  },
  {
    "id": "3738",
    "material_id": "427",
    "material_photo_name": "granite_Negresco_ZWbIoK4JQCwN8iMj5eTR.jpg",
    "original_name": "NEGRESCO_041L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:01:37",
    "thumb": "0"
  },
  {
    "id": "3052",
    "material_id": "428",
    "material_photo_name": "granite_Bianco-D_FbgeRjovF42zkmgOIbkG.jpg",
    "original_name": "BIANCO_D_040R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:27:07",
    "thumb": "0"
  },
  {
    "id": "3984",
    "material_id": "429",
    "material_photo_name": "granite_Sequoia-Brown_9wYEAIbeiNloG1d5nAfm.jpg",
    "original_name": "SEQUOIA_BROWN_041R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:06:27",
    "thumb": "0"
  },
  {
    "id": "3166",
    "material_id": "431",
    "material_photo_name": "marble_Calacatta-Gold_baLLBZMuZDfeamSY01gG.jpg",
    "original_name": "CALACATTA_GOLD_039L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:51:41",
    "thumb": "0"
  },
  {
    "id": "3168",
    "material_id": "432",
    "material_photo_name": "marble_Calacatta-Gold_Rpg78SVBS6pIAQj6GpZ7.jpg",
    "original_name": "CALACATTA_GOLD_006R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:55:00",
    "thumb": "0"
  },
  {
    "id": "4120",
    "material_id": "434",
    "material_photo_name": "travertine_Travertine-Giallo_2fh0xLC8ON2PKwvoqSw9.jpg",
    "original_name": "TRAVERTINE_GIALLO_038R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:10:08",
    "thumb": "0"
  },
  {
    "id": "4237",
    "material_id": "435",
    "material_photo_name": "granite_Absolute-Black-Leather_upV4JDjzKv8ICk6bgaJ0.jpg",
    "original_name": "ABSOLUTE_BLACK_LEATHER_031R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 07:30:59",
    "thumb": "0"
  },
  {
    "id": "3644",
    "material_id": "437",
    "material_photo_name": "granite_Labrador-Blue_kHh4SELFNDSOTKXE6kGT.jpg",
    "original_name": "LABRADOR_BLUE_037R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:03:12",
    "thumb": "0"
  },
  {
    "id": "4128",
    "material_id": "439",
    "material_photo_name": "marble_Tropical-Blue_TF3QQ4qFnwIdNyUfv5by.jpg",
    "original_name": "TROPICAL_BLUE_038L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:22:17",
    "thumb": "0"
  },
  {
    "id": "4140",
    "material_id": "440",
    "material_photo_name": "granite_Ubatuba-Gold_74e6pwVGQM337uDB4kKP.jpg",
    "original_name": "UBATUBA_GOLD_140L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:12:20",
    "thumb": "0"
  },
  {
    "id": "3119",
    "material_id": "441",
    "material_photo_name": "granite_Blue-Martinica_t2qVTSNcsSqVN32jDnzT.jpg",
    "original_name": "BLUE_MARTINICA_901L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:53:02",
    "thumb": "0"
  },
  {
    "id": "4122",
    "material_id": "442",
    "material_photo_name": "travertine_Travertine-Silyon_xElNMGel9NPDzGXhjlaD.jpg",
    "original_name": "TRAVERTINE_SILYON_036L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:13:16",
    "thumb": "0"
  },
  {
    "id": "4127",
    "material_id": "574",
    "material_photo_name": "Tropic-Gold_ju8wlBYREXpeEclX9MdH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:20:32",
    "thumb": "1"
  },
  {
    "id": "4048",
    "material_id": "444",
    "material_photo_name": "marble_Sparkling-Blue_s14iXbPI3tbvT3tLUJxX.jpg",
    "original_name": "SPARKLING_BLUE_037L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:46:27",
    "thumb": "0"
  },
  {
    "id": "3232",
    "material_id": "757",
    "material_photo_name": "granite_Colonial-Cream_OFBy1FbmpNniPkcbNQuF.jpg",
    "original_name": "COLONIAL_CREAM_175R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:55:11",
    "thumb": "0"
  },
  {
    "id": "3768",
    "material_id": "447",
    "material_photo_name": "granite_New-Imperial_Hdm1BOGdBXqqkgjC6Iw7.jpg",
    "original_name": "NEW_IMPERIAL_035L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:20:36",
    "thumb": "0"
  },
  {
    "id": "3758",
    "material_id": "449",
    "material_photo_name": "granite_New-Colonial-Gold_BxLGuumpHSPDZD2j01mI.jpg",
    "original_name": "NEW_COLONIAL_GOLD_029L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:05:34",
    "thumb": "0"
  },
  {
    "id": "3786",
    "material_id": "450",
    "material_photo_name": "marble_Noble-White_KY5W3Fwv7zfUj1PLXCV2.jpg",
    "original_name": "NOBLE_WHITE_033L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:48:41",
    "thumb": "0"
  },
  {
    "id": "3966",
    "material_id": "451",
    "material_photo_name": "granite_Santa-Cecilia-Light_O7Mcz477fSl1pcShZq3s.jpg",
    "original_name": "SANTA_CECILIA_LIGHT_030R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:42:23",
    "thumb": "0"
  },
  {
    "id": "3726",
    "material_id": "748",
    "material_photo_name": "marble_Mont-Noir_d2QGcCDk6rU1gHeG2Vwr.jpg",
    "original_name": "MONT_NOIR_171L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:47:37",
    "thumb": "0"
  },
  {
    "id": "3050",
    "material_id": "455",
    "material_photo_name": "granite_Bianco-Antico_sv27YXCI4daAsDIppwn0.jpg",
    "original_name": "BIANCO_ANTICO_302R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:54:31",
    "thumb": "0"
  },
  {
    "id": "4241",
    "material_id": "456",
    "material_photo_name": "granite_Bianco-Antico_5MHH4pP5jpDRQ8qLIFKP.jpg",
    "original_name": "BIANCO_ANTICO_420L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:25:55",
    "thumb": "0"
  },
  {
    "id": "3968",
    "material_id": "457",
    "material_photo_name": "granite_Santa-Cecilia-Light_OZXPNXlAS8esBbryH8M8.jpg",
    "original_name": "SANTA_CECILIA_LIGHT_034L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:44:13",
    "thumb": "0"
  },
  {
    "id": "3970",
    "material_id": "458",
    "material_photo_name": "granite_Santa-Cecilia-Real_62t8kn6HAzjZWzbxmZ3B.jpg",
    "original_name": "SANTA_CECILIA_REAL_027L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:47:43",
    "thumb": "0"
  },
  {
    "id": "3298",
    "material_id": "459",
    "material_photo_name": "marble_Crema-Marfil_Za24GFSSM1B43USoOiCI.jpg",
    "original_name": "CREMA_MARFIL_025R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:54:40",
    "thumb": "0"
  },
  {
    "id": "3371",
    "material_id": "461",
    "material_photo_name": "granite_Giallo-Arctic-Gold_XW4MPMpcbjVx4pdTto36.jpg",
    "original_name": "GIALLO_ARCTIC_GOLD_026L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:43:28",
    "thumb": "0"
  },
  {
    "id": "3834",
    "material_id": "462",
    "material_photo_name": "granite_Peregrine_q5hMsfAg8ptBYnAnIoWe.jpg",
    "original_name": "PEREGRINE_025L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:51:24",
    "thumb": "0"
  },
  {
    "id": "4213",
    "material_id": "464",
    "material_photo_name": "marble_White-Fantasy_YdZIIBBleGarHoFN55mN.jpg",
    "original_name": "WHITE_FANTASY_023R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 08:04:34",
    "thumb": "0"
  },
  {
    "id": "4055",
    "material_id": "466",
    "material_photo_name": "Statuario_wbuRTS5bjRAHG8O6pcUz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:08:34",
    "thumb": "1"
  },
  {
    "id": "3228",
    "material_id": "470",
    "material_photo_name": "granite_Colonial-Cream_hrZmpFpWDE5DiIqhNTaD.jpg",
    "original_name": "COLONIAL_CREAM_109R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:50:01",
    "thumb": "0"
  },
  {
    "id": "3686",
    "material_id": "471",
    "material_photo_name": "granite_Magma-Gold_vir675erolh5XbMlmMvX.jpg",
    "original_name": "MAGMA_GOLD_307R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:10:33",
    "thumb": "0"
  },
  {
    "id": "3988",
    "material_id": "472",
    "material_photo_name": "quartzite_Shadow-Storm_i0NjIX3LHdsfSo9Rb3w2.jpg",
    "original_name": "SHADOW_STORM_112L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:15:21",
    "thumb": "0"
  },
  {
    "id": "4292",
    "material_id": "475",
    "material_photo_name": "granite_White-Torroncino_TCgsZ6ZxrOXAHFGigVHx.jpg",
    "original_name": "WHITE_TORRONCINO_109L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 11:29:34",
    "thumb": "0"
  },
  {
    "id": "3595",
    "material_id": "476",
    "material_photo_name": "granite_Juparana-Colombo_Xmlc9ki7Bka4Sgz9flmg.jpg",
    "original_name": "JUPARANA_COLOMBO_113R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:57:35",
    "thumb": "0"
  },
  {
    "id": "3910",
    "material_id": "478",
    "material_photo_name": "granite_River-Valley_3efMKhMk3JJk4zOAThgo.jpg",
    "original_name": "RIVER_VALLEY_114R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:44:34",
    "thumb": "0"
  },
  {
    "id": "3103",
    "material_id": "479",
    "material_photo_name": "quartzite_Old-Hall-Azul-Macaubas_q4d5qWg2mBrIDmYoN6nE.jpg",
    "original_name": "AZUL_MACAUBAS_043R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:10:05",
    "thumb": "0"
  },
  {
    "id": "3918",
    "material_id": "481",
    "material_photo_name": "granite_River-White_T1N46P1MhZMV69Vi5cdO.jpg",
    "original_name": "RIVER_WHITE_188R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:57:56",
    "thumb": "0"
  },
  {
    "id": "3912",
    "material_id": "482",
    "material_photo_name": "granite_River-White_91EgDgIgOmKCUCjTq3ss.jpg",
    "original_name": "RIVER_WHITE_115L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:48:14",
    "thumb": "0"
  },
  {
    "id": "3898",
    "material_id": "484",
    "material_photo_name": "granite_Red-Flash_IhLVmiJfJqSlFPkjCqPG.jpg",
    "original_name": "RED_FLASH_116R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:31:54",
    "thumb": "0"
  },
  {
    "id": "3523",
    "material_id": "485",
    "material_photo_name": "soapstone_Green-Soapstone_SCif0fWqShCDP5oWKRo6.jpg",
    "original_name": "GREEN_SOAPSTONE_SABON_116L_POLISHED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:50:31",
    "thumb": "0"
  },
  {
    "id": "3724",
    "material_id": "486",
    "material_photo_name": "granite_Mont-Bleu_yCZAQyrCnu7Nkx467HwJ.jpg",
    "original_name": "MONT_BLEU_117L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:44:50",
    "thumb": "0"
  },
  {
    "id": "2338",
    "material_id": "882",
    "material_photo_name": "quartz_8630-Sirena-Ceasarstone_TaKM20FiP5tN4DZCUbzo.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:37:13",
    "thumb": "0"
  },
  {
    "id": "2491",
    "material_id": "881",
    "material_photo_name": "PdsPkAUK8OlXQbRhoVqx.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:50:35",
    "thumb": "1"
  },
  {
    "id": "2334",
    "material_id": "880",
    "material_photo_name": "quartz_8311-Nebbia-Ceasarstone_zrZpgpND3tcO43VqSLtx.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:34:51",
    "thumb": "0"
  },
  {
    "id": "4132",
    "material_id": "493",
    "material_photo_name": "granite_Tropical-Green_c3fVsFOfCaJHdOM9J3zg.jpg",
    "original_name": "TROPICAL_GREEN_120L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:29:57",
    "thumb": "0"
  },
  {
    "id": "2936",
    "material_id": "494",
    "material_photo_name": "granite_African-Persa_BHtgcm4iKxk1XivVf9T1.jpg",
    "original_name": "AFRICAN_PERSA_122L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 06:51:11",
    "thumb": "0"
  },
  {
    "id": "4490",
    "material_id": "496",
    "material_photo_name": "granite_Golden-Beach-Ex_W4NmLFDtNuSTNvKlKXGA.jpg",
    "original_name": "GOLDEN_BEACH_EX_134R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:28:26",
    "thumb": "0"
  },
  {
    "id": "3782",
    "material_id": "497",
    "material_photo_name": "granite_New-Venetian-Gold-C-Leather_bWV88wESVYZWM3fDZqMk.jpg",
    "original_name": "NEW_VENETIAN_GOLD_C_LEATHER_125L_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:41:57",
    "thumb": "0"
  },
  {
    "id": "3268",
    "material_id": "499",
    "material_photo_name": "granite_Cosmic-Black_R4SdCfRvsGMb85bTNrwH.jpg",
    "original_name": "COSMIC_BLACK_RW_140R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:55:35",
    "thumb": "0"
  },
  {
    "id": "4491",
    "material_id": "501",
    "material_photo_name": "granite_Ivory-Gold_L9x5D261plrh5zw97veV.jpg",
    "original_name": "IVORY_GOLD_128R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:29:30",
    "thumb": "0"
  },
  {
    "id": "4198",
    "material_id": "502",
    "material_photo_name": "granite_White-Antique_XJiAQA9ewegh4OJIf51i.jpg",
    "original_name": "WHITE_ANTIQUE_133L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:39:22",
    "thumb": "0"
  },
  {
    "id": "3716",
    "material_id": "503",
    "material_photo_name": "granite_Moksha-Gold_vkZRhxYMyx5anczmkSrX.jpg",
    "original_name": "MOKSHA_GOLD_204L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:29:18",
    "thumb": "0"
  },
  {
    "id": "4492",
    "material_id": "505",
    "material_photo_name": "granite_Golden-Persa_kcpqIxGMdW6w7T6Cmc4t.jpg",
    "original_name": "GOLDEN_PERSA_202R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:30:45",
    "thumb": "0"
  },
  {
    "id": "2992",
    "material_id": "506",
    "material_photo_name": "granite_Astoria_qZIlbWhcO7W7eKuGS96b.jpg",
    "original_name": "ASTORIA_201L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:46:26",
    "thumb": "0"
  },
  {
    "id": "3932",
    "material_id": "507",
    "material_photo_name": "granite_Rosewood_S1vmXhc9Xy5agdlQqLqB.jpg",
    "original_name": "ROSEWOOD_727R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:20:53",
    "thumb": "0"
  },
  {
    "id": "4277",
    "material_id": "508",
    "material_photo_name": "Magnificent-White_0n0BdRLqE9kk7V4zze7O.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:47:18",
    "thumb": "1"
  },
  {
    "id": "3192",
    "material_id": "509",
    "material_photo_name": "granite_Cheyenne_wI5IW6sq6WZXfIrSxBra.jpg",
    "original_name": "CHEYENNE_209L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:51:12",
    "thumb": "0"
  },
  {
    "id": "4272",
    "material_id": "510",
    "material_photo_name": "granite_Juparana-Patchwork_8Gu6vLVWOyi9aoMKUNNr.jpg",
    "original_name": "JUPARANA_PATCHWORK_214R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:34:50",
    "thumb": "0"
  },
  {
    "id": "3206",
    "material_id": "511",
    "material_photo_name": "quartzite_Classic-White_HppsUvmgyXAhEavIbpMC.jpg",
    "original_name": "CLASSIC_WHITE_711L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:20:43",
    "thumb": "0"
  },
  {
    "id": "4249",
    "material_id": "80",
    "material_photo_name": "granite_Black-Pearl_3sEH1zbgx3YbklUQfRkM.jpg",
    "original_name": "BLACK_PEARL_139R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:47:55",
    "thumb": "0"
  },
  {
    "id": "3128",
    "material_id": "99",
    "material_photo_name": "granite_Blues-in-the-Night_Ut6V7peNRbrj6sIvRPY2.jpg",
    "original_name": "BLUES_IN_THE_NIGHT_122R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:05:19",
    "thumb": "0"
  },
  {
    "id": "3259",
    "material_id": "514",
    "material_photo_name": "Copper-Silk_3AlwAinbwkVXhXWz80HT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:37:53",
    "thumb": "1"
  },
  {
    "id": "4109",
    "material_id": "517",
    "material_photo_name": "granite_Titanium_aPqX69hSfsc3FNJu4zaR.jpg",
    "original_name": "TITANIUM_213L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:57:11",
    "thumb": "0"
  },
  {
    "id": "4318",
    "material_id": "330",
    "material_photo_name": "Barroca_oylEUwktQHJ2pHv8tLHW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-30 02:37:23",
    "thumb": "1"
  },
  {
    "id": "3337",
    "material_id": "489",
    "material_photo_name": "granite_Fantastic-White_hCtP07fNXSHjqKR4S0Ai.jpg",
    "original_name": "FANTASTIC_WHITE_119L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:43:48",
    "thumb": "0"
  },
  {
    "id": "3395",
    "material_id": "526",
    "material_photo_name": "Giallo-Napoleone_VaYHJHciVP6vQAFPfBsH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:44:50",
    "thumb": "1"
  },
  {
    "id": "3397",
    "material_id": "527",
    "material_photo_name": "Giallo-Napoleone_h3mx0HvvPiVQHZjBwSXm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:46:34",
    "thumb": "1"
  },
  {
    "id": "4148",
    "material_id": "536",
    "material_photo_name": "limestone_Valverde_cGhSsyiZWc7jxXRmma34.jpg",
    "original_name": "VALVERDE_LIMESTONE_193L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:25:27",
    "thumb": "0"
  },
  {
    "id": "3719",
    "material_id": "538",
    "material_photo_name": "Moleanos_tCkCd6vPruICIOEED13k.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:32:58",
    "thumb": "1"
  },
  {
    "id": "4273",
    "material_id": "510",
    "material_photo_name": "Juparana-Patchwork_8u3gZ11UbXuMsbOcyLKc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:35:22",
    "thumb": "1"
  },
  {
    "id": "4271",
    "material_id": "1038",
    "material_photo_name": "Jerusalem-Grey_gWiu8XSSeqLRagnCew0q.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:25:53",
    "thumb": "1"
  },
  {
    "id": "4269",
    "material_id": "542",
    "material_photo_name": "Fantasy-Brown_dMbscZtOEzeWTERTKwcF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:51:40",
    "thumb": "1"
  },
  {
    "id": "4028",
    "material_id": "513",
    "material_photo_name": "soapstone_Smoke_9H8XlBnUACbuPUPTrpNG.jpg",
    "original_name": "SMOKE_SOAPSTONE_207R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:09:19",
    "thumb": "0"
  },
  {
    "id": "4493",
    "material_id": "514",
    "material_photo_name": "granite_Copper-Silk_IT0dP8SOJTpx6ufLzKhi.jpg",
    "original_name": "COPPER_SILK_143L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:34:16",
    "thumb": "0"
  },
  {
    "id": "3952",
    "material_id": "515",
    "material_photo_name": "quartzite_Sandalus-Leather_1Ue73ZEWujw0xIZTNFm5.jpg",
    "original_name": "SANDALUS_LEATHER_207L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:20:09",
    "thumb": "0"
  },
  {
    "id": "4201",
    "material_id": "544",
    "material_photo_name": "White-Antique_Bd8h6d8vQz0qtM7gF9aS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:41:35",
    "thumb": "1"
  },
  {
    "id": "4494",
    "material_id": "516",
    "material_photo_name": "granite_Copper-Canyon_lAiOf8P5n5Mrao6dAnzR.jpg",
    "original_name": "COPPER_CANYON_212L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:35:26",
    "thumb": "0"
  },
  {
    "id": "4108",
    "material_id": "517",
    "material_photo_name": "Titanium_lNdxtXaHTN56iYIsLV3i.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:56:04",
    "thumb": "1"
  },
  {
    "id": "3467",
    "material_id": "520",
    "material_photo_name": "granite_Golden-Field_IrWz4YflCWjlpH62ejEx.jpg",
    "original_name": "GOLDEN_FIELD_220L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:11:09",
    "thumb": "0"
  },
  {
    "id": "3954",
    "material_id": "521",
    "material_photo_name": "granite_Sanguine_IQiZvcPpuyPnLK7ljmWm.jpg",
    "original_name": "SANGUINE_171R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:23:10",
    "thumb": "0"
  },
  {
    "id": "4495",
    "material_id": "523",
    "material_photo_name": "granite_Cloudy-Yellow_9mnUlJUkKJxiylj2pkgR.jpg",
    "original_name": "CLOUDY_YELLOW_218R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:37:07",
    "thumb": "0"
  },
  {
    "id": "4496",
    "material_id": "525",
    "material_photo_name": "granite_Juparana-Nathalia_6WqbCzR0FO0bDtNCdTT4.jpg",
    "original_name": "JUPARANA_NATHALIA_215L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:38:18",
    "thumb": "0"
  },
  {
    "id": "3446",
    "material_id": "546",
    "material_photo_name": "Golden-Beach-EX_SSNhnkl5P5RjMqGOUK4e.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:14:33",
    "thumb": "1"
  },
  {
    "id": "3609",
    "material_id": "547",
    "material_photo_name": "Juparana-Persa_0k42OGQV2BsRDg8ecTq8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:14:03",
    "thumb": "1"
  },
  {
    "id": "3608",
    "material_id": "547",
    "material_photo_name": "granite_Juparana-Persa_Z3yHSkHhIBwv0eJifNZm.jpg",
    "original_name": "JUPARANA_PERSA_136R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:13:43",
    "thumb": "0"
  },
  {
    "id": "4497",
    "material_id": "526",
    "material_photo_name": "granite_Giallo-Napoleone_JX1k65CoWEZfALmdqMCC.jpg",
    "original_name": "GIALLO_NAPOLEONE_129AL_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:39:57",
    "thumb": "0"
  },
  {
    "id": "3396",
    "material_id": "527",
    "material_photo_name": "granite_Giallo-Napoleone_dKL6f0xnHwCCxq36go1P.jpg",
    "original_name": "GIALLO_NAPOLEONE_216L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:46:15",
    "thumb": "0"
  },
  {
    "id": "4160",
    "material_id": "528",
    "material_photo_name": "granite_Verde-Bamboo_5rl2vFB8q63NZP3AloiL.jpg",
    "original_name": "VERDE_BAMBOO_218L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:45:42",
    "thumb": "0"
  },
  {
    "id": "4174",
    "material_id": "529",
    "material_photo_name": "granite_Vernize-Tracomal_ODWNHk3X8V4gZW0hIM9F.jpg",
    "original_name": "VERNIZE_TRACOMAL_219L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:06:40",
    "thumb": "0"
  },
  {
    "id": "3469",
    "material_id": "531",
    "material_photo_name": "granite_Golden-Flakes_PlZMkY94go1sy0iPYNae.jpg",
    "original_name": "GOLDEN_FLAKES_ANGOLA_GOLD_221R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:13:04",
    "thumb": "0"
  },
  {
    "id": "3642",
    "material_id": "532",
    "material_photo_name": "granite_Labrador-Bianca_hRAkK3HPBFyxcAOKEaNh.jpg",
    "original_name": "LABRADOR_BIANCA_223R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:00:46",
    "thumb": "0"
  },
  {
    "id": "3589",
    "material_id": "533",
    "material_photo_name": "granite_Jungle-Green_I5EbNFXnTXCw2Vc85ivq.jpg",
    "original_name": "JUNGLE_GREEN_222L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:50:12",
    "thumb": "0"
  },
  {
    "id": "4149",
    "material_id": "536",
    "material_photo_name": "Valverde_1PYhDnzUGyn1bap3499J.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:25:38",
    "thumb": "1"
  },
  {
    "id": "3718",
    "material_id": "538",
    "material_photo_name": "limestone_Moleanos_8APVXFriJNNReWWlxDRf.jpg",
    "original_name": "MOLEANOS_LIMESTONE_1401R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:32:30",
    "thumb": "0"
  },
  {
    "id": "3886",
    "material_id": "539",
    "material_photo_name": "granite_Raggio-Di-Sole_WVEYZg5aSSkqnwtgJ5P3.jpg",
    "original_name": "RAGGIO_DI_SOLE_129BL_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:16:26",
    "thumb": "0"
  },
  {
    "id": "3974",
    "material_id": "540",
    "material_photo_name": "granite_Sapphire-Blue_CpVUcMe8S508b10wjNFO.jpg",
    "original_name": "SAPPHIRE_BLUE_128L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:55:30",
    "thumb": "0"
  },
  {
    "id": "4498",
    "material_id": "541",
    "material_photo_name": "granite_Niagara-Gold_navyXezpPOe2afh3khFi.jpg",
    "original_name": "NIAGARA_GOLD_129AR_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:41:19",
    "thumb": "0"
  },
  {
    "id": "4268",
    "material_id": "542",
    "material_photo_name": "quartzite_Fantasy-Brown_G169DrzwbIRQDJrRENx6.jpg",
    "original_name": "FANTASY_BROWN_131L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:51:17",
    "thumb": "0"
  },
  {
    "id": "4184",
    "material_id": "543",
    "material_photo_name": "granite_Virginia-Black_wBE12qDHTbg3SMJrHH5Z.jpg",
    "original_name": "VIRGINIA_BLACK_130R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:20:43",
    "thumb": "0"
  },
  {
    "id": "4200",
    "material_id": "544",
    "material_photo_name": "granite_White-Antique_eM6WTcpFxzRm17qsRIBq.jpg",
    "original_name": "WHITE_ANTIQUE_203L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:41:07",
    "thumb": "0"
  },
  {
    "id": "3426",
    "material_id": "545",
    "material_photo_name": "granite_Gold-Antique_p02gYjpBAyF6TE33tCzi.jpg",
    "original_name": "GOLD_ANTIQUE_134L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:29:19",
    "thumb": "0"
  },
  {
    "id": "3445",
    "material_id": "546",
    "material_photo_name": "granite_Golden-Beach-EX_8i3jfBxailZ6yuPgAqMZ.jpg",
    "original_name": "GOLDEN_BEACH_EX_217L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:14:19",
    "thumb": "0"
  },
  {
    "id": "3681",
    "material_id": "701",
    "material_photo_name": "Madura-Gold_AuQ0biM7fmJsvgredeUt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:01:02",
    "thumb": "1"
  },
  {
    "id": "3677",
    "material_id": "550",
    "material_photo_name": "Madeira-Gold_FTKEAWg7jTIdqRaww8Wu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:56:26",
    "thumb": "1"
  },
  {
    "id": "1619",
    "material_id": "551",
    "material_photo_name": "granite_Juparana-Yellow_deMWEydjiQGv9Yyc1MOF.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-04-27 05:30:45",
    "thumb": "0"
  },
  {
    "id": "3243",
    "material_id": "552",
    "material_photo_name": "Colonial-White_Vft6t8kLi6VOSLKSnIpm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 11:15:42",
    "thumb": "1"
  },
  {
    "id": "4283",
    "material_id": "938",
    "material_photo_name": "Giallo-Napoleone_CZ7A1kxDN2XF5ztyQ3dZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-23 01:11:06",
    "thumb": "1"
  },
  {
    "id": "3393",
    "material_id": "553",
    "material_photo_name": "Giallo-Napole_6yj9rOYdgRe58DBUWVGn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:41:43",
    "thumb": "1"
  },
  {
    "id": "4005",
    "material_id": "1030",
    "material_photo_name": "Sierra-Brown_LZqma7PZje7aPRcNE6Nl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:38:10",
    "thumb": "1"
  },
  {
    "id": "4000",
    "material_id": "554",
    "material_photo_name": "granite_Siena-Beige_npsz3ZP7SndRoFxAyQFC.jpg",
    "original_name": "SIENA_BEIGE_147L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:32:08",
    "thumb": "0"
  },
  {
    "id": "3557",
    "material_id": "556",
    "material_photo_name": "Ivory-Brown_pqPhKkM89UABeevzcQPS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:50:34",
    "thumb": "1"
  },
  {
    "id": "1638",
    "material_id": "551",
    "material_photo_name": "1GdbqDEc9vX0myTXIYsM.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-04-27 06:41:56",
    "thumb": "1"
  },
  {
    "id": "3242",
    "material_id": "552",
    "material_photo_name": "granite_Colonial-White_kQeUruosOlT5AT4wQOua.jpg",
    "original_name": "COLONIAL_WHITE_142L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:15:21",
    "thumb": "0"
  },
  {
    "id": "3392",
    "material_id": "553",
    "material_photo_name": "granite_Giallo-Napole_uNJ5ZYP3S3AJKFrzPiSy.jpg",
    "original_name": "GIALLO_NAPOLE_621R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:41:28",
    "thumb": "0"
  },
  {
    "id": "4001",
    "material_id": "554",
    "material_photo_name": "Siena-Beige_9nIYxdNaEex5I8vQ5Xl1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:33:06",
    "thumb": "1"
  },
  {
    "id": "4499",
    "material_id": "555",
    "material_photo_name": "granite_Giallo-Vicenza-Dark_VxBhoAi6zhPTwD1Qo1D1.jpg",
    "original_name": "GIALLO_VICENZA_DARK_155R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:42:38",
    "thumb": "0"
  },
  {
    "id": "4500",
    "material_id": "556",
    "material_photo_name": "granite_Ivory-Brown_6kRiMxEelPL4H8mR83Td.jpg",
    "original_name": "IVORY_BROWN_151L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:43:48",
    "thumb": "0"
  },
  {
    "id": "4064",
    "material_id": "557",
    "material_photo_name": "granite_Sugar-Brown_LjfgarodXr3BL5QCrJ7W.jpg",
    "original_name": "SUGAR_BROWN_154R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:22:52",
    "thumb": "0"
  },
  {
    "id": "4164",
    "material_id": "558",
    "material_photo_name": "granite_Verde-Brasiliano_oqA2vfZ0iimE9jRSNQV7.jpg",
    "original_name": "VERDE_BRASILIANO_150L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:52:18",
    "thumb": "0"
  },
  {
    "id": "4136",
    "material_id": "560",
    "material_photo_name": "granite_Typhoon-Bordeaux_6F4yAM241peE5zsOFCBw.jpg",
    "original_name": "TYPHOON_BORDEAUX_147R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:04:02",
    "thumb": "0"
  },
  {
    "id": "4114",
    "material_id": "561",
    "material_photo_name": "granite_Toffee_7VcgyAcwo091dMJ83pnP.jpg",
    "original_name": "TOFFEE_150R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:03:46",
    "thumb": "0"
  },
  {
    "id": "3676",
    "material_id": "550",
    "material_photo_name": "granite_Madeira-Gold_jk2g7kwswtehcqLwfaNr.jpg",
    "original_name": "MADEIRA_GOLD_139L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:56:08",
    "thumb": "0"
  },
  {
    "id": "3323",
    "material_id": "342",
    "material_photo_name": "marble_Dynasty-Brown_y8x76Rs3FaTgpaaAsWIq.jpg",
    "original_name": "DYNASTY_BROWN_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:24:50",
    "thumb": "0"
  },
  {
    "id": "3998",
    "material_id": "469",
    "material_photo_name": "granite_Siena-Beige_UTNq0MINuf26KaEzW21q.jpg",
    "original_name": "SIENA_BEIGE_012L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:30:09",
    "thumb": "0"
  },
  {
    "id": "3909",
    "material_id": "480",
    "material_photo_name": "River-Valley_bBN0I2ztUr2jnTZkA5bx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:43:06",
    "thumb": "1"
  },
  {
    "id": "2492",
    "material_id": "882",
    "material_photo_name": "o2LZMjqY0jK93lsqjAXj.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:51:03",
    "thumb": "1"
  },
  {
    "id": "2910",
    "material_id": "562",
    "material_photo_name": "Absolute-Black_uKLwdl6EDHvrfdp8VwB4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 05:23:08",
    "thumb": "1"
  },
  {
    "id": "2912",
    "material_id": "151",
    "material_photo_name": "granite_Absolute-Black_XcnHAt2g94vCsyOT0X1b.jpg",
    "original_name": "ABSOLUTE_BLACK_144R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 05:27:56",
    "thumb": "0"
  },
  {
    "id": "4502",
    "material_id": "563",
    "material_photo_name": "granite_African-Galaxy_nYmrPLAOvaPXLDAJeCU5.jpg",
    "original_name": "AFRICAN_GALAXY_156R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:46:24",
    "thumb": "0"
  },
  {
    "id": "3622",
    "material_id": "565",
    "material_photo_name": "granite_Kashmir-Beige_oQe7uS8lvlBDLgW4N3wc.jpg",
    "original_name": "KASHMIR_BEIGE_155L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:32:30",
    "thumb": "0"
  },
  {
    "id": "4503",
    "material_id": "567",
    "material_photo_name": "granite_Golden-Valley-MG_LkPZiMCngRf7vhwmw80P.jpg",
    "original_name": "GOLDEN_VALLEY_MG_161R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:47:56",
    "thumb": "0"
  },
  {
    "id": "3694",
    "material_id": "568",
    "material_photo_name": "granite_Marinace_gtvKRaWpA39SKAO8sFTM.jpg",
    "original_name": "MARINACE_158R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 12:03:45",
    "thumb": "0"
  },
  {
    "id": "3084",
    "material_id": "572",
    "material_photo_name": "Black-Galaxy-Premium_2Ank0GRfLug96wefH1KW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:09:13",
    "thumb": "1"
  },
  {
    "id": "4524",
    "material_id": "700",
    "material_photo_name": "granite_Baltic-Blue_BiZxK8Hj9vXokFnhPKEk.jpg",
    "original_name": "BALTIC_BLUE_630R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:17:39",
    "thumb": "0"
  },
  {
    "id": "3312",
    "material_id": "569",
    "material_photo_name": "granite_Delicatus-White_gCkgurKdsQAfedzJMVcM.jpg",
    "original_name": "DELICATUS_WHITE_159L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:12:56",
    "thumb": "0"
  },
  {
    "id": "3514",
    "material_id": "570",
    "material_photo_name": "granite_Green-Ocean_6TsZjOBlmrr04drTm9lM.jpg",
    "original_name": "GREEN_OCEAN_159R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:39:27",
    "thumb": "0"
  },
  {
    "id": "4504",
    "material_id": "572",
    "material_photo_name": "granite_Black-Galaxy-Premium_oaBX3lKVmUcfVip0GRpL.jpg",
    "original_name": "BLACK_GALAXY_PREMIUM_308L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:49:02",
    "thumb": "0"
  },
  {
    "id": "4290",
    "material_id": "699",
    "material_photo_name": "granite_White-Fiorito_hgXkgWbMcodZcb1VtPIf.jpg",
    "original_name": "WHITE_FIORITO_626L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 11:16:36",
    "thumb": "0"
  },
  {
    "id": "4126",
    "material_id": "574",
    "material_photo_name": "granite_Tropic-Gold_DKaeJuuMQDt1ztgXqkuk.jpg",
    "original_name": "TROPIC_GOLD_402L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:19:05",
    "thumb": "0"
  },
  {
    "id": "3197",
    "material_id": "575",
    "material_photo_name": "Cirrus-White_1cZedwkrKwG9lWUNnVfp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:56:12",
    "thumb": "1"
  },
  {
    "id": "3199",
    "material_id": "577",
    "material_photo_name": "Cirrus-White_iua4o2o3J2qtsk4tUAOB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 06:59:26",
    "thumb": "1"
  },
  {
    "id": "3588",
    "material_id": "722",
    "material_photo_name": "Juliet_3q6AwoNq0ECo36ho9itG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:48:39",
    "thumb": "1"
  },
  {
    "id": "3586",
    "material_id": "578",
    "material_photo_name": "Jet-Mist_tkL4LvuUk6tD904aPb0K.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:46:19",
    "thumb": "1"
  },
  {
    "id": "4195",
    "material_id": "579",
    "material_photo_name": "Vyara-Gold_LunRnZzRkg1OwjqWgU9s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:34:32",
    "thumb": "1"
  },
  {
    "id": "2939",
    "material_id": "583",
    "material_photo_name": "marble_Afyon-White_Dfc9I3PXhKpVd3U7HgHq.jpg",
    "original_name": "AFYON_WHITE_408L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 06:56:36",
    "thumb": "0"
  },
  {
    "id": "2949",
    "material_id": "584",
    "material_photo_name": "marble_Afyon-White_FJgw0DmEjxVasl5ZzbiW.jpg",
    "original_name": "AFYON_WHITE_408R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:03:54",
    "thumb": "0"
  },
  {
    "id": "3196",
    "material_id": "575",
    "material_photo_name": "quartzite_Cirrus-White_mdTWt1XmGnERV3gpRuzt.jpg",
    "original_name": "CIRRUS_WHITE_403L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:55:56",
    "thumb": "0"
  },
  {
    "id": "3198",
    "material_id": "577",
    "material_photo_name": "quartzite_Cirrus-White_DJmiDuabA14CQXa8UPJw.jpg",
    "original_name": "CIRRUS_WHITE_403R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:59:08",
    "thumb": "0"
  },
  {
    "id": "3585",
    "material_id": "578",
    "material_photo_name": "granite_Jet-Mist_7lQHp7omFkrZjZjxMTTX.jpg",
    "original_name": "JET_MIST_303R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:45:55",
    "thumb": "0"
  },
  {
    "id": "4194",
    "material_id": "579",
    "material_photo_name": "granite_Vyara-Gold_cSbtyJz25uvNQ5aWIsHj.jpg",
    "original_name": "VYARA_GOLD_406L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:34:12",
    "thumb": "0"
  },
  {
    "id": "3382",
    "material_id": "646",
    "material_photo_name": "granite_Giallo-Firenza_xzpR145E6lyzzsRVm593.jpg",
    "original_name": "GIALLO_FIRENZA_421R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:55:22",
    "thumb": "0"
  },
  {
    "id": "3115",
    "material_id": "581",
    "material_photo_name": "granite_Blue-Fire_3PCZkGtbEZmQH4xI5UG3.jpg",
    "original_name": "BLUE_FIRE_401R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:46:42",
    "thumb": "0"
  },
  {
    "id": "2982",
    "material_id": "582",
    "material_photo_name": "granite_Arctic-Blue_IfpNHbNZBvRWsTLkm1Uq.jpg",
    "original_name": "ARCTIC_BLUE_304L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 09:24:10",
    "thumb": "0"
  },
  {
    "id": "2942",
    "material_id": "583",
    "material_photo_name": "Afyon-White_rHfZS4kGBw0OPVEIU1vL.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 06:58:33",
    "thumb": "1"
  },
  {
    "id": "2953",
    "material_id": "222",
    "material_photo_name": "AJ-Brown-CC_Ze9kVeHP9VD7SXj3hFwq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:09:53",
    "thumb": "1"
  },
  {
    "id": "4022",
    "material_id": "585",
    "material_photo_name": "granite_Siraska_XMevKz5Pl3ItpXDrJ3NX.jpg",
    "original_name": "SIRASKA_405R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:03:15",
    "thumb": "0"
  },
  {
    "id": "3620",
    "material_id": "586",
    "material_photo_name": "granite_Karoo-Beige_EtkwJ4gGMBodZJs9k1oH.jpg",
    "original_name": "KAROO_BEIGE_405L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:28:43",
    "thumb": "0"
  },
  {
    "id": "4255",
    "material_id": "1158",
    "material_photo_name": "quartzite_Classic-White_iqjSc0DJiaUUgByfcyAo.jpg",
    "original_name": "CLASSIC_WHITE_210L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:02:26",
    "thumb": "0"
  },
  {
    "id": "4254",
    "material_id": "1040",
    "material_photo_name": "Calacutta-Quartz_AH5AsGt2DrwdvaE7ywxL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 09:11:36",
    "thumb": "1"
  },
  {
    "id": "4250",
    "material_id": "80",
    "material_photo_name": "Black-Pearl_18HaTzrbLj0vU9NuDON2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:48:29",
    "thumb": "1"
  },
  {
    "id": "4248",
    "material_id": "199",
    "material_photo_name": "Bianco-Diamante_KF0kmICEFCTeexnBZ1Qj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:36:55",
    "thumb": "1"
  },
  {
    "id": "4246",
    "material_id": "589",
    "material_photo_name": "Bianco-Antico_85fK5noft2nJeqTacPYJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:32:52",
    "thumb": "1"
  },
  {
    "id": "3144",
    "material_id": "587",
    "material_photo_name": "marble_Brown-Fantasy_0mMzhpW1I7KwyRBLvR4S.jpg",
    "original_name": "BROWN_FANTASY_306R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:25:09",
    "thumb": "0"
  },
  {
    "id": "3812",
    "material_id": "590",
    "material_photo_name": "granite_Orion_R8viJLS73d22Ho4TspYD.jpg",
    "original_name": "ORION_409L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:24:23",
    "thumb": "0"
  },
  {
    "id": "4245",
    "material_id": "589",
    "material_photo_name": "granite_Bianco-Antico_BRWLL2DB5hlS5NFEDICk.jpg",
    "original_name": "BIANCO_ANTICO_410L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:32:12",
    "thumb": "0"
  },
  {
    "id": "3813",
    "material_id": "590",
    "material_photo_name": "Orion_VreP1wIcZK8GonlZ7Ypc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:24:53",
    "thumb": "1"
  },
  {
    "id": "3462",
    "material_id": "131",
    "material_photo_name": "Golden-Eagle_KoI3s6PZppTRnybcrxyT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:03:57",
    "thumb": "1"
  },
  {
    "id": "3460",
    "material_id": "592",
    "material_photo_name": "Golden-Dream_syRUWSWq2KPCgUm4IugQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:01:58",
    "thumb": "1"
  },
  {
    "id": "4505",
    "material_id": "592",
    "material_photo_name": "granite_Golden-Dream_N7cN60uc5ymASq5G8Rdb.jpg",
    "original_name": "GOLDEN_DREAM_309L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:50:52",
    "thumb": "0"
  },
  {
    "id": "3458",
    "material_id": "594",
    "material_photo_name": "Golden-Dream_GONBl7wmE4r4zgmu6TeQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:59:54",
    "thumb": "1"
  },
  {
    "id": "3225",
    "material_id": "595",
    "material_photo_name": "Coffee-Brown-Caras_wYHeK1MW5kpFugUOYyl3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 10:44:57",
    "thumb": "1"
  },
  {
    "id": "4090",
    "material_id": "684",
    "material_photo_name": "granite_Tan-Brown_ZdOjFRPdnCZa1KuAXoc7.jpg",
    "original_name": "TAN_BROWN_327R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:31:37",
    "thumb": "0"
  },
  {
    "id": "3751",
    "material_id": "107",
    "material_photo_name": "New-Astoria_8eRJmaCTH9f1NhAT7Y0o.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:18:58",
    "thumb": "1"
  },
  {
    "id": "3749",
    "material_id": "597",
    "material_photo_name": "Netuno-Bordeaux_ZIrGVQFDSvkueZbYZFLG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:16:11",
    "thumb": "1"
  },
  {
    "id": "3747",
    "material_id": "1017",
    "material_photo_name": "Netuno-Bordeaux_gkR5k7k1FwV5q4boAKNI.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:13:58",
    "thumb": "1"
  },
  {
    "id": "3745",
    "material_id": "598",
    "material_photo_name": "Netuno-Bordeaux_skAhAwZS9e99DsIAyVk9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:11:13",
    "thumb": "1"
  },
  {
    "id": "2340",
    "material_id": "883",
    "material_photo_name": "quartz_8616-Fiero-Ceasarstone_blLLECaMFGM1j7WgIExm.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:38:30",
    "thumb": "0"
  },
  {
    "id": "4101",
    "material_id": "602",
    "material_photo_name": "Tan-Brown-Supreme_yUyNz67d76gb4jZemJUU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:45:19",
    "thumb": "1"
  },
  {
    "id": "4131",
    "material_id": "653",
    "material_photo_name": "Tropical-Brown_7HBivl2191CA4TLAG3SO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:25:39",
    "thumb": "1"
  },
  {
    "id": "4512",
    "material_id": "641",
    "material_photo_name": "granite_Eighteen-Carat-Gold_RVFoXW6CDljlGqQGn6VG.jpg",
    "original_name": "EIGHTEEN_CARAT_GOLD_321L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:00:39",
    "thumb": "0"
  },
  {
    "id": "4513",
    "material_id": "642",
    "material_photo_name": "granite_Crema-Bordeaux_rrpApKCG9plXVNNi3dIG.jpg",
    "original_name": "CREMA_BORDEAUX_318R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:01:57",
    "thumb": "0"
  },
  {
    "id": "4506",
    "material_id": "594",
    "material_photo_name": "granite_Golden-Dream_0dOHMi8WADnxHRaNHbh8.jpg",
    "original_name": "GOLDEN_DREAM_220R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:52:18",
    "thumb": "0"
  },
  {
    "id": "3224",
    "material_id": "595",
    "material_photo_name": "granite_Coffee-Brown-Caras_DH1qhUF45469TnjNDUy0.jpg",
    "original_name": "COFFEE_BROWN_CARAS_412L_ANTIQUE_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 10:44:38",
    "thumb": "0"
  },
  {
    "id": "3748",
    "material_id": "597",
    "material_photo_name": "granite_Netuno-Bordeaux_cMtf8zcYsVu34E6fVlWi.jpg",
    "original_name": "NETUNO_BORDEAUX_312L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:15:49",
    "thumb": "0"
  },
  {
    "id": "3003",
    "material_id": "640",
    "material_photo_name": "granite_Atlantic-Black_zlI9km9nZrvSBdW1cXn6.jpg",
    "original_name": "ATLANTIC_BLACK_320R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 10:05:20",
    "thumb": "0"
  },
  {
    "id": "3744",
    "material_id": "598",
    "material_photo_name": "granite_Netuno-Bordeaux_BOKf7CwcsXtyngiM9dnh.jpg",
    "original_name": "NETUNO_BORDEAUX_133R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:10:41",
    "thumb": "0"
  },
  {
    "id": "4507",
    "material_id": "599",
    "material_photo_name": "granite_Lady-Dream_qK8x3mZz5YjHNPErWZal.jpg",
    "original_name": "LADY_DREAM_305L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:53:58",
    "thumb": "0"
  },
  {
    "id": "2493",
    "material_id": "883",
    "material_photo_name": "8XNmvVbdfUtdek7ARFZ1.JPG",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:51:28",
    "thumb": "1"
  },
  {
    "id": "3567",
    "material_id": "601",
    "material_photo_name": "granite_Ivory-White_TS2FwbusNn37ayPZyCCG.jpg",
    "original_name": "IVORY_WHITE_313R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 11:03:49",
    "thumb": "0"
  },
  {
    "id": "4100",
    "material_id": "602",
    "material_photo_name": "granite_Tan-Brown-Supreme_nVRqt5pERrokEkpXSW5w.jpg",
    "original_name": "TAN_BROWN_SUPREME_415L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:43:37",
    "thumb": "0"
  },
  {
    "id": "4508",
    "material_id": "605",
    "material_photo_name": "granite_Golden-Jade_R8qdVKjMMU5rWNHatVHC.jpg",
    "original_name": "GOLDEN_JADE_316R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:55:13",
    "thumb": "0"
  },
  {
    "id": "4138",
    "material_id": "606",
    "material_photo_name": "granite_Typhoon-Green_WA0hbo7874sEcAQNo4wr.jpg",
    "original_name": "TYPHOON_GREEN_302L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:06:19",
    "thumb": "0"
  },
  {
    "id": "3552",
    "material_id": "609",
    "material_photo_name": "granite_Imperial-Green_hnwr9aLJleQWasW0gcrQ.jpg",
    "original_name": "IMPERIAL_GREEN_414L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:37:40",
    "thumb": "0"
  },
  {
    "id": "3525",
    "material_id": "658",
    "material_photo_name": "granite_Harvest-Cream_y4zNqTztNybIdNdHiPvC.jpg",
    "original_name": "HARVEST_CREAM_339L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:52:31",
    "thumb": "0"
  },
  {
    "id": "3351",
    "material_id": "1134",
    "material_photo_name": "granite_Firenze-Yellow_klKmCXq5WAstYod98hlU.jpg",
    "original_name": "FIRENZE_YELLOW_410R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:14:39",
    "thumb": "0"
  },
  {
    "id": "3350",
    "material_id": "668",
    "material_photo_name": "Firenze-Yellow_NFcQQFy0n2CYvsVCVYly.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:07:15",
    "thumb": "1"
  },
  {
    "id": "3346",
    "material_id": "613",
    "material_photo_name": "Fantasy-Brown_NHR8jmi373lLwkXj2beT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:00:24",
    "thumb": "1"
  },
  {
    "id": "3348",
    "material_id": "369",
    "material_photo_name": "Fire-Island_t19ZmKThhy47koSYzvpQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:04:21",
    "thumb": "1"
  },
  {
    "id": "3021",
    "material_id": "682",
    "material_photo_name": "granite_Azul-Aran_Mg8IPJRm9G876Sl5l6TH.jpg",
    "original_name": "AZUL_ARAN_818L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 10:54:11",
    "thumb": "0"
  },
  {
    "id": "3345",
    "material_id": "613",
    "material_photo_name": "quartzite_Fantasy-Brown_0y2Ed7PKOxkt0IuXLNht.jpg",
    "original_name": "FANTASY_BROWN_1205R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:00:02",
    "thumb": "0"
  },
  {
    "id": "3401",
    "material_id": "368",
    "material_photo_name": "Giallo-Nathalia_kIB7IvbZbJiIxtYSsY5G.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:51:53",
    "thumb": "1"
  },
  {
    "id": "3403",
    "material_id": "1079",
    "material_photo_name": "Giallo-Nathalia_MMvjq2YjLK3Ep1rr42s5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:55:10",
    "thumb": "1"
  },
  {
    "id": "3391",
    "material_id": "616",
    "material_photo_name": "Giallo-Napole_yLOXN1qX2O58ttwaqXQn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:27:15",
    "thumb": "1"
  },
  {
    "id": "4282",
    "material_id": "938",
    "material_photo_name": "granite_Giallo-Napoleone_6xmJLPeKQ6PrneOKaVdA.jpg",
    "original_name": "GIALLO_NAPOLEONE_729R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-23 01:10:16",
    "thumb": "0"
  },
  {
    "id": "3244",
    "material_id": "615",
    "material_photo_name": "granite_Copacabana_0oKHuTxtNLFoalK4PlBT.jpg",
    "original_name": "COPACABANA_135L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:17:35",
    "thumb": "0"
  },
  {
    "id": "3617",
    "material_id": "617",
    "material_photo_name": "Juparana-Yellow_M85vkw1YZ8IpOQCpucZp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:23:52",
    "thumb": "1"
  },
  {
    "id": "3390",
    "material_id": "616",
    "material_photo_name": "granite_Giallo-Napole_SryOfnJgJv93KoIZjPiS.jpg",
    "original_name": "GIALLO_NAPOLE_138R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:26:53",
    "thumb": "0"
  },
  {
    "id": "3616",
    "material_id": "617",
    "material_photo_name": "granite_Juparana-Yellow_Lg7DCnX4fYQ5cYWDsWhp.jpg",
    "original_name": "JUPARANA_YELLOW_144L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:23:33",
    "thumb": "0"
  },
  {
    "id": "4275",
    "material_id": "620",
    "material_photo_name": "Juparana-Patchwork_A0HIVkR9FaQuz5NImoCt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:37:18",
    "thumb": "1"
  },
  {
    "id": "4086",
    "material_id": "679",
    "material_photo_name": "granite_Tahoe_65HDg3MMeK6kRtHrW4kH.jpg",
    "original_name": "TAHOE_824R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:22:40",
    "thumb": "0"
  },
  {
    "id": "3441",
    "material_id": "618",
    "material_photo_name": "granite_Gold-Crystal_WHSTD3uuflQYTODkeYRE.jpg",
    "original_name": "GOLD_CRYSTAL_311L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:08:01",
    "thumb": "0"
  },
  {
    "id": "3599",
    "material_id": "619",
    "material_photo_name": "granite_Juparana-Golden-Khan_BC3FBYXG2xnvqNC4QbXH.jpg",
    "original_name": "JUPARANA_GOLDEN_KHAN_315L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:02:45",
    "thumb": "0"
  },
  {
    "id": "4274",
    "material_id": "620",
    "material_photo_name": "granite_Juparana-Patchwork_ZMrKqhA8cupX5UbvicsZ.jpg",
    "original_name": "JUPARANA_PATCHWORK_418L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:36:35",
    "thumb": "0"
  },
  {
    "id": "3032",
    "material_id": "621",
    "material_photo_name": "granite_Balthus_oJDMQfhdzLE2Xx62nvTs.jpg",
    "original_name": "BALTHUS_425R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 11:19:18",
    "thumb": "0"
  },
  {
    "id": "3708",
    "material_id": "678",
    "material_photo_name": "granite_Matrix_GX1innhVUDT6jfWWeSXh.jpg",
    "original_name": "MATRIX_826L_BRUSHED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:18:42",
    "thumb": "0"
  },
  {
    "id": "3114",
    "material_id": "626",
    "material_photo_name": "Blue-Fantasy_B6jEkt5Yp5ubcJr7YXV7.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 03:42:36",
    "thumb": "1"
  },
  {
    "id": "4180",
    "material_id": "623",
    "material_photo_name": "granite_Viking-Black_ffKD9CYQ7y8My9sEPpVR.jpg",
    "original_name": "VIKING_BLACK_315R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:16:31",
    "thumb": "0"
  },
  {
    "id": "3369",
    "material_id": "625",
    "material_photo_name": "granite_Giallo-Arctic_hERi0rXs8U9i0z9rVa4t.jpg",
    "original_name": "GIALLO_ARCTIC_309L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:40:57",
    "thumb": "0"
  },
  {
    "id": "3113",
    "material_id": "626",
    "material_photo_name": "granite_Blue-Fantasy_RFB1oh9xiMEO8HzgcFb5.jpg",
    "original_name": "BLUE_FANTASY_324L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:41:34",
    "thumb": "0"
  },
  {
    "id": "4068",
    "material_id": "627",
    "material_photo_name": "granite_Sunflower_nn6PMUX425T1vku8GKBp.jpg",
    "original_name": "SUNFLOWER_421L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:30:35",
    "thumb": "0"
  },
  {
    "id": "3357",
    "material_id": "628",
    "material_photo_name": "granite_Florence-Green_05gNAYbVyR49HD31FGoR.jpg",
    "original_name": "FLORENCE_GREEN_423R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:26:14",
    "thumb": "0"
  },
  {
    "id": "4509",
    "material_id": "629",
    "material_photo_name": "granite_Desert-Gold_tLiXkajYgp4ntUwrAfBn.jpg",
    "original_name": "DESERT_GOLD_422L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:56:39",
    "thumb": "0"
  },
  {
    "id": "3415",
    "material_id": "129",
    "material_photo_name": "Giallo-Renoir_ydU2PfDUWeLlWbvi2c2k.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:11:51",
    "thumb": "1"
  },
  {
    "id": "3406",
    "material_id": "630",
    "material_photo_name": "granite_Giallo-Ornamental_fRShAWkHmDL34aaA8IaI.jpg",
    "original_name": "GIALLO_ORNAMENTAL_336L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:01:00",
    "thumb": "0"
  },
  {
    "id": "4060",
    "material_id": "659",
    "material_photo_name": "granite_Stormy-NIght_kHIuNYm0iXNRyDIveNGy.jpg",
    "original_name": "STORMY_NIGHT_344R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:18:24",
    "thumb": "0"
  },
  {
    "id": "3680",
    "material_id": "701",
    "material_photo_name": "granite_Madura-Gold_GM16edBnwnVkrsf6E3qs.jpg",
    "original_name": "MADURA_GOLD_628L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:00:41",
    "thumb": "0"
  },
  {
    "id": "4527",
    "material_id": "710",
    "material_photo_name": "granite_Green-Saragossa_t4JsBCQPbyepk4ws3nHg.jpg",
    "original_name": "GREEN_SARAGOSSA_625R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:21:07",
    "thumb": "0"
  },
  {
    "id": "3365",
    "material_id": "703",
    "material_photo_name": "granite_Galaxy-White_zjcSTKDuJ4lHH4ozoxZv.jpg",
    "original_name": "GALAXY_WHITE_523L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:36:18",
    "thumb": "0"
  },
  {
    "id": "4525",
    "material_id": "705",
    "material_photo_name": "soapstone_Fumaca_Rv16890F62wWBYcmhFQh.jpg",
    "original_name": "SOAPSTONE_FUMACA_629R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:18:48",
    "thumb": "0"
  },
  {
    "id": "4036",
    "material_id": "707",
    "material_photo_name": "granite_Snowflakes-Bianco_jZqZhM4FHFyDmgtg0TiG.jpg",
    "original_name": "SNOWFLAKES_BIANCO_636R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:21:30",
    "thumb": "0"
  },
  {
    "id": "4526",
    "material_id": "708",
    "material_photo_name": "granite_Amidala-Gold_FS8hq8t37n87myppY9bo.jpg",
    "original_name": "AMIDALA_GOLD_525L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:20:00",
    "thumb": "0"
  },
  {
    "id": "4066",
    "material_id": "711",
    "material_photo_name": "granite_Sun-Flower_tr1XcQSoCzviidpBi02M.jpg",
    "original_name": "SUN_FLOWER_518R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:26:54",
    "thumb": "0"
  },
  {
    "id": "3832",
    "material_id": "712",
    "material_photo_name": "granite_Penta-Gold_3FnQGCrBjHoR6KwHXbst.jpg",
    "original_name": "PENTA_GOLD_520L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:47:01",
    "thumb": "0"
  },
  {
    "id": "2967",
    "material_id": "713",
    "material_photo_name": "Ambrosia-White_uvNhFvG5hWhRcX4Q8iqw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:28:30",
    "thumb": "1"
  },
  {
    "id": "4528",
    "material_id": "714",
    "material_photo_name": "granite_Colonial-Cream_VweYVwlLLTEcUrRUst0b.jpg",
    "original_name": "COLONIAL_CREAM_507L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:22:16",
    "thumb": "0"
  },
  {
    "id": "4221",
    "material_id": "715",
    "material_photo_name": "granite_White-Spring_0eJpQHJ5krYrvcriypzq.jpg",
    "original_name": "WHITE_SPRING_611L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:44:03",
    "thumb": "0"
  },
  {
    "id": "2604",
    "material_id": "832",
    "material_photo_name": "x1PukV3odhKtZ0dnCb4o.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:04:51",
    "thumb": "1"
  },
  {
    "id": "2555",
    "material_id": "865",
    "material_photo_name": "quartz_4030-Pebble-Caesarstone_ieauvFBezZmtNf6KBVTu.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:31:16",
    "thumb": "0"
  },
  {
    "id": "2600",
    "material_id": "866",
    "material_photo_name": "wvynP7QDAaLPyC1a2SSn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-06-19 06:59:49",
    "thumb": "1"
  },
  {
    "id": "2487",
    "material_id": "877",
    "material_photo_name": "quartz_8141-Puro-Caesarstone_mFkc4uvug25XAOYSq9rc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:48:26",
    "thumb": "0"
  },
  {
    "id": "2545",
    "material_id": "863",
    "material_photo_name": "quartz_3100-Jet-Black-Caesarstone_RIHLyBsp93CPObhxOrjD.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:07:44",
    "thumb": "0"
  },
  {
    "id": "2482",
    "material_id": "869",
    "material_photo_name": "C19hACKrsSaxL14cHx3P.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:46:13",
    "thumb": "1"
  },
  {
    "id": "2324",
    "material_id": "876",
    "material_photo_name": "quartz_2141C-Crocodile-Caesarstone_avbQf6iugzFv3jwE6AMt.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:23:56",
    "thumb": "0"
  },
  {
    "id": "2498",
    "material_id": "876",
    "material_photo_name": "pQvB8ofqvydABRoXRffs.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:54:40",
    "thumb": "1"
  },
  {
    "id": "2322",
    "material_id": "875",
    "material_photo_name": "quartz_2141L-Lace-Caesarstone_MDtd3uJDS96nYgrHKEM8.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:21:21",
    "thumb": "0"
  },
  {
    "id": "2499",
    "material_id": "875",
    "material_photo_name": "10HkE8X3LkFUYjUypxyT.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:55:12",
    "thumb": "1"
  },
  {
    "id": "2320",
    "material_id": "874",
    "material_photo_name": "quartz_3100C-Crocodile-Ceasarstone_T4MW3GNlfr1u5ITxrEkF.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:19:28",
    "thumb": "0"
  },
  {
    "id": "2486",
    "material_id": "874",
    "material_photo_name": "SawFIA5f8BO6tsryWjJQ.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:47:50",
    "thumb": "1"
  },
  {
    "id": "2560",
    "material_id": "873",
    "material_photo_name": "quartz_3452-Red-Shimmer-Caesarstone_rv1h9zG16UCBn1ewgEz9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-06-19 01:47:07",
    "thumb": "0"
  },
  {
    "id": "2485",
    "material_id": "873",
    "material_photo_name": "egzPfJxAqQwInMzGCFaL.JPG",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:47:28",
    "thumb": "1"
  },
  {
    "id": "2548",
    "material_id": "872",
    "material_photo_name": "quartz_5000-London-Grey-Caesarstone_THq5FQeVNUploCnb3MEp.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:14:34",
    "thumb": "0"
  },
  {
    "id": "2587",
    "material_id": "872",
    "material_photo_name": "CjKhlKtdrDAoWjDBDC62.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:41:35",
    "thumb": "1"
  },
  {
    "id": "2528",
    "material_id": "871",
    "material_photo_name": "quartz_6270-Atlantic-Salt-Caesarstone_iralYAVi2eWebqvW81w2.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:03:56",
    "thumb": "0"
  },
  {
    "id": "2569",
    "material_id": "871",
    "material_photo_name": "xWhJNQONH47rE3Tx3cMP.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:22:22",
    "thumb": "1"
  },
  {
    "id": "3449",
    "material_id": "919",
    "material_photo_name": "granite_Golden-Beach-EX_LymxuxY41iaKQ5340oNS.jpg",
    "original_name": "GOLDEN_BEACH_EX_738R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:17:49",
    "thumb": "0"
  },
  {
    "id": "2549",
    "material_id": "868",
    "material_photo_name": "quartz_4141-Misty-Carrera-Caesarstone_CpDgFoZlpmFE99qfWHaE.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:16:28",
    "thumb": "0"
  },
  {
    "id": "2589",
    "material_id": "868",
    "material_photo_name": "q0WV6DMIXrkKk9Mhjnc0.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:43:55",
    "thumb": "1"
  },
  {
    "id": "2556",
    "material_id": "867",
    "material_photo_name": "quartz_5003-Piatra-Grey-Caesarstone_G1omzqWJ8bL3c2gbeblG.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:33:00",
    "thumb": "0"
  },
  {
    "id": "2597",
    "material_id": "867",
    "material_photo_name": "aAVuHFSkeaEnYOCXTz0Z.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:55:05",
    "thumb": "1"
  },
  {
    "id": "2565",
    "material_id": "860",
    "material_photo_name": "quartz_4360-Wild-Rice-Caesarstone_IgKLEHsCbmcBMOYDJov6.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:56:26",
    "thumb": "0"
  },
  {
    "id": "2550",
    "material_id": "859",
    "material_photo_name": "quartz_2370-Mocha-Caesarstone_7mGg82goKH3rDyiggrF8.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:18:05",
    "thumb": "0"
  },
  {
    "id": "2606",
    "material_id": "860",
    "material_photo_name": "5Tsr0vp7I9pjhPK1imng.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:07:45",
    "thumb": "1"
  },
  {
    "id": "2596",
    "material_id": "865",
    "material_photo_name": "rAARaCalpfWTWj5D32rI.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:53:31",
    "thumb": "1"
  },
  {
    "id": "2538",
    "material_id": "855",
    "material_photo_name": "quartz_5220-Dreamy-Marfil-Caesarstone_TzZbP0KVuYdEDBVnBq9u.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:42:05",
    "thumb": "0"
  },
  {
    "id": "2477",
    "material_id": "864",
    "material_photo_name": "Kii51VEHN4KXvDDHI6kK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:44:11",
    "thumb": "1"
  },
  {
    "id": "2580",
    "material_id": "862",
    "material_photo_name": "OxzznocAsvcSTNbUgCFI.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-06-19 06:35:44",
    "thumb": "1"
  },
  {
    "id": "2581",
    "material_id": "862",
    "material_photo_name": "quartz_4330-Ginger-Caesarstone_TkgVGklNXtMyKX2xPEYq.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 06:35:51",
    "thumb": "0"
  },
  {
    "id": "2474",
    "material_id": "861",
    "material_photo_name": "CixT3zSUWaj8SReby4u4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:42:56",
    "thumb": "1"
  },
  {
    "id": "3558",
    "material_id": "920",
    "material_photo_name": "granite_Ivory-Brown_7Ce20BxjSJYexezBz0k3.jpg",
    "original_name": "IVORY_BROWN_735L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:52:03",
    "thumb": "0"
  },
  {
    "id": "2577",
    "material_id": "831",
    "material_photo_name": "EMVRucgGFAsQzSmjyxcg.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:30:49",
    "thumb": "1"
  },
  {
    "id": "2541",
    "material_id": "857",
    "material_photo_name": "quartz_3380-Espresso-Caesarstone_z1AZgUYVLY5y4A0ivTna.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:55:50",
    "thumb": "0"
  },
  {
    "id": "2591",
    "material_id": "859",
    "material_photo_name": "sZRu4jweQvu9GTFdaEam.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:47:05",
    "thumb": "1"
  },
  {
    "id": "2546",
    "material_id": "858",
    "material_photo_name": "quartz_4350-Lagos-Blue-Caesarstone_5fKZhXOEaxV9TIwHWP7N.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:10:34",
    "thumb": "0"
  },
  {
    "id": "2586",
    "material_id": "858",
    "material_photo_name": "9vF4eSM3BKyZbutyU2tI.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:40:25",
    "thumb": "1"
  },
  {
    "id": "2542",
    "material_id": "847",
    "material_photo_name": "quartz_5141-Frosty-Carrina-Casarstone_ewK4GszPtAEtJ5hGwLG0.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:58:43",
    "thumb": "0"
  },
  {
    "id": "2582",
    "material_id": "857",
    "material_photo_name": "8fzw3yCER3c0ggAmvoe2.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:37:16",
    "thumb": "1"
  },
  {
    "id": "2575",
    "material_id": "840",
    "material_photo_name": "quartz_4130-Clamshell-Caesarstone_jtmmCznZ5kaSaosJsssv.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 06:27:06",
    "thumb": "0"
  },
  {
    "id": "2574",
    "material_id": "856",
    "material_photo_name": "vtqan7j4GA9PV5W5KvYO.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:26:25",
    "thumb": "1"
  },
  {
    "id": "2540",
    "material_id": "861",
    "material_photo_name": "quartz_5380-Emperadoro-Caesarstone_2tXIByYaQpGVRddqNOZd.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:53:08",
    "thumb": "0"
  },
  {
    "id": "2578",
    "material_id": "855",
    "material_photo_name": "b5tR8yhj8eSl1Jc7fYwA.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:31:40",
    "thumb": "1"
  },
  {
    "id": "2547",
    "material_id": "854",
    "material_photo_name": "quartz_2230-Linen-Caesarstone_H1tosUbx8ftcx8Mk7P38.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:12:09",
    "thumb": "0"
  },
  {
    "id": "2588",
    "material_id": "854",
    "material_photo_name": "zWPCfOLQCyOD7IGAQEmN.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:42:45",
    "thumb": "1"
  },
  {
    "id": "2562",
    "material_id": "853",
    "material_photo_name": "quartz_4230-Shitake-Ceasarstone_c5FWBnuUBs8KYvj78y8I.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:49:15",
    "thumb": "0"
  },
  {
    "id": "2603",
    "material_id": "853",
    "material_photo_name": "Vi6gBcVe4we5XlnupOFr.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:04:01",
    "thumb": "1"
  },
  {
    "id": "2533",
    "material_id": "856",
    "material_photo_name": "quartz_6350-Chocolate-Truffle-Caesarstone_aGYeCrUHzrkqxF6cebVj.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:24:26",
    "thumb": "0"
  },
  {
    "id": "2572",
    "material_id": "852",
    "material_photo_name": "8RfeUVUMZA3KGFzm58O6.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:24:52",
    "thumb": "1"
  },
  {
    "id": "2552",
    "material_id": "851",
    "material_photo_name": "quartz_6141-Ocean-Foam-Caesarstone_4HZLSgx0oT6qqP3g7mYO.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:21:35",
    "thumb": "0"
  },
  {
    "id": "2593",
    "material_id": "851",
    "material_photo_name": "RlcAQWMJRLRcJnSNZ1rl.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:49:44",
    "thumb": "1"
  },
  {
    "id": "2558",
    "material_id": "850",
    "material_photo_name": "quartz_7141-Quartz-Reflections-Caesarstone_e7p3WZClMgUR6ea5YmfU.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:38:25",
    "thumb": "0"
  },
  {
    "id": "2599",
    "material_id": "850",
    "material_photo_name": "pqUxZgUwIiZaaUovrOHc.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:58:18",
    "thumb": "1"
  },
  {
    "id": "2554",
    "material_id": "849",
    "material_photo_name": "quartz_9601-Oyster-Caesarstone_FERXFm6miQOxjgBslu0J.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:28:50",
    "thumb": "0"
  },
  {
    "id": "2595",
    "material_id": "849",
    "material_photo_name": "Uc8Fo21KvNw6mDXZQpki.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:52:13",
    "thumb": "1"
  },
  {
    "id": "2530",
    "material_id": "843",
    "material_photo_name": "quartz_2141-Blizzard-Caesarstone_mZpbo3tBjmwr1lqam4D6.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:13:01",
    "thumb": "0"
  },
  {
    "id": "2570",
    "material_id": "836",
    "material_photo_name": "nPtWXn2MmpwNY0kfuZJA.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:23:09",
    "thumb": "1"
  },
  {
    "id": "2583",
    "material_id": "847",
    "material_photo_name": "LQdOLcgHY7jGwHgl0Nod.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:38:07",
    "thumb": "1"
  },
  {
    "id": "4547",
    "material_id": "956",
    "material_photo_name": "granite_Macadamia_EbGOmC9zhqZK8Ruw9JnT.jpg",
    "original_name": "MACADAMIA_1010L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:46:53",
    "thumb": "0"
  },
  {
    "id": "2601",
    "material_id": "866",
    "material_photo_name": "quartz_4120-Raven-Caesarstone_RHmMFYcvGhVUe1zLyPx2.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 07:00:52",
    "thumb": "0"
  },
  {
    "id": "2553",
    "material_id": "845",
    "material_photo_name": "quartz_4600-Organic-White-Casarstone_XPjboVXnl5VX5wipNI5K.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:22:59",
    "thumb": "0"
  },
  {
    "id": "2594",
    "material_id": "845",
    "material_photo_name": "gDfVDm98OxEMOOevHqge.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:50:36",
    "thumb": "1"
  },
  {
    "id": "2539",
    "material_id": "844",
    "material_photo_name": "quartz_3141-Eggshell-Caesarstone_iwc3adfFByK7vSbY3GVg.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:49:38",
    "thumb": "0"
  },
  {
    "id": "2579",
    "material_id": "844",
    "material_photo_name": "fl4kvlsdtfLGSyGk0Uff.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:32:56",
    "thumb": "1"
  },
  {
    "id": "2531",
    "material_id": "852",
    "material_photo_name": "quartz_4220-Buttermilk-Caesarstone_HX3DQ3o9ABsqVoMHVsPj.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:15:15",
    "thumb": "0"
  },
  {
    "id": "2571",
    "material_id": "843",
    "material_photo_name": "82eHzUcGwCKmwtRUiUIP.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:23:59",
    "thumb": "1"
  },
  {
    "id": "2564",
    "material_id": "842",
    "material_photo_name": "quartz_5100-Vanilla-Noir-Caesarstone_mdy18SV8w4rDSKArdner.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:55:00",
    "thumb": "0"
  },
  {
    "id": "2605",
    "material_id": "842",
    "material_photo_name": "SuktgXz8f9kCK6vRDySR.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:06:57",
    "thumb": "1"
  },
  {
    "id": "2567",
    "material_id": "831",
    "material_photo_name": "quartz_4001-Fresh-Concrete-Caesarstone_Ew7z3EHnZ7d217fgQq9V.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 05:34:57",
    "thumb": "0"
  },
  {
    "id": "2576",
    "material_id": "841",
    "material_photo_name": "kvLfcZd1hichWPMaH3HI.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:29:47",
    "thumb": "1"
  },
  {
    "id": "2535",
    "material_id": "841",
    "material_photo_name": "quartz_6003-Coastal-Grey-Caesarstone_aJ9kZqBewLzQlzFXP9Fz.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:34:12",
    "thumb": "0"
  },
  {
    "id": "2453",
    "material_id": "840",
    "material_photo_name": "Xp5SSj7KapUXGeULWpVk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:32:27",
    "thumb": "1"
  },
  {
    "id": "2529",
    "material_id": "836",
    "material_photo_name": "quartz_6131-Bianco-Drift-Caesarstone_wGBq7QVcLsr31XOdQMLf.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:09:19",
    "thumb": "0"
  },
  {
    "id": "2452",
    "material_id": "839",
    "material_photo_name": "TnBtbvfhnOPrt6rGYZX0.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:31:58",
    "thumb": "1"
  },
  {
    "id": "2566",
    "material_id": "837",
    "material_photo_name": "quartz_6338-Woodlands-Caesarstone_PpuKYGo15PCHQmjjGfkj.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:58:10",
    "thumb": "0"
  },
  {
    "id": "2607",
    "material_id": "837",
    "material_photo_name": "AQKTm6hd6glen53N1d46.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:10:57",
    "thumb": "1"
  },
  {
    "id": "2551",
    "material_id": "848",
    "material_photo_name": "quartz_6600-Nougat-Caesarstone_QURPTjU9YuXL7HkvlfJI.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:19:22",
    "thumb": "0"
  },
  {
    "id": "2592",
    "material_id": "848",
    "material_photo_name": "dZyPHb4xWVVZpy1o7a6f.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:48:47",
    "thumb": "1"
  },
  {
    "id": "2561",
    "material_id": "873",
    "material_photo_name": "quartz_3452-Red-Shimmer-Caesarstone_xJxnmL77OH46YYKxPgBR.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:47:37",
    "thumb": "0"
  },
  {
    "id": "2532",
    "material_id": "834",
    "material_photo_name": "quartz_5131-Calacatta-Nuvo-Caesarstone_isFyrUQFukMBN5R74FJ2.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:22:25",
    "thumb": "0"
  },
  {
    "id": "2563",
    "material_id": "832",
    "material_photo_name": "quartz_4003-Sleek-Concrete-Caesarstone_SiIIDmCsJ6e62JxbPYlE.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:53:03",
    "thumb": "0"
  },
  {
    "id": "2602",
    "material_id": "833",
    "material_photo_name": "LsxFYlfFnBjM0JSmy5FE.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 07:02:07",
    "thumb": "1"
  },
  {
    "id": "2559",
    "material_id": "833",
    "material_photo_name": "quartz_4004-Raw-Concrete-Caesarstone_QmW3aQ2ht6KJKMhluzwE.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:40:08",
    "thumb": "0"
  },
  {
    "id": "2573",
    "material_id": "834",
    "material_photo_name": "ni2RYf2RNaJSpOoUBWn8.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:25:31",
    "thumb": "1"
  },
  {
    "id": "2416",
    "material_id": "795",
    "material_photo_name": "zfFYTql8YHZltdZC0oN5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:24:27",
    "thumb": "1"
  },
  {
    "id": "4326",
    "material_id": "795",
    "material_photo_name": "quartz_Dew-Drops-525-Quantra_8Wrp2imgxP4o7wnN3GTt.jpg",
    "original_name": "dew drops.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 04:02:23",
    "thumb": "0"
  },
  {
    "id": "2417",
    "material_id": "796",
    "material_photo_name": "zL9sTbCPt8EdOYRMqYZT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:24:59",
    "thumb": "1"
  },
  {
    "id": "4325",
    "material_id": "796",
    "material_photo_name": "quartz_Ecru-542-Quantra_qjHgTczDLaqLFCsk4HTB.jpg",
    "original_name": "Ecru.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 03:59:45",
    "thumb": "0"
  },
  {
    "id": "2544",
    "material_id": "869",
    "material_photo_name": "quartz_2030-Haze-Caesarstone_1f02OxOHCa68hRvz34P9.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-19 01:04:43",
    "thumb": "0"
  },
  {
    "id": "4538",
    "material_id": "922",
    "material_photo_name": "granite_Bordeaux_wjkaZAbEYBXUjO0CG9fS.jpg",
    "original_name": "BORDEAUX_801R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:34:47",
    "thumb": "0"
  },
  {
    "id": "2426",
    "material_id": "806",
    "material_photo_name": "WuqOnswfdE21zQssYG34.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:43:17",
    "thumb": "1"
  },
  {
    "id": "4328",
    "material_id": "806",
    "material_photo_name": "quartz_Veracruz-1340-Quantra_oT0cteHfUC20ehwiSMWx.jpg",
    "original_name": "Veracruz.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 04:10:14",
    "thumb": "0"
  },
  {
    "id": "2431",
    "material_id": "810",
    "material_photo_name": "FOs2dplI4PcpEQZb4XIQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:19:44",
    "thumb": "1"
  },
  {
    "id": "4327",
    "material_id": "810",
    "material_photo_name": "quartz_Copper-Mountain-287-Quanta_3FxiHvoE5zLsdQlEvxGx.jpg",
    "original_name": "Copper Mountain.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 04:03:51",
    "thumb": "0"
  },
  {
    "id": "2435",
    "material_id": "815",
    "material_photo_name": "qiGL49yrwkjbdPHimENV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:21:31",
    "thumb": "1"
  },
  {
    "id": "4324",
    "material_id": "815",
    "material_photo_name": "quartz_Lunar-Night-1525-Quanta_9RQvlKUn08QR6ueO3e08.jpg",
    "original_name": "Lunar Night.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 03:57:13",
    "thumb": "0"
  },
  {
    "id": "2438",
    "material_id": "819",
    "material_photo_name": "IC3fePII7FRmbVarigl7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:22:57",
    "thumb": "1"
  },
  {
    "id": "4322",
    "material_id": "819",
    "material_photo_name": "quartz_River-Bed-680-Quanta_nNTS4jzql2mdHMwqsKmZ.jpg",
    "original_name": "River-Bed.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 03:31:52",
    "thumb": "0"
  },
  {
    "id": "3591",
    "material_id": "921",
    "material_photo_name": "granite_Juparana-Champagne_dpHPyGP49HWx9LcOra7V.jpg",
    "original_name": "JUPARANA_CHAMPAGNE_733L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:53:36",
    "thumb": "0"
  },
  {
    "id": "2445",
    "material_id": "829",
    "material_photo_name": "eFQUQ7bZaH0jacb8KEvV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 06:26:42",
    "thumb": "1"
  },
  {
    "id": "4323",
    "material_id": "829",
    "material_photo_name": "quartz_Moon-Dust-1219-Quanta_a6Og7udatWX12FeuEtbE.jpg",
    "original_name": "moon dust.jpg",
    "visible": "1",
    "uploaded_at": "2016-01-15 03:55:34",
    "thumb": "0"
  },
  {
    "id": "4529",
    "material_id": "716",
    "material_photo_name": "granite_Platinum-Pearl_j0kAiXfrCh9aJCrJBACU.jpg",
    "original_name": "PLATINUM_PEARL_613L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:23:24",
    "thumb": "0"
  },
  {
    "id": "3938",
    "material_id": "717",
    "material_photo_name": "granite_Ruby-Blue_5Fzuqmq33a5UdaT4UNwV.jpg",
    "original_name": "RUBY_BLUE_715R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:01:30",
    "thumb": "0"
  },
  {
    "id": "3069",
    "material_id": "718",
    "material_photo_name": "granite_Bianco-Romano_PjSeXv3DgklIrCTKyUDQ.jpg",
    "original_name": "BIANCO_ROMANO_710R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:51:32",
    "thumb": "0"
  },
  {
    "id": "4530",
    "material_id": "720",
    "material_photo_name": "granite_Crema-Bordeaux_0if1CpqQTyZuMtBOZeRe.jpg",
    "original_name": "CREMA_BORDEAUX_712L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:24:33",
    "thumb": "0"
  },
  {
    "id": "4531",
    "material_id": "721",
    "material_photo_name": "granite_Blue-Pearl-GT_chUK15U6L3j3lwYYsAMf.jpg",
    "original_name": "BLUE_PEARL_GT_716R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:25:46",
    "thumb": "0"
  },
  {
    "id": "4532",
    "material_id": "722",
    "material_photo_name": "granite_Juliet_tpPNNq61ifHcxvFz3KVr.jpg",
    "original_name": "JULIET_517L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:26:58",
    "thumb": "0"
  },
  {
    "id": "4239",
    "material_id": "723",
    "material_photo_name": "granite_Baltic-Green_d2lKN5bgbWtyxEw3cTGo.jpg",
    "original_name": "BALTIC_GREEN_514L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 08:12:14",
    "thumb": "0"
  },
  {
    "id": "4008",
    "material_id": "724",
    "material_photo_name": "granite_Silver-Paradiso_lFtDxkmRklgCJ3LWuboz.jpg",
    "original_name": "SILVER_PARADISO_711L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:43:44",
    "thumb": "0"
  },
  {
    "id": "4533",
    "material_id": "725",
    "material_photo_name": "granite_Costa-Dakota_QABxK3i3fjwSM9drIqdU.jpg",
    "original_name": "COSTA_DAKOTA_516R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:28:06",
    "thumb": "0"
  },
  {
    "id": "4534",
    "material_id": "726",
    "material_photo_name": "granite_Black-Pearl_q65dQXuaR3nurLQojXzz.jpg",
    "original_name": "BLACK_PEARL_521R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:29:09",
    "thumb": "0"
  },
  {
    "id": "3840",
    "material_id": "727",
    "material_photo_name": "granite_Peregrine-C_nnvIv7HCjgAaE2fh1pfe.jpg",
    "original_name": "PEREGRINE_C_623R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:07:39",
    "thumb": "0"
  },
  {
    "id": "3290",
    "material_id": "728",
    "material_photo_name": "granite_Crema-Espresso_ewtpz30kqCXqYJUbvVIB.jpg",
    "original_name": "CREMA_ESPRESSO_621R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:41:35",
    "thumb": "0"
  },
  {
    "id": "3280",
    "material_id": "729",
    "material_photo_name": "granite_Costa-Esmeralda_2Jmsf07blhyqgXHZD0TB.jpg",
    "original_name": "COSTA_ESMERALDA_EXTRA_716R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:15:16",
    "thumb": "0"
  },
  {
    "id": "4535",
    "material_id": "730",
    "material_photo_name": "granite_Copper-Canyon_r3SzQJx0yNh0wZetYbfO.jpg",
    "original_name": "COPPER_CANYON_718L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:30:24",
    "thumb": "0"
  },
  {
    "id": "3722",
    "material_id": "732",
    "material_photo_name": "marble_Mont-Blanc_81B0pt7B6hOIguZgi88m.jpg",
    "original_name": "MONT_BLANC_719L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:41:32",
    "thumb": "0"
  },
  {
    "id": "3976",
    "material_id": "733",
    "material_photo_name": "granite_Sapphire-Blue_XRxFLpoBBYEBoGzcCuKX.jpg",
    "original_name": "SAPPHIRE_BLUE_723R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:57:52",
    "thumb": "0"
  },
  {
    "id": "3920",
    "material_id": "734",
    "material_photo_name": "granite_River-White_pQOxMzfgPEe0T3cztO5C.jpg",
    "original_name": "RIVER_WHITE_728L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 07:00:14",
    "thumb": "0"
  },
  {
    "id": "2495",
    "material_id": "885",
    "material_photo_name": "7ceNba4Z1w4cT2RDiv8m.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:52:07",
    "thumb": "1"
  },
  {
    "id": "2344",
    "material_id": "885",
    "material_photo_name": "quartz_8331-Legno-Caesarstone_SVBPVZeSlEtlVhaTgfhV.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:40:14",
    "thumb": "0"
  },
  {
    "id": "2496",
    "material_id": "886",
    "material_photo_name": "AQGKiqoeVXwA5FyRJe1X.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-05-27 06:52:29",
    "thumb": "1"
  },
  {
    "id": "2346",
    "material_id": "886",
    "material_photo_name": "quartz_8540-Indigo-Caesarstone_VoXXGoPltHKkh1YFMir5.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:40:55",
    "thumb": "0"
  },
  {
    "id": "2347",
    "material_id": "887",
    "material_photo_name": "2QJ2aQyCtg7H1XWFUViM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 03:55:11",
    "thumb": "1"
  },
  {
    "id": "2348",
    "material_id": "887",
    "material_photo_name": "gemstone_African-Petrified-Wood_cg9RgIbGruRv5TVi6zMa.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:55:18",
    "thumb": "0"
  },
  {
    "id": "2349",
    "material_id": "888",
    "material_photo_name": "SLwLJgI16YZakhY1D4eK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 03:57:12",
    "thumb": "1"
  },
  {
    "id": "2350",
    "material_id": "888",
    "material_photo_name": "gemstone_Amethyst_xC4Y3GOnSXtfoCYGoKvp.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 03:57:17",
    "thumb": "0"
  },
  {
    "id": "2357",
    "material_id": "889",
    "material_photo_name": "Ds8jkYWrhep8KzIgkE4z.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:03:16",
    "thumb": "1"
  },
  {
    "id": "2358",
    "material_id": "889",
    "material_photo_name": "gemstone_Blue-Agate-is-a-Green,-White,-and-Gold-Counte_5ih82LICWBFZQl5VRUQ0.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:03:22",
    "thumb": "0"
  },
  {
    "id": "2353",
    "material_id": "890",
    "material_photo_name": "1FL25Cr45ysYDkh9thXR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 03:59:54",
    "thumb": "1"
  },
  {
    "id": "2354",
    "material_id": "890",
    "material_photo_name": "gemstone_Carnelian_8AL9REEj2GGFgKzlIN82.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:00:01",
    "thumb": "0"
  },
  {
    "id": "2355",
    "material_id": "891",
    "material_photo_name": "4qHrIkpTKk1FsCL8SWZM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:01:34",
    "thumb": "1"
  },
  {
    "id": "2356",
    "material_id": "891",
    "material_photo_name": "gemstone_Carnelian_eBkYXF95gVh7OXc7b4JT.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:01:41",
    "thumb": "0"
  },
  {
    "id": "2359",
    "material_id": "892",
    "material_photo_name": "tFBfMoyCTihcOzJScjWp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:06:54",
    "thumb": "1"
  },
  {
    "id": "2360",
    "material_id": "892",
    "material_photo_name": "gemstone_Classic-Quartz_9A3Pg8nO9B8I4XpGTuiZ.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:07:01",
    "thumb": "0"
  },
  {
    "id": "2361",
    "material_id": "893",
    "material_photo_name": "zftOFRNz4PoUBwV6OlKp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:13:30",
    "thumb": "1"
  },
  {
    "id": "2362",
    "material_id": "893",
    "material_photo_name": "gemstone_Desert-Petrified-Wood_r8j2b6j1VW1Il3NHWuEG.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:13:37",
    "thumb": "0"
  },
  {
    "id": "2363",
    "material_id": "894",
    "material_photo_name": "GXrsPQIwXiSjV3N05NLx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:15:32",
    "thumb": "1"
  },
  {
    "id": "2367",
    "material_id": "896",
    "material_photo_name": "HThETxUbBbZa9vRHo91F.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:18:15",
    "thumb": "1"
  },
  {
    "id": "2366",
    "material_id": "894",
    "material_photo_name": "gemstone_Golden-Carmel_vwmNRBTINAuy9opaxLl5.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:16:46",
    "thumb": "0"
  },
  {
    "id": "2368",
    "material_id": "896",
    "material_photo_name": "gemstone_Grafic-Jasper_YWH8pBmMox9Hyil0wuid.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:18:21",
    "thumb": "0"
  },
  {
    "id": "2371",
    "material_id": "898",
    "material_photo_name": "vqscBKPPwNJP1eOPCB3s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:20:35",
    "thumb": "1"
  },
  {
    "id": "2372",
    "material_id": "898",
    "material_photo_name": "gemstone_Jamaica-Jasper_mWZmNNcibrwc3NVAOXJl.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:20:41",
    "thumb": "0"
  },
  {
    "id": "2373",
    "material_id": "899",
    "material_photo_name": "zyP9rWOGbKz82cPVknBK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:23:41",
    "thumb": "1"
  },
  {
    "id": "2374",
    "material_id": "899",
    "material_photo_name": "gemstone_Jungle-Jasper_KTydfFRISacm0R4tBFde.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:23:48",
    "thumb": "0"
  },
  {
    "id": "2375",
    "material_id": "900",
    "material_photo_name": "VIwTDAQU8gApWI7D7Rtr.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:25:37",
    "thumb": "1"
  },
  {
    "id": "2376",
    "material_id": "900",
    "material_photo_name": "gemstone_Natural-Agate_XqtLaYU4Q7ik77I4IRBK.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:25:44",
    "thumb": "0"
  },
  {
    "id": "2377",
    "material_id": "901",
    "material_photo_name": "VSiDHPOYVX2Q7Ww5cTpZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:27:10",
    "thumb": "1"
  },
  {
    "id": "2378",
    "material_id": "901",
    "material_photo_name": "gemstone_Red-Agate_PDGCLWAXOwlY7NiyyWIk.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:27:18",
    "thumb": "0"
  },
  {
    "id": "2379",
    "material_id": "902",
    "material_photo_name": "RR4PTWuTUmpDUWXVlCxY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:28:23",
    "thumb": "1"
  },
  {
    "id": "2380",
    "material_id": "902",
    "material_photo_name": "gemstone_Red-Petrified-Wood_yFVIqLq7V8g5eCtVJDqS.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:28:31",
    "thumb": "0"
  },
  {
    "id": "2381",
    "material_id": "903",
    "material_photo_name": "cwiX65OP9WaIwY6XcchE.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:29:24",
    "thumb": "1"
  },
  {
    "id": "2382",
    "material_id": "903",
    "material_photo_name": "gemstone_Rose-Quartz_FrdiGGOjBwrMHkOkMBbl.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:29:32",
    "thumb": "0"
  },
  {
    "id": "2386",
    "material_id": "905",
    "material_photo_name": "gemstone_Sodalite_gO51sJaKIKG1pGcKGj9q.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:32:09",
    "thumb": "0"
  },
  {
    "id": "2385",
    "material_id": "905",
    "material_photo_name": "YezAFklk2YhYCLiv5ul4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:32:03",
    "thumb": "1"
  },
  {
    "id": "2387",
    "material_id": "906",
    "material_photo_name": "ELBUhB50crJkMNpvPMSU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:33:04",
    "thumb": "1"
  },
  {
    "id": "2388",
    "material_id": "906",
    "material_photo_name": "gemstone_Tiger-Eye-Gold_WDiJomjVNG1CiziYQ2ke.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:33:12",
    "thumb": "0"
  },
  {
    "id": "2389",
    "material_id": "907",
    "material_photo_name": "7HgmMPsyanMYUvNIhVpb.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:34:05",
    "thumb": "1"
  },
  {
    "id": "2390",
    "material_id": "907",
    "material_photo_name": "gemstone_Tiger-Iron_p9EtNuoDCS9QS19rEQQ7.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:34:12",
    "thumb": "0"
  },
  {
    "id": "2391",
    "material_id": "908",
    "material_photo_name": "iyl8jbxoE2p75v2JQUkA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 04:35:06",
    "thumb": "1"
  },
  {
    "id": "2392",
    "material_id": "908",
    "material_photo_name": "gemstone_White-Quartz_2H0e4WvdGQ3fVFyu7sGA.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 04:35:13",
    "thumb": "0"
  },
  {
    "id": "2393",
    "material_id": "909",
    "material_photo_name": "67nri0778h1E3PTD2gb4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:06:04",
    "thumb": "1"
  },
  {
    "id": "2394",
    "material_id": "909",
    "material_photo_name": "slate_Black-Slate-Cleft_xDADS96hKrUxsu0BmoKV.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 05:06:13",
    "thumb": "0"
  },
  {
    "id": "2395",
    "material_id": "910",
    "material_photo_name": "vx6PE14irOAW6qHVC0Xi.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:07:08",
    "thumb": "1"
  },
  {
    "id": "2396",
    "material_id": "910",
    "material_photo_name": "slate_Italian-Slate-Cleft_IVcDZokaNhStT2BMN7Ls.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 05:07:16",
    "thumb": "0"
  },
  {
    "id": "2397",
    "material_id": "911",
    "material_photo_name": "hvzCV3HNQqEdDOdqyw5z.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-05-27 05:08:30",
    "thumb": "1"
  },
  {
    "id": "2398",
    "material_id": "911",
    "material_photo_name": "slate_Italian-Slate-Sandblasted_iVud26E19gtUnrB1OEJX.png",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-05-27 05:08:38",
    "thumb": "0"
  },
  {
    "id": "4289",
    "material_id": "915",
    "material_photo_name": "Pietra-Cardoso_CXlYAVyYBc84py2aHZw1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-26 03:43:16",
    "thumb": "1"
  },
  {
    "id": "4288",
    "material_id": "915",
    "material_photo_name": "slate_Pietra-Cardoso_V4bmbOC67qkJQ2CfuKpw.jpg",
    "original_name": "PIETRA_CARDOSO_730L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-26 03:40:36",
    "thumb": "0"
  },
  {
    "id": "3581",
    "material_id": "923",
    "material_photo_name": "granite_Jet-Green_gPAArehkDkNvGJhvNOUA.jpg",
    "original_name": "JET_GREEN_810L_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 08:35:30",
    "thumb": "0"
  },
  {
    "id": "3826",
    "material_id": "925",
    "material_photo_name": "granite_Paradiso_EVrSQuhijBcAbORQzrDq.jpg",
    "original_name": "PARADISO_806R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:39:01",
    "thumb": "0"
  },
  {
    "id": "4539",
    "material_id": "927",
    "material_photo_name": "granite_Kashmir-Gold_a9915B8YBdVJxnx5GFnv.jpg",
    "original_name": "KASHMIR_GOLD_900L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:36:07",
    "thumb": "0"
  },
  {
    "id": "4540",
    "material_id": "928",
    "material_photo_name": "granite_Golden-King_i1JyBCgSwDsSIV0Y8Ss5.jpg",
    "original_name": "GOLDEN_KING_161L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:37:31",
    "thumb": "0"
  },
  {
    "id": "3019",
    "material_id": "929",
    "material_photo_name": "granite_Azteca_1PknKUXnw3wEqa5rXevP.jpg",
    "original_name": "AZTECA_911L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 10:51:35",
    "thumb": "0"
  },
  {
    "id": "4541",
    "material_id": "930",
    "material_photo_name": "granite_Carmel-Gold_EPWGXeqlEGguI4OKSPh0.jpg",
    "original_name": "CARMEL_GOLD_905L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:38:46",
    "thumb": "0"
  },
  {
    "id": "3463",
    "material_id": "931",
    "material_photo_name": "granite_Golden-Fantasy-Super_R9deFpauIqlM3n3npoij.jpg",
    "original_name": "GOLDEN_FANTASY_SUPER_916L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:06:26",
    "thumb": "0"
  },
  {
    "id": "4202",
    "material_id": "932",
    "material_photo_name": "granite_White-Antique_iM6HhTomakfFD8Hykpit.jpg",
    "original_name": "WHITE_ANTIQUE_824L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:42:57",
    "thumb": "0"
  },
  {
    "id": "3529",
    "material_id": "933",
    "material_photo_name": "granite_Ibere-Crema-Bordeaux_3s0mmApMHpxa0IMd0150.jpg",
    "original_name": "IBERE_CREMA_BORDEAUX_909R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:56:45",
    "thumb": "0"
  },
  {
    "id": "4542",
    "material_id": "934",
    "material_photo_name": "granite_Colombo-Gold_hyon58bLleivyalffN4u.jpg",
    "original_name": "COLOMBO_GOLD_903R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:40:02",
    "thumb": "0"
  },
  {
    "id": "4543",
    "material_id": "935",
    "material_photo_name": "granite_Atlantis_uOXWhpq17nSkq4F76C3B.jpg",
    "original_name": "ATLANTIS_733R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:41:10",
    "thumb": "0"
  },
  {
    "id": "2926",
    "material_id": "946",
    "material_photo_name": "Absolute-Black-Leather_3sLeLxIEnjUk5pYteCe2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 06:38:07",
    "thumb": "1"
  },
  {
    "id": "4544",
    "material_id": "942",
    "material_photo_name": "granite_Giallo-Monte-Carlo_OVXG3Xihz0OUHrHSEeq4.jpg",
    "original_name": "GIALLO_MONTE_CARLO_1012R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:42:37",
    "thumb": "0"
  },
  {
    "id": "3854",
    "material_id": "943",
    "material_photo_name": "granite_Persa-Blue-Leather_oI29YG1Yvix9hctlVF8z.jpg",
    "original_name": "PERSA_BLUE_LEATHER_710L_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:29:42",
    "thumb": "0"
  },
  {
    "id": "4545",
    "material_id": "946",
    "material_photo_name": "granite_Absolute-Black-Leather_pMByg0rEsu3iNhuTATn1.jpg",
    "original_name": "ABSOLUTE_BLACK_LEATHER_031R_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:43:42",
    "thumb": "0"
  },
  {
    "id": "2527",
    "material_id": "839",
    "material_photo_name": "quartz_5110-Alpine-Mist-Caesarstone_SxVAUkoTXl2sFAmH1gMI.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 07:54:02",
    "thumb": "0"
  },
  {
    "id": "2537",
    "material_id": "864",
    "material_photo_name": "quartz_2003-Concrete-Caesarstone_BkUqQcRacUnG9LFLEz9i.jpg",
    "original_name": "",
    "visible": "1",
    "uploaded_at": "2015-06-18 08:39:32",
    "thumb": "0"
  },
  {
    "id": "2584",
    "material_id": "869",
    "material_photo_name": "dzBi5zk7PJ720JHXkiMW.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:39:01",
    "thumb": "1"
  },
  {
    "id": "2585",
    "material_id": "863",
    "material_photo_name": "GEyJBHejS59KjIhJVEPW.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-06-19 06:39:40",
    "thumb": "1"
  },
  {
    "id": "2961",
    "material_id": "953",
    "material_photo_name": "Alphaville_OdGKj6CvOddY2OPV4j7G.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:20:11",
    "thumb": "1"
  },
  {
    "id": "2962",
    "material_id": "953",
    "material_photo_name": "granite_Alphaville_2M95STqsNbw0xWRyYqyo.jpg",
    "original_name": "ALPHAVILLE_510L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:20:33",
    "thumb": "0"
  },
  {
    "id": "3950",
    "material_id": "950",
    "material_photo_name": "granite_San-Gabriel-Black_EH1OzWLGFlXEZdYs3ByF.jpg",
    "original_name": "SAN_GABRIEL_BLACK_1217R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:18:21",
    "thumb": "0"
  },
  {
    "id": "4546",
    "material_id": "954",
    "material_photo_name": "granite_Exotic-Gold_EvomwGSeFYLlqgV9ZTo6.jpg",
    "original_name": "EXOTIC_GOLD_724R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:45:07",
    "thumb": "0"
  },
  {
    "id": "3704",
    "material_id": "955",
    "material_photo_name": "granite_Mascarello_j4RzQI8hUmEEAOwjiYUj.jpg",
    "original_name": "MASCARELLO_725R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:12:30",
    "thumb": "0"
  },
  {
    "id": "4473",
    "material_id": "282",
    "material_photo_name": "granite_Gran-Perla_3sP8J15tOsE1GLFTtTds.jpg",
    "original_name": "GRAN_PERLA_135R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 09:04:28",
    "thumb": "0"
  },
  {
    "id": "3960",
    "material_id": "957",
    "material_photo_name": "granite_Santa-Cecilia_0DmPGdU9P14fjAfnja5M.jpg",
    "original_name": "SANTA_CECILIA_1017L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:35:08",
    "thumb": "0"
  },
  {
    "id": "4032",
    "material_id": "958",
    "material_photo_name": "granite_Snow-White_Q53QYIhU0rIWRSJKtzSg.jpg",
    "original_name": "SNOW_WHITE_1015L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:16:15",
    "thumb": "0"
  },
  {
    "id": "3479",
    "material_id": "959",
    "material_photo_name": "granite_Golden-Noir_5tAmvKaM74HqxXFiNhkk.jpg",
    "original_name": "GOLDEN_NOIR_169L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:26:02",
    "thumb": "0"
  },
  {
    "id": "4142",
    "material_id": "960",
    "material_photo_name": "granite_Ubatuba_KWya9eKDQr4COtAA7oSu.jpg",
    "original_name": "UBATUBA_165R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:17:07",
    "thumb": "0"
  },
  {
    "id": "4308",
    "material_id": "219",
    "material_photo_name": "Snow-White_f9tHg8OfgBZtO1SF1kzB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 12:37:46",
    "thumb": "1"
  },
  {
    "id": "4548",
    "material_id": "962",
    "material_photo_name": "granite_Imperial-Gold_rA40o0JyKXruTYncJSFR.jpg",
    "original_name": "IMPERIAL_GOLD_200R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:48:04",
    "thumb": "0"
  },
  {
    "id": "4549",
    "material_id": "963",
    "material_photo_name": "granite_Astoria_bqGK8T1Z8QJu7uwtmbSM.jpg",
    "original_name": "ASTORIA_1006L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:49:11",
    "thumb": "0"
  },
  {
    "id": "4550",
    "material_id": "964",
    "material_photo_name": "granite_Ibere-Creama-Bordeaux-Light_MSAp4Gtb132884VB2dwV.jpg",
    "original_name": "IBERE_CREMA_BORDEAUX_LIGHT_1014L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:50:33",
    "thumb": "0"
  },
  {
    "id": "3972",
    "material_id": "965",
    "material_photo_name": "granite_Santa-Cecilia-Real_vC9LVyluf8qtczG2peFF.jpg",
    "original_name": "SANTA_CECILIA_REAL_920L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:50:10",
    "thumb": "0"
  },
  {
    "id": "4298",
    "material_id": "111",
    "material_photo_name": "granite_New-Venetian-Gold_OMn3BMwXmFOfX7C9eOSH.jpg",
    "original_name": "NEW_VENETIAN_GOLD_C_735R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-27 12:12:20",
    "thumb": "0"
  },
  {
    "id": "3493",
    "material_id": "967",
    "material_photo_name": "granite_Golden-Valley-KG_zUXCAmoxhytUpdi7M27k.jpg",
    "original_name": "GOLDEN_VALLEY_KG_1103R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:51:23",
    "thumb": "0"
  },
  {
    "id": "3692",
    "material_id": "968",
    "material_photo_name": "granite_Manhattan_UN7LEt5MontWT0YmGhKZ.jpg",
    "original_name": "MANHATTAN_1200L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:24:31",
    "thumb": "0"
  },
  {
    "id": "3994",
    "material_id": "969",
    "material_photo_name": "granite_Shalimar-Gold_NGf4AXf7q3obtngURAtO.jpg",
    "original_name": "SHALIMAR_GOLD_1101L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:23:57",
    "thumb": "0"
  },
  {
    "id": "3410",
    "material_id": "970",
    "material_photo_name": "granite_Giallo-Ornamental_SYud7Xz19k5yyw7sXQGH.jpg",
    "original_name": "GIALLO_ORNAMENTAL_1202L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:05:31",
    "thumb": "0"
  },
  {
    "id": "4551",
    "material_id": "971",
    "material_photo_name": "granite_Crema-Montana_GyaIElTHVaPk7R9XE34Q.jpg",
    "original_name": "CREMA_MONTANA_1202L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:51:43",
    "thumb": "0"
  },
  {
    "id": "3872",
    "material_id": "972",
    "material_photo_name": "granite_Polar-Ice_IoiHEYJGTDjIR3D6JKOq.jpg",
    "original_name": "POLAR_ICE_1206L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:58:28",
    "thumb": "0"
  },
  {
    "id": "3473",
    "material_id": "973",
    "material_photo_name": "granite_Golden-Jade_cGIL1OmIZvIEojihw0cP.jpg",
    "original_name": "GOLDEN_JADE_1213R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 08:18:33",
    "thumb": "0"
  },
  {
    "id": "4552",
    "material_id": "974",
    "material_photo_name": "granite_Juparana-Oro_ORFp9yIakTmAPW9XIQW0.jpg",
    "original_name": "JUPARANA_ORO_1216L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:52:53",
    "thumb": "0"
  },
  {
    "id": "3650",
    "material_id": "975",
    "material_photo_name": "granite_Lapidus_3ATTCqYmqF1g7HTJTSmq.jpg",
    "original_name": "LAPIDUS_1216R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:14:06",
    "thumb": "0"
  },
  {
    "id": "4586",
    "material_id": "976",
    "material_photo_name": "quartzite_Fantasy-Brown_lfrCuCBvStndNLqJoy2P.jpg",
    "original_name": "FANTASY_BROWN_1205L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-04-03 02:21:47",
    "thumb": "0"
  },
  {
    "id": "4196",
    "material_id": "977",
    "material_photo_name": "granite_Vyara-Gold_uOnTHCbrhQmEIm59Wh0J.jpg",
    "original_name": "VYARA_GOLD_1211R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:36:10",
    "thumb": "0"
  },
  {
    "id": "4554",
    "material_id": "978",
    "material_photo_name": "granite_Florida-Sunset_213RVlua9HcxlvnshE5k.jpg",
    "original_name": "FLORIDA_SUNSET_609L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:55:06",
    "thumb": "0"
  },
  {
    "id": "4555",
    "material_id": "979",
    "material_photo_name": "granite_Aurus_9X7LUppHxancJrUwfoKZ.jpg",
    "original_name": "AURUS_713L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:56:20",
    "thumb": "0"
  },
  {
    "id": "4556",
    "material_id": "980",
    "material_photo_name": "granite_Cappuccino_1ahbCGMevFGjnkChYqdp.jpg",
    "original_name": "CAPPUCCINO_721L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:57:52",
    "thumb": "0"
  },
  {
    "id": "3376",
    "material_id": "982",
    "material_photo_name": "granite_Giallo-Farfalla_oHivzRhiatPFvls6zkC4.jpg",
    "original_name": "GIALLO_FARFALLA_723L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:48:39",
    "thumb": "0"
  },
  {
    "id": "4020",
    "material_id": "983",
    "material_photo_name": "granite_Silver-Waves_uu0sRQajqM6DZL4EHbDD.jpg",
    "original_name": "SILVER_WAVES_1208L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:00:21",
    "thumb": "0"
  },
  {
    "id": "3728",
    "material_id": "984",
    "material_photo_name": "granite_Monte-Carlo_HwZ1PQFvHXSdZa64O4Hn.jpg",
    "original_name": "MONTE_CARLO_192L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:51:02",
    "thumb": "0"
  },
  {
    "id": "4557",
    "material_id": "986",
    "material_photo_name": "granite_Astoria_mQFL3M5dEnoeTOlw2gbR.jpg",
    "original_name": "ASTORIA_167L_GLOSSY.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 09:59:00",
    "thumb": "0"
  },
  {
    "id": "4558",
    "material_id": "987",
    "material_photo_name": "granite_Dunes-Orient_id09G9F43g32VPjBW0xi.jpg",
    "original_name": "DUNES_ORIENT_180R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:00:14",
    "thumb": "0"
  },
  {
    "id": "4082",
    "material_id": "988",
    "material_photo_name": "granite_Supreme_2jeBfG61kLU9eZxq16mC.jpg",
    "original_name": "SUPREME_500L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:19:09",
    "thumb": "0"
  },
  {
    "id": "3814",
    "material_id": "989",
    "material_photo_name": "granite_Orion_gjUmeXiHva9Hw4w9JMfJ.jpg",
    "original_name": "ORION_624L_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:26:22",
    "thumb": "0"
  },
  {
    "id": "3714",
    "material_id": "991",
    "material_photo_name": "granite_Millenium-Creme_n3u59Dw9zQDzlMJYRX7g.jpg",
    "original_name": "MILLENIUM_CREME_014L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:26:45",
    "thumb": "0"
  },
  {
    "id": "4134",
    "material_id": "992",
    "material_photo_name": "granite_Tropical-Mahogany_TkYZaZn4qb7WuL1n6BwY.jpg",
    "original_name": "TROPICAL_MAHOGANY_1218R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:01:31",
    "thumb": "0"
  },
  {
    "id": "3538",
    "material_id": "993",
    "material_photo_name": "granite_Ilhabella_jTl3HvdxurflM6YhUDNf.jpg",
    "original_name": "IIHABELLA_506L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:13:37",
    "thumb": "0"
  },
  {
    "id": "3573",
    "material_id": "995",
    "material_photo_name": "granite_Jaguar_fkVrAYKnZWWYcr0fS9zB.jpg",
    "original_name": "JAGUAR_411L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 11:12:55",
    "thumb": "0"
  },
  {
    "id": "3670",
    "material_id": "996",
    "material_photo_name": "onyx_Light-Pistachio_DAm3RkKyKrVChp57Dahp.jpg",
    "original_name": "LIGHT_PISTACHIO_ONYX_051R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:48:51",
    "thumb": "0"
  },
  {
    "id": "4217",
    "material_id": "997",
    "material_photo_name": "quartzite_White-Macaubas_7oeWFGXnadAG2oR39AjH.jpg",
    "original_name": "WHITE_MACAUBAS_052R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:32:38",
    "thumb": "0"
  },
  {
    "id": "3194",
    "material_id": "998",
    "material_photo_name": "marble_Cippolino-Ondulato_JS1VcAlU0hvf9bSnrLVu.jpg",
    "original_name": "CIPPOLINO_ONDULATO_052L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 06:53:40",
    "thumb": "0"
  },
  {
    "id": "3884",
    "material_id": "999",
    "material_photo_name": "quartzite_Quartzite-Brown_7pUKu1PT38HYbXu5SzLV.jpg",
    "original_name": "QUARTZITE_BROWN_053R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:14:31",
    "thumb": "0"
  },
  {
    "id": "4030",
    "material_id": "1000",
    "material_photo_name": "quartzite_Snow-Crystal_gH4TPAOp8NqA3um4SRMX.jpg",
    "original_name": "SNOW_CRYSTAL_053L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:11:12",
    "thumb": "0"
  },
  {
    "id": "3700",
    "material_id": "1002",
    "material_photo_name": "onyx_Marmo-Onyx-Green_Nt30ilWYKayahjstyJ5l.jpg",
    "original_name": "MARMO_ONYX_GREEN_054L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 12:10:57",
    "thumb": "0"
  },
  {
    "id": "3888",
    "material_id": "1003",
    "material_photo_name": "onyx_Rainbow-Onyx_loow7YaUq5kIfg1iIuoM.jpg",
    "original_name": "RAINBOW_ONYX_062R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:20:38",
    "thumb": "0"
  },
  {
    "id": "3668",
    "material_id": "1004",
    "material_photo_name": "onyx_Light-Green-Onyx_M2Ig7gJkNv5ddxte83j6.jpg",
    "original_name": "LIGHT_GREEN_ONYX_061L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:46:22",
    "thumb": "0"
  },
  {
    "id": "4014",
    "material_id": "1005",
    "material_photo_name": "travertine_Silver-Travertine_swGSV6l0ONCzFE0kztCp.jpg",
    "original_name": "SILVER_TRAVERTINE_051L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:54:00",
    "thumb": "0"
  },
  {
    "id": "3062",
    "material_id": "1008",
    "material_photo_name": "marble_Bianco-Neve_aAlsqfQHkqdOCI45iaSG.jpg",
    "original_name": "BIANCO_NEVE_061L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:41:41",
    "thumb": "0"
  },
  {
    "id": "4316",
    "material_id": "310",
    "material_photo_name": "Marmo-Onyx-Mixed_VNutasmlackyhVMLDoIc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-30 02:35:26",
    "thumb": "1"
  },
  {
    "id": "4297",
    "material_id": "1162",
    "material_photo_name": "White-Torroncino_KnzXT4LLsWdduML9ponY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 11:41:17",
    "thumb": "1"
  },
  {
    "id": "3060",
    "material_id": "1012",
    "material_photo_name": "granite_Bianco-Nero_tDwKmcPEuhjYrfVz0BOW.jpg",
    "original_name": "BIANCO_NERO_044L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:39:14",
    "thumb": "0"
  },
  {
    "id": "3072",
    "material_id": "1013",
    "material_photo_name": "marble_Bianco-Venato_995QxcM6eoTIqJ8HlDf3.jpg",
    "original_name": "BIANCO_VENATO_003BR_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 01:54:18",
    "thumb": "0"
  },
  {
    "id": "3205",
    "material_id": "1014",
    "material_photo_name": "Classic-White_KXKAYn9UOLaNgYXiRRUu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:17:05",
    "thumb": "1"
  },
  {
    "id": "3204",
    "material_id": "1014",
    "material_photo_name": "quartzite_Classic-White_Ps1H8tYWQI0qaKtWUcHB.jpg",
    "original_name": "CLASSIC_WHITE_045L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:16:27",
    "thumb": "0"
  },
  {
    "id": "4559",
    "material_id": "1015",
    "material_photo_name": "granite_Baltic-Brown_cBeKdnawu9SpKU5TyJHw.jpg",
    "original_name": "BALTIC_BROWN_174L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:01:35",
    "thumb": "0"
  },
  {
    "id": "3746",
    "material_id": "1017",
    "material_photo_name": "granite_Netuno-Bordeaux_1uF8lvEk3uRTz3M6QDCh.jpg",
    "original_name": "NETUNO_BORDEAUX_173L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:13:37",
    "thumb": "0"
  },
  {
    "id": "3093",
    "material_id": "1018",
    "material_photo_name": "granite_Black-Pearl-Antiqued_kW6dzIaP6oP2gVcRhw5s.jpg",
    "original_name": "BLACK_PEARL_ANTIQUED_734L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:26:14",
    "thumb": "0"
  },
  {
    "id": "3710",
    "material_id": "1019",
    "material_photo_name": "quartzite_Medusa_gbQ7fQpX4T4tHjI89LiN.jpg",
    "original_name": "MEDUSA_054R_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:20:31",
    "thumb": "0"
  },
  {
    "id": "3097",
    "material_id": "1020",
    "material_photo_name": "granite_Black-Thulu_vXK4UHqe6SoWeT5y8cxe.jpg",
    "original_name": "BLACK_THULU_043L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 02:32:01",
    "thumb": "0"
  },
  {
    "id": "4560",
    "material_id": "1021",
    "material_photo_name": "quartzite_Aurora-Blue_28HYue1jj5VNtjnG14HL.jpg",
    "original_name": "AURORA_BLUE_404L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:02:34",
    "thumb": "0"
  },
  {
    "id": "3200",
    "material_id": "1023",
    "material_photo_name": "quartzite_Classic-White_wVuT2ys2WlqgJFOfXrQG.jpg",
    "original_name": "CLASSIC_WHITE_736L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 07:08:39",
    "thumb": "0"
  },
  {
    "id": "3201",
    "material_id": "1023",
    "material_photo_name": "Classic-White_YzGD3UZEc44xZNbGMplH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 07:08:58",
    "thumb": "1"
  },
  {
    "id": "4561",
    "material_id": "1024",
    "material_photo_name": "granite_Blue-Dakota_bJCcl6hUKqOnWZ5vTY2c.jpg",
    "original_name": "BLUE_DAKOTA_618R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:03:44",
    "thumb": "0"
  },
  {
    "id": "4070",
    "material_id": "1025",
    "material_photo_name": "granite_Sunset-Red_x46TUDwLKNid7vhomC6d.jpg",
    "original_name": "SUNSET_RED_035R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:35:17",
    "thumb": "0"
  },
  {
    "id": "4562",
    "material_id": "1026",
    "material_photo_name": "granite_Purangaw-Guara_qOcHY9Fpyvmtr9KW8FnI.jpg",
    "original_name": "PURANGAW_GUARA_192R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:05:22",
    "thumb": "0"
  },
  {
    "id": "4563",
    "material_id": "1027",
    "material_photo_name": "granite_New-Sunset-Gold_iypMCj33PY10cbIvyjvu.jpg",
    "original_name": "NEW_SUNSET_GOLD_611R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:06:29",
    "thumb": "0"
  },
  {
    "id": "3866",
    "material_id": "1028",
    "material_photo_name": "granite_Pietra-Imperiale_A2Ce3KsxO7QlahjQHKvp.jpg",
    "original_name": "PIETRA_IMPERIALE_166L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:51:34",
    "thumb": "0"
  },
  {
    "id": "4564",
    "material_id": "1029",
    "material_photo_name": "granite_Milky-White_78pyP1kBTjc0P2gmm12c.jpg",
    "original_name": "MILKY_WHITE_191L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:07:45",
    "thumb": "0"
  },
  {
    "id": "4004",
    "material_id": "1030",
    "material_photo_name": "granite_Sierra-Brown_eG8fwaKQ9LIrjlI6xcTd.jpg",
    "original_name": "SIERRA_BROWN_186R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:37:39",
    "thumb": "0"
  },
  {
    "id": "4565",
    "material_id": "1032",
    "material_photo_name": "granite_Key-West-Gold_9Hzw2huQlzsq4AMbGiZf.jpg",
    "original_name": "KEY_WEST_GOLD_189L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:09:07",
    "thumb": "0"
  },
  {
    "id": "4566",
    "material_id": "1034",
    "material_photo_name": "travertine_Crema-Viejo-Travertine_A2srl3OQprosCCIUzCIx.jpg",
    "original_name": "CREMA_VIEJO_TRAVERTINE_198R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:10:28",
    "thumb": "0"
  },
  {
    "id": "4567",
    "material_id": "1036",
    "material_photo_name": "granite_Black-Impala_Jrf3TQMzakWuLrax6wTK.jpg",
    "original_name": "BLACK_IMPALA_193R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:11:44",
    "thumb": "0"
  },
  {
    "id": "4233",
    "material_id": "1037",
    "material_photo_name": "granite_Yellow-River_bYDyUogytSeflztSZsi3.jpg",
    "original_name": "YELLOW_RIVER_199L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 10:06:19",
    "thumb": "0"
  },
  {
    "id": "4270",
    "material_id": "1038",
    "material_photo_name": "limestone_Jerusalem-Grey_GCyIISR6RGCuS2XCDTzy.jpg",
    "original_name": "JERUSALEM_GREY_199R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:25:39",
    "thumb": "0"
  },
  {
    "id": "3140",
    "material_id": "1039",
    "material_photo_name": "granite_Brown-Alpine_mZZ28u82ujPvfX4yz2SL.jpg",
    "original_name": "BROWN_ALPINE_185L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:21:02",
    "thumb": "0"
  },
  {
    "id": "4253",
    "material_id": "1040",
    "material_photo_name": "quartzite_Calacutta-Quartz_GEzfIQSVxTJLN0QpuRLf.jpg",
    "original_name": "CALACUTTA_QUARTZ_177L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 09:11:10",
    "thumb": "0"
  },
  {
    "id": "4235",
    "material_id": "1041",
    "material_photo_name": "travertine_Yellow-Travertine_zmtmkFrHeuoqoPJjO3Hp.jpg",
    "original_name": "YELLOW_TRAVERTINE_184R_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 10:11:06",
    "thumb": "0"
  },
  {
    "id": "4568",
    "material_id": "1042",
    "material_photo_name": "granite_Golden-Butterfly_M1pB7Dfp4TnBNAuHLCcn.jpg",
    "original_name": "GOLDEN_BUTTERFLY_169R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:13:02",
    "thumb": "0"
  },
  {
    "id": "3734",
    "material_id": "1043",
    "material_photo_name": "glass_Nano-Crystalized-Glass_qlAKuG4PycqlasbCNyyP.jpg",
    "original_name": "NANO_CRYSTALIZED_GLASS_073L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:57:46",
    "thumb": "0"
  },
  {
    "id": "4034",
    "material_id": "1044",
    "material_photo_name": "granite_Snow-White_OpDnJTI1NMt0NCP0YhBh.jpg",
    "original_name": "SNOW_WHITE_MARBLE_074L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:19:01",
    "thumb": "0"
  },
  {
    "id": "2977",
    "material_id": "1045",
    "material_photo_name": "granite_Arcadia_YzC4N3MCSqwZQRr82ysP.jpg",
    "original_name": "ARCADIA_182R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:44:57",
    "thumb": "0"
  },
  {
    "id": "4569",
    "material_id": "1046",
    "material_photo_name": "granite_Crema-Valencia_QNDNC2ciMEyG6OpXGU2V.jpg",
    "original_name": "CREMA_VALENCIA_075L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:13:59",
    "thumb": "0"
  },
  {
    "id": "3808",
    "material_id": "1047",
    "material_photo_name": "onyx_Onice-Tanzania-Light_jaGcJYFk4CgUZMp8kSEm.jpg",
    "original_name": "ONICE_TANZANIA_LIGHT_070L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:16:15",
    "thumb": "0"
  },
  {
    "id": "3790",
    "material_id": "1048",
    "material_photo_name": "onyx_Norm-White-Onyx_VZmZTh4KyOTTozG6MzDG.jpg",
    "original_name": "NORM_WHITE_ONYX_070L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:51:23",
    "thumb": "0"
  },
  {
    "id": "4088",
    "material_id": "1049",
    "material_photo_name": "quartzite_Taj-Mahal_VYXrpX75N5CzymNdOhM7.jpg",
    "original_name": "TAJ_MAHAL_071L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 02:24:32",
    "thumb": "0"
  },
  {
    "id": "4570",
    "material_id": "1052",
    "material_photo_name": "marble_Emperador-Golden_x3AnYLYnRiUvp9QjJgaM.jpg",
    "original_name": "EMPERADOR_GOLDEN_057L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:15:10",
    "thumb": "0"
  },
  {
    "id": "3798",
    "material_id": "1053",
    "material_photo_name": "onyx_Onice-Smeraldo_X6NVw7iu6F0Tq1NJdCYU.jpg",
    "original_name": "ONICE_SMERALDO_ONYX_069L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:00:15",
    "thumb": "0"
  },
  {
    "id": "3246",
    "material_id": "1054",
    "material_photo_name": "quartz_Copacabana-Quartz_qOW5ac6ObM5RHLDGaY8d.jpg",
    "original_name": "COPACABANA_QUARTZ_071R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 11:19:30",
    "thumb": "0"
  },
  {
    "id": "4219",
    "material_id": "1055",
    "material_photo_name": "onyx_White-Onyx_gAIEaKTkvdyH06MPuFqz.jpg",
    "original_name": "WHITE_ONYX_070R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-18 09:38:41",
    "thumb": "0"
  },
  {
    "id": "4571",
    "material_id": "1056",
    "material_photo_name": "onyx_Ice-Sugar-Onyx_D0wxjw6cYz9E2lQTCkM8.jpg",
    "original_name": "ICE_SUGAR_ONYX_065L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:16:14",
    "thumb": "0"
  },
  {
    "id": "4572",
    "material_id": "1057",
    "material_photo_name": "marble_Cedar_tvqbX5kKaPkXSaLJMSSq.jpg",
    "original_name": "CEDAR_066R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:17:22",
    "thumb": "0"
  },
  {
    "id": "4182",
    "material_id": "1059",
    "material_photo_name": "quartzite_Violet-Bamboo_eADHkNIK4OH9eXJXBiPo.jpg",
    "original_name": "VIOLET_BAMBOO_065R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:18:15",
    "thumb": "0"
  },
  {
    "id": "3569",
    "material_id": "1060",
    "material_photo_name": "slate_Jade-Green-Slate_8wZZ4DBAH0ZsbQjkCnSw.jpg",
    "original_name": "JADE_GREEN_SLATE_058L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 11:06:09",
    "thumb": "0"
  },
  {
    "id": "3800",
    "material_id": "1061",
    "material_photo_name": "onyx_Onice-Smoke_4swDGwYvK4WbS5awLvG2.jpg",
    "original_name": "ONICE_SMOKE_ONYX_063L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:03:32",
    "thumb": "0"
  },
  {
    "id": "3802",
    "material_id": "1062",
    "material_photo_name": "onyx_Onice-Stratos_s4lAhBVBMA8O8uSENbuW.jpg",
    "original_name": "ONICE_STRATOS_059R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:06:40",
    "thumb": "0"
  },
  {
    "id": "3105",
    "material_id": "1063",
    "material_photo_name": "granite_Blue-Bahia_tJls2SYvA6MoqMrSleeM.jpg",
    "original_name": "BLUE_BAHIA_063R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 03:15:50",
    "thumb": "0"
  },
  {
    "id": "3158",
    "material_id": "1064",
    "material_photo_name": "granite_Cabernet-Brown_YlgIdPDMMovCQnqbLX7p.jpg",
    "original_name": "CABERNET_BROWN_061R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 05:39:01",
    "thumb": "0"
  },
  {
    "id": "3900",
    "material_id": "1066",
    "material_photo_name": "marble_Red-Jasper_eutFKKPdPRHji67njEsk.jpg",
    "original_name": "RED_JASPER_MARBLE_EXTRA_059L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:33:27",
    "thumb": "0"
  },
  {
    "id": "3124",
    "material_id": "1067",
    "material_photo_name": "granite_Blue-Night_qwlafJyhnL6napvJhyHe.jpg",
    "original_name": "BLUE_NIGHT_1300L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-13 04:00:00",
    "thumb": "0"
  },
  {
    "id": "4112",
    "material_id": "1068",
    "material_photo_name": "granite_Titanium-Black_92MI6gzZHHiXY9YiPRye.jpg",
    "original_name": "TITANIUM_BLACK_1301R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 03:00:56",
    "thumb": "0"
  },
  {
    "id": "4026",
    "material_id": "1069",
    "material_photo_name": "marble_Sivec_e58hQVd7LJ29dlv4jQPX.jpg",
    "original_name": "SIVEC_052L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:07:01",
    "thumb": "0"
  },
  {
    "id": "4078",
    "material_id": "1070",
    "material_photo_name": "quartzite_Super-White_ifNVoW01SceS3cvyJgD0.jpg",
    "original_name": "SUPER_WHITE_055L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:49:01",
    "thumb": "0"
  },
  {
    "id": "4056",
    "material_id": "1071",
    "material_photo_name": "marble_Statuario_xseOFKKRC6iqeL8l7hlw.jpg",
    "original_name": "STATUARIO_060L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:10:22",
    "thumb": "0"
  },
  {
    "id": "3672",
    "material_id": "1072",
    "material_photo_name": "onyx_Light-Pistachio_SIOP36W2kxWvKL29yutB.jpg",
    "original_name": "LIGHT_PISTACHIO_ONYX_064R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:50:18",
    "thumb": "0"
  },
  {
    "id": "3276",
    "material_id": "1074",
    "material_photo_name": "granite_Costa-Esmeralda_t7nciwRTLa4CUeFpJJ1z.jpg",
    "original_name": "COSTA_ESMERALDA_065L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 12:11:07",
    "thumb": "0"
  },
  {
    "id": "4204",
    "material_id": "1075",
    "material_photo_name": "marble_White-Carrara_qUaGKuhpRwCz55jwfu5y.jpg",
    "original_name": "WHITE_CARRARA_060L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:47:54",
    "thumb": "0"
  },
  {
    "id": "3794",
    "material_id": "1078",
    "material_photo_name": "granite_Van-Gogh_ogMKb82afmd77VY6KreC.jpg",
    "original_name": "OLD_FRAME_VAN_GOGH_M41R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:56:47",
    "thumb": "0"
  },
  {
    "id": "3402",
    "material_id": "1079",
    "material_photo_name": "granite_Giallo-Nathalia_Cl2sQyEkrN3Phqp3viZi.jpg",
    "original_name": "GIALLO_NATHALIA_910R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 04:54:53",
    "thumb": "0"
  },
  {
    "id": "3661",
    "material_id": "1080",
    "material_photo_name": "granite_Lapidus-Classic_cyJ8ts8gbuilr4Ogdb8L.jpg",
    "original_name": "LAPIDUS_CLASSIC_617L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:35:09",
    "thumb": "0"
  },
  {
    "id": "3753",
    "material_id": "108",
    "material_photo_name": "New-Caledonia_4QHcV3aq9odzvwA3ipbJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:56:53",
    "thumb": "1"
  },
  {
    "id": "3757",
    "material_id": "365",
    "material_photo_name": "New-Colonial-Dream_slgyxN2GVM2iArTk372B.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:03:18",
    "thumb": "1"
  },
  {
    "id": "4573",
    "material_id": "1083",
    "material_photo_name": "granite_Peregrine-C_Brkeyp5DYzMgCPgNXX8x.jpg",
    "original_name": "PEREGRINE_C_179R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:18:36",
    "thumb": "0"
  },
  {
    "id": "3690",
    "material_id": "1084",
    "material_photo_name": "granite_Manhattan_zvkEDcDA6wbTQGyjqbJ4.jpg",
    "original_name": "MANHATTAN_198R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:16:37",
    "thumb": "0"
  },
  {
    "id": "4574",
    "material_id": "1085",
    "material_photo_name": "granite_Golden-Valley-KG_tv5ypvfjoK5p3VjB1Gsu.jpg",
    "original_name": "GOLDEN_VALLEY_KG_185R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:19:45",
    "thumb": "0"
  },
  {
    "id": "4575",
    "material_id": "1086",
    "material_photo_name": "granite_Atlantis_22uu3YlG9dXQJU5evmrp.jpg",
    "original_name": "ATLANTIS_501L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:21:00",
    "thumb": "0"
  },
  {
    "id": "3355",
    "material_id": "1087",
    "material_photo_name": "granite_Florence-Green_OIi18nJ8fOLiFyaeSae5.jpg",
    "original_name": "FLORENCE_GREEN_184L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 03:24:05",
    "thumb": "0"
  },
  {
    "id": "4075",
    "material_id": "1088",
    "material_photo_name": "Super-White_bhIse3Guwqi5Jr4NgjV7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:45:22",
    "thumb": "1"
  },
  {
    "id": "4074",
    "material_id": "1088",
    "material_photo_name": "quartzite_Super-White_Kvq4mnHsI9NKQjNxUOVb.jpg",
    "original_name": "SUPER_WHITE_179L_GLOSSY DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 01:45:02",
    "thumb": "0"
  },
  {
    "id": "2930",
    "material_id": "492",
    "material_photo_name": "granite_Absolute-Cream_mq9a4XChUZa1JHoSCG0y.jpg",
    "original_name": "ABSOLUTE_CREAM_121L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 06:44:57",
    "thumb": "0"
  },
  {
    "id": "4577",
    "material_id": "1090",
    "material_photo_name": "granite_Bordeaux-Delicato_0lHRoFYjMEPA2EckVev7.jpg",
    "original_name": "BORDEAUX_DELICATO_187R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:23:58",
    "thumb": "0"
  },
  {
    "id": "3858",
    "material_id": "1092",
    "material_photo_name": "quartzite_Picasso-Quartzite_bHKxUzqTQB1GTTzhsQRy.jpg",
    "original_name": "PICASSO_QUARTZITE_068L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:35:31",
    "thumb": "0"
  },
  {
    "id": "3862",
    "material_id": "1095",
    "material_photo_name": "quartzite_Picasso-Quartzite_1sCuiWxHowNwk0j8fKr5.jpg",
    "original_name": "PICASSO_QUARTZITE_069R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:44:51",
    "thumb": "0"
  },
  {
    "id": "4158",
    "material_id": "1096",
    "material_photo_name": "granite_Verde-Bamboo_pxornR8yDq6QIY8io1AF.jpg",
    "original_name": "VERDE_BAMBOO_068R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 04:43:50",
    "thumb": "0"
  },
  {
    "id": "4265",
    "material_id": "1097",
    "material_photo_name": "Emerald-Quartzite-Dark_g19EGTtte3U5v0ZxvkhL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 10:45:57",
    "thumb": "1"
  },
  {
    "id": "3638",
    "material_id": "1098",
    "material_photo_name": "granite_Kosmus_b00pIM1WxlDMnZk5LSvm.jpg",
    "original_name": "KOSMUS_062L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:56:20",
    "thumb": "0"
  },
  {
    "id": "3684",
    "material_id": "1099",
    "material_photo_name": "granite_Magma-Bordeaux_0xObTj70muE5lUTD6qu3.jpg",
    "original_name": "MAGMA_BORDEAUX_811R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 11:08:13",
    "thumb": "0"
  },
  {
    "id": "3540",
    "material_id": "1100",
    "material_photo_name": "granite_Imperial-Brown_Wz8rZhND6kYh86DsI5t0.jpg",
    "original_name": "IMPERIAL_BROWN_LEATHER_614L_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 10:20:57",
    "thumb": "0"
  },
  {
    "id": "3696",
    "material_id": "1101",
    "material_photo_name": "granite_Marinus_erzSyTFKezIol8hwEUcm.jpg",
    "original_name": "MARINUS_715L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 12:06:13",
    "thumb": "0"
  },
  {
    "id": "4050",
    "material_id": "1102",
    "material_photo_name": "granite_Spectrus-Black_BkBqeya2xk92z6fB1Gmo.jpg",
    "original_name": "SPECTRUS_BLACK_152L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:48:54",
    "thumb": "0"
  },
  {
    "id": "4578",
    "material_id": "1103",
    "material_photo_name": "granite_Black-Thunder_sNVVa7mTgk8Cp0SmV17V.jpg",
    "original_name": "BLACK_THUNDER_144R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:25:12",
    "thumb": "0"
  },
  {
    "id": "4044",
    "material_id": "1105",
    "material_photo_name": "marble_Spanish-Gold_EJOKfuqdcNfLUgO39QO8.jpg",
    "original_name": "SPANISH_GOLD_061L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:42:37",
    "thumb": "0"
  },
  {
    "id": "3940",
    "material_id": "1107",
    "material_photo_name": "granite_Ruby-Velvet_k3f4trwIXDVQ6INYsTfg.jpg",
    "original_name": "RUBY_VELVET_064L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 10:03:17",
    "thumb": "0"
  },
  {
    "id": "3904",
    "material_id": "1108",
    "material_photo_name": "granite_River-Gold_Rgncz3cEyHeLaVepap5t.jpg",
    "original_name": "RIVER_GOLD_1207L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:38:03",
    "thumb": "0"
  },
  {
    "id": "3816",
    "material_id": "1109",
    "material_photo_name": "granite_Orion-Gold_szlWFyqFhwB5pFxgDU2p.jpg",
    "original_name": "ORION_GOLD_180L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:28:32",
    "thumb": "0"
  },
  {
    "id": "3698",
    "material_id": "1110",
    "material_photo_name": "onyx_Marmo-Onyx-Blue_lb7y3EtIm6wiXyzCMx93.jpg",
    "original_name": "MARMO_ONYX_BLUE_013R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 12:08:57",
    "thumb": "0"
  },
  {
    "id": "4188",
    "material_id": "1112",
    "material_photo_name": "granite_Volga-Blue_5p6uHtZyq9ShRhDeBchi.jpg",
    "original_name": "VOLGA_BLUE_197R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:25:19",
    "thumb": "0"
  },
  {
    "id": "3868",
    "material_id": "1113",
    "material_photo_name": "granite_Platinum-Bahia_7le0SHdmHIU1Fp9gFqf7.jpg",
    "original_name": "PLATINUM_BAHIA_619L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:53:17",
    "thumb": "0"
  },
  {
    "id": "3319",
    "material_id": "1114",
    "material_photo_name": "marble_Dynasty-Brown_sr7SZWDIWNvaGLfOCExf.jpg",
    "original_name": "DYNASTY_BROWN_067L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:21:31",
    "thumb": "0"
  },
  {
    "id": "3516",
    "material_id": "1115",
    "material_photo_name": "granite_Green-Peace_GaKr16W7ubiQE6xv1BS3.jpg",
    "original_name": "GREEN_PEACE_351R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:41:05",
    "thumb": "0"
  },
  {
    "id": "4579",
    "material_id": "1116",
    "material_photo_name": "quartzite_Orite_jdf8M8JhizbKlK7VPare.jpg",
    "original_name": "ORITE_062L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:26:32",
    "thumb": "0"
  },
  {
    "id": "3740",
    "material_id": "1118",
    "material_photo_name": "marble_Nero-Marquina_CYCZt4UrFEFgtf2dQiyC.jpg",
    "original_name": "NERO_MARQUINA_056R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 02:03:26",
    "thumb": "0"
  },
  {
    "id": "3512",
    "material_id": "1119",
    "material_photo_name": "granite_Green-Jadeite_AgnAZCEKYDySwzDeQ2ry.jpg",
    "original_name": "GREEN_JADEITE_188R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-15 09:36:55",
    "thumb": "0"
  },
  {
    "id": "3636",
    "material_id": "1120",
    "material_photo_name": "granite_Kodiak_5BdQLMSOznLHn458lzjf.jpg",
    "original_name": "KODIAK_1208R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:53:08",
    "thumb": "0"
  },
  {
    "id": "3876",
    "material_id": "1121",
    "material_photo_name": "granite_Porto-Rosa_xgWn98ZFZsiiQ8Px9PCE.jpg",
    "original_name": "PORTO_ROSA_718L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 06:05:40",
    "thumb": "0"
  },
  {
    "id": "3792",
    "material_id": "1122",
    "material_photo_name": "granite_Notturno-Gold_0g4LKO3n5CNdynlskluI.jpg",
    "original_name": "NOTTURNO_GOLD_1103L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 03:54:48",
    "thumb": "0"
  },
  {
    "id": "2971",
    "material_id": "1123",
    "material_photo_name": "Angola-Silver_VdbjFbO8cBSg53M8fpLQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:33:56",
    "thumb": "1"
  },
  {
    "id": "4580",
    "material_id": "1123",
    "material_photo_name": "granite_Angola-Silver_6rlHFz1dKJDCV12GKC24.jpg",
    "original_name": "ANGOLA_SILVER_136L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:27:34",
    "thumb": "0"
  },
  {
    "id": "4293",
    "material_id": "475",
    "material_photo_name": "White-Torroncino_dHYIAW8c1blsZ2mJRQcF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 11:31:21",
    "thumb": "1"
  },
  {
    "id": "4291",
    "material_id": "699",
    "material_photo_name": "White-Fiorito_ZLGPisGSFMwsQEI3zDV7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-27 11:19:00",
    "thumb": "1"
  },
  {
    "id": "4501",
    "material_id": "562",
    "material_photo_name": "granite_Absolute-Black_bFaTviUDBD7LVWVHhQ6Q.jpg",
    "original_name": "ABSOLUTE_BLACK_157L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 08:45:00",
    "thumb": "0"
  },
  {
    "id": "2929",
    "material_id": "1089",
    "material_photo_name": "Absolute-Black-Premium_V0rVapEwSCxyMxcsl70V.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 06:42:23",
    "thumb": "1"
  },
  {
    "id": "4576",
    "material_id": "1089",
    "material_photo_name": "granite_Absolute-Black-Premium_k60ct0gN5lgdyiq1usmW.jpg",
    "original_name": "ABSOLUTE_BLACK_PREMIUM_072L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:22:42",
    "thumb": "0"
  },
  {
    "id": "2935",
    "material_id": "563",
    "material_photo_name": "African-Galaxy_3oCzfZ1vzR8fMUsI0uS3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 06:48:42",
    "thumb": "1"
  },
  {
    "id": "2948",
    "material_id": "584",
    "material_photo_name": "Afyon-White_En2RYcJH8hzAoLC5k7Le.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:02:22",
    "thumb": "1"
  },
  {
    "id": "2958",
    "material_id": "370",
    "material_photo_name": "granite_Alaska-White_cxYHaGeyuyzJiNwjFw0B.jpg",
    "original_name": "ALASKA_WHITE_1019R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:15:50",
    "thumb": "0"
  },
  {
    "id": "4467",
    "material_id": "222",
    "material_photo_name": "granite_AJ-Brown-CC_Dxmp3MAqhndrjJ2n0oT2.jpg",
    "original_name": "AJ_BROWN_CC_121L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:57:11",
    "thumb": "0"
  },
  {
    "id": "4464",
    "material_id": "153",
    "material_photo_name": "granite_Altair_u8tOyxim55vLsz7HYzsV.jpg",
    "original_name": "ALTAIR_168L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-03 08:53:23",
    "thumb": "0"
  },
  {
    "id": "2968",
    "material_id": "713",
    "material_photo_name": "granite_Ambrosia-White_C6pxXLZwNEY1gQ8wX6O2.jpg",
    "original_name": "AMBROSIA_WHITE_507R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-12 07:29:10",
    "thumb": "0"
  },
  {
    "id": "2970",
    "material_id": "708",
    "material_photo_name": "Amidala-Gold_9fVQR88IOgQAdYpvg1sq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-12 07:32:00",
    "thumb": "1"
  },
  {
    "id": "2974",
    "material_id": "154",
    "material_photo_name": "Aquarius_G5vATdrTmmEZ0PfWAEmF.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 07:38:39",
    "thumb": "1"
  },
  {
    "id": "2976",
    "material_id": "202",
    "material_photo_name": "Arabescato_N6O5EUffw92ec7F8BvvA.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 07:40:32",
    "thumb": "1"
  },
  {
    "id": "2979",
    "material_id": "1045",
    "material_photo_name": "Arcadia_0qvz2dtC20mOl9vs3Xyr.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 07:45:52",
    "thumb": "1"
  },
  {
    "id": "2981",
    "material_id": "386",
    "material_photo_name": "Arcobaleno-Blue_YT1OlHgjsjb31lTeSvsk.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-12 07:48:01",
    "thumb": "1"
  },
  {
    "id": "2983",
    "material_id": "582",
    "material_photo_name": "Arctic-Blue_LS5rW9R7PsKrEDNW1DZy.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 09:24:21",
    "thumb": "1"
  },
  {
    "id": "3000",
    "material_id": "243",
    "material_photo_name": "Astoria-Satin_vIBBWdAJ2jcSunz1Rcfh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:00:34",
    "thumb": "1"
  },
  {
    "id": "3002",
    "material_id": "156",
    "material_photo_name": "Ataije-Creme_voxJtirJ8lQABkDhsT8f.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:03:12",
    "thumb": "1"
  },
  {
    "id": "3004",
    "material_id": "640",
    "material_photo_name": "Atlantic-Black_0luiOX3QNilkeyNUB5Fb.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 10:06:38",
    "thumb": "1"
  },
  {
    "id": "3010",
    "material_id": "935",
    "material_photo_name": "Atlantis_9hCM88rrEnIaVbopbRle.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:25:16",
    "thumb": "1"
  },
  {
    "id": "3012",
    "material_id": "1086",
    "material_photo_name": "Atlantis_GhuCw2DlKNJdl5ufRSCj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:31:19",
    "thumb": "1"
  },
  {
    "id": "4581",
    "material_id": "1128",
    "material_photo_name": "granite_Atlantis_znTnfMUUdsS7vX9NQ1QK.jpg",
    "original_name": "ATLANTIS_512L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:28:36",
    "thumb": "0"
  },
  {
    "id": "3014",
    "material_id": "1128",
    "material_photo_name": "Atlantis_meb7bmRMoR8yKHdoyfxf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:40:23",
    "thumb": "1"
  },
  {
    "id": "3016",
    "material_id": "1021",
    "material_photo_name": "Aurora-Blue_5kzmeUvIfNGk4KvNe4OI.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:46:24",
    "thumb": "1"
  },
  {
    "id": "3018",
    "material_id": "979",
    "material_photo_name": "Aurus_6eiCDB38irIC7atlwszv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:49:16",
    "thumb": "1"
  },
  {
    "id": "3020",
    "material_id": "929",
    "material_photo_name": "Azteca_j9P66rWCvnyuRVQpNpZ4.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 10:52:32",
    "thumb": "1"
  },
  {
    "id": "3022",
    "material_id": "682",
    "material_photo_name": "Azul-Aran_0uL1YxPJbD5IWrVdsjZS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 10:54:34",
    "thumb": "1"
  },
  {
    "id": "3033",
    "material_id": "621",
    "material_photo_name": "Balthus_ByJGeBNo4CWnmpbRMXo9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:19:40",
    "thumb": "1"
  },
  {
    "id": "3035",
    "material_id": "700",
    "material_photo_name": "Baltic-Blue_cG5ThIfkuVY5Y4QX1jCU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:23:16",
    "thumb": "1"
  },
  {
    "id": "3038",
    "material_id": "1015",
    "material_photo_name": "Baltic-Brown_uVk7tvzbRKcybQZpgPVZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:28:05",
    "thumb": "1"
  },
  {
    "id": "3040",
    "material_id": "294",
    "material_photo_name": "Bardiglio_FX22JMHyyS4I6DbhcMRz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:30:40",
    "thumb": "1"
  },
  {
    "id": "3042",
    "material_id": "377",
    "material_photo_name": "Bateig-Azul_0uOukcd8swKsD3EMekn7.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 11:34:51",
    "thumb": "1"
  },
  {
    "id": "3045",
    "material_id": "426",
    "material_photo_name": "Bianco-Altissimo_XQK7nB3YbOVBw5VKfK27.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 11:40:23",
    "thumb": "1"
  },
  {
    "id": "3073",
    "material_id": "1013",
    "material_photo_name": "Bianco-Venato_slbaiFXnsH668WPx7OWp.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 01:54:41",
    "thumb": "1"
  },
  {
    "id": "3075",
    "material_id": "253",
    "material_photo_name": "Black-Antique_IowkmNEujDGNODV9JtJS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 01:56:36",
    "thumb": "1"
  },
  {
    "id": "3080",
    "material_id": "632",
    "material_photo_name": "Black-Diamond_odXjWVNYuxHo6vGRW7aX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:02:13",
    "thumb": "1"
  },
  {
    "id": "3079",
    "material_id": "320",
    "material_photo_name": "Black-Fusion_1ifIsdWWVHYnY1S3Nu13.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:00:51",
    "thumb": "1"
  },
  {
    "id": "3086",
    "material_id": "1036",
    "material_photo_name": "Black-Impala_HxwrH7HfCgXuHqPaC5RW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:15:21",
    "thumb": "1"
  },
  {
    "id": "3088",
    "material_id": "376",
    "material_photo_name": "Black-Marquina_hza2LeiX5xaYsoCZ6NZC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:17:23",
    "thumb": "1"
  },
  {
    "id": "3090",
    "material_id": "260",
    "material_photo_name": "Black-Mist_y4DNrHDDYYYpCFy47WQH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:19:31",
    "thumb": "1"
  },
  {
    "id": "3092",
    "material_id": "726",
    "material_photo_name": "Black-Pearl_q50BzAzmli7PvUJNEfc3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:23:47",
    "thumb": "1"
  },
  {
    "id": "3094",
    "material_id": "1018",
    "material_photo_name": "Black-Pearl-Antiqued_RdRGos2yPbBUeuqyuUbX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:26:34",
    "thumb": "1"
  },
  {
    "id": "3096",
    "material_id": "286",
    "material_photo_name": "Black-Sun_asi3C5n48iuwHRm8OyMQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:29:57",
    "thumb": "1"
  },
  {
    "id": "3098",
    "material_id": "1020",
    "material_photo_name": "Black-Thulu_HpNljRbCu39HZOhzrOvL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:32:17",
    "thumb": "1"
  },
  {
    "id": "3100",
    "material_id": "1103",
    "material_photo_name": "Black-Thunder_E3E0w3pCxuUcFzJmUKeP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 02:53:43",
    "thumb": "1"
  },
  {
    "id": "3102",
    "material_id": "430",
    "material_photo_name": "Azul-Macaubas_SuqeL4HAf2lnyDsOF4A1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:05:20",
    "thumb": "1"
  },
  {
    "id": "3104",
    "material_id": "479",
    "material_photo_name": "Old-Hall-Azul-Macaubas_jdBUjmof61mlOmuFcqKC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:10:48",
    "thumb": "1"
  },
  {
    "id": "3106",
    "material_id": "1063",
    "material_photo_name": "Blue-Bahia_bZLCrCzIH5OdodHHwaIb.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:18:02",
    "thumb": "1"
  },
  {
    "id": "3108",
    "material_id": "1024",
    "material_photo_name": "Blue-Dakota_ZIwTO2c5bjQj3D01u1lj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:25:02",
    "thumb": "1"
  },
  {
    "id": "3110",
    "material_id": "411",
    "material_photo_name": "Blue-Damasco_vMIY3YFDEHd98rZhjMBF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:28:48",
    "thumb": "1"
  },
  {
    "id": "3112",
    "material_id": "85",
    "material_photo_name": "Blue-Eyes_zheLx6elbQ9MqdiDMxM1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:32:50",
    "thumb": "1"
  },
  {
    "id": "3116",
    "material_id": "581",
    "material_photo_name": "Blue-Fire_VEZTOXXE35iaySg4tNrp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 03:47:00",
    "thumb": "1"
  },
  {
    "id": "3121",
    "material_id": "441",
    "material_photo_name": "Blue-Martinica_10X4AflnFmg05umgqyZo.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 03:53:52",
    "thumb": "1"
  },
  {
    "id": "3125",
    "material_id": "1067",
    "material_photo_name": "Blue-Night_zrFuKoRFNtBfrOVYXXEU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:00:47",
    "thumb": "1"
  },
  {
    "id": "3127",
    "material_id": "721",
    "material_photo_name": "Blue-Pearl-GT_x6XwAGEwE3gi7KMr1iLG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:02:55",
    "thumb": "1"
  },
  {
    "id": "3129",
    "material_id": "99",
    "material_photo_name": "Blues-in-the-Night_w3T90RMqSanDwUeovpI0.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-13 04:06:17",
    "thumb": "1"
  },
  {
    "id": "3131",
    "material_id": "922",
    "material_photo_name": "Bordeaux_tISxGR88uXYLZhOuDAHY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:08:36",
    "thumb": "1"
  },
  {
    "id": "3133",
    "material_id": "1090",
    "material_photo_name": "Bordeaux-Delicato_F4x4bbUZqcPSDWMbYJ8K.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:10:50",
    "thumb": "1"
  },
  {
    "id": "3139",
    "material_id": "191",
    "material_photo_name": "Brass-Blue_Oc6IFp8KRsylQ0yi2tDp.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:18:56",
    "thumb": "1"
  },
  {
    "id": "3141",
    "material_id": "1039",
    "material_photo_name": "Brown-Alpine_hcXMBhc4B0djvYPRjuM0.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:21:21",
    "thumb": "1"
  },
  {
    "id": "3143",
    "material_id": "303",
    "material_photo_name": "Brown-Antique_feGobqEtCGjgDFyLOQuL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:23:23",
    "thumb": "1"
  },
  {
    "id": "3145",
    "material_id": "587",
    "material_photo_name": "Brown-Fantasy_7sBesOXuHp3HrSSX5C80.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:25:27",
    "thumb": "1"
  },
  {
    "id": "3147",
    "material_id": "161",
    "material_photo_name": "Brown-Fish_eMLHxSqXQMg2a4MIbfeA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:27:40",
    "thumb": "1"
  },
  {
    "id": "3149",
    "material_id": "275",
    "material_photo_name": "Butterfly-Antique_Hms59QyheclmMbz4T3Xc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-13 04:29:35",
    "thumb": "1"
  },
  {
    "id": "3287",
    "material_id": "690",
    "material_photo_name": "Crema-Bordeaux_C3iIrfsAZTGVftFqFVLt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:28:04",
    "thumb": "1"
  },
  {
    "id": "3289",
    "material_id": "720",
    "material_photo_name": "Crema-Bordeaux_7cHjNIfPKDbugbK7tPYE.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 12:29:41",
    "thumb": "1"
  },
  {
    "id": "3291",
    "material_id": "728",
    "material_photo_name": "Crema-Espresso_tTA3uDqRLH1CXQzsUzm3.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 12:42:20",
    "thumb": "1"
  },
  {
    "id": "3320",
    "material_id": "1114",
    "material_photo_name": "Dynasty-Brown_zqlQzyT3ELcTKjwjiVGe.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:21:42",
    "thumb": "1"
  },
  {
    "id": "3326",
    "material_id": "641",
    "material_photo_name": "Eighteen-Carat-Gold_v404AD1rzITvzr94N1On.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:27:39",
    "thumb": "1"
  },
  {
    "id": "3328",
    "material_id": "149",
    "material_photo_name": "Elegant-Brown_sngwvjehl6uxQlqSgevH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:30:05",
    "thumb": "1"
  },
  {
    "id": "3329",
    "material_id": "1133",
    "material_photo_name": "quartzite_Elegant-Brown_2edSIlHpkbAoqjTvjE4a.jpg",
    "original_name": "ELEGANT_BROWN_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 02:34:23",
    "thumb": "0"
  },
  {
    "id": "3330",
    "material_id": "1133",
    "material_photo_name": "Elegant-Brown_RBUZLM6TGF4YCTfCkXci.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 02:35:33",
    "thumb": "1"
  },
  {
    "id": "3332",
    "material_id": "234",
    "material_photo_name": "Emerald-Quartzite-Dark_L6h9pnB1VOzikRt4Fprw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:37:26",
    "thumb": "1"
  },
  {
    "id": "4264",
    "material_id": "1097",
    "material_photo_name": "quartzite_Emerald-Quartzite-Dark_cCM2xs9TIUwj3Bb1znov.jpg",
    "original_name": "EMERALD_QUARTZITE_DARK_068L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 10:45:47",
    "thumb": "0"
  },
  {
    "id": "3336",
    "material_id": "1052",
    "material_photo_name": "Emperador-Golden_Sgcp7OUYnPj92C50Byx6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:41:54",
    "thumb": "1"
  },
  {
    "id": "3338",
    "material_id": "489",
    "material_photo_name": "Fantastic-White_AICrgqQzYOVGg1qKJQWw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 02:44:03",
    "thumb": "1"
  },
  {
    "id": "3352",
    "material_id": "1134",
    "material_photo_name": "Firenze-Yellow_LE7JYdcq6CedyrsYDyR6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:15:39",
    "thumb": "1"
  },
  {
    "id": "3354",
    "material_id": "207",
    "material_photo_name": "Florence-Gold_oDFlEMMVjjQW1kTjn2wf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:18:12",
    "thumb": "1"
  },
  {
    "id": "3356",
    "material_id": "1087",
    "material_photo_name": "Florence-Green_I6Pk3qqcxL1AcJdnxVoz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:24:17",
    "thumb": "1"
  },
  {
    "id": "3358",
    "material_id": "628",
    "material_photo_name": "Florence-Green_atLo2zJ8DWxJWJ3EkGoO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:26:49",
    "thumb": "1"
  },
  {
    "id": "3360",
    "material_id": "652",
    "material_photo_name": "Florencia-Bordeaux_yg2GepC3nqXcjjRNuapY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:29:08",
    "thumb": "1"
  },
  {
    "id": "3362",
    "material_id": "978",
    "material_photo_name": "Florida-Sunset_YTaXr6bNeczzuonY7mEx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:31:04",
    "thumb": "1"
  },
  {
    "id": "3364",
    "material_id": "385",
    "material_photo_name": "Fumo-Di-Londra_nL7u0kU4cCiYJks9ne5c.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:34:03",
    "thumb": "1"
  },
  {
    "id": "3366",
    "material_id": "703",
    "material_photo_name": "Galaxy-White_8ju0xJuco9ILmhw1MkHN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:36:32",
    "thumb": "1"
  },
  {
    "id": "3368",
    "material_id": "331",
    "material_photo_name": "Giallo-Antico_L86jzsMl1uFFno9EHaOK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:38:31",
    "thumb": "1"
  },
  {
    "id": "3370",
    "material_id": "625",
    "material_photo_name": "Giallo-Arctic_JyUbeC5phudLJXk6U5GL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:41:12",
    "thumb": "1"
  },
  {
    "id": "3375",
    "material_id": "292",
    "material_photo_name": "Giallo-Farfalla_72mPGz8mLtJSLVuCbzTH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:46:52",
    "thumb": "1"
  },
  {
    "id": "3377",
    "material_id": "982",
    "material_photo_name": "Giallo-Farfalla_pwXq2UvrHLWdqEmmKwiZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:48:52",
    "thumb": "1"
  },
  {
    "id": "3379",
    "material_id": "696",
    "material_photo_name": "Giallo-Fiesta_pqdmiSt5XKhpDOELci6N.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:51:04",
    "thumb": "1"
  },
  {
    "id": "3381",
    "material_id": "645",
    "material_photo_name": "Giallo-Firenza_fUXZG8J0K3JBbMgbg4r5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:53:50",
    "thumb": "1"
  },
  {
    "id": "3383",
    "material_id": "646",
    "material_photo_name": "Giallo-Firenza_b92XKXRpco2vezKDh81r.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:55:35",
    "thumb": "1"
  },
  {
    "id": "3385",
    "material_id": "208",
    "material_photo_name": "Giallo-Icarai_TGeDI24cugMf2su9N8nu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 03:58:26",
    "thumb": "1"
  },
  {
    "id": "3387",
    "material_id": "942",
    "material_photo_name": "Giallo-Monte-Carlo_b89hThF4pofBMLTYnFEY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 04:01:36",
    "thumb": "1"
  },
  {
    "id": "3417",
    "material_id": "130",
    "material_photo_name": "Giallo-Sole_xJACJb6UF21guAeJKjXO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:14:07",
    "thumb": "1"
  },
  {
    "id": "3419",
    "material_id": "644",
    "material_photo_name": "Giallo-Venezia_uhdbSn8wI7Y20z5YUDjj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:17:21",
    "thumb": "1"
  },
  {
    "id": "3425",
    "material_id": "555",
    "material_photo_name": "Giallo-Vicenza-Dark_mvhzpAa5h8jqu6mEhK69.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:26:44",
    "thumb": "1"
  },
  {
    "id": "3427",
    "material_id": "545",
    "material_photo_name": "Gold-Antique_mJXOfnP5p9Repr3eETs5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:29:31",
    "thumb": "1"
  },
  {
    "id": "4583",
    "material_id": "1135",
    "material_photo_name": "granite_Gold-Antique_JEU44trjlK2qXWw7YQ5b.jpg",
    "original_name": "GOLD_ANTIQUE_156L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:30:52",
    "thumb": "0"
  },
  {
    "id": "3429",
    "material_id": "1135",
    "material_photo_name": "Gold-Antique_HF6tYYbPLUwH3Wv4bBlX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:34:55",
    "thumb": "1"
  },
  {
    "id": "3431",
    "material_id": "1136",
    "material_photo_name": "granite_Gold-Antique_05elYu4tSwEqt6PDfSzn.jpg",
    "original_name": "GOLD_ANTIQUE_407L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:39:05",
    "thumb": "0"
  },
  {
    "id": "3432",
    "material_id": "1136",
    "material_photo_name": "Gold-Antique_OSnisRANYG45ECXfQJLt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:39:22",
    "thumb": "1"
  },
  {
    "id": "3433",
    "material_id": "1137",
    "material_photo_name": "granite_Gold-Antique_PBKq7jqYY7RRLwNxZ6U5.jpg",
    "original_name": "GOLD_ANTIQUE_418R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 05:41:25",
    "thumb": "0"
  },
  {
    "id": "3434",
    "material_id": "1137",
    "material_photo_name": "Gold-Antique_vhi5hmRuJhLnDVSirO80.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 05:42:54",
    "thumb": "1"
  },
  {
    "id": "3436",
    "material_id": "667",
    "material_photo_name": "Gold-Brasil_lH1DXUPTpU6dgYyqvuUW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:02:00",
    "thumb": "1"
  },
  {
    "id": "3440",
    "material_id": "272",
    "material_photo_name": "Gold-Brasil_8WrOQp8nHooA2ylMIgnl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:06:07",
    "thumb": "1"
  },
  {
    "id": "3442",
    "material_id": "618",
    "material_photo_name": "Gold-Crystal_eosfsKgi10WbnUelrhBB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:08:18",
    "thumb": "1"
  },
  {
    "id": "3450",
    "material_id": "919",
    "material_photo_name": "Golden-Beach-EX_CGDDvebgqV0x4LMJ4NAW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:18:05",
    "thumb": "1"
  },
  {
    "id": "3451",
    "material_id": "1138",
    "material_photo_name": "granite_Golden-Beach-EX_2wQw1NIn9umdD8IjMk4L.jpg",
    "original_name": "GOLDEN_BEACH_EX_124R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-14 07:23:30",
    "thumb": "0"
  },
  {
    "id": "3452",
    "material_id": "1138",
    "material_photo_name": "Golden-Beach-EX_jBPQZl5zoOQkbKxQlBZ5.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-14 07:24:49",
    "thumb": "1"
  },
  {
    "id": "3454",
    "material_id": "1042",
    "material_photo_name": "Golden-Butterfly_SvwBk9RoLkdzrnI6GkVB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:54:36",
    "thumb": "1"
  },
  {
    "id": "3456",
    "material_id": "241",
    "material_photo_name": "Golden-Bordeaux_HKXXI3YNQb6zbJa9eNSv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 07:56:54",
    "thumb": "1"
  },
  {
    "id": "3464",
    "material_id": "931",
    "material_photo_name": "Golden-Fantasy-Super_Ncz6GWmQEn3j64EdhrLV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:06:42",
    "thumb": "1"
  },
  {
    "id": "3466",
    "material_id": "171",
    "material_photo_name": "Golden-Fantasy_Uy0GXk0x7tl13lTUqCT5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:09:33",
    "thumb": "1"
  },
  {
    "id": "3468",
    "material_id": "520",
    "material_photo_name": "Golden-Field_735zXN7Bzgz8vQL5nNtW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:11:22",
    "thumb": "1"
  },
  {
    "id": "3470",
    "material_id": "531",
    "material_photo_name": "Golden-Flakes_nzuXZsaTDNYC116XCPpE.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:13:29",
    "thumb": "1"
  },
  {
    "id": "3472",
    "material_id": "605",
    "material_photo_name": "Golden-Jade_f1DVTGILc7c3ZjrsLlCI.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:16:53",
    "thumb": "1"
  },
  {
    "id": "3474",
    "material_id": "973",
    "material_photo_name": "Golden-Jade_9k7za7yxYg2AhTmHlO54.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:18:50",
    "thumb": "1"
  },
  {
    "id": "3476",
    "material_id": "928",
    "material_photo_name": "Golden-King_eGfl8llVHw2y07ACZgRK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:22:13",
    "thumb": "1"
  },
  {
    "id": "3478",
    "material_id": "278",
    "material_photo_name": "Golden-Leaf_VPckfPVpnYoB6xkvgfjC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:24:39",
    "thumb": "1"
  },
  {
    "id": "3480",
    "material_id": "959",
    "material_photo_name": "Golden-Noir_qseLHHJXC4oWHfuDtPEv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:26:20",
    "thumb": "1"
  },
  {
    "id": "3482",
    "material_id": "505",
    "material_photo_name": "Golden-Persa_Kvvs4OZCfar6seJ7d0wt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:31:28",
    "thumb": "1"
  },
  {
    "id": "3484",
    "material_id": "683",
    "material_photo_name": "Golden-Silver_bId6ZAWjrmv98WJ3pVB8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:35:13",
    "thumb": "1"
  },
  {
    "id": "3488",
    "material_id": "1085",
    "material_photo_name": "Golden-Valley-KG_tdFUB01Z8wDeetYAsctg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:42:20",
    "thumb": "1"
  },
  {
    "id": "3492",
    "material_id": "680",
    "material_photo_name": "Golden-Valley-KG_0VtpnGyf19SKwRrEdLHl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:49:11",
    "thumb": "1"
  },
  {
    "id": "3494",
    "material_id": "967",
    "material_photo_name": "Golden-Valley-KG_ou8AW9WnnxSlzCZJAPFV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:52:21",
    "thumb": "1"
  },
  {
    "id": "3499",
    "material_id": "141",
    "material_photo_name": "Golden-Valley-KG_BiU6sJcQKXIylQOWI00p.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-14 08:58:43",
    "thumb": "1"
  },
  {
    "id": "3507",
    "material_id": "282",
    "material_photo_name": "Gran-Perla_F6cu222pmcOuvazjaSoX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:29:42",
    "thumb": "1"
  },
  {
    "id": "4312",
    "material_id": "288",
    "material_photo_name": "Juparana-Exotica_UnxjA2AtFZ8syb7nxcw4.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-30 02:29:25",
    "thumb": "1"
  },
  {
    "id": "3511",
    "material_id": "750",
    "material_photo_name": "Green-Galaxy_Muf5goYpBEpAwG8rzmWS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:34:47",
    "thumb": "1"
  },
  {
    "id": "3513",
    "material_id": "1119",
    "material_photo_name": "Green-Jadeite_oUXND8IaYmZgF16KvATK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:37:39",
    "thumb": "1"
  },
  {
    "id": "3515",
    "material_id": "570",
    "material_photo_name": "Green-Ocean_skGODd5CUOerDNt5U6jP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:39:43",
    "thumb": "1"
  },
  {
    "id": "3517",
    "material_id": "1115",
    "material_photo_name": "Green-Peace_i4dTmnbAeUuXbVwnvmjO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:41:28",
    "thumb": "1"
  },
  {
    "id": "3519",
    "material_id": "710",
    "material_photo_name": "Green-Saragossa_63lyVqGH552ZjseAe15Y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:43:48",
    "thumb": "1"
  },
  {
    "id": "3522",
    "material_id": "643",
    "material_photo_name": "Green-Soapstone_6j2EDF2sfBWKH8QWdcQM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:49:01",
    "thumb": "1"
  },
  {
    "id": "3524",
    "material_id": "485",
    "material_photo_name": "Green-Soapstone_zQ9fTAjFmmNVtXas8tx9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:50:53",
    "thumb": "1"
  },
  {
    "id": "3526",
    "material_id": "658",
    "material_photo_name": "Harvest-Cream_tXgPQzPvzneIt2XbzDhl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:53:21",
    "thumb": "1"
  },
  {
    "id": "3528",
    "material_id": "319",
    "material_photo_name": "Honey-Onyx_6JGnpxLo9gSatH7G0Xyc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 09:54:48",
    "thumb": "1"
  },
  {
    "id": "3533",
    "material_id": "933",
    "material_photo_name": "Ibere-Crema-Bordeaux_wNskKXe52LzWMt7pz7kr.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-11-15 10:01:32",
    "thumb": "1"
  },
  {
    "id": "3532",
    "material_id": "964",
    "material_photo_name": "Ibere-Creama-Bordeaux-Light_NvMqO2YT4ahmXO4PFu5V.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:00:34",
    "thumb": "1"
  },
  {
    "id": "3535",
    "material_id": "1056",
    "material_photo_name": "Ice-Sugar-Onyx_rXjOwK5TqckDamGiJZ1y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:03:38",
    "thumb": "1"
  },
  {
    "id": "3537",
    "material_id": "676",
    "material_photo_name": "Ice-White_gAj4i65dBqkXA7Z3tIRj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:11:54",
    "thumb": "1"
  },
  {
    "id": "3539",
    "material_id": "993",
    "material_photo_name": "Ilhabella_IQgsbFXeuymNwHdAxZrf.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:13:53",
    "thumb": "1"
  },
  {
    "id": "3541",
    "material_id": "1100",
    "material_photo_name": "Imperial-Brown_a1ZSLd8M7FDWFmkLR6GT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:21:09",
    "thumb": "1"
  },
  {
    "id": "3547",
    "material_id": "1139",
    "material_photo_name": "Imperial-Coffee_uR33EKAOsQIFEnN3N8k5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:31:34",
    "thumb": "1"
  },
  {
    "id": "3549",
    "material_id": "962",
    "material_photo_name": "Imperial-Gold_TCW9Ug1jWgs9urd3B40A.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:33:26",
    "thumb": "1"
  },
  {
    "id": "3551",
    "material_id": "210",
    "material_photo_name": "Imperial-Gold_d6mGckn5RHM5kwxNUwsW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:35:37",
    "thumb": "1"
  },
  {
    "id": "3553",
    "material_id": "609",
    "material_photo_name": "Imperial-Green_HszCQCYIeQd37xtAD1rH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:37:57",
    "thumb": "1"
  },
  {
    "id": "3555",
    "material_id": "142",
    "material_photo_name": "Itaunas-White_3qGEXyw4rESSOoOhIJg3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:39:36",
    "thumb": "1"
  },
  {
    "id": "3559",
    "material_id": "920",
    "material_photo_name": "Ivory-Brown_PFjZRrSfdNd9EwRHp9m1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:52:14",
    "thumb": "1"
  },
  {
    "id": "3561",
    "material_id": "216",
    "material_photo_name": "Ivory-Fantasy_rwL4gSQx1Rlh9VKIjfBW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 10:54:06",
    "thumb": "1"
  },
  {
    "id": "3568",
    "material_id": "601",
    "material_photo_name": "Ivory-White_1QMIk9GcDx4I2JAWhnyP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:04:31",
    "thumb": "1"
  },
  {
    "id": "3570",
    "material_id": "1060",
    "material_photo_name": "Jade-Green-Slate_guEqgQmo82Bo4Tmtnpcu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:06:37",
    "thumb": "1"
  },
  {
    "id": "3572",
    "material_id": "264",
    "material_photo_name": "Jaguar_BkPAD6CTbPaO02R2DBym.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:10:34",
    "thumb": "1"
  },
  {
    "id": "3574",
    "material_id": "995",
    "material_photo_name": "Jaguar_zYpnZSGewbKYl5S6U7af.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:13:27",
    "thumb": "1"
  },
  {
    "id": "3576",
    "material_id": "285",
    "material_photo_name": "Jerusalem-Gold_cd4wL44ty1HlDcYV9RgM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:16:14",
    "thumb": "1"
  },
  {
    "id": "3578",
    "material_id": "391",
    "material_photo_name": "Jerusalem-White_JXJRv9BdTi7nkeX9lPDU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:20:10",
    "thumb": "1"
  },
  {
    "id": "3580",
    "material_id": "367",
    "material_photo_name": "Jerusalem-White_kT0KUsJXJuym6eXgXza2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-15 11:23:39",
    "thumb": "1"
  },
  {
    "id": "3582",
    "material_id": "923",
    "material_photo_name": "Jet-Green_ykZR7YouG5vRxUQhWt8N.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:36:17",
    "thumb": "1"
  },
  {
    "id": "3590",
    "material_id": "533",
    "material_photo_name": "Jungle-Green_7PDVoXEZaYXXnRWuFp2T.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:50:41",
    "thumb": "1"
  },
  {
    "id": "3592",
    "material_id": "921",
    "material_photo_name": "Juparana-Champagne_W4TVQoSsut7NkVu3dLXD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 08:53:58",
    "thumb": "1"
  },
  {
    "id": "3598",
    "material_id": "133",
    "material_photo_name": "Juparana-Exotica-Super_Es2Lmz1IrAHD8RAzs2h7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:01:14",
    "thumb": "1"
  },
  {
    "id": "3600",
    "material_id": "619",
    "material_photo_name": "Juparana-Golden-Khan_dglVvbgMhyB3KZfOOcoN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:03:17",
    "thumb": "1"
  },
  {
    "id": "3602",
    "material_id": "254",
    "material_photo_name": "Juparana-Imperial_b2B5OcyUY1Mt80GN0hba.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:04:55",
    "thumb": "1"
  },
  {
    "id": "3604",
    "material_id": "525",
    "material_photo_name": "Juparana-Nathalia_Fxo3CERfNp9abf3xbdYW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:06:58",
    "thumb": "1"
  },
  {
    "id": "3606",
    "material_id": "974",
    "material_photo_name": "Juparana-Oro_4m8LbTxS5yduVsRbwnHO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:08:44",
    "thumb": "1"
  },
  {
    "id": "3611",
    "material_id": "650",
    "material_photo_name": "Juparana-Persa_bkaAtVZgYG4IzceydVw7.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:16:37",
    "thumb": "1"
  },
  {
    "id": "3613",
    "material_id": "338",
    "material_photo_name": "Juparana-Persia_0UdSDZhmXhB1Lse3m4QC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:18:46",
    "thumb": "1"
  },
  {
    "id": "3615",
    "material_id": "134",
    "material_photo_name": "Juparana-Vyara_Sa4IiloaIeGEGtP7dhEg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:20:58",
    "thumb": "1"
  },
  {
    "id": "4287",
    "material_id": "424",
    "material_photo_name": "Juparana-Gold_68KNfsNCNa9NZgCQUMK5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-26 01:31:51",
    "thumb": "1"
  },
  {
    "id": "3621",
    "material_id": "586",
    "material_photo_name": "Karoo-Beige_ev9VvOJ2Wc3WlSNxbj3X.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:28:58",
    "thumb": "1"
  },
  {
    "id": "3623",
    "material_id": "565",
    "material_photo_name": "Kashmir-Beige_CGXpYPQUgBo82XF8nDvk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:33:19",
    "thumb": "1"
  },
  {
    "id": "3625",
    "material_id": "356",
    "material_photo_name": "Kashmir-Beige_aoL4SkYH9Vx5NB5GP2AJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:35:02",
    "thumb": "1"
  },
  {
    "id": "3627",
    "material_id": "927",
    "material_photo_name": "Kashmir-Gold_Dhet9eqf8WEHzjcDeJqW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:37:36",
    "thumb": "1"
  },
  {
    "id": "3629",
    "material_id": "372",
    "material_photo_name": "Kashmir-Gold_5bsFdxus2GEGjDyrXxzc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:39:41",
    "thumb": "1"
  },
  {
    "id": "3631",
    "material_id": "308",
    "material_photo_name": "Kashmir-White_pPeg49ujqTpsTRtOJBij.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:42:25",
    "thumb": "1"
  },
  {
    "id": "3632",
    "material_id": "1140",
    "material_photo_name": "granite_Kashmir-White_gY1EB8Al3JPNLhI4wcwD.jpg",
    "original_name": "KASHMIR_WHITE_114L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 09:46:21",
    "thumb": "0"
  },
  {
    "id": "3633",
    "material_id": "1140",
    "material_photo_name": "Kashmir-White_qBX2rXjnmmDuuwJ68AkN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:47:51",
    "thumb": "1"
  },
  {
    "id": "3635",
    "material_id": "1032",
    "material_photo_name": "Key-West-Gold_1XamN2jTGkwRMxB6wlGA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:51:01",
    "thumb": "1"
  },
  {
    "id": "3637",
    "material_id": "1120",
    "material_photo_name": "Kodiak_EISW4nEvEavEkrqkCYNn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:53:35",
    "thumb": "1"
  },
  {
    "id": "3639",
    "material_id": "1098",
    "material_photo_name": "Kosmus_LEDt8Jh11KKYWtIoWgSU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:56:47",
    "thumb": "1"
  },
  {
    "id": "3641",
    "material_id": "352",
    "material_photo_name": "Kosmus_mtzZtD2ucLqMLvt5tEnw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 09:59:04",
    "thumb": "1"
  },
  {
    "id": "3643",
    "material_id": "532",
    "material_photo_name": "Labrador-Bianca_X1kRvN1vmKax7fFJj1XK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:00:57",
    "thumb": "1"
  },
  {
    "id": "3645",
    "material_id": "437",
    "material_photo_name": "Labrador-Blue_BVCNMNHvHMSMmnBYLMVH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:03:22",
    "thumb": "1"
  },
  {
    "id": "3647",
    "material_id": "917",
    "material_photo_name": "Labradorite-Green_oU9fNhvGaaTaGyZt7XSn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:05:18",
    "thumb": "1"
  },
  {
    "id": "3649",
    "material_id": "599",
    "material_photo_name": "Lady-Dream_ioU7pF3N7mOH9dAfwRb2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:09:34",
    "thumb": "1"
  },
  {
    "id": "3651",
    "material_id": "975",
    "material_photo_name": "Lapidus_fxMEYwWmUBBupeMk7byL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:14:23",
    "thumb": "1"
  },
  {
    "id": "3652",
    "material_id": "1141",
    "material_photo_name": "granite_Lapidus_u58k2h5lYtlhEKNrZRvO.jpg",
    "original_name": "LAPIDUS_189R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:19:50",
    "thumb": "0"
  },
  {
    "id": "3653",
    "material_id": "1141",
    "material_photo_name": "Lapidus_gjQxFOULQ3EzISyThJ2g.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:21:21",
    "thumb": "1"
  },
  {
    "id": "4585",
    "material_id": "1142",
    "material_photo_name": "granite_Lapidus_iDA4f3fouer3FcVBYkeR.jpg",
    "original_name": "LAPIDUS_801L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2016-03-04 10:33:05",
    "thumb": "0"
  },
  {
    "id": "3655",
    "material_id": "1142",
    "material_photo_name": "Lapidus_DMjQoPrxtxSkyo3nMviG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:26:17",
    "thumb": "1"
  },
  {
    "id": "3656",
    "material_id": "1143",
    "material_photo_name": "granite_Lapidus_2FG3MfFmLeKhALhkKX6u.jpg",
    "original_name": "LAPIDUS_908L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 10:29:15",
    "thumb": "0"
  },
  {
    "id": "3658",
    "material_id": "1143",
    "material_photo_name": "Lapidus_lCTr6JhNOvFsqkGYIEUK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:30:53",
    "thumb": "1"
  },
  {
    "id": "3660",
    "material_id": "307",
    "material_photo_name": "Lapidus-Classic_3Q3xaBTQZXbXCPyYEBWr.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:32:52",
    "thumb": "1"
  },
  {
    "id": "3662",
    "material_id": "1080",
    "material_photo_name": "Lapidus-Classic_nKnwAuMQOQAWXre3yRuC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:35:44",
    "thumb": "1"
  },
  {
    "id": "3665",
    "material_id": "695",
    "material_photo_name": "Lapidus-Gold_amTEVdar5mZ31nH7I30g.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:39:24",
    "thumb": "1"
  },
  {
    "id": "3667",
    "material_id": "289",
    "material_photo_name": "Lava-Jewel_KfUzXtlp6NWN6p081rav.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:45:16",
    "thumb": "1"
  },
  {
    "id": "3669",
    "material_id": "1004",
    "material_photo_name": "Light-Green-Onyx_okZyHxWpAo1qD2kvfFA1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:46:51",
    "thumb": "1"
  },
  {
    "id": "3671",
    "material_id": "996",
    "material_photo_name": "Light-Pistachio_BGVP5z8FwazDgkHvfQfu.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:49:16",
    "thumb": "1"
  },
  {
    "id": "3673",
    "material_id": "1072",
    "material_photo_name": "Light-Pistachio_fsZx3t4lx0A1Wqi75ikq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:50:28",
    "thumb": "1"
  },
  {
    "id": "3675",
    "material_id": "956",
    "material_photo_name": "Macadamia_nCgWT6ZKVjEWw6VCwGed.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 10:54:09",
    "thumb": "1"
  },
  {
    "id": "3685",
    "material_id": "1099",
    "material_photo_name": "Magma-Bordeaux_tGDhX7jGMm7bEnWtJTfg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:08:58",
    "thumb": "1"
  },
  {
    "id": "3687",
    "material_id": "471",
    "material_photo_name": "Magma-Gold_ov9PnQakWJNhgRbFUpGW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:10:53",
    "thumb": "1"
  },
  {
    "id": "4276",
    "material_id": "508",
    "material_photo_name": "granite_Magnificent-White_HBCsbynvIyX6piATjEdv.jpg",
    "original_name": "MAGNIFICENT_WHITE_SELECT_208L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-19 11:47:02",
    "thumb": "0"
  },
  {
    "id": "3691",
    "material_id": "1084",
    "material_photo_name": "Manhattan_KPEilRYIMvCEAIwdTm5A.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:16:53",
    "thumb": "1"
  },
  {
    "id": "3693",
    "material_id": "968",
    "material_photo_name": "Manhattan_h5xheUh4EpywttxOBMRc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 11:24:43",
    "thumb": "1"
  },
  {
    "id": "3695",
    "material_id": "568",
    "material_photo_name": "Marinace_t6ugfgm1fCmWhQcE7wld.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 12:04:06",
    "thumb": "1"
  },
  {
    "id": "3697",
    "material_id": "1101",
    "material_photo_name": "Marinus_9yLUVITbdlAEJd5ju3li.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 12:06:25",
    "thumb": "1"
  },
  {
    "id": "3699",
    "material_id": "1110",
    "material_photo_name": "Marmo-Onyx-Blue_o8DeO8VGkd4C2gFPdZ4q.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 12:09:29",
    "thumb": "1"
  },
  {
    "id": "3701",
    "material_id": "1002",
    "material_photo_name": "Marmo-Onyx-Green_VtnpwkapQvTOT2maFTaC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 12:11:08",
    "thumb": "1"
  },
  {
    "id": "3705",
    "material_id": "955",
    "material_photo_name": "Mascarello_vvxYgpIUsjlLS37aKKAt.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:12:49",
    "thumb": "1"
  },
  {
    "id": "3707",
    "material_id": "635",
    "material_photo_name": "Matrix_92iWrrrNYPOb2Jtlgnws.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:17:28",
    "thumb": "1"
  },
  {
    "id": "3709",
    "material_id": "678",
    "material_photo_name": "Matrix_g7XHiaWu190HqtOkhhOC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:19:08",
    "thumb": "1"
  },
  {
    "id": "3711",
    "material_id": "1019",
    "material_photo_name": "Medusa_7q8rhiCp0SMvws4fEDFn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:20:50",
    "thumb": "1"
  },
  {
    "id": "3713",
    "material_id": "1029",
    "material_photo_name": "Milky-White_KxO73EFq1awJm1jMwAs1.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:25:00",
    "thumb": "1"
  },
  {
    "id": "3715",
    "material_id": "991",
    "material_photo_name": "Millenium-Creme_fgS9RCMbpik7frPCv4bs.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:27:21",
    "thumb": "1"
  },
  {
    "id": "3717",
    "material_id": "503",
    "material_photo_name": "Moksha-Gold_O7dct2pDxz4pxWYo2Hdr.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:29:53",
    "thumb": "1"
  },
  {
    "id": "3720",
    "material_id": "1145",
    "material_photo_name": "limestone_Moleanos_0UgK0dM3SUTkojya0WHV.jpg",
    "original_name": "MOLEANOS_LIMESTONE_015L_HONED_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 01:38:43",
    "thumb": "0"
  },
  {
    "id": "3721",
    "material_id": "1145",
    "material_photo_name": "Moleanos_RYNEl6YTr69s4xZtP3xZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:40:07",
    "thumb": "1"
  },
  {
    "id": "3723",
    "material_id": "732",
    "material_photo_name": "Mont-Blanc_VQo4oOL65YOC747fGtCe.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:42:50",
    "thumb": "1"
  },
  {
    "id": "3727",
    "material_id": "748",
    "material_photo_name": "Mont-Noir_qNExgK6bFMMHGmfo6sdv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:48:05",
    "thumb": "1"
  },
  {
    "id": "3729",
    "material_id": "984",
    "material_photo_name": "Monte-Carlo_N034VGPOBvzL4lhcr9on.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:51:41",
    "thumb": "1"
  },
  {
    "id": "3731",
    "material_id": "175",
    "material_photo_name": "Mountain-White-Danby_3M287ah8NRRsezwZh776.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:53:27",
    "thumb": "1"
  },
  {
    "id": "3733",
    "material_id": "105",
    "material_photo_name": "Namibian-Gold_9OLiN8jsft3crPDhWhdN.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:56:36",
    "thumb": "1"
  },
  {
    "id": "3735",
    "material_id": "1043",
    "material_photo_name": "Nano-Crystalized-Glass_sy7xWbJbzlZlxYPpCS70.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 01:58:14",
    "thumb": "1"
  },
  {
    "id": "3737",
    "material_id": "378",
    "material_photo_name": "Napoleone-Gold_yGYdcdJFt7bhx0uLbJ1v.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:00:28",
    "thumb": "1"
  },
  {
    "id": "3739",
    "material_id": "427",
    "material_photo_name": "Negresco_PhoVkNmoU5uFJy5x4dPR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:01:48",
    "thumb": "1"
  },
  {
    "id": "3741",
    "material_id": "1118",
    "material_photo_name": "Nero-Marquina_Qk31MCW2wkMlfnppNt4R.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 02:03:37",
    "thumb": "1"
  },
  {
    "id": "3781",
    "material_id": "110",
    "material_photo_name": "New-Tunas_YF6zijax45PdgCdGgnWT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:39:57",
    "thumb": "1"
  },
  {
    "id": "3783",
    "material_id": "497",
    "material_photo_name": "New-Venetian-Gold-C-Leather_1RkAjtE05RinmhuQIHov.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:42:34",
    "thumb": "1"
  },
  {
    "id": "3785",
    "material_id": "541",
    "material_photo_name": "Niagara-Gold_74gSXHz3aHFhp5uqy2xm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:45:45",
    "thumb": "1"
  },
  {
    "id": "3791",
    "material_id": "1048",
    "material_photo_name": "Norm-White-Onyx_4jD8bghp50N4YNa0uuOv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:53:21",
    "thumb": "1"
  },
  {
    "id": "3793",
    "material_id": "1122",
    "material_photo_name": "Notturno-Gold_wBus1ymiORrThaJF9Uij.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:55:13",
    "thumb": "1"
  },
  {
    "id": "3795",
    "material_id": "1078",
    "material_photo_name": "Van-Gogh_cOnFLZeZCFkvqdKJ4QCr.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:57:08",
    "thumb": "1"
  },
  {
    "id": "3797",
    "material_id": "235",
    "material_photo_name": "Onice-Avorio_OwuhXjxEo4ET529Yz0Bv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 03:58:59",
    "thumb": "1"
  },
  {
    "id": "3799",
    "material_id": "1053",
    "material_photo_name": "Onice-Smeraldo_FMVLpKGHshn68RJYhIM3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:01:51",
    "thumb": "1"
  },
  {
    "id": "3801",
    "material_id": "1061",
    "material_photo_name": "Onice-Smoke_MHIPe3KRmWRMvG9livWT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:03:55",
    "thumb": "1"
  },
  {
    "id": "3803",
    "material_id": "1062",
    "material_photo_name": "Onice-Stratos_xvNccDdZ0mrwduP0GHgn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:06:52",
    "thumb": "1"
  },
  {
    "id": "3805",
    "material_id": "230",
    "material_photo_name": "Onice-Tanzania-Dark_91JCuSvYNvQpHvbVRRIY.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:09:32",
    "thumb": "1"
  },
  {
    "id": "3806",
    "material_id": "1146",
    "material_photo_name": "onyx_Onice-Tanzania-Dark_S1iPXkgfLQiYBibclFYV.jpg",
    "original_name": "ONICE_TANZANIA_DARK_ONYX_070R_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 04:12:42",
    "thumb": "0"
  },
  {
    "id": "3807",
    "material_id": "1146",
    "material_photo_name": "Onice-Tanzania-Dark_l8tWrfYK1jcM93F46aE2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:14:34",
    "thumb": "1"
  },
  {
    "id": "3809",
    "material_id": "1047",
    "material_photo_name": "Onice-Tanzania-Light_5bQCPqhVv0zf9AQ1Osur.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:16:42",
    "thumb": "1"
  },
  {
    "id": "3811",
    "material_id": "687",
    "material_photo_name": "Original-Peacock-Green_vTdFyeWrjST3FAVzRY3l.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:18:48",
    "thumb": "1"
  },
  {
    "id": "3815",
    "material_id": "989",
    "material_photo_name": "Orion_234t6Fi1xLcVz7MN4CQC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:26:43",
    "thumb": "1"
  },
  {
    "id": "3817",
    "material_id": "1109",
    "material_photo_name": "Orion-Gold_coKaaHrzllZzYRtti9NG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:28:48",
    "thumb": "1"
  },
  {
    "id": "3819",
    "material_id": "1116",
    "material_photo_name": "Orite_4iuLbY4xNnTA2EA0wjJq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:30:28",
    "thumb": "1"
  },
  {
    "id": "3821",
    "material_id": "918",
    "material_photo_name": "Oscuro-Mist_Qdpa9NLiDKpNZuwiT5Qm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:34:04",
    "thumb": "1"
  },
  {
    "id": "3825",
    "material_id": "114",
    "material_photo_name": "Oxford-White_VSsDuC7aO6ha8pPEHaJK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:37:31",
    "thumb": "1"
  },
  {
    "id": "3827",
    "material_id": "925",
    "material_photo_name": "Paradiso_Eg0lK2jd8wjswpzrlbFg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:39:20",
    "thumb": "1"
  },
  {
    "id": "3829",
    "material_id": "366",
    "material_photo_name": "Paradiso-Bash_ybKreED16SEqZTj0Zm9r.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:42:49",
    "thumb": "1"
  },
  {
    "id": "3831",
    "material_id": "425",
    "material_photo_name": "Paradiso-Classic_G0oMx10o5m6A4iIaQeru.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:44:52",
    "thumb": "1"
  },
  {
    "id": "3833",
    "material_id": "712",
    "material_photo_name": "Penta-Gold_4iOD936wVSX3OLEVb9oV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:47:18",
    "thumb": "1"
  },
  {
    "id": "3835",
    "material_id": "462",
    "material_photo_name": "Peregrine_9GhCvc2mwT2vmsPhrlTS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 04:57:01",
    "thumb": "1"
  },
  {
    "id": "3837",
    "material_id": "1083",
    "material_photo_name": "Peregrine-C_BFm3nhL32zaoX4eaLGCS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:02:42",
    "thumb": "1"
  },
  {
    "id": "3839",
    "material_id": "638",
    "material_photo_name": "Peregrine-C_Zzr6s7OxT4VUh5PPPSC8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:05:37",
    "thumb": "1"
  },
  {
    "id": "3841",
    "material_id": "727",
    "material_photo_name": "Peregrine-C_DjHXbvf6YBLh5BkWraQQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:08:02",
    "thumb": "1"
  },
  {
    "id": "3846",
    "material_id": "1148",
    "material_photo_name": "granite_Peregrine-C_CD609etMrw4TABx1y6su.jpg",
    "original_name": "PEREGRINE_C_1007L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:20:02",
    "thumb": "0"
  },
  {
    "id": "3844",
    "material_id": "1147",
    "material_photo_name": "granite_Peregrine-C_z2vUK5eUN0iUMWQYIOVg.jpg",
    "original_name": "PEREGRINE_C_827R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:17:19",
    "thumb": "0"
  },
  {
    "id": "3845",
    "material_id": "1147",
    "material_photo_name": "Peregrine-C_IJAwxb8cFmpSODRCRgac.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:18:14",
    "thumb": "1"
  },
  {
    "id": "3847",
    "material_id": "1148",
    "material_photo_name": "Peregrine-C_EDTiQ7cMP1zKacR5Dh5l.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:20:21",
    "thumb": "1"
  },
  {
    "id": "3849",
    "material_id": "631",
    "material_photo_name": "Peregrine-Gold_gKmkPcm3jXEqhttYljQL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:23:07",
    "thumb": "1"
  },
  {
    "id": "3851",
    "material_id": "395",
    "material_photo_name": "Peregrine-Gold_1bf5z1goKMTZ6g7aOHiH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:25:17",
    "thumb": "1"
  },
  {
    "id": "3853",
    "material_id": "675",
    "material_photo_name": "Persa-Avorio_pavFKm0WVNHL0w3yiKZJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:27:57",
    "thumb": "1"
  },
  {
    "id": "3855",
    "material_id": "943",
    "material_photo_name": "Persa-Blue-Leather_deK8ANmb8g4lvH1Q5Kku.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:30:33",
    "thumb": "1"
  },
  {
    "id": "3859",
    "material_id": "1092",
    "material_photo_name": "Picasso-Quartzite_5uF5XgemrNxaaRc5xvoW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:36:45",
    "thumb": "1"
  },
  {
    "id": "3860",
    "material_id": "1149",
    "material_photo_name": "quartzite_Picasso-Quartzite_qSulPacyGN2XMZN0YWyg.jpg",
    "original_name": "PICASSO_QUARTZITE_069L_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:41:50",
    "thumb": "0"
  },
  {
    "id": "3861",
    "material_id": "1149",
    "material_photo_name": "Picasso-Quartzite_B8pG4Y83yakGkpFbUylV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:43:07",
    "thumb": "1"
  },
  {
    "id": "3863",
    "material_id": "1095",
    "material_photo_name": "Picasso-Quartzite_FcoVCYZslIX7Omv8lDZL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:45:07",
    "thumb": "1"
  },
  {
    "id": "3864",
    "material_id": "1150",
    "material_photo_name": "quartzite_Picasso-Quartzite_obDfITBJ35VszJimu125.jpg",
    "original_name": "PICASSO_QUARTZITE_M100_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-16 05:47:50",
    "thumb": "0"
  },
  {
    "id": "3865",
    "material_id": "1150",
    "material_photo_name": "Picasso-Quartzite_shEDP4FI5FRJLMhmLy5f.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:48:42",
    "thumb": "1"
  },
  {
    "id": "3867",
    "material_id": "1028",
    "material_photo_name": "Pietra-Imperiale_nvPU3e0CZlOYpIErMn0i.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:51:59",
    "thumb": "1"
  },
  {
    "id": "3869",
    "material_id": "1113",
    "material_photo_name": "Platinum-Bahia_KcO4BFM32ZkqA6bqj32S.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:54:02",
    "thumb": "1"
  },
  {
    "id": "3871",
    "material_id": "716",
    "material_photo_name": "Platinum-Pearl_PrJ7DwpaPcki85S2Ghob.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:56:35",
    "thumb": "1"
  },
  {
    "id": "3873",
    "material_id": "972",
    "material_photo_name": "Polar-Ice_wpJepTS0Q5iw1o293xTK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 05:59:08",
    "thumb": "1"
  },
  {
    "id": "3875",
    "material_id": "215",
    "material_photo_name": "Polar-Ice_y60lo76Cn4cGJwyx1T9m.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:01:20",
    "thumb": "1"
  },
  {
    "id": "3877",
    "material_id": "1121",
    "material_photo_name": "Porto-Rosa_3RCKJO50SN2aSsi9bT6G.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:05:54",
    "thumb": "1"
  },
  {
    "id": "3879",
    "material_id": "420",
    "material_photo_name": "Portoro-Genuine-Extra_zKufJ2EMGDnDkPD9ySoX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:08:03",
    "thumb": "1"
  },
  {
    "id": "3881",
    "material_id": "1026",
    "material_photo_name": "Purangaw-Guara_wvdYXye45pwQjHYcG30Y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:10:38",
    "thumb": "1"
  },
  {
    "id": "3883",
    "material_id": "636",
    "material_photo_name": "Purangaw-Ipe_MFw8Vg6WvDOWyZc8nKzi.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:12:40",
    "thumb": "1"
  },
  {
    "id": "3885",
    "material_id": "999",
    "material_photo_name": "Quartzite-Brown_bYVNbW3FR9Q0FX0nRt3V.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:14:43",
    "thumb": "1"
  },
  {
    "id": "3887",
    "material_id": "539",
    "material_photo_name": "Raggio-Di-Sole_H7wuCvsz4EzgazSiz1M2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:16:51",
    "thumb": "1"
  },
  {
    "id": "3889",
    "material_id": "1003",
    "material_photo_name": "Rainbow-Onyx_72rRfsbZPcqlAgmrY8Rk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:21:21",
    "thumb": "1"
  },
  {
    "id": "3891",
    "material_id": "404",
    "material_photo_name": "Rainforest-Brown_u9kaadXVMzJ0qGSZ9PXg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:22:56",
    "thumb": "1"
  },
  {
    "id": "3893",
    "material_id": "297",
    "material_photo_name": "Rainforest-Green_uTywumu0wMmwNXGGTKag.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:25:21",
    "thumb": "1"
  },
  {
    "id": "3895",
    "material_id": "344",
    "material_photo_name": "Red-Bahia_aZnRShsKwCu7XpaAW8Ou.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:28:17",
    "thumb": "1"
  },
  {
    "id": "3897",
    "material_id": "248",
    "material_photo_name": "Red-Dragon_xnlV8coorA3OaGcJSZQO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:30:32",
    "thumb": "1"
  },
  {
    "id": "3899",
    "material_id": "484",
    "material_photo_name": "Red-Flash_b5gYagKRmfj7c6gDS0rU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:32:02",
    "thumb": "1"
  },
  {
    "id": "3901",
    "material_id": "1066",
    "material_photo_name": "Red-Jasper_lpX1t4mBCBe5JXTuWuKn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:33:50",
    "thumb": "1"
  },
  {
    "id": "3903",
    "material_id": "115",
    "material_photo_name": "Red-Ravel_4ygLW4md0sYwBwALHw3a.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:36:07",
    "thumb": "1"
  },
  {
    "id": "3905",
    "material_id": "1108",
    "material_photo_name": "River-Gold_kosbv6S0t6JGYKaGwdkg.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-16 06:39:02",
    "thumb": "1"
  },
  {
    "id": "3959",
    "material_id": "673",
    "material_photo_name": "Santa-Cecilia_gKMl9BkNht9xYSdCu8UD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:33:23",
    "thumb": "1"
  },
  {
    "id": "3961",
    "material_id": "957",
    "material_photo_name": "Santa-Cecilia_tlqmnG2XYlsvDP2dQ4fq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:36:00",
    "thumb": "1"
  },
  {
    "id": "3963",
    "material_id": "118",
    "material_photo_name": "Santa-Cecilia_Croi6uqw0FPGuRLqpU1y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:37:53",
    "thumb": "1"
  },
  {
    "id": "3965",
    "material_id": "670",
    "material_photo_name": "Santa-Cecilia-Brasil_scUjvLFvl2QPuQGDXEFC.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:40:31",
    "thumb": "1"
  },
  {
    "id": "3973",
    "material_id": "965",
    "material_photo_name": "Santa-Cecilia-Real_FlWLqLDKcuVt1VqgEU3q.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:51:52",
    "thumb": "1"
  },
  {
    "id": "3975",
    "material_id": "540",
    "material_photo_name": "Sapphire-Blue_lKuwEPm5mWAoKd7x4qwn.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:56:35",
    "thumb": "1"
  },
  {
    "id": "3977",
    "material_id": "733",
    "material_photo_name": "Sapphire-Blue_Auju9dwbLNi7q4EJXuda.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 10:58:24",
    "thumb": "1"
  },
  {
    "id": "3979",
    "material_id": "121",
    "material_photo_name": "Sea-Pearl_TcrauFMInBQ6gdWorvR6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:00:19",
    "thumb": "1"
  },
  {
    "id": "3981",
    "material_id": "261",
    "material_photo_name": "Sea-Wave_kmZEBDqdYJMZY8jDLnSV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:02:05",
    "thumb": "1"
  },
  {
    "id": "3983",
    "material_id": "221",
    "material_photo_name": "Sedna_JH3KOSo9NFCY3Ku4r5A5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:04:19",
    "thumb": "1"
  },
  {
    "id": "3985",
    "material_id": "429",
    "material_photo_name": "Sequoia-Brown_2sGfoSkvU9pBkxFbT4Xy.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:07:17",
    "thumb": "1"
  },
  {
    "id": "3986",
    "material_id": "1153",
    "material_photo_name": "granite_Sequoia-Brown_gGIFiCAmcxIhiehx09r5.jpg",
    "original_name": "SEQUOIA_BROWN_LEATHER_350L_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 11:09:56",
    "thumb": "0"
  },
  {
    "id": "3987",
    "material_id": "1153",
    "material_photo_name": "Sequoia-Brown_kUQ0mMULAyrmoOWfhIBw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:10:52",
    "thumb": "1"
  },
  {
    "id": "3995",
    "material_id": "969",
    "material_photo_name": "Shalimar-Gold_DwSGMoyHqqM1hPoSI9VZ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:24:10",
    "thumb": "1"
  },
  {
    "id": "3997",
    "material_id": "661",
    "material_photo_name": "Shivakashi-Pink_lF1ksUsnFFTsxAZmwEcR.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:26:32",
    "thumb": "1"
  },
  {
    "id": "4007",
    "material_id": "140",
    "material_photo_name": "Silver-Paradiso_K0erne61dXQVheyBHLWT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:42:02",
    "thumb": "1"
  },
  {
    "id": "4009",
    "material_id": "724",
    "material_photo_name": "Silver-Paradiso_8pIMcRfIWBwPxpsToLiv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:44:50",
    "thumb": "1"
  },
  {
    "id": "4011",
    "material_id": "218",
    "material_photo_name": "Silver-Pearl_MnSW7ifuZv8HRNirscaT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:49:21",
    "thumb": "1"
  },
  {
    "id": "4013",
    "material_id": "322",
    "material_photo_name": "Silver-Pearl-Antiqued_XMHcLS6vv4ziAXlzyuUW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:52:13",
    "thumb": "1"
  },
  {
    "id": "4015",
    "material_id": "1005",
    "material_photo_name": "Silver-Travertine_XrA18Ze1irM9A5cdGcYj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:54:39",
    "thumb": "1"
  },
  {
    "id": "4017",
    "material_id": "122",
    "material_photo_name": "Silver-Travertine_01N15PPIkbv3to6jyHG6.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:56:23",
    "thumb": "1"
  },
  {
    "id": "4019",
    "material_id": "258",
    "material_photo_name": "Silver-Waves_HWTq6ut48KUCYkY5v1kX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 11:58:54",
    "thumb": "1"
  },
  {
    "id": "4021",
    "material_id": "983",
    "material_photo_name": "Silver-Waves_YwA1vbHe6idCvaZtnhu9.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:01:29",
    "thumb": "1"
  },
  {
    "id": "4023",
    "material_id": "585",
    "material_photo_name": "Siraska_v5Wx757HvQoUUGVkxDXx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:03:37",
    "thumb": "1"
  },
  {
    "id": "4025",
    "material_id": "422",
    "material_photo_name": "Sivec_wjBCmABga8XPRbV5yPwQ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:06:09",
    "thumb": "1"
  },
  {
    "id": "4027",
    "material_id": "1069",
    "material_photo_name": "Sivec_EJ5pZcDyvJSrF74wAupx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:07:36",
    "thumb": "1"
  },
  {
    "id": "4029",
    "material_id": "513",
    "material_photo_name": "Smoke_VGPvIzqlJ9ZWaMletO4p.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:09:35",
    "thumb": "1"
  },
  {
    "id": "4031",
    "material_id": "1000",
    "material_photo_name": "Snow-Crystal_jWHbfztkw6sa2PBxuphT.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:12:22",
    "thumb": "1"
  },
  {
    "id": "4033",
    "material_id": "958",
    "material_photo_name": "Snow-White_7jLrFT0DZvgWApmNbO29.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:17:23",
    "thumb": "1"
  },
  {
    "id": "4035",
    "material_id": "1044",
    "material_photo_name": "Snow-White_jyXIPEjjZ90tJTWAUFbM.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:19:59",
    "thumb": "1"
  },
  {
    "id": "4037",
    "material_id": "707",
    "material_photo_name": "Snowflakes-Bianco_iYwiEJ2mpfvEXzBPS1zj.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:22:09",
    "thumb": "1"
  },
  {
    "id": "4039",
    "material_id": "705",
    "material_photo_name": "Fumaca_QNHo3hVGAqBFCaUy69RD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:25:27",
    "thumb": "1"
  },
  {
    "id": "4041",
    "material_id": "317",
    "material_photo_name": "Solarius_ekWSBmi5am8z5nwlcW6H.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:31:42",
    "thumb": "1"
  },
  {
    "id": "4042",
    "material_id": "1154",
    "material_photo_name": "granite_Solarius_54jawblUSETwp9dhP6uq.jpg",
    "original_name": "SOLARIUS_209R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 12:38:45",
    "thumb": "0"
  },
  {
    "id": "4043",
    "material_id": "1154",
    "material_photo_name": "Solarius_LGeuu8EKm814TQeEU2cU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:40:31",
    "thumb": "1"
  },
  {
    "id": "4045",
    "material_id": "1105",
    "material_photo_name": "Spanish-Gold_ih6FrV721LadsORylqpz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:43:01",
    "thumb": "1"
  },
  {
    "id": "4047",
    "material_id": "123",
    "material_photo_name": "Spanish-Gold_XxqIvn54SLdHDmeEmSKy.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:44:22",
    "thumb": "1"
  },
  {
    "id": "4049",
    "material_id": "444",
    "material_photo_name": "Sparkling-Blue_gB8N1RvPtUrY32JNoCNv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:46:44",
    "thumb": "1"
  },
  {
    "id": "4051",
    "material_id": "1102",
    "material_photo_name": "Spectrus-Black_4sPsd4WmSZH6NUWthG70.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 12:49:19",
    "thumb": "1"
  },
  {
    "id": "4053",
    "material_id": "672",
    "material_photo_name": "Splendor_25rdfdUgqzwcqnwqkpjx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:05:43",
    "thumb": "1"
  },
  {
    "id": "4057",
    "material_id": "1071",
    "material_photo_name": "Statuario_FdPBO9gTGujEfrrcQ8Qw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:11:25",
    "thumb": "1"
  },
  {
    "id": "4059",
    "material_id": "124",
    "material_photo_name": "Stormy-Night_N5kufZrzDi58KDo7MB19.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:14:40",
    "thumb": "1"
  },
  {
    "id": "4061",
    "material_id": "659",
    "material_photo_name": "Stormy-NIght_Q2UjrENBXzWaFzDmbt4G.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:19:20",
    "thumb": "1"
  },
  {
    "id": "4063",
    "material_id": "694",
    "material_photo_name": "Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:21:25",
    "thumb": "1"
  },
  {
    "id": "4065",
    "material_id": "557",
    "material_photo_name": "Sugar-Brown_HWVKi94JePRbJedUoLok.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:23:44",
    "thumb": "1"
  },
  {
    "id": "4067",
    "material_id": "711",
    "material_photo_name": "Sun-Flower_JCwqgPKnSetOVz7hvpcD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:27:30",
    "thumb": "1"
  },
  {
    "id": "4069",
    "material_id": "627",
    "material_photo_name": "Sunflower_BCAfil1EbXQZjBE4Ln98.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:31:24",
    "thumb": "1"
  },
  {
    "id": "4071",
    "material_id": "1025",
    "material_photo_name": "Sunset-Red_vwWCRrXl3qeMu1F1qISV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:35:42",
    "thumb": "1"
  },
  {
    "id": "4079",
    "material_id": "1070",
    "material_photo_name": "Super-White_SM4eojMBm5j4RjnSUK6s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 01:52:28",
    "thumb": "1"
  },
  {
    "id": "4083",
    "material_id": "988",
    "material_photo_name": "Supreme_RSPZIBCW8EowX3DFToFJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:19:21",
    "thumb": "1"
  },
  {
    "id": "4085",
    "material_id": "702",
    "material_photo_name": "Tabacco-Brown_pPPlBMLAQ0hUXFMZloOa.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:21:14",
    "thumb": "1"
  },
  {
    "id": "4087",
    "material_id": "679",
    "material_photo_name": "Tahoe_0K3h1wwA48rehaAq3o7D.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:23:01",
    "thumb": "1"
  },
  {
    "id": "4089",
    "material_id": "1049",
    "material_photo_name": "Taj-Mahal_UJtZxzL4qcxYvIxA1Jsx.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:24:50",
    "thumb": "1"
  },
  {
    "id": "4091",
    "material_id": "684",
    "material_photo_name": "Tan-Brown_A3ZqMsdoM1HlSXBgaHSs.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:31:55",
    "thumb": "1"
  },
  {
    "id": "4103",
    "material_id": "255",
    "material_photo_name": "Tan-Brown-Supreme_Kc1UBJEduJTpMAV7kOy4.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:47:14",
    "thumb": "1"
  },
  {
    "id": "4105",
    "material_id": "306",
    "material_photo_name": "Tiberious_I1mfQLQhmQhNlLHdeB23.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:49:39",
    "thumb": "1"
  },
  {
    "id": "4107",
    "material_id": "681",
    "material_photo_name": "Tiberious_i8kAjbYFTCBRtQDoWCvA.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:52:22",
    "thumb": "1"
  },
  {
    "id": "4111",
    "material_id": "250",
    "material_photo_name": "Titanium-Black_qzq5a7AgijeTr9eOB0MP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 02:59:18",
    "thumb": "1"
  },
  {
    "id": "4113",
    "material_id": "1068",
    "material_photo_name": "Titanium-Black_1R1f7HY6bPD0XqTDpov2.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:01:33",
    "thumb": "1"
  },
  {
    "id": "4115",
    "material_id": "561",
    "material_photo_name": "Toffee_MD9xu7flA35kayRD8Wjh.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:03:58",
    "thumb": "1"
  },
  {
    "id": "4117",
    "material_id": "647",
    "material_photo_name": "Toffee_wHzzPRPtnZB09LLZecvw.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:05:50",
    "thumb": "1"
  },
  {
    "id": "4119",
    "material_id": "400",
    "material_photo_name": "Torquoise_Q2x5GuzxRXbC24LdFrnm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:08:41",
    "thumb": "1"
  },
  {
    "id": "4121",
    "material_id": "434",
    "material_photo_name": "Travertine-Giallo_FinoQsPK5aNzqDNE8lh3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:10:17",
    "thumb": "1"
  },
  {
    "id": "4133",
    "material_id": "493",
    "material_photo_name": "Tropical-Green_6UU4Pb1716f90W1nhulL.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 03:30:20",
    "thumb": "1"
  },
  {
    "id": "4135",
    "material_id": "992",
    "material_photo_name": "Tropical-Mahogany_engPtiycVSx2vDxGDU9f.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:01:46",
    "thumb": "1"
  },
  {
    "id": "4137",
    "material_id": "560",
    "material_photo_name": "Typhoon-Bordeaux_eSgEw2wn3Fi6vWPJ1y84.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:04:10",
    "thumb": "1"
  },
  {
    "id": "4139",
    "material_id": "606",
    "material_photo_name": "Typhoon-Green_u1i1UOOo5P5AshZIIGjS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:08:31",
    "thumb": "1"
  },
  {
    "id": "4141",
    "material_id": "440",
    "material_photo_name": "Ubatuba-Gold_6RfCYZe9jEJITKxTjglW.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:12:35",
    "thumb": "1"
  },
  {
    "id": "4143",
    "material_id": "960",
    "material_photo_name": "Ubatuba_I2S4LI3nPU6k6944Vlbl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:17:19",
    "thumb": "1"
  },
  {
    "id": "4151",
    "material_id": "651",
    "material_photo_name": "Venecia-Gold_ZsBZ8AbF58gHX7UH2EdP.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:28:05",
    "thumb": "1"
  },
  {
    "id": "4161",
    "material_id": "528",
    "material_photo_name": "Verde-Bamboo_hLZOsL3DvVtpECAEHMaO.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:46:45",
    "thumb": "1"
  },
  {
    "id": "4163",
    "material_id": "633",
    "material_photo_name": "Verde-Belaggio_cK3YbKnxKkdtanLUZI2o.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:49:42",
    "thumb": "1"
  },
  {
    "id": "4165",
    "material_id": "558",
    "material_photo_name": "Verde-Brasiliano_Tuj8ruMNtXTiokZcjaMl.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:52:55",
    "thumb": "1"
  },
  {
    "id": "4167",
    "material_id": "403",
    "material_photo_name": "Verde-Fantastico_YvcYRXjKifu5jlzp79ue.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:56:51",
    "thumb": "1"
  },
  {
    "id": "4169",
    "material_id": "271",
    "material_photo_name": "Verde-Gaia_xoeMXv2Or2P4j5U1AvM8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 04:59:54",
    "thumb": "1"
  },
  {
    "id": "4171",
    "material_id": "343",
    "material_photo_name": "Verde-Sequoia_1ZjQZN4skm1eHWi0vzgD.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:02:14",
    "thumb": "1"
  },
  {
    "id": "4173",
    "material_id": "223",
    "material_photo_name": "Verniz-Tropical_KY5uQojNJnSPZE3vpXm8.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:05:16",
    "thumb": "1"
  },
  {
    "id": "4175",
    "material_id": "529",
    "material_photo_name": "Vernize-Tracomal_ClR4fldC9RyevlrNcTvz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:09:05",
    "thumb": "1"
  },
  {
    "id": "4177",
    "material_id": "181",
    "material_photo_name": "Via-Lactea_qDXBP7zEBQWpIgVNKRL5.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:10:42",
    "thumb": "1"
  },
  {
    "id": "4178",
    "material_id": "1155",
    "material_photo_name": "granite_Via-Lactea_LLToj3NNtY1QcAkX5n96.jpg",
    "original_name": "VIA_LACTEA_157R_LEATHER_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:13:46",
    "thumb": "0"
  },
  {
    "id": "4179",
    "material_id": "1155",
    "material_photo_name": "Via-Lactea_JmQLRL5aeNNTAOLRjwmG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:15:01",
    "thumb": "1"
  },
  {
    "id": "4181",
    "material_id": "623",
    "material_photo_name": "Viking-Black_vZVgJhIsiiY0V4mP2orV.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:16:57",
    "thumb": "1"
  },
  {
    "id": "4183",
    "material_id": "1059",
    "material_photo_name": "Violet-Bamboo_yYCP4odjNZXpmgaW1dTU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:18:29",
    "thumb": "1"
  },
  {
    "id": "4185",
    "material_id": "543",
    "material_photo_name": "Virginia-Black_UiDcupGApNMHqVySUXVz.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:21:46",
    "thumb": "1"
  },
  {
    "id": "4187",
    "material_id": "315",
    "material_photo_name": "Viscont-White_whTDhjGLq5LRuaoIi02y.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:24:01",
    "thumb": "1"
  },
  {
    "id": "4189",
    "material_id": "1112",
    "material_photo_name": "Volga-Blue_h6tGLtBvigy2QCf8oIYm.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:26:05",
    "thumb": "1"
  },
  {
    "id": "4191",
    "material_id": "256",
    "material_photo_name": "Vyara_eBfwABRpRAteB0A2ZxXo.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:28:49",
    "thumb": "1"
  },
  {
    "id": "4193",
    "material_id": "663",
    "material_photo_name": "Vyara-Gold_UxPYn4u7IVgj5ZRHxHPF.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:32:34",
    "thumb": "1"
  },
  {
    "id": "4197",
    "material_id": "977",
    "material_photo_name": "Vyara-Gold_Neo9BjEw14zX7ssxSGnH.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:36:27",
    "thumb": "1"
  },
  {
    "id": "4203",
    "material_id": "932",
    "material_photo_name": "White-Antique_KLAJ3zbS57hgmLMyb8As.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:43:13",
    "thumb": "1"
  },
  {
    "id": "4205",
    "material_id": "1075",
    "material_photo_name": "White-Carrara_MrOXgBL9NDLvfssgrUcb.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 05:48:17",
    "thumb": "1"
  },
  {
    "id": "4206",
    "material_id": "1156",
    "material_photo_name": "marble_White-Carrara_xUxhrMyMtfo3LpB9eInu.jpg",
    "original_name": "WHITE_CARRARA_176R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:54:19",
    "thumb": "0"
  },
  {
    "id": "4207",
    "material_id": "1157",
    "material_photo_name": "marble_White-Carrara_oHlvaLRUzSexecrj8Wnf.jpg",
    "original_name": "WHITE_CARRARA_178R_GLOSSY_DONE.jpg",
    "visible": "1",
    "uploaded_at": "2015-11-17 05:59:33",
    "thumb": "0"
  },
  {
    "id": "4208",
    "material_id": "1157",
    "material_photo_name": "White-Carrara_T0qDllCovzl4SAMCVmiG.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 06:00:44",
    "thumb": "1"
  },
  {
    "id": "4210",
    "material_id": "182",
    "material_photo_name": "White-Carrara-Venatino_FIMsl6AFUsmAB7HRo4fv.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 06:03:57",
    "thumb": "1"
  },
  {
    "id": "4319",
    "material_id": "192",
    "material_photo_name": "White-Danby_Wq6bIMmBAyBGbixift9d.jpg",
    "original_name": "",
    "visible": null,
    "uploaded_at": "2015-12-16 08:42:38",
    "thumb": "1"
  },
  {
    "id": "4214",
    "material_id": "464",
    "material_photo_name": "White-Fantasy_ELGCMIDnZdhvvJbjPD7s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-17 08:04:42",
    "thumb": "1"
  },
  {
    "id": "4218",
    "material_id": "997",
    "material_photo_name": "White-Macaubas_3uhDiXR9zdcGlz5dKcB3.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:37:02",
    "thumb": "1"
  },
  {
    "id": "4220",
    "material_id": "1055",
    "material_photo_name": "White-Onyx_70odNZIG3GqJ92caaQmJ.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:40:20",
    "thumb": "1"
  },
  {
    "id": "4222",
    "material_id": "715",
    "material_photo_name": "White-Spring_zz3psExuJf7hRDT0UquK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:44:23",
    "thumb": "1"
  },
  {
    "id": "4224",
    "material_id": "688",
    "material_photo_name": "White-Spring_D9ofU6DJV1TsEpQHDvDk.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:46:43",
    "thumb": "1"
  },
  {
    "id": "4226",
    "material_id": "383",
    "material_photo_name": "White-Spring_pNcH2jb5i5CoBuiwoGGS.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:48:24",
    "thumb": "1"
  },
  {
    "id": "4230",
    "material_id": "685",
    "material_photo_name": "White-Thunder_JZQ2nautQiQYV0tLT6rc.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 09:54:34",
    "thumb": "1"
  },
  {
    "id": "4232",
    "material_id": "334",
    "material_photo_name": "Wild-Sea-Orient_sQMBMNiXLMT1xDEmvInX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 10:04:33",
    "thumb": "1"
  },
  {
    "id": "4234",
    "material_id": "1037",
    "material_photo_name": "Yellow-River_K0xVzkdsB3fUz3FGs1QX.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 10:09:26",
    "thumb": "1"
  },
  {
    "id": "4236",
    "material_id": "1041",
    "material_photo_name": "Yellow-Travertine_VzzLJ8CepmgrNwk8Ww2s.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-18 10:12:12",
    "thumb": "1"
  },
  {
    "id": "4240",
    "material_id": "723",
    "material_photo_name": "Baltic-Green_GcQJc91vVZikIKg9uYNK.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 08:14:02",
    "thumb": "1"
  },
  {
    "id": "4279",
    "material_id": "146",
    "material_photo_name": "Maritaka-Granite_eD9ZBmoPgJXRoOgJxp3t.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:50:20",
    "thumb": "1"
  },
  {
    "id": "4281",
    "material_id": "389",
    "material_photo_name": "Marmo-Onyx-Blue_REGXrdN0BEqpdFKEOsAq.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-19 11:53:09",
    "thumb": "1"
  },
  {
    "id": "4285",
    "material_id": "1161",
    "material_photo_name": "Silver-Paradiso_MgqPS8Y18GvICdaFpMEU.jpg",
    "original_name": "",
    "visible": "0",
    "uploaded_at": "2015-11-25 05:48:15",
    "thumb": "1"
  }
];

Photos.collection.insert(allPhotos, insertAll);

function insertAll(err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.log('All photos were stored in DB');
    }
}
