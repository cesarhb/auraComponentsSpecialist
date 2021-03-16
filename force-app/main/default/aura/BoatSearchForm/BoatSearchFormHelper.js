({
	setBoatTypeId : function(component,event,helper) {
		console.log('the helper is running!!');
        let selectedBoat = component.get("v.selectedBoatType");
        console.log('selectedBoat: ' + selectedBoat);
        let recId;
        if (selectedBoat === "High Performance") {
            recId = 'a014W000011aFQ3QAM';
        } else if (selectedBoat === 'Fishing Boat'){
            recId = 'a014W000011aFQ1QAM';            
        } else if (selectedBoat === 'House Boat'){
            recId = 'a014W000011aFQ7QAM';
        } else if (selectedBoat === 'Jet Ski'){
            recId = 'a014W000011aFQ2QAM';
        } else if (selectedBoat === 'Pleasure Boat'){
            recId = 'a014W000011aFQ4QAM';
        } else if (selectedBoat === 'Sailboat'){
            recId = 'a014W000011aFQ0QAM';
        } else if (selectedBoat === 'Ski Boat'){
            recId = 'a014W000011aFQ5QAM';
        } else if (selectedBoat === 'Yacht'){
            recId = 'a014W000011aFQ6QAM';
        }
        console.log('recId' + recId);
        component.set("v.boatTypeId",recId);
        console.log(component.get("v.boatTypeId"));
	}
})