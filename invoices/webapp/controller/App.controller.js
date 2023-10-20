sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	MessageToast,
    JSONModel) {
        "use strict";

        return Controller.extend("logaligroup.com.invoices.controller.App", {
            onInit: function () {
            this._loadModel();
            },
            _loadModel:function(){
               let oData = {
                recipient:{
                    name:"World"
                }
               }
              let oModel = new JSONModel(oData);  
              this.getView().setModel(oModel,"view");
            },
            onShowHello:function(){
               MessageToast.show("Hello world",{
                width:'18rem',
                duration:5000
               });

            }

	
        });
    });
