var style = `
.col-12 {
    flex: 0 0 auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    width: 100%;
}
.container{
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
    border-color:black ;
    justify-content: center;
    background-color: #EBEDEE;

}

.row {
/* Alignez les éléments à gauche */
    margin-bottom: 20px;
    background-color: #FFFFFF;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x)*-.5);
    margin-right: calc(var(--bs-gutter-x)*-.5);
    margin-top: calc(var(--bs-gutter-y)*-1);
}

.card:not(.payment-method-selector) {
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
}

.card {
    border-radius: 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: 5px;
    padding-right: 5px;
    }
.bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb),var(--bs-bg-opacity)) !important;
}
.bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb),var(--bs-bg-opacity)) !important;
    }

/* Les couleurs et leur class seront à définir par le client**/
.firstcolor {
    color: black;
    background-color: red;
}   
.secondcolor {
    color: red;
}
.thirdcolor {
    color:black;
}

.border-0 {
    border: 0 !important;
}
.g-0, .gy-0 {
    --bs-gutter-y: 0;
}
.g-0, .gx-0 {
--bs-gutter-x: 0;
}

row > * {
    flex-shrink: 0;
    margin-top: var(--bs-gutter-y);
    max-width: 100%;
    padding-left: calc(var(--bs-gutter-x)*.5);
    padding-right: calc(var(--bs-gutter-x)*.5);
    width: 100%;
}

élément {
    z-index: 1;
}
.m-2 {
    margin: .5rem !important;
}


.position-absolute {
    position: absolute !important;
}
.img-container {
    max-height: 275px;
    max-width: 100%;
    min-height: 275px;
    object-fit: contain;
    overflow: hidden;

}

.me-1 {
    margin-right: .25rem !important;
}

badge {
    --bs-badge-padding-x: 0.65em;
    --bs-badge-padding-y: 0.35em;
    --bs-badge-font-size: 0.75em;
    --bs-badge-font-weight: 400;
    --bs-badge-color: #fff;
    --bs-badge-border-radius: 0.375rem;
    border-radius: var(--bs-badge-border-radius);
    color: var(--bs-badge-color);
    display: inline-block;
    font-size: var(--bs-badge-font-size);
    font-weight: var(--bs-badge-font-weight);
    line-height: 1;
    padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}

*, ::after, ::before {
    box-sizing: border-box;
}

.img-container {
    max-height: 275px;
    max-width: 100%;
    min-height: 275px;
    object-fit: contain;
    overflow: hidden;
    margin-left: 8px;
}
.mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
}
.img-fluid, .img-responsive, .img-thumbnail {
    height: auto;
    width: 100%;
    margin-left: 5px;
}
.img, svg {
    vertical-align: middle;
}

.py-0 {
    padding-bottom: 0 !important;
    padding-top: 0 !important;
}
.card-body {
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    width: 100%;
    display: inline-block;
}
.card-title {
    margin-bottom: var(--bs-card-title-spacer-y);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #000;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top: 20px;
}

.mt-3 {
    margin-top: 1rem !important;
}
.card-subtitle, .card-text:last-child {
    margin-bottom: 0;
    display: inline-block;
}

p {
    margin: 16px 0;
    display: inline-block;
}

h3 {
    font-size: 20px;
    font-weight: bold;
}
                        /* Media Queries//////////////////////*/

@media (min-width: 768px) {
.col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
    }
}
@media (min-width: 768px) {
.col-md-4 {
    flex: 0 0 auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    width: 33.33333333%;
    }
}

@media (min-width: 768px) {
.pt-md-0 {
    padding-top: 0 !important;
    }
}
@media (min-width: 768px) {
.px-md-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    }
}

@media (min-width: 1200px) {
.h3, h3 {
    font-size: 1.75rem;
}
}`;

//l'url du client sera à definir par la suite

var responseData;

function createCard(name, description,idservice) {
  // Créer une nouvelle carte div
  var newCard = document.createElement("div");
  newCard.classList.add("card");

  
  var thumbnail = responseData.mediasServices.find(service => service.model_id === idservice);
  console.log (thumbnail);

  var providerServices = responseData.providersServices.find(provider => provider.service_id === idservice);
  console.log (providerServices);

  var provider = responseData.providers.find(provider => provider.idprovider === providerServices.provider_id);
  console.log(provider);

    // si thumnail est null alors on va chercher dans les medias lza on reprends le model id et le provider declarer au dessus qui est son egal 
    if (!thumbnail){ thumbnail = responseData.mediasProviders.find(media => media.model_id === provider.idprovider);
      console.log (thumbnail);
    }
  
  var address = responseData.addresses.find(addresses => addresses.idaddress === provider.address_id);
  console.log (address.city);
  var city = address.city

  var categoriesServices = responseData.categoriesServices.find(category => category.service_id === idservice)
  console.log(categoriesServices);

  var category = responseData.categories.find(category => category.idcategory === categoriesServices.category_id);
  console.log(category.name);  
  var categoryName = category.name;



  // Ajouter du contenu à la carte pour test 
  
  var cardContent = `
  <div id="otipass">
    <div class="provider-list-container">
      <div class="row">
			        <div class="card mb-4 border-0 bg-white">
                <div class="row g-0">
                  <div class="col-12 col-md-4">
                    <div class="position-absolute m-2 firstcolor style="z-index:1">
                      <span class="badge bg-primary me-1">${categoryName}</span>                    
                    </div>
                  
                        <div class="img-container">
                            <img class="img-fluid mx-auto lazyloadcard-img-top" src="${thumbnail ? thumbnail.file : 'lien_image_par_defaut'}" alt="${name}">
                        </div>
  
                </div>
              
                <div class="col-12 col-md-8">
                    <div class="card-body pt-md-0 px-0 px-md-3 py-0">
                      <h2 class="card-title secondcolor">
                      ${name}
                      </h2>
                      <h3 class="card-subtitle mt-3 thirdcolor">${city}</h3>
                      <p class="card-text thirdcolor ">${description}</p>
	                  </div> 
                    


                    <!-- end .card-body -->


                    <div class="card-footer border-top-0 bg-white px-0 px-md-3 pb-0">
                        <div class="row d-flex align-items-center">
                            <div class="col-12 col-md-9">
                              <p class="price-off">
		                            <s class="text-muted">13,00&nbsp;€</s>
                                <span class="secondcolor">Gratuit avec le Pass !</span>
                              </p>
                              </div>
                            <div class="col-12 col-md-3">
                                <a class="learn-more secondcolor " href="/fr/179-musee-unterlinden">
	                                Liens à mettre par le client                          
                                </a>
                            </div>
                        </div>
                    </div> 
                    
                    <!-- end card-footer -->
                </div> 
                
                <!-- end .card -->
            </div>
        </div>
  </div>   
  `;

  newCard.innerHTML = cardContent
  return newCard ;
}


function renderServices("passer attibuts otipass TODO") {
  //remplacer document.body en appelant ma div "otipass"
  var div = document.body;
  var requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        var reponse = requete.response;
         // Stocker les miniatures des services
        responseData = reponse.data;

        // Parcourir les services et créer une carte pour chaque
        for (let i = 0; i < reponse.data.services.length; i++) {
          var service = reponse.data.services[i];
          var newCard= createCard(service.name, service.description,service.idservice);
          div.appendChild(newCard);
        }
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  // crée un nouvel élément div
    //var newDiv = document.createElement("div");
    var newCard = document.createElement("div");
    newCard.classList.add("card")
    newCard.innerHTML = cardContent
    // et lui donne un peu de style
    var baliseStyle = document.createElement("style");
    baliseStyle.innerHTML = style
    // ajoute le nœud texte au nouveau div créé
    newCard.appendChild(cardContent);
    div.appendChild(newCard, baliseStyle);
    }

window.otipass = {renderServices};
