public class BoatSearchResults {
	@auraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
		system.debug('boatTypeId ' + boatTypeId);
        List<Boat__c> boatList = new List<Boat__c>();
        
        If(boatTypeId == NULL || boatTypeId == ''){
            system.debug('boatTypeId is NULL');
            boatList = [SELECT Id, Name, BoatType__c,Contact__c,Picture__c FROM Boat__c];
        } else {
            boatList = [SELECT Id, Name, BoatType__c,Contact__c,Picture__c FROM Boat__c 
                        WHERE BoatType__c =:boatTypeId];
        }
        system.debug('boatList size: ' + boatList.size());
        for(Boat__c b : boatList){
            system.debug(b);
        }
		return boatList;
    }
}