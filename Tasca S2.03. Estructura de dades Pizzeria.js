  
  db.localitat.insert({    
	"_id": ObjectId("62d07a8212375b12747d5432"),
	"nom": "Granollers",
    "provincia":"Barcelona"
})
 
db.client.insert({
"client": {
		"nom": "Leo",
		"cognoms": "Jimenez Ubillus",
		"adreça": "carrer elipse, 155, 3, 5, Barcelona, España",
		"codi_postal": "08905",
		"numero_de_telefon": "634520654",
		"localitat": ObjectId("62d07a8212375b12747d5432"),
		"comandes": [{
		"botiga":ObjectId("62d07a8212375b12747d5123"),
		"data": new ISODate("2022-07-11T09:31:15Z"),
		"tipus_recollida": "domicili",
		"total_productes": 1,
		"preu_total": 16.99,
			productes:[{
			"nom": "pizza",
			"descripció": "pizza barbacoa",
			"imatge": "imatge",
			"preu_float": 16.99,
			"categoria": "pizzes de verano"
			}]
		}]
	}
})

db.botiga.insert({  
		"_id": ObjectId("62d07a8212375b12747d5123"),
		"adreça": "calle Carlos I , 155, 3, 5, Barcelona,  España",
		"Codi postal": "08905",
		"localitat": ObjectId("62d07a8212375b12747d5432")
})

db.empleat.insert({  
		"nom": "Luna",
		"cognoms": "Ramirez Aguilera",
		"nif": "46488852C",
		"telefon": "635200284",
		"tipus_empleat": "cuiner",
		"botiga":ObjectId("62d07a8212375b12747d5123")
})

