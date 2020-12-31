require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (Map, MapView, Layer) {
        var map = new Map({
          basemap: "gray-vector"
        });

        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 7,
          center: [-90, 40]
        });

        Layer.fromPortalItem({
          portalItem: {
            // autocasts as new PortalItem()
            /*id: "c0f09a71805f4d45a6b6f3f1e0bdc7fc"*/
            /*id: "af1ad38816814b7eba3fe74a3b84412d"*/
            id: "c0238b8ae811443dbe52437496a1a514"
          }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }

        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });
