/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"test/geomap/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test/geomap/test/integration/pages/geomap",
	"test/geomap/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test.geomap.view.",
		autoWait: true
	});
});