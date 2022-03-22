var bd;

var requete = indexedDB.open("ProduitDB", 1);

requete.onupgradeneeded = function(event){
	var bd = event.target.result;
	
	var options = {
		keyPath: "id",
		autoIncrement: true
	};
	var produits = bd.createObjectStore("Produits", options);
	
	produits.createIndex("id","name");
	
	produits.transaction.oncomplete = function(event){
		var trans = bd.transaction("Produits", "readwrite");
		var movies = trans.objectStore("Produits");
		
		movies.add({
			name: "Tracteur",
			price: "50.00",
			fournisseur: "Ukraine",
			description: "Tracteur kurwa",
            quantite:"1",
		});
		
		movies.add({
			name: "Homard",
			price: "25.00",
			fournisseur: "Maine",
			description: "Leon the lobster",
            quantite:"1",
		});
		
		movies.add({
			name: "Becycle",
			price: "30.00",
			fournisseur: "France",
			description: "Tour de France",
            quantite:"1",
		})
	};
};
