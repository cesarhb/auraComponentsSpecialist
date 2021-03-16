public class BoatSearch {
    @auraEnabled
    public static String findBoatTypeId(String boatType){
        system.debug('boatType ' + boatType);
        String boatTypeId = [SELECT Id FROM BoatType__c 
                         WHERE Name = :boatType
                         LIMIT 1
                        ].Id;
        system.debug('boatTypeId' + boatTypeId);
        return boatTypeId;
    }

}