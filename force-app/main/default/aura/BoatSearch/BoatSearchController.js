({
	onFormSubmit : function(component, event, helper) {
		let data = event.getParam("formData"); 
        let boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        console.log('event received in BoatSearch; formData is: ' + data.boatTypeId);
        boatSearchResultsCmp.search(data.boatTypeId);
	}
})