({
    doInit: function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        if(navEvt){
            component.set("v.enabled", "true");
        }
    },
	onFullDetails : function(component, event, helper) {
        console.log('oneFullDetails running');
        let rec = component.get("v.boat");
        console.log('rec Id' + rec.Id);
		var navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
      	"recordId": rec.Id,
      	"slideDevName": "Detail"
    });
    navEvt.fire();
	}
})