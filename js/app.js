function initMap() {
    var tjpoint = {lat: -27.138352, lng: -48.596862};
    var centerPoint = {lat: -27.137942,lng: -48.603781};
    var center = '';
    if ((window.screen.availHeight < 1234) && (window.screen.availWidth < 1234))
        center = tjpoint;
    else
        center = centerPoint

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: center
    });
    var marker = new google.maps.Marker({
        position: tjpoint,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'TJ Tecnologia e Informática' +
        '<br/>' +
        'Rua 298, nº:400' +
        '<br/>' +
        'Meia Praia - Itapema/SC' +
        '<br/>' +
        '88220-000'
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}