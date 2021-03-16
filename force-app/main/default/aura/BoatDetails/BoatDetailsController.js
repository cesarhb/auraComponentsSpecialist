({
	onBoatSelected : function(component, event, helper) {
        console.log('onBoatSelected function ran event received!');
		let boat = event.getParam("BoatSelected");
        console.log('boat received ' + boat.Name);
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
        
	},
    onRecordUpdated : function(component, event, helper) {
        console.log('onRecordUpdated function ran');
        component.find("service").reloadRecord();
    },
    onBoatReviewAdded : function(component, event, helper) {
        console.log('boatreviewAdded JS running on BoatDetails');
        component.set('v.selectedTabId', 'boatreviewtab');
    }
})