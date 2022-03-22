<script>

    import { ref } from 'vue';
    var motAfficher = ref("asdasd");
    var db;
    
    var request = indexedDB.open('ProduitDB',1)  
        
        request.onsuccess = e =>{
            //alert("success is called");
            var db = e.target.result;
            

            var transaction = db.transaction(["Produits"], "readwrite");
            var afficherProduit = transaction.objectStore("Produits");
            var requete = afficherProduit.getAll();
            
                requete.onsuccess = function(event){
                    //alert("second success is called");
                    console.log(event.target.result);
                    var mot = event.target.result;
                    console.log(motAfficher.value);
                    motAfficher.value=mot;

                    var produitList = '';
                    var i = 1;
                    $("#produitListID").html("");
                    
                    mot.forEach(function(mot){
                        produitList+=
                        '<div '+
                            '<div class="product-thumbnail">'+
                                '<div class="product-img-head">'+
                                    '<div class="product-img">'+
                                        '<img src="assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>'+
                                '</div>'+
                                '<div class="product-content">'+
                                    '<div class="product-content-head">'+
                                        '<h3 class="product-title">Produit #'+mot.id+'</h3>'+
                                        '<h4 class="product-title">'+mot.name+'</h4>'+
                                        '<div class="product-price">'+mot.price+'$</div>'+
                                    '</div>'+
                                    '<div class="product-btn">'+
                                        '<a href="http://localhost:3000/modification" class="btn btn-primary">Modifier</a>'+
                                        '<a href="http://localhost:3000/produit" class="btn btn-outline-light">Détails</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                    })
                    $("#produitListID").append(produitList);
                };
        }
        //on error
        request.onerror = e =>{
            alert("Le post n'existe pas"+ e.target.error);
        }




</script>

<template>
    
    <!-- ============================================================== -->
    <!-- main wrapper -->
    <!-- ============================================================== -->
    <div class="dashboard-main-wrapper">
        <!-- ============================================================== -->
        <!-- navbar -->
        <!-- ============================================================== -->
        <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bg-nav-brown fixed-top">
                <a class="navbar-brand"  href="http://localhost:3000/list">Inventaire</a>
                <a class="navbar-brand"  href="http://localhost:3000/modification">Modifier</a>
                <a class="navbar-brand"  href="http://localhost:3000/ajout">Ajouter</a>
                <a class="navbar-brand"  href="http://localhost:3000/produit">Produit</a>
                <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">
                        <li class="nav-item">
                            <div id="custom-search" class="top-search-bar">
                                <input class="form-control" type="text" placeholder="Search..">
                            </div>
                        </li>
                        <li class="nav-item dropdown notification">
                            <a class="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1"><i class="fas fa-plus-circle"></i> </a>   
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
        <!-- ============================================================== -->
        <!-- end navbar -->
        <!-- ============================================================== -->
        
        <!-- ============================================================== -->
        <!-- wrapper  -->
        <!-- ============================================================== -->
        <div class="dashboard-wrapper">
            <div class="dashboard-ecommerce">
                <div class="container-fluid dashboard-content ">
                    
                    <div class="row">
                        <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div class="row">
                                <div id="produitListID" class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <!-- <div  >
                                        
                                    </div> -->
                                </div>
                                <!-- <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="product-thumbnail">
                                        <div class="product-img-head">
                                            <div class="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>
                                        </div>
                                        <div class="product-content">
                                            <div class="product-content-head">
                                                <h3 class="product-title">Produit #1</h3>
                                                <div class="product-price">49</div>
                                            </div>
                                            <div class="product-btn">
                                                <a href="#" class="btn btn-primary">Modifier</a>
                                                <a href="#" class="btn btn-outline-light">Détails</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="product-thumbnail">
                                        <div class="product-img-head">
                                            <div class="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>
                                        </div>
                                        <div class="product-content">
                                            <div class="product-content-head">
                                                <h3 class="product-title">Produit #1</h3>
                                                <div class="product-price">49</div>
                                            </div>
                                            <div class="product-btn">
                                                <a href="#" class="btn btn-primary">Modifier</a>
                                                <a href="#" class="btn btn-outline-light">Détails</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="product-thumbnail">
                                        <div class="product-img-head">
                                            <div class="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>
                                        </div>
                                        <div class="product-content">
                                            <div class="product-content-head">
                                                <h3 class="product-title">Produit #1</h3>
                                                <div class="product-price">49</div>
                                            </div>
                                            <div class="product-btn">
                                                <a href="#" class="btn btn-primary">Modifier</a>
                                                <a href="#" class="btn btn-outline-light">Détails</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div class="product-thumbnail">
                                        <div class="product-img-head">
                                            <div class="product-img">
                                                <img src="assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>
                                        </div>
                                        <div class="product-content">
                                            <div class="product-content-head">
                                                <h3 class="product-title">Produit #1</h3>
                                                <div class="product-price">49</div>
                                            </div>
                                            <div class="product-btn">
                                                <a href="#" class="btn btn-primary">Modifier</a>
                                                <a href="#" class="btn btn-outline-light">Détails</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- end wrapper  -->
            <!-- ============================================================== -->
        </div>
    </div>
        <!-- ============================================================== -->
        <!-- end main wrapper  -->
        <!-- ============================================================== -->
</template>