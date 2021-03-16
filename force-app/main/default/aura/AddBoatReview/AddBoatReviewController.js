({
    doInit : function(component, event, helper) {
    	console.log('init handler running on the AddBoatReview component');
        helper.onInit(component, event, helper);
    },
	onSave : function(component, event, helper) {
        component.find("service").saveRecord(function(saveResult) {
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast == undefined){
                    alert("The record was successfully saved");
                } else {
                    resultsToast.setParams({
                        "title":"Saved",
                        "message":"The record was saved"
                    });
                    resultsToast.fire();
                    helper.onInit(component);
                    console.log('about to fire the BoatReviewAdded event');
                    component.getEvent('BoatReviewAdded').fire();
                }
            } else if(saveResult.state === "INCOMPLETE"){
                console.log('incomplete state');
            } else if(saveResult.state === "ERROR") {
                console.log("problem saving error: " + JSON.stringify(saveResult.error));
            } else {
                console.log('error ' + JSON.stringify(saveResult.error));
            }
        });
    },
    onRecordUpdated: function(component,event,helper){
    }
            
        
})