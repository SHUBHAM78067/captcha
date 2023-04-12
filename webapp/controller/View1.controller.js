sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("captcha.captcha.controller.View1", {
            onInit: function () {
                setInterval(this.darkMode.bind(this),1);

            },
            darkMode: function(oEvent){
                debugger;
               var oState = this.getView().byId("dlid").getState();
               if(oState === true){
                sap.ui.getCore().applyTheme("sap_horizon_dark");
               }else{
                sap.ui.getCore().applyTheme("sap_bluecrystal");
               };
              
            }
        });
    });
