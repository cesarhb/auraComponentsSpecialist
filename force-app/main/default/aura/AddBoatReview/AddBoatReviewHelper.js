({
	onInit : function(component, event, helper) {
		component.find("service").getNewRecord(
        	"BoatReview__c",
            null,
            false,
            $A.getCallback(function(){
                var rec = component.get("v.simpleBoatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)){
                    console.log('error ' + error);
                }
                else {
                    component.set("v.boatReview.Boat__c",component.get("v.boat.Id"));
                    console.log('rec initialized ' + rec.apiName);
                }
            })
        );
	}
})