public class BoatReviews {
    @auraEnabled
    public static List<BoatReview__c> getAll(id boatId){
        List<BoatReview__c> reviews = [SELECT Id,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName
                                      FROM BoatReview__c
                                      WHERE Boat__c = :boatId];
        
        return reviews;
    }

}