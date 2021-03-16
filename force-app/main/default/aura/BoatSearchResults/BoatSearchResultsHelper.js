({
	onSearch : function(component) {
        console.log('boatSearchResultsHelper onSearch is running');
		var action = component.get("c.getBoats");
        action.setParams({ "boatTypeId" : component.get("v.boatTypeId")});
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                console.log('success state');
                component.set("v.boats", response.getReturnValue());
                console.log('boats:');
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
       

        
	}
})
    

  //  BoatSearchResults.cmp 
//	displays search results with a helper method, onSearch(), and displays each result 
//	as a BoatTile component.