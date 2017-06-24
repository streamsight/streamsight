$(document).ready(function(){
	
	// Simple map
	
	map1 = new GMaps({
		el: '#gmaps-simple',
		lat: 51.507351,
		lng: -0.127758,
		zoom : 5,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false
	});

	// Marker Map

	map2 = new GMaps({
		el: '#markermap',
		lat: 25.197515,
		lng: 55.274873
	
	});
	map2.addMarker({
		lat: 25.197515,
		lng: 55.274873,
		title: 'Marker with InfoWindow',
		infoWindow: {
			content: '<p style="margin:0;"><b>TALLEST</b> Building In The <b>WORLD!</b></p>'
		}
	});
    
	// Overlayer

    map3 = new GMaps({
        el: '#overlayermap',
        lat: -12.043333,
        lng: -77.028333
    });
    map3.drawOverlay({
        lat: map3.getCenter().lat(),
        lng: map3.getCenter().lng(),
        layer: 'overlayLayer',
        content: '<div class="label bg-dark-blue pad-left-15 pad-right-15 pad-top-5 pad-bot-5">Ipsum</div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
    });
    

	// Polygonal

    map4 = new GMaps({
        el: '#polymap',
		zoom: 14,
        lat: 28.593282,
        lng: 77.250749,
        click: function(e){
			console.log(e);
        }
    });

    path = [[28.593282,77.250749], [28.585836,77.252340], [28.587645,77.261782]];

    

    map4.drawPolygon({
        paths: path,
        strokeColor: '#131540',
        strokeOpacity: 0.3,
        strokeWeight: 3
    });
    
	// Routes

    map5 = new GMaps({
        el: '#routesmap',
		zoom : 9,
        lat: 37.441883,
        lng: -122.143019
    });
    map5.drawRoute({
        origin: [37.774929, -122.419416],
        destination: [37.338208, -121.886329],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 4
    });
    
	// Styled Map
	
	var map6 = new GMaps({
        el: "#styledmap",
        lat: -37.813611,
		lng: 144.963056,
		zoom: 7, 
		zoomControl : true,
		zoomControlOpt: {
		style : "SMALL",
            position: "TOP_LEFT"
		},
        panControl : true,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
	});
        
	var styles = [
		{
			stylers: [
				{ hue: "#2eb7f3" },
				{ saturation: 20 }
			]
		}, {
			featureType: "road",
			elementType: "geometry",
			stylers: [
				{ lightness: 200 },
				{ visibility: "simplified" }
			]
		}, {
			featureType: "road",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		}
	];
        
	map6.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"  
	});
	
	map6.setStyle("map_style");

});