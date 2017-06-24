var jqvmap = function() {
    var e = function(e) {
        var options = {
            map: "world_en",
            backgroundColor: null,
            borderColor: "#4c5667",
            borderOpacity: .5,
            borderWidth: 1,
            color: "#eee",
            enableZoom: true,
            hoverColor: "#3f4d9f",
            hoverOpacity: null,
            values: sample_data,
            normalizeFunction: "linear",
            scaleColors: ["#a8b5c9", "#f6f6f6"],
            selectedColor: "#c9dfaf",
            selectedRegion: null,
            showTooltip: true,
            onRegionOver: function(e, options) {
                "ca" == options && e.preventDefault()
            },
            onRegionClick: function(e, options, r) {
                var a = 'You clicked "' + r + '" which has the code: ' + options.toUpperCase();
                alert(a)
            }
        };
        options.map = e + "_en";
        var r = jQuery("#vmap_" + e);
        r && (r.width(r.parent().width()), r.vectorMap(options))
    };
    return {
        init: function() {
			if(document.getElementById('vmap_world')){
				 e("world")
			}
			if(document.getElementById('vmap_usa')){
				 e("usa")
			}
			if(document.getElementById('vmap_germany')){
				 e("germany")
			}
			if(document.getElementById('vmap_russia')){
				 e("russia")
			}
        }
    }
}();
jQuery(document).ready(function() {
    jqvmap.init();
});