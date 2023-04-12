/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"captcha/captcha/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
