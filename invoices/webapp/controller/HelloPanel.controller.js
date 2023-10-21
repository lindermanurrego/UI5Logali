sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller,
    MessageToast

) {
	"use strict";

	return Controller.extend("logaligroup.com.invoices.controller.HelloPanel", {
	
       /**
        * @override
        */
       onInit: function() {
       },
    
       onShowHello:function(){
        MessageToast.show("Hello world",{
         width:'18rem',
         duration:5000
        });

     }    
    
    });
});