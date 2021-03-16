({
	myAction : function(component, event, helper) {
		
	},
    
    doInit : function(component,event, helper) {
        let lightningEnabled = $A.get("e.force:createRecord");
        if(lightningEnabled) {
            console.log('lightning enabled baby');
            component.set("v.auraEnabled", true);
        }
    },
    
    boatTypeChange : function(component, event, helper) {
        let val = component.find("BoatTypePicklist").get("v.value");
        console.log(val);
        component.set("v.selectedBoatType",val);
        helper.setBoatTypeId(component);
    },
    createRecord : function (component, event, helper) {
        let recId = component.get("v.boatTypeId");
    	var createRecordEvent = $A.get("e.force:createRecord");
	    createRecordEvent.setParams({
    	    "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "BoatType__c" : recId                
            }
    	});
		console.log('about to fire the createRecordEvent');
    	createRecordEvent.fire();
	},
    onFormSubmit : function(component, event, helper){
        
        let boatTypeId = component.get("v.boatTypeId");        
        console.log('boatTypeId ' + boatTypeId);
        let data = {
            "boatTypeId" : boatTypeId
        };
        
        let formSubmit = component.getEvent("formSubmit");
        formSubmit.setParams ({
            "formData" : data
        }); 
        console.log('about to fire the formSubmit event');
        formSubmit.fire();
    }
})