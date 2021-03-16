({
	myAction : function(component, event, helper) {
		
	},
    doInit : function(component, event, helper) {
        console.log('boatTile doInit function loading');
        let data = component.get("v.boat");
        console.log('BoatTile data: ' + data);
    },
    onBoatClick : function(component, event, helper) {
        let boatId = event.getSource().get("v.value");
        var boatSelectEvent = component.getEvent("BoatSelect");
        boatSelectEvent.setParams({
            "boatId" : boatId });
        boatSelectEvent.fire();
        
        let boat = component.get("v.boat");
        // $A.get("e.c:BoatSelected");
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({
            "BoatSelected" : boat});
        console.log('about to send the boatSelectedEvent');
        boatSelectedEvent.fire();
    }
})