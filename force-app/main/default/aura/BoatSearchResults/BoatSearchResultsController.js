({
	doInit : function(component, event, helper) {
		helper.onSearch(component);
	},
    
    doSearch : function(component, event, helper){
        var params = event.getParam('arguments');
        console.log('params ');
        console.log(params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
        console.log('component boatTypeId was just set, about to call helper function');
        helper.onSearch(component);
    },
    onBoatSelect : function(component, event, helper) {
        console.log('onBoatSelect function running in BoatSearchResults');
        var eve = event.getParam("boatId");
        console.log('boatId received ' + eve);
        component.set("v.selectedBoatId", eve);
    }
})