var geocoder;
var marker;
var chartBase = 'https://chart.googleapis.com/chart?chst=';


function initialize() {
  // created using http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
  var me = this;
  me.markerList = [];

  var styleOff = [{ visibility: 'off' }];
  var stylez = [
    {   featureType: 'administrative',
        elementType: 'labels',
        stylers: styleOff},
    {   featureType: 'administrative.province',
        stylers: styleOff},
    {   featureType: 'administrative.locality',
        stylers: styleOff},
    {   featureType: 'administrative.neighborhood',
        stylers: styleOff},
    {   featureType: 'administrative.land_parcel',
        stylers: styleOff},
    {   featureType: 'poi',
        stylers: styleOff},
    {   featureType: 'landscape',
        stylers: styleOff},
    {   featureType: 'road',
        stylers: styleOff}
    ];


  geocoder = new google.maps.Geocoder();
  var mapDiv = document.getElementById('map_canvas');
  var map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(-8.928487,38.496094),
    zoom: 3,
    mapTypeId: 'Border View',
    draggableCursor: 'pointer',
    draggingCursor: 'wait',
    mapTypeControlOptions: {
        mapTypeIds: ['Border View']
        }
  });
  var customMapType = new google.maps.StyledMapType(stylez,
      {name: 'Border View'});
  map.mapTypes.set('Border View', customMapType);

  me.makeInfoWindowEvent = function(map, infowindow, contentString, marker) {
    google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    });
  }


  me.infowindow = new google.maps.InfoWindow();

  me.addMarker = function(country_detail) {

    var flag_path = 'flags/' + country_detail.alpha_2_code.toLowerCase() + '.gif';

    me.markerList[country_detail.alpha_2_code] = new google.maps.Marker({
        position : new google.maps.LatLng(country_detail.latitude,country_detail.longitude),
        icon     : flag_path,
        title    : country_detail.country,
        map      : map
    });

    var info_content = '<h2 style="margin-top:0;">' + country_detail.country +'</h2>';
    
    //Define pop up.
    makeInfoWindowEvent(map, me.infowindow, info_content , me.markerList[country_detail.alpha_2_code]);

    google.maps.event.addListener(me.markerList[country_detail.alpha_2_code], 'click', function(){
     alert('You clicked '+ country_detail.country);
    });   
  }

  var country_list = countries;

  //Add the country flags
  for (i=0;i<country_list.length;i++){
    me.addMarker(country_list[i]);
  //  console.log('running '+i+' times');          
  }

}

google.maps.event.addDomListener(window, 'load', initialize);