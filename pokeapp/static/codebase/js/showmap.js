/*
 *  Document   : be_comp_maps_google.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Google Maps Page
 */

var BeCompMapsGoogle = function() {
    // Gmaps.js, for more examples you can check out https://hpneo.github.io/gmaps/

    // Init Search Map
    var initMapSearch = function(){
        if ( jQuery('#js-map-search').length ) {
            // Init Map
            var mapSearch = new GMaps({
                div: '#js-map-search',
                lat: 20,
                lng: 0,
                zoom: 2,
                scrollwheel: false
            });

            // When the search form is submitted
            jQuery('.js-form-search').on('submit', function(){
                var inputGroup = jQuery('.js-search-address').parent('.input-group');

                GMaps.geocode({
                    address: jQuery('.js-search-address').val().trim(),
                    callback: function (results, status) {
                        if ((status === 'OK') && results) {
                            var latlng = results[0].geometry.location;
                            var latitude = document.getElementById('latitude');
                            var longitude = document.getElementById('longitude');

                            mapSearch.removeMarkers();
                            mapSearch.addMarker({ lat: latlng.lat(), lng: latlng.lng() });
                            mapSearch.fitBounds(results[0].geometry.viewport);

                            inputGroup.siblings('.form-text').remove();
                        } else {
                            inputGroup.after('<div class="form-text text-danger text-xs-center animated fadeInDown">Address not found!</div>')
                        }
                    }
                });

                return false;
            });
        }
    };


    return {
        init: function () {
            // Init Map with Search functionality
            initMapSearch();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeCompMapsGoogle.init(); });