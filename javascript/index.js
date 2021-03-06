console.log('Yet another Hello world');

var map = null;
var markers = [];

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};
const customIconSelected = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#FFF',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};


function addMarker(marker, i) {
    var infowindow = new google.maps.InfoWindow({
        content: marker.name
    });

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        icon: customIcon,
        title: marker.name,
        id: i,
        infowindow: infowindow
    });
    markers.push(marker);

    infowindow.addListener('closeclick', function () {
        marker.setIcon(customIcon)
    });
    marker.addListener('click', function () {
        if (this.getIcon().fillColor == '#FFF') {
            this.setIcon(customIcon);
            infowindow.close(map,this);
        }
        else {
            hideAllInfoWindows(map);
            this.setIcon(customIconSelected);
            infowindow.open(map, this);
        }
    });
    function hideAllInfoWindows(map) {
        markers.forEach(function (marker) {
            marker.infowindow.close(map, marker);
            marker.setIcon(customIcon);
        });
    }
}

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }

    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    //Criando botão customizado
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);

    //Adicionando os marcadores
    placesOfInterest.forEach((element, i) => {
        addMarker(placesOfInterest[i], i);
    });


    function CenterControl(controlDiv, map) {

        // CSS do botão customizado
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'User Location';
        controlDiv.appendChild(controlUI);

        // CSS do interior do botão
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'User Location';
        controlUI.appendChild(controlText);

        controlUI.addEventListener('click', function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    map.setCenter(initialLocation);
                    userLocation = { 'name': 'User Location', lat: position.coords.latitude, lng: position.coords.longitude };
                    console.log(position.coords.latitude, position.coords.longitude);
                    addMarker(userLocation);
                });

            }

        });

    }
}