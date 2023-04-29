function distanceCalc(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

// Select elements by their data attribute
const adresses = document.querySelectorAll("[data-entry-info]");

// Map over each element and extract the data value
const infoAdresses = Array.from(adresses).map((item) =>
  JSON.parse(item.dataset.entryInfo)
);

infoAdresses.map((infoAdresse) => {

    let infoPosition = { };

    fetch(`https://api-adresse.data.gouv.fr/search/?q=${infoAdresse.business}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        
        infoPosition.businessLatitude = data.features[0].geometry.coordinates[0]
        infoPosition.businessLongitude = data.features[0].geometry.coordinates[1]
        
    }).then(() => {
        fetch(`https://api-adresse.data.gouv.fr/search/?q=${infoAdresse.user}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            infoPosition.userLatitude = data.features[0].geometry.coordinates[0]
            infoPosition.userLongitude = data.features[0].geometry.coordinates[1]
          
        }).then(() => {
            let distance = distanceCalc(infoPosition.userLatitude, infoPosition.userLongitude, infoPosition.businessLatitude, infoPosition.businessLongitude, 'K');

            
            let distanceRounded = Math.round(distance * 1) / 1;
            console.log(distanceRounded)
            let distanceElement = document.getElementById(infoAdresse.element);
            distanceElement.innerHTML = distanceRounded + ' km';
        });
    });



//   console.log(infoAdresse.business);
//   console.log(infoAdresse.user);
  // let distance = distanceCalc(infoPosition.userLatitude, infoPosition.userLongitude, infoPosition.businessLatitude, infoPosition.businessLongitude, 'K');
  // let distanceRounded = Math.round(distance * 1) / 1;
  // let distanceElement = document.getElementById(infoPosition.id);
  // distanceElement.innerHTML = distanceRounded + ' km';
});
