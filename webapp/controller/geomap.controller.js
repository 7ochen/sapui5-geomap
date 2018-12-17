sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.geomap.controller.geomap", {
		onInit: function () {
			var oMapConfig = {
				"MapProvider": [{
					"name": "OSM",
					"type": "",
					"description": "",
					"tileX": "256",
					"tileY": "256",
					"maxLOD": "20",
					"copyright": "Tiles Courtesy of OpenStreetMap",
					"Source": [{
						"id": "s1",
						"url": "https://a.tile.openstreetmap.org/{LOD}/{X}/{Y}.png"
					}]
				}],
				"MapLayerStacks": [{
					"name": "DEFAULT",
					"MapLayer": [{
						"name": "OSMLayter",
						"refMapProvider": "OSM",
						"opacity": "1.0",
						"colBkgnd": "RGB(255,255,255)"
					}]
				}]
			};

			var oGeoMap = this.getView().byId("GeoMap");
			oGeoMap.setMapConfiguration(oMapConfig);
			oGeoMap.setRefMapLayerStack("DEFAULT");
			oGeoMap.setInitialPosition("135;45");
		}
	});
});